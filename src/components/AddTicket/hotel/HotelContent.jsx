import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { useMutation } from '@apollo/client'
import hotelMutations from '../../../Apollo/Mutation/hotelMutations'
import { USER_ID, HOTEL_ID, HOTEL_CAPACITY } from '../../../constants/auth'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HotelContent = () => {
  // STATES

  const [hotelName, setHotelName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showPrice, setShowPrice] = useState('')
  const [cityName, setCityName] = useState('')
  const [showStar, setShowStar] = useState(0)
  const [showAddress, setShowAddress] = useState('')
  const [showcapacity, setShowcapacity] = useState('')
  const [error, setError] = useState(null)
  const [error1, setError1] = useState(null)
  const [error2, setError2] = useState(null)
  const [error3, setError3] = useState(null)
  // FUNCTION FOR RESET
  const resetFields = () => {
    setHotelName('')
    setEndDate('')
    setStartDate('')
    setCityName('')
    setShowStar('')
    setShowPrice('')
    setShowAddress('')
  }

  const userid = window.localStorage.getItem(USER_ID)
  // APOLLO MUTATION
  const [createHotels] = useMutation(hotelMutations.CREATEHOTEL)

  const handleCreateHotel = (e) => {
    if (!error) {
      e.preventDefault()
      createHotels({
        variables: {
          city: cityName,
          star: parseInt(showStar),
          startDate: startDate.toString(),
          endDate: endDate.toString(),
          name: hotelName,
          capacity: parseInt(showcapacity),
          address: showAddress,
          price: parseFloat(showPrice),
          creator: JSON.parse(userid)

        }
      })
        .then(({ data }) => {
          if (data.createHotel !== null) {
            toast.success('هتل با موفقیت اضافه شد')
            window.localStorage.setItem(HOTEL_ID, JSON.stringify(data.createHotel._id))
            window.localStorage.setItem(HOTEL_CAPACITY, JSON.stringify(data.createHotel.capacity))

            // resetFields()
          } else {
            toast.error(
              'خطایی در برقراری با سرور اتفاق افتاد'
            )
          }
        })
    } else {
      toast.warning('خطایی رخ داد از دوباره تلاش کنید')
    }
  }
  // VALIDATIONS
  // name validation
  function isValidName (email) {
    return /^[\u0600-\u06FF\s]+$/.test(email)
  }
  const handlename = event => {
    if (!isValidName(event.target.value)) {
      setError('باید زبان کیبورد را عوض کنید!')
    } else if (hotelName.length < 3) {
      setError('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError(null)
    }

    setHotelName(event.target.value)
  }
  // city validation
  const handleCityName = event => {
    if (!isValidName(event.target.value)) {
      setError1('باید زبان کیبورد را عوض کنید!')
    } else if (hotelName.length < 3) {
      setError1('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError1(null)
    }

    setCityName(event.target.value)
  }
  // capacity validation

  function isValidCapacity (cp) {
    return /^\d$/.test(cp)
  }

  const handlecapacity = event => {
    if (!isValidCapacity(event.target.value)) {
      setError2(' باید اعداد بین 9-1 را وارد کنید')
    } else {
      setError2(null)
    }

    setShowcapacity(event.target.value)
  }
  // price validation
  function isValidsPrice (item) {
    return /^[+-]?([0-9]*[.])?[0-9]+$/.test(item)
  }
  const handlePrice = event => {
    if (!isValidsPrice(event.target.value)) {
      setError3('فرمت وارد شده صحیح نیست')
    } else {
      setError3(null)
    }

    setShowPrice(event.target.value)
  }

  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>   نام هتل</label>
            <input
              type='text'
              value={hotelName}
              onChange={handlename}
              className={styles.inputcss}
            />
            {error
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>  ستاره هتل</label>
            <input
              type='number'
              value={showStar}
              onChange={e => setShowStar(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>نام استان  </label>
            <input
              type='text'
              value={cityName}
              onChange={handleCityName}
              className={styles.inputcss}
            />
            {error1
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error1}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>  آدرس</label>
            <input
              type='text'
              value={showAddress}
              onChange={e => setShowAddress(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              type='text'
              value={showPrice}
              onChange={handlePrice}
              className={styles.inputcss}
            />
            {error3
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error3}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>

          <div className={styles.content}>
            <label>    از تاریخ  </label>
            <DatePicker
              inputClass={styles.inputDateCss}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
            />
          </div>
          <div className={styles.content}>
            <label>  تا تاریخ  </label>
            <DatePicker
              inputClass={styles.inputDateCss}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
            />
          </div>

          <div className={styles.content}>
            <label>    ظرفیت</label>
            <input
              type='text'
              value={showcapacity}
              onChange={handlecapacity}
              className={styles.inputcss}
            />
            {error2
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error2}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          {/* <div className={styles.content}>
            <label> آپلود تصاویر  </label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div> */}

        </div>

        <div className={styles.content}>
          <button
            onClick={handleCreateHotel}
            className='btn btn-sm btn-danger my-4 py-4 rounded-3  px-4 ' style={{ fontFamily: 'Vazir', fontSize: '18px', fontWeight: 'bold' }}
          >اضافه کردن
          </button>
          <ToastContainer />

        </div>

      </div>
    </>
  )
}

export default HotelContent

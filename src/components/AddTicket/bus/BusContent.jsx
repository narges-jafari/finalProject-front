import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import { busCompany } from '../../../constants/busComany'
import { property } from '../../../constants/property'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import busMutations from '../../../Apollo/Mutation/busMutations'
import { useMutation } from '@apollo/client'
import { USER_ID, BUS_ID, BUS_CAPACITY } from '../../../constants/auth'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BusContent = () => {
  // STATES
  const [destinationName, setDestinationName] = useState('')
  const [originName, setOriginName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endTime, setEndTime] = useState('')
  const [startTime, setStartTime] = useState('')
  const [originTerminal, setOriginTerminal] = useState('')
  const [destinationTerminal, setDestinationTerminal] = useState('')
  const [showSeatNumber, setShowSeatNumber] = useState('')
  const [showPrice, setShowPrice] = useState('')
  const [showCapacity, setShowCapacity] = useState('')
  const [showBusNumber, setShowBusNumber] = useState('')
  const [showBusCompany, setShowBusCompany] = useState('')
  const [error, setError] = useState(null)
  const [error1, setError1] = useState(null)
  const [error2, setError2] = useState(null)
  const [error3, setError3] = useState(null)
  const [error4, setError4] = useState(null)
  const [error5, setError5] = useState(null)
  const [error6, setError6] = useState(null)
  const [error7, setError7] = useState(null)
  const [error8, setError8] = useState(null)

  const [userinfo, setUserInfo] = useState({
    property: [],
    response: []
  })
  // FUNCTION FOR CHECKBOXES
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target
    const { property } = userinfo

    // Case 1 : The user checks the box
    // Case 2  : The user unchecks the box

    if (checked) {
      setUserInfo({
        property: [...property, value],
        response: [...property, value]
      })
    } else {
      setUserInfo({
        property: property.filter((e) => e !== value),
        response: property.filter((e) => e !== value)
      })
    }
  }

  // REF
  const firstUpdate = useRef(true)
  const userid = window.localStorage.getItem(USER_ID).replace(/"/g, '')

console.log(userid)
  const [createBuses] = useMutation(busMutations.CREATEBUS)

  const handleCreateBus = (e) => {
    if (!error) {
      e.preventDefault()
      createBuses({
        variables: {
          originName: originName,
          destinationName: destinationName,
          capacity: parseInt(showCapacity),
          date: startDate.toString(),
          destinationTerminal: destinationTerminal,
          originTerminal: originTerminal,
          departureTime:startTime ,
          arrivalTime:endTime ,
          price: parseFloat(showPrice),
          busCompany: showBusCompany,
          busNumber: parseInt(showBusNumber),
          information: userinfo.response,
          creator:userid

        }
      })
        .then(({ data }) => {
          if (data.createBus !== null) {
            toast.success('عملیات اضافه شدن بلیط اتوبوس با موفقیت انجام شد')
            window.localStorage.setItem(BUS_ID, JSON.stringify(data.createBus._id))
            window.localStorage.setItem(BUS_CAPACITY, JSON.stringify(data.createBus.capacity))

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
  // originName validation
  function isValidName (email) {
    return /^[\u0600-\u06FF\s]+$/.test(email)
  }

  const handlename = event => {
    if (!isValidName(event.target.value)) {
      setError('باید زبان کیبورد را عوض کنید!')
    } else if (originName.length < 2) {
      setError('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError(null)
    }

    setOriginName(event.target.value)
  }

  // destinationName validation
  const handlename1 = event => {
    if (!isValidName(event.target.value)) {
      setError1('باید زبان کیبورد را عوض کنید!')
    } else if (destinationName.length < 2) {
      setError1('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError1(null)
    }

    setDestinationName(event.target.value)
  }

  // setOriginAirport validation
  const handlename2 = event => {
    if (!isValidName(event.target.value)) {
      setError2('باید زبان کیبورد را عوض کنید!')
    } else if (originTerminal.length < 2) {
      setError2('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError2(null)
    }

    setOriginTerminal(event.target.value)
  }

  // setDestinationAirport
  const handlename3 = event => {
    if (!isValidName(event.target.value)) {
      setError3('باید زبان کیبورد را عوض کنید!')
    } else if (destinationTerminal.length < 2) {
      setError3('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError3(null)
    }

    setDestinationTerminal(event.target.value)
  }


  // capacity validation
  function isValidCapacity (cp) {
    return /^\d$/.test(cp)
  }

  const handlecapacity = event => {
    if (!isValidCapacity(event.target.value)) {
      setError4(' باید اعداد بین 9-1 را وارد کنید')
    } else {
      setError4(null)
    }

    setShowCapacity(event.target.value)
  }
  // busNumber validation
  function isValidClass (item) {
    return /^[2-9][0-9]{3}$/.test(item)
  }
  const handlBusNumber = event => {
    if (!isValidClass(event.target.value)) {
      setError5('باید اعداد بین 2000تا9999 را وارد کنید')
    } else {
      setError5(null)
    }

    setShowBusNumber(event.target.value)
  }

  // times validation
  function isValidftime (item) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(item)
  }
  const handlfTime = event => {
    if (!isValidftime(event.target.value)) {
      setError6(' فرمت صحیح HH:MM است ')
    } else {
      setError6(null)
    }

    setStartTime(event.target.value)
  }
  function isValidsTime (item) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(item)
  }
  const handlesTime = event => {
    if (!isValidsTime(event.target.value)) {
      setError7(' فرمت صحیح HH:MM است ')
    } else {
      setError7(null)
    }

    setEndTime(event.target.value)
  }
  // price validation

  function isValidsPrice (item) {
    return /^[+-]?([0-9]*[.])?[0-9]+$/.test(item)
  }
  const handlePrice = event => {
    if (!isValidsPrice(event.target.value)) {
      setError8('فرمت وارد شده صحیح نیست')
    } else {
      setError8(null)
    }

    setShowPrice(event.target.value)
  }


  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>
        <div className={styles.headername}>
          مبدا و مقصد
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>  شهر مبدا</label>
            <input
              type='text'
              value={originName}
              onChange={handlename}
              className={styles.inputcss}
            />
               {error
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label> شهر مقصد</label>
            <input
              type='text'
              value={destinationName}
              onChange={handlename1}
              className={styles.inputcss}
            />
               {error1
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error1}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>پایانه  مبدا</label>
            <input
              type='text'
              value={originTerminal}
              onChange={handlename2}
              className={styles.inputcss}
            />
               {error2
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error2}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>پایانه  مقصد</label>
            <input
              type='text'
              value={destinationTerminal}
              onChange={handlename3}
              className={styles.inputcss}
            />
               {error3
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error3}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
        </div>
        <div className={styles.headername}>
          ساعت و زمان
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

          <div className={styles.content}>
            <label>   ساعت حرکت</label>
            <input
              type='text'
              value={startTime}
              onChange={handlfTime }
              className={styles.inputcss}
            />
               {error6
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error6}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>   ساعت  رسیدن</label>
            <input
              type='text'
              value={endTime}
              onChange={handlesTime}
              className={styles.inputcss}
            />
               {error7
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error7}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>   تاریخ</label>
            <DatePicker
              inputClass={styles.inputDateCss}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
              placeholder='تاریخ حرکت'
            />
          </div>
        </div>
        <div className={styles.headername}>
          اتوبوس
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              type='text'
              value={showPrice}
              onChange={handlePrice}
              className={styles.inputcss}
            />
               {error8
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error8}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>     شماره اتوبوس </label>
            <input
              type='text'
              value={showBusNumber}
              onChange={handlBusNumber}
              className={styles.inputcss}
            />
               {error5
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error5}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>    ظرفیت </label>
            <input
              type='text'
              value={showCapacity}
              onChange={handlecapacity}
              className={styles.inputcss}
            />
               {error4
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error4}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>
          <div className={styles.content}>
            <label>    نام شرکت </label>
            <select
              value={showBusCompany}
              onChange={e => {
                firstUpdate.current = false
                setShowBusCompany(e.target.value)
              }}
            >
              {busCompany.map((bus, index) => (
                <option className={styles.optionCss} value={bus} key={index}>{bus}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div className={styles.headername}>
          امکانات
        </div>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <div className='d-flex flex-column justify-content-between'>
            {property.slice(0, 5).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {property.slice(5, 10).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {property.slice(10, 15).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>

        </div>

        <div>
          <button 
              onClick={handleCreateBus}
          className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4 '>جستجو</button>
                  <ToastContainer />

        </div>

      </div>
    </>
  )
}

export default BusContent

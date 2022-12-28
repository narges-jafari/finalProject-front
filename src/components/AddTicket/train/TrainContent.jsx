import React, { useState, useRef } from 'react'

import styles from '../../../assets/styles/TrainContent.module.css'
import { toast, ToastContainer } from 'react-toastify'
import { trainCompany, trainClass } from '../../../constants/trainCompany'
import { property } from '../../../constants/property'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { useMutation } from '@apollo/client'
import { USER_ID, TRAIN_ID, TRAIN_CAPACITY } from '../../../constants/auth'

import trainMutations from '../../../Apollo/Mutation/trainMutations'
const TrainContent = () => {
  // STATES
  const [destinationName, setDestinationName] = useState('')
  const [originName, setOriginName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [showRailwayOrigin, setShowRailwayOrigin] = useState('')
  const [showRailwayDestination, setShowRailwayDestination] = useState('')
  const [showTrainCompany, setShowTrainCompany] = useState('')
  const [showTrainClass, setShowTrainClass] = useState('')

  const [showTrainNumber, setShowTrainNumber] = useState('')
  const [showCapacity, setShowCapacity] = useState('')
  const [showPrice, setShowPrice] = useState('')
  const [allowedLoggage, setAllowedLoggage] = useState('')
  const [error, setError] = useState(null)
  const [error1, setError1] = useState(null)
  // const [error2, setError2] = useState(null)
  const [error3, setError3] = useState(null)
  const [error4, setError4] = useState(null)
  const [error5, setError5] = useState(null)
  const [error6, setError6] = useState(null)
  const [error7, setError7] = useState(null)
  const [error8, setError8] = useState(null)
  const [error9, setError9] = useState(null)
  const [error10, setError10] = useState(null)
  const [userinfo, setUserInfo] = useState({
    property: [],
    response: []
  })
  const userid = window.localStorage.getItem(USER_ID)

  // REF
  const firstUpdate = useRef(true)

  // FUNCTION FOR CHECKBOX
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target
    const { property } = userinfo

    // Case 1 :  The user checks the
    // Case 2  :  The user unchecks the box
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
  // reset function
  const resetFields = () => {
    setDestinationName('')
    setOriginName('')
    setShowCapacity('')
    setStartDate(new Date(''))
    setShowRailwayOrigin('')
    setShowRailwayDestination('')
    setShowPrice('')
    setStartTime('')
    setEndTime('')
    setShowTrainNumber('')
    setShowTrainClass('')
    setShowTrainCompany('')
    setAllowedLoggage('')
  }
  // apollo mutation
  const [createTrains] = useMutation(trainMutations.CREATETRAIN)

  const handleCreateTrain = (e) => {
    if (!error) {
      e.preventDefault()
      createTrains({
        variables: {
          originName: originName,
          destinationName: destinationName,
          capacity: parseInt(showCapacity),
          price: parseFloat(showPrice),
          date: startDate.toString(),
          departureTime: startTime,
          arrivalTime: endTime,
          hallType: showTrainClass,
          railwayOrigin: showRailwayOrigin,
          trainNumber: parseInt(showTrainNumber),
          railwayDestination: showRailwayDestination,
          railCompany: showTrainCompany,
          allowedLoggage: parseInt(allowedLoggage),
          information: userinfo.response,
          creator: JSON.parse(userid)

        }
      })
        .then(({ data }) => {
          if (data.createTrain !== null) {
            toast.success('عملیات اضافه شدن بلیط قطار با موفقیت انجام شد')
            window.localStorage.setItem(TRAIN_ID, JSON.stringify(data.createTrain._id))
            window.localStorage.setItem(TRAIN_CAPACITY, JSON.stringify(data.createTrain.capacity))

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

  // validation
  // originName validation
  function isValidName (name) {
    return /^[\u0600-\u06FF\s]+$/.test(name)
  }
  const handlename = event => {
    if (!isValidName(event.target.value)) {
      setError('باید زبان کیبورد را عوض کنید!')
    } else if (originName.length < 3) {
      setError('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError(null)
    }

    setOriginName(event.target.value)
  }

  // destinationName validation
  const handleDesName = event => {
    if (!isValidName(event.target.value)) {
      setError1('باید زبان کیبورد را عوض کنید!')
    } else if (destinationName.length < 3) {
      setError1('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError1(null)
    }

    setDestinationName(event.target.value)
  }

  // setDestinationRailway
  const handleDesRailway = event => {
    if (!isValidName(event.target.value)) {
      setError3('باید زبان کیبورد را عوض کنید!')
    } else if (showRailwayDestination.length < 3) {
      setError3('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError3(null)
    }

    setShowRailwayDestination(event.target.value)
  }
  // setOriginRailway
  const handleOriginRailway = event => {
    if (!isValidName(event.target.value)) {
      setError6('فقط حروف الفبای فارسی مجاز هست')
    } else if (showRailwayOrigin.length < 3) {
      setError6('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError6(null)
    }

    setShowRailwayOrigin(event.target.value)
  }

  // capacity validation
  function isValidCapacity (cp) {
    return /^\d$/.test(cp)
  }

  const handleCapacity = event => {
    if (!isValidCapacity(event.target.value)) {
      setError4(' باید اعداد بین 9-1 را وارد کنید')
    } else {
      setError4(null)
    }

    setShowCapacity(event.target.value)
  }

  // trainNumber validation
  function isValidClass (item) {
    return /^[2-9][0-9]{3}$/.test(item)
  }
  const handlTrainNumber = event => {
    if (!isValidClass(event.target.value)) {
      setError5('باید اعداد بین 2000تا9999 را وارد کنید')
    } else {
      setError5(null)
    }

    setShowTrainNumber(event.target.value)
  }
  // Weight validation
  function isValidWeight (item) {
    return /^[0-9]{2}$/.test(item)
  }
  const handlWeight = event => {
    if (!isValidWeight(event.target.value)) {
      setError7('باید اعداد بین 99-10 را وارد کنید')
    } else {
      setError7(null)
    }

    setAllowedLoggage(event.target.value)
  }
  // firstTime validation
  function isValidTime (item) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(item)
  }
  const handlFirstTime = event => {
    if (!isValidTime(event.target.value)) {
      setError8(' فرمت صحیح HH:MM است ')
    } else {
      setError8(null)
    }

    setStartTime(event.target.value)
  }

  // endTime validation
  const handleEndTime = event => {
    if (!isValidTime(event.target.value)) {
      setError9(' فرمت صحیح HH:MM است ')
    } else {
      setError9(null)
    }

    setEndTime(event.target.value)
  }

  // price validation

  function isValidsPrice (item) {
    return /^[+-]?([0-9]*[.])?[0-9]+$/.test(item)
  }
  const handlePrice = event => {
    if (!isValidsPrice(event.target.value)) {
      setError10('فرمت وارد شده صحیح نیست')
    } else {
      setError10(null)
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
              onChange={handleDesName}
              className={styles.inputcss}
            />
            {error1
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error1}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>راه آهن مبدا</label>
            <input
              type='text'
              value={showRailwayOrigin}
              onChange={handleOriginRailway}
              className={styles.inputcss}
            />
            {error6
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error6}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>راه آهن مقصد</label>
            <input
              type='text'
              value={showRailwayDestination}
              onChange={handleDesRailway}
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
              onChange={handlFirstTime}
              className={styles.inputcss}
            />
            {error8
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error8}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>   ساعت  رسیدن</label>
            <input
              type='text'
              value={endTime}
              onChange={handleEndTime}
              className={styles.inputcss}
            />
            {error9
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error9}</small> </div>
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
              placeholder='تاریخ پرواز'
              format='YYYY/MM/DD'
            />
            {startDate == null
              ? <>
                <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />
                  این فیلد ضروری هست
                </small>
                </div>
              </>
              : null}
          </div>

        </div>
        <div className={styles.headername}>
          قطار
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

          <div className={styles.content}>
            <label>     شماره قطار </label>
            <input
              type='text'
              value={showTrainNumber}
              onChange={handlTrainNumber}
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
              onChange={handleCapacity}
              className={styles.inputcss}
            />
            {error4
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error4}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>    بار مجاز </label>
            <input
              type='text'
              value={allowedLoggage}
              onChange={handlWeight}
              className={styles.inputcss}
            />
            {error7
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error7}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              type='text'
              value={showPrice}
              onChange={handlePrice}
              className={styles.inputcss}
            />
            {error10
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error10}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>  نام شرکت   </label>
            <select
              name=''
              value={showTrainCompany}
              onChange={e => {
                firstUpdate.current = false
                setShowTrainCompany(e.target.value)
              }}
            >
              {trainCompany.map((name, index) => (
                <option className={styles.optionCss} value={name} key={index}>{name}
                </option>
              ))}
            </select>

          </div>
          <div className={styles.content}>
            <label>    نوع سالن  </label>
            <select
              name=''
              value={showTrainClass}
              onChange={e => {
                firstUpdate.current = false
                setShowTrainClass(e.target.value)
              }}
            >
              {trainClass.map((number, index) => (
                <option className={styles.optionCss} value={number} key={index}>{number}
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

        <button
          onClick={(e) => handleCreateTrain(e)}
          className='btn btn-sm btn-danger my-4 py-2 rounded-3 mx-2 px-4 '
        >
          اضافه کردن
        </button>
        <ToastContainer />

      </div>
    </>
  )
}

export default TrainContent

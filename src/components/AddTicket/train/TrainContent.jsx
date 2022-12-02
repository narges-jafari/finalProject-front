import React, { useState, useRef } from 'react'

import styles from '../../../assets/styles/TrainContent.module.css'

import { trainCompany, trainHallNumber, trainDegree, trainClass } from '../../../constants/trainCompany'
import { property } from '../../../constants/property'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

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
  const [showHallNumber, setShowHalNumber] = useState()
  const [showTrainDegree, setShowTrainDegree] = useState('')
  const [showTrainNumber, setShowTrainNumber] = useState('')
  const [showSeatNumber, setShowSeatNumber] = useState('')
  const [showPrice, setShowPrice] = useState()
  const [userinfo, setUserInfo] = useState({
    property: [],
    response: []
  })

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
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label> شهر مقصد</label>
            <input
              type='text'
              value={destinationName}
              onChange={e => setDestinationName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>راه آهن مبدا</label>
            <input
              type='text'
              value={showRailwayOrigin}
              onChange={e => setShowRailwayOrigin(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>راه آهن مقصد</label>
            <input
              type='text'
              value={showRailwayDestination}
              onChange={e => setShowRailwayDestination(e.target.value)}
              className={styles.inputcss}
            />
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
              onChange={e => setStartTime(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   ساعت  رسیدن</label>
            <input
              type='text'
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              className={styles.inputcss}
            />
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
            />
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
              onChange={e => setShowTrainNumber(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>    شماره صندلی</label>
            <input
              type='text'
              value={showSeatNumber}
              onChange={e => setShowSeatNumber(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              type='text'
              value={showPrice}
              onChange={e => setShowPrice(e.target.value)}
              className={styles.inputcss}
            />
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

          <div className={styles.content}>
            <label>     شماره سالن </label>
            <select
              name=''
              value={showHallNumber}
              onChange={e => {
                firstUpdate.current = false
                setShowHalNumber(e.target.value)
              }}
            >
              {trainHallNumber.map((number, index) => (
                <option className={styles.optionCss} value={number} key={index}>{number}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.content}>
            <label>     درجه سالن</label>
            <select
              name=''
              value={showTrainDegree}
              onChange={e => {
                firstUpdate.current = false
                setShowTrainDegree(e.target.value)
              }}
            >
              {trainDegree.map((degree, index) => (
                <option className={styles.optionCss} value={degree} key={index}>{degree}
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
          {userinfo.response}

        </div>

        <button
            // onClick={handleCreateAlert}
          className='btn btn-sm btn-danger my-4 py-2 rounded-3 mx-2 px-4 '
        >
          اضافه کردن
        </button>
        {/* <ToastContainer /> */}

      </div>
    </>
  )
}

export default TrainContent

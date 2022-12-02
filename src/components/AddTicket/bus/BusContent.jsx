import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import { busCompany } from '../../../constants/busComany'
import { property } from '../../../constants/property'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

const BusContent = () => {
  // STATES
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endTime, setEndTime] = useState('')
  const [startTime, setStartTime] = useState('')
  const [originTerminal, setOriginTerminal] = useState('')
  const [destinationTerminal, setDestinationTerminal] = useState('')
  const [showSeatNumber, setShowSeatNumber] = useState('')
  const [showPrice, setShowPrice] = useState()
  const [showBusNumber, setShowBusNumber] = useState('')
  const [showBusCompany, setShowBusCompany] = useState('')
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
            <label>پایانه  مبدا</label>
            <input
              type='text'
              value={originTerminal}
              onChange={e => setOriginTerminal(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>پایانه  مقصد</label>
            <input
              type='text'
              value={destinationTerminal}
              onChange={e => setDestinationTerminal(e.target.value)}
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
              onChange={e => setShowPrice(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>     شماره اتوبوس </label>
            <input
              type='text'
              value={showBusNumber}
              onChange={e => setShowBusNumber(e.target.value)}
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
          {userinfo.response}

        </div>

        <div>
          <button className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4 '>جستجو</button>
        </div>

      </div>
    </>
  )
}

export default BusContent

import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { hotelStar, hotelProperty } from '../../../constants/hotel'

const HotelContent = () => {
  // STATES

  const [hotelName, setHotelName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showPrice, setShowPrice] = useState()
  const [showState, setShowState] = useState('')
  const [showStar, setShowStar] = useState('')
  const [showAddress, setShowAddress] = useState('')
  const [showcapacity, setShowcapacity] = useState('')
  const [userinfo, setUserInfo] = useState({
    property: [],
    response: []
  })

  // REF
  const firstUpdate = useRef(true)

  // FUNCTION FOR CHECKBOXES
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

        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>   نام هتل</label>
            <input
              type='text'
              value={hotelName}
              onChange={e => setHotelName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>  ستاره هتل</label>
            <select
              name=''
              value={showStar}
              onChange={e => {
                firstUpdate.current = false
                setShowStar(e.target.value)
              }}
            >
              {hotelStar.map((start, index) => (
                <option value={start} key={index}>{start}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.content}>
            <label>نام استان  </label>
            <input
              type='text'
              value={showState}
              onChange={e => setShowState(e.target.value)}
              className={styles.inputcss}
            />
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
              onChange={e => setShowPrice(e.target.value)}
              className={styles.inputcss}
            />
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
              onChange={e => setShowcapacity(e.target.value)}
              className={styles.inputcss}
            />
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

        <div className={styles.headername}>
          امکانات
        </div>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <div className='d-flex flex-column justify-content-between'>
            {hotelProperty.slice(0, 6).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {hotelProperty.slice(6, 12).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {hotelProperty.slice(12, 18).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {hotelProperty.slice(18, 24).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>

        </div>
        <div className={styles.content}>
          <button className='btn btn-sm btn-danger my-4 py-4 rounded-3  px-4 ' style={{ fontFamily: 'Vazir', fontSize: '18px', fontWeight: 'bold' }}>اضافه کردن</button>

        </div>

      </div>
    </>
  )
}

export default HotelContent

import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import styles from '../../../assets/styles/HotelSearch.module.css'
import DatePicker from 'react-multi-date-picker'

const HotelSearch = () => {
  const [hotelName, setHotelName] = useState()
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-5'>
        <div className='mx-2 my-2'>
          <i
            className=' fa fa-hotel   my-2 mx-2 fa-lg '
            style={{ position: 'absolute', color: '#d0cbcbb0' }}
          />

          <input
            type='text'
            placeholder='نام هتل'
            onChange={e => setHotelName(e.target.value)}
            className={styles.hotelInputCss}
          />

          {hotelName}
        </div>
        <div className='mx-2 my-1 '>
          <i className='fa fa-calendar my-2 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ حرکت'
            style={{ paddingTop: '15px', paddingBottom: '15px', paddingRight: '40px', border: '1px solid #80808033' }}
          />
        </div>
        <div>
          <button className='btn btn-sm btn-danger my-1 py-1 mx-2 px-4'>جستجو</button>
        </div>
      </div>
      {/* <img src={img} className='w-100 h-auto'/> */}

    </>
  )
}

export default HotelSearch

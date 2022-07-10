import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

import styles from '../../../assets/styles/Transport.module.css'

const TrainSearch = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-5'>
        <div className='mx-2 my-1'>
          <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ position: 'absolute', color: '#d0cbcbb0' }} />

          <input
            type='text'
            placeholder='مبدا '
            onChange={e => setOriginName(e.target.value)}
            className={styles.transportInputCss}
          />

          {originName}
        </div>
        <div className='mx-2 my-1'>
          <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <input
            type='text'
            placeholder=' مقصد'
            onChange={e => setDestinationName(e.target.value)}
            className={styles.transportInputCss}
          />

          {destinationName}
        </div>

        <div className='mx-2 my-1'>
          <i className='fa fa-calendar my-2 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            style={{ paddingTop: '15px', paddingBottom: '13px', paddingRight: '40px', border: '1px solid #80808033' }}
          />
        </div>
        <div>
          <button className='btn btn-sm btn-danger my-1 py-1 text- px-4'>جستجو</button>
        </div>
      </div>
    </>
  )
}

export default TrainSearch

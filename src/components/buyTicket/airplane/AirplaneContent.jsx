import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

import styles from '../../../assets/styles/TrainContent.module.css'
import Passenger from '../train/Pasenger'

const AirplaneContent = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showPassengerModal, setShowPassengerModal] = useState(false)

  return (
    <>
          <button
          type='button'
          data-toggle='modal'
          onClick={() => {
            if (!showPassengerModal) {
              setShowPassengerModal(true)
            }
          }}
          className='btn h-25  my-2 mx-2 bg-soft bg-warning  text-primary border border-primary rounded-3 text-nowrap '
        >
          <i className='fa fa-cog text-danger mx-1' /> مسافران
        </button>
        {showPassengerModal && (
          <Passenger
            isOpen={showPassengerModal}
            setIsOpen={setShowPassengerModal}
          />
        )}
      <div className='d-flex flex-row flex-wrap my-2'>
        <div className='mx-2 my-2'>
          <i
            className=' fa fa-map-marker   my-2 mx-2 fa-lg '
            style={{ position: 'absolute', color: '#d0cbcbb0' }}
          />

          <input
            type='text'
            placeholder=' پرواز از'
            onChange={e => setOriginName(e.target.value)}
            className={styles.inputcss}
          />

          {originName}
        </div>
        <div className='mx-2 my-2'>
          <i
            className=' fa fa-map-marker   my-2 mx-2 fa-lg '
            style={{ position: 'absolute', color: '#d0cbcbb0' }}
          />

          <input
            type='text'
            placeholder=' پرواز به'
            onChange={e => setDestinationName(e.target.value)}
            className={styles.inputcss}
          />

          {destinationName}
        </div>
        <div className='mx-2 my-2 '>
          <i className='fa fa-calendar mt-3 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ رفت'
            style={{ height: '40px', width: '180px', paddingRight: '40px', border: '1px solid #80808033' }}
          />
        </div>
        <div className='mx-2 my-2 '>
          <i className='fa fa-calendar mt-3 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ برگشت'
            style={{ height: '40px', width: '180px', paddingRight: '40px', border: '1px solid #80808033' }}
          />
        </div>
    
        <div>
          <button className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4'>جستجو</button>
        </div>
        
      </div>
    </>
  )
}

export default AirplaneContent

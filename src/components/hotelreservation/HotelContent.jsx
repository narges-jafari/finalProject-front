import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import styles from '../../assets/styles/HotelContent.module.css'
import Passenger from './Pasenger'
// import Passenger from '../train/Pasenger'

const HotelContent = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showPassengerModal, setShowPassengerModal] = useState(false)


  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 border border-primary'>

        <div className='d-flex flex-row flex-wrap '>
          <div className='mx-2 my-2'>
            <i
              className=' fa fa-map-marker mx-2   mt-3   fa-lg '
              style={{ position: 'absolute', color: '#d0cbcbb0'}}
            />

            <input
              type='text'
              placeholder='  نام هتل'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
        </div>
        <div className='mx-2 my-2'>
        <i className='fa fa-calendar mt-3 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
              placeholder='تاریخ رفت'
              style={{ height: '40px', width: '200px', paddingRight: '40px', border: '1px solid #80808033' }}
            />
        </div>
        <div className='mx-2 my-2'>
        <i className='fa fa-calendar mt-3 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0'}} />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
              placeholder='تاریخ رفت'
              style={{ height: '40px', width: '200px', paddingRight: '40px', border: '1px solid #80808033' }}
            />
        </div>
    <div className='mx-2 my-2'>
    <button
          type='button'
          data-toggle='modal'
          onClick={() => {
            if (!showPassengerModal) {
              setShowPassengerModal(true)
            }
          }}
          className='btn mt-1 text-primary text-nowrap '
          style={{ height: '40px', width: '100px', border: '1px solid #80808033' }}
          >
          <i className='fa fa-cog text-danger mx-1' /> مسافران
        </button>
        {showPassengerModal && (
          <Passenger
            isOpen={showPassengerModal}
            setIsOpen={setShowPassengerModal}
          />
        )}
    </div>

          
        <div className='mx-2 my-2'>

                      <button className='btn btn-sm btn-danger  py-2 rounded-3  px-4 '>جستجو</button>
                      </div>


            {/* {originName} */}

          </div>

   

      </div>
    </>
  )
}

export default HotelContent

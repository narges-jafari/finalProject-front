import React, { useState, useCallback } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import TrainPassenger from '../Passenger/TrainPassenger '

// import styles from '../../../assets/styles/HotelSearch.module.css'

import styles from '../../../assets/styles/Transport.module.css'

const TrainSearch = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [showPassenger, setShowPassenger] = useState([])
  const [showClass, setShowClass] = useState([])
  const [col1, setCol1] = useState(false)

  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const handlePassenger = useCallback((passenger) => {
    setShowPassenger(passenger)
  }, [])

  const handleClass = useCallback((name) => {
    setShowClass(name)
  }, [])

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-5 justify-content-center'>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder=' مبدا'
            onChange={e => setOriginName(e.target.value)}
            className={styles.transportInputCss}
          />

          {originName}
        </div>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder=' مقصد'
            onChange={e => setDestinationName(e.target.value)}
            className={styles.transportInputCss}
          />

          {destinationName}
        </div>
        <div className='mx-2 my-1 '>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ '
            style={{ backgroundColor: '#e3e1e154', height: '70px', paddingTop: '15px', paddingBottom: '15px', paddingRight: '40px', border: 'none', borderRadius: '20px' }}
          />
        </div>
        <div className='accordion' id='accordion'>
          <div className='accordion-item border-0 mb-2'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className={classnames('fw-medium', 'text-center', 'border-0', {
                  collapsed: !col1
                })}
                type='button'
                onClick={toggleCol1}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#e3e1e154',
                  borderRadius: '20px',
                  height: '70px',
                  width: '200px',
                  fontSize: '0.8125rem',
                  color: 'gray',
                  margin: '4px 0px 0px 0px'
                }}
              >
                <div className='d-flex flex-column my-2'>
                  <span>مسافران/ سالن</span>
                  <div className='d-flex flex-row mx-4 px-4'>
                    {showPassenger == '' ? null : <span style={{ fontFamily: 'Yekan', fontSize: '14px', fontWeight: 'bold' }}>  {showPassenger} مسافر</span>}
                    {!showClass ? null : <span> {showClass} </span>}
                  </div>
                </div>

              </button>
            </h2>

            <Collapse isOpen={col1} className='accordion-collapse '>
              <TrainPassenger
                AllPassenger={handlePassenger}
                AllClass={handleClass}
              />

            </Collapse>
          </div>

        </div>
      </div>
      <div style={{ margin: '30px auto', width: '73%' }}>
        <button className='btn btn-sm btn-danger my-1  w-100  py-3' style={{ borderRadius: '20px', fontSize: '30px', fontFamily: 'Vazir', fontWeight: 'bold' }}>جستجو</button>
      </div>
    </>
  )
}

export default TrainSearch

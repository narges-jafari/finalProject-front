import React, { useState, useCallback } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import BusPassenger from '../Passenger/BusPassenger '

import styles from '../../../assets/styles/Transport.module.css'

const BusSearch = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [showPassenger, setShowPassenger] = useState([])
  const [col1, setCol1] = useState(false)

  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const handlePassenger = useCallback((passenger) => {
    setShowPassenger(passenger)
  }, [])

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-5 justify-content-center'>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder=' حرکت از'
            value={originName}
            onChange={e => setOriginName(e.target.value)}
            className={styles.transportInputCss}
          />

        </div>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder=' حرکت به'
            value={destinationName}
            onChange={e => setDestinationName(e.target.value)}
            className={styles.transportInputCss}
          />

        </div>
        <div className='mx-2 my-2 '>
          <DatePicker
            selected={startDate}
            inputClass={styles.inputDateCss}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ حرکت'
          />
        </div>
        <div className='accordion' id='accordion'>
          <div className='accordion-item border-0 mb-2'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className={classnames('fw-bold', 'text-center', 'border-0', {
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
                  <span className={styles.spanAccordion}>  مسافران </span>
                  {showPassenger == '' ? null : <span className={styles.spanAccordion}>  {showPassenger} مسافر</span>}
                </div>
              </button>
            </h2>

            <Collapse isOpen={col1} className='accordion-collapse '>
              <BusPassenger
                AllPassenger={handlePassenger}
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

export default BusSearch

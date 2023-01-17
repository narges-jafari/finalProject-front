import React, { useState, useCallback, useEffect } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import styles from '../../../assets/styles/HotelSearch.module.css'
import DatePicker from 'react-multi-date-picker'
import HotelPassenger from '../Passenger/HotelPassenger '
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import { useLazyQuery } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'

const HotelSearch = () => {
  // STATES
  const [hotelName, setHotelName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [col1, setCol1] = useState(false)
  const [showPassenger, setShowPassenger] = useState([])
  const [showPassenger1, setShowPassenger1] = useState([])
  const [showPassenger2, setShowPassenger2] = useState([])
  const [showRoom, setShowRoom] = useState([])

  // ACCORDIAN TOGGLE FUNCTION

  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const handlePassenger = useCallback((passenger) => {
    setShowPassenger(passenger)
  }, [])
  const handlePassenger1 = useCallback((passenger) => {
    setShowPassenger1(passenger)
  }, [])
  const handlePassenger2 = useCallback((passenger) => {
    setShowPassenger2(passenger)
  }, [])


  const handleRoom = useCallback((room) => {
    setShowRoom(room)
  }, [])

  // apollo query

  const [SearchHotel] = useLazyQuery(hotelQueries.SEARCHHOTEL)

  const handleSearch = () => {
    SearchHotel({
      variables: {
        city: hotelName,
        startDate: startDate.toString(),
        endDate: endDate.toString()

      }
    })
      .then(({ data }) => {
        if (data.searchHotel !== null) {
          window.location.href = '/resulthotel'
        }
      })
  }
  const allPassenger = showPassenger + showPassenger1 + showPassenger2
  
  const showAllCapacity = () => {
    if (showPassenger === 0) {
      return (
        null
      )
    }
     else {
      return (
        allPassenger
      )
    }
  }

  useEffect(() => {
    { window.localStorage.setItem('HotelName', hotelName)
    }
    { window.localStorage.setItem('HotelStartDate', JSON.stringify(startDate.toString())) }
    { window.localStorage.setItem('HotelEndDate', JSON.stringify(endDate.toString())) }
    { window.localStorage.setItem('Passenger', JSON.stringify(showPassenger.toString())) }
    { window.localStorage.setItem('Passenger1', JSON.stringify(showPassenger1.toString())) }
    { window.localStorage.setItem('Passenger2', JSON.stringify(showPassenger2.toString())) }

    { window.localStorage.setItem('Room', JSON.stringify(showRoom.toString())) }
  }, [hotelName, startDate, endDate, showPassenger, showPassenger1,showPassenger2,showRoom])

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-5 justify-content-center'>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder='نام شهر'
            value={hotelName}
            onChange={e => setHotelName(e.target.value)}
            className={styles.hotelInputCss}
          />

        </div>
        <div className='mx-2 my-2 '>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            inputClass={styles.inputDateCss}
            placeholder='   از تاریخ ؟'
          />
        </div>
        <div className='mx-2 my-2 '>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            calendar={persian}
            inputClass={styles.inputDateCss}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='  تا تاریخ  ؟'
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
                  margin: '4px 0px 0px 0px'
                }}
              >
        

                <div className='d-flex flex-column my-2'>
                            <span className={styles.spanAccordion}>مسافران/ اتاق</span>
                            <div className='d-flex flex-row mx-4 px-1'>
                              <span style={{fontFamily:'Yekan'}} className={styles.spanAccordion}>
                                {showAllCapacity()} مسافر
                              </span>
                              {showRoom.length === 0 ? <span style={{fontFamily:'Yekan'}} className={styles.spanAccordion}>   ااتاق</span> : <span  style={{fontFamily:'Yekan'}} className={styles.spanAccordion}> {showRoom} اتاق</span>}
                            </div>
                          </div>

              </button>
            </h2>

            <Collapse isOpen={col1} className='accordion-collapse '>
              <HotelPassenger
                AllPassenger={handlePassenger}
                AllPassenger1={handlePassenger1}
                AllPassenger2={handlePassenger2}

                AllRoom={handleRoom}
              />

            </Collapse>
          </div>

        </div>
        {/* <div
>
        </div> */}

      </div>
      <div style={{ margin: '30px auto', width: '73%' }}>
        <button
          onClick={handleSearch}
          className='btn btn-sm btn-danger my-1  w-100  py-3' style={{ borderRadius: '20px', fontSize: '30px', fontFamily: 'Vazir', fontWeight: 'bold' }}
        >جستجو
        </button>
      </div>

    </>
  )
}

export default HotelSearch

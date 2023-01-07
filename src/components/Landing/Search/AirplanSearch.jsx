import React, { useState, useCallback, useEffect } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import { useLazyQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import styles from '../../../assets/styles/Transport.module.css'
import AirplanePassenger from '../Passenger/AirplanePassenger'

const AirplanSearch = () => {
  // STATES
  const [destinationname, setDestinationname] = useState('')
  const [originname, setOriginname] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [col1, setCol1] = useState(false)
  const [showPassenger, setShowPassenger] = useState(0)
  const [showPassenger1, setShowPassenger1] = useState(0)
  const [showPassenger2, setShowPassenger2] = useState(0)

  const [showClass, setShowClass] = useState([])
  // ACCORDIAN TOGGLE FUNCTION
  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const handlePassenger = useCallback((passenger) => {
    setShowPassenger(passenger)
  })
  const handlePassenger1 = useCallback((passenger) => {
    setShowPassenger1(passenger)
  })
  const handlePassenger2 = useCallback((passenger) => {
    setShowPassenger2(passenger)
  })

  const handleClass = useCallback((name) => {
    setShowClass(name)
  }, [])
  // apollo query
  const [SearchFlight] = useLazyQuery(flightQueries.SEARCHFLIGHT)

  const handleSearch = () => {
    SearchFlight({
      variables: {
        originName: originname,
        destinationName: destinationname,
        flightClass: showClass,
        date: startDate.toString()

      }
    })
      .then(({ data }) => {
        if (data.searchFlight !== null) {
          window.location.href = '/resultairplane'
        }
      })
  }

  const allPassenger = showPassenger + showPassenger1 + showPassenger2
  console.log(showPassenger1, 'llo099')

  useEffect(() => {
    { window.localStorage.setItem('FlightOriginName', originname)
    };
    { window.localStorage.setItem('FlightDestinationName', JSON.stringify(destinationname)) }
    { window.localStorage.setItem('FlightDate', JSON.stringify(startDate.toString())) }
    { window.localStorage.setItem('FlightClass', JSON.stringify(showClass)) }
    { window.localStorage.setItem('Capacity', JSON.stringify(showPassenger)) }
    { window.localStorage.setItem('Capacity1', JSON.stringify(showPassenger1)) }
    { window.localStorage.setItem('Capacity2', JSON.stringify(showPassenger2)) }
  }, [originname, destinationname, showClass, startDate, showPassenger, showPassenger1, showPassenger2])

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-5 justify-content-center'>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder=' پرواز از'
            value={originname}
            onChange={e => setOriginname(e.target.value)}
            className={styles.transportInputCss}
          />

        </div>
        <div className='mx-2 my-2'>

          <input
            type='text'
            value={destinationname}
            placeholder=' پرواز به'
            onChange={e => setDestinationname(e.target.value)}
            className={styles.transportInputCss}
          />

        </div>
        <div className='mx-2 my-2 '>
          <DatePicker
            inputClass={styles.inputDateCss}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ پرواز'
            format='YYYY/MM/DD'
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
                  <span className={styles.spanAccordion}>مسافران/ کلاس</span>
                  <div className='d-flex flex-row mx-4 px-1'>
                    {allPassenger == '' ? null : <span className={styles.spanAccordion}>  {allPassenger} مسافر</span>}
                    {!showClass ? null : <span className={styles.spanAccordion}> {showClass} </span>}
                  </div>
                </div>
              </button>
            </h2>

            <Collapse isOpen={col1} className='accordion-collapse '>
              <AirplanePassenger
                AllPassenger={handlePassenger}
                AllPassenger1={handlePassenger1}
                AllPassenger2={handlePassenger2}

                AllClass={handleClass}
              />

            </Collapse>
          </div>

        </div>
      </div>
      <div style={{ margin: '30px auto', width: '73%' }}>
        <button
          onClick={handleSearch}
          className='btn btn-sm btn-danger my-1  w-100  py-3'
          style={{ borderRadius: '20px', fontSize: '30px', fontFamily: 'Vazir', fontWeight: 'bold' }}
        >جستجو
        </button>
      </div>
    </>
  )
}

export default AirplanSearch

import React, { useState, useCallback, useEffect } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import TrainPassenger from '../Passenger/TrainPassenger '
import styles from '../../../assets/styles/Transport.module.css'
import { useLazyQuery } from '@apollo/client'
import trainQueries from '../../../Apollo/Query/trainQueries'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
const TrainSearch = () => {
  // STATES
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [showPassenger, setShowPassenger] = useState([])
  const [showPassenger1, setShowPassenger1] = useState([])
  const [showPassenger2, setShowPassenger2] = useState([])

  const [showClass, setShowClass] = useState([])
  const [col1, setCol1] = useState(false)

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

  const allPassenger = showPassenger + showPassenger1 + showPassenger2

  const handleClass = useCallback((name) => {
    setShowClass(name)
  }, [])

  // apollo query
  const [SearchTrain] = useLazyQuery(trainQueries.SEARCHTRAIN)

  const showAllCapacity = () => {
    if (showPassenger == 0) {
      return (
        null
      )
    } else {
      return (
        allPassenger
      )
    }
  }

  console.log(showPassenger, showPassenger1, '[[[[[[[[', showAllCapacity())

  const handleSearch = () => {
    SearchTrain({
      variables: {
        originName: originName,
        destinationName: destinationName,
        hallType: showClass,
        date: startDate.toString()

      }
    })
      .then(({ data }) => {
        if (data.searchTrain !== null) {
          window.location.href = '/resulttrain'
        }
      })
  }
  useEffect(() => {
    { window.localStorage.setItem('TrainOriginName', originName)
    };
    { window.localStorage.setItem('TrainDestinationName', JSON.stringify(destinationName)) }
    { window.localStorage.setItem('TrainDate', JSON.stringify(startDate.toString())) }
    { window.localStorage.setItem('TrainClass', JSON.stringify(showClass)) }
    { window.localStorage.setItem('Capacity', JSON.stringify(showPassenger)) }
    { window.localStorage.setItem('Capacity1', JSON.stringify(showPassenger1)) }
    { window.localStorage.setItem('Capacity2', JSON.stringify(showPassenger2)) }
  }, [originName, destinationName, showClass, startDate, showPassenger, showPassenger1, showPassenger2])
  console.log(allPassenger, 'l')

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

        </div>
        <div className='mx-2 my-2'>

          <input
            type='text'
            placeholder=' مقصد'
            onChange={e => setDestinationName(e.target.value)}
            className={styles.transportInputCss}
          />

        </div>
        <div className='mx-2 my-2 '>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            inputClass={styles.inputDateCss}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ '
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
                  color: 'gray',
                  margin: '4px 0px 0px 0px'
                }}
              >
                <div style={{ fontFamily: 'Vazir' }} className='d-flex flex-column my-2'>
                  <span className={styles.spanAccordion}>مسافران/ سالن</span>
                  <div className='d-flex flex-row mx-4 px-4'>
                    {/* {allPassenger == '' ? <span className={styles.spanAccordion}>1 مسافر</span> : <span className={styles.spanAccordion}>  {allPassenger} مسافر</span>} */}
                    <span className={styles.spanAccordion}>
                      {showAllCapacity()} مسافر
                    </span>
                    {!showClass ? null : <span className={styles.spanAccordion}> {showClass} </span>}
                  </div>

                </div>

              </button>
            </h2>

            <Collapse isOpen={col1} className='accordion-collapse '>
              <TrainPassenger
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

          className='btn btn-sm btn-danger my-1  w-100  py-3' style={{ borderRadius: '20px', fontSize: '30px', fontFamily: 'Vazir', fontWeight: 'bold' }}
        >جستجو
        </button>
      </div>
    </>
  )
}

export default TrainSearch

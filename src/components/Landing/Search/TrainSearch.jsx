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
const TrainSearch = () => {
  // STATES
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [showPassenger, setShowPassenger] = useState([])
  const [showClass, setShowClass] = useState([])
  const [col1, setCol1] = useState(false)

  // ACCORDIAN TOGGLE FUNCTION
  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const handlePassenger = useCallback((passenger) => {
    setShowPassenger(passenger)
  }, [])

  const handleClass = useCallback((name) => {
    setShowClass(name)
  }, [])

  // apollo query
  const [SearchTrain] = useLazyQuery(trainQueries.SEARCHTRAIN)

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
  }, [originName, destinationName, showClass, startDate])

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
                  fontSize: '0.8125rem',
                  color: 'gray',
                  margin: '4px 0px 0px 0px'
                }}
              >
                <div className='d-flex flex-column my-2'>
                  <span className={styles.spanAccordion}>مسافران/ سالن</span>
                  <div className='d-flex flex-row mx-4 px-4'>
                    {showPassenger == '' ? null : <span className={styles.spanAccordion}>  {showPassenger} مسافر</span>}
                    {!showClass ? null : <span className={styles.spanAccordion}> {showClass} </span>}
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

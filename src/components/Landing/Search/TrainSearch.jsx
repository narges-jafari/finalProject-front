import React, { useState, useCallback, useEffect } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { Collapse, TabContent, TabPane, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import TrainPassenger from '../Passenger/TrainPassenger '
import styles from '../../../assets/styles/Transport.module.css'
import { useLazyQuery } from '@apollo/client'
import trainQueries from '../../../Apollo/Query/trainQueries'
import { toast, ToastContainer } from 'react-toastify'
import Nav from 'react-bootstrap/Nav'

import 'react-toastify/dist/ReactToastify.css'
const TrainSearch = () => {
  // STATES
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [showPassenger, setShowPassenger] = useState([])
  const [showPassenger1, setShowPassenger1] = useState([])
  const [showPassenger2, setShowPassenger2] = useState([])
  const [endDate, setEndDate] = useState(new Date())
  const [currentActiveTab, setCurrentActiveTab] = useState('1')



  const [showClass, setShowClass] = useState([])
  const [col1, setCol1] = useState(false)

  // ACCORDIAN TOGGLE FUNCTION
  const toggleCol1 = () => {
    setCol1(!col1)
  }

    // Toggle active state for Tab
    const toggle = tab => {
      if (currentActiveTab !== tab) setCurrentActiveTab(tab)
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
    window.localStorage.setItem('TrainDateCome', JSON.stringify(endDate.toString()))

  }, [originName, destinationName, showClass, startDate,endDate, showPassenger, showPassenger1, showPassenger2])
  console.log(allPassenger, 'l')

  const handleNameChange = () => {
    window.location.href = 'firsttrainresult'
  }

  return (
    <>
      <div className={styles.header}>
        <Nav variant='pills' defaultActiveKey='/home' className={styles.contentnav}>
          <Nav.Item className={styles.contentnavitem}>
            <Nav.Link
              className={classnames('btn btn-danger bg-white  text-secondary', 'text-start', 'border-0', {
                active:
                currentActiveTab === '1'
              })}
              onClick={() => { toggle('1') }}
            >یک‌طرفه
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.contentnavitem}>
            <Nav.Link
              className={classnames('btn btn-danger bg-white  text-secondary', 'text-start', 'border-0', {
                active:
                currentActiveTab === '2'
              })}
              onClick={() => { toggle('2') }}
            >
              رفت و برگشت
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <TabContent activeTab={currentActiveTab}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              <>
                <div className='d-flex  flex-row flex-wrap my-5 justify-content-center'>
                  <div className='mx-2 my-2'>

                    <input
                      type='text'
                      placeholder='مبدا'
                      value={originName}
                      onChange={e => setOriginName(e.target.value)}
                      className={styles.transportInputCss}
                    />

                  </div>
                  <div className='mx-2 my-2'>

                    <input
                      type='text'
                      value={destinationName}
                      placeholder='  مقصد'
                      onChange={e => setDestinationName(e.target.value)}
                      className={styles.transportInputCss}
                    />

                  </div>
                  <div className='mx-2 my-2  d-flex flex-column'>
                    <DatePicker
                      inputClass={styles.inputDateCss}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      calendar={persian}
                      locale={persianfa}
                      calendarPosition='bottom-right'
                      placeholder='تاریخ رفت'
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
                    className='btn btn-sm btn-danger my-1  w-100  py-3'
                    style={{ borderRadius: '20px', fontSize: '30px', fontFamily: 'Vazir', fontWeight: 'bold' }}
                  >جستجو
                  </button>
                </div>
              </>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              {/* <Shopping /> */}
              <>
                <div className='d-flex  flex-row flex-wrap my-5 justify-content-center'>
                  <div className='mx-2 my-2'>

                    <input
                      type='text'
                      placeholder=' مبدا'
                      value={originName}
                      onChange={e => setOriginName(e.target.value)}
                      className={styles.transportInputCss}
                    />

                  </div>
                  <div className='mx-2 my-2'>

                    <input
                      type='text'
                      value={destinationName}
                      placeholder=' مقصد '
                      onChange={e => setDestinationName(e.target.value)}
                      className={styles.transportInputCss}
                    />

                  </div>
                  <div className='mx-2 my-2  d-flex flex-column'>
                    <DatePicker
                      inputClass={styles.inputDateCss1}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      calendar={persian}
                      locale={persianfa}
                      calendarPosition='bottom-right'
                      placeholder='تاریخ رفت'
                      format='YYYY/MM/DD'
                    />
                    <DatePicker
                      inputClass={styles.inputDateCss1}
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      calendar={persian}
                      locale={persianfa}
                      calendarPosition='bottom-right'
                      placeholder='تاریخ برگشت'
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
                    onClick={handleNameChange}
                    className='btn btn-sm btn-danger my-1  w-100  py-3'
                    style={{ borderRadius: '20px', fontSize: '30px', fontFamily: 'Vazir', fontWeight: 'bold' }}
                  >جستجو
                  </button>
                </div>
              </>
            </Col>
          </Row>
        </TabPane>

      </TabContent>

    </>

  )
}

export default TrainSearch

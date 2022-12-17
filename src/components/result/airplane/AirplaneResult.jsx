import React, { useState, useCallback } from 'react'
import styles1 from '../../../assets/styles/AirplaneResult.module.css'
import AirplanSearch from '../../Landing/Search/AirplanSearch'
import AirplaneList from './AirplaneList'
import Filter from './Filter'
import Header from './Header'
import img from '../../../assets/img/logo1.JPG'
import styles from '../../../assets/styles/AirplaneList.module.css'
import PriceTable from '../airplane/PriceTable'
import { FcSalesPerformance } from 'react-icons/fc'

import Info from './Info'
import NotFound from './NotFound'

import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import { GiCommercialAirplane } from 'react-icons/gi'
import moment from 'moment'

const AirplaneResult = () => {
  const [showEdit, setShowEdit] = useState('')
  const [showPriceTableModal, setShowPriceTableModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [airplaneItem, setAirplaneItem] = useState([])
  const [clickedItem, setClickedItem] = useState(false)
  const [showSellData, setShowSellData] = useState([])

  const handleSellData = useCallback((sell) => {
    setShowSellData(sell)
  }, [])

  console.log(showSellData, 'showdata')

  const originName = window.localStorage.getItem('FlightOriginName').replace(/"/g, '')
  const destinationName = window.localStorage.getItem('FlightDestinationName').replace(/"/g, '')
  const date = window.localStorage.getItem('FlightDate').replace(/"/g, '')
  const flightclass = window.localStorage.getItem('FlightClass').replace(/"/g, '')
  const Num = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const dayOfWeekName = new Date(Num).toLocaleString(
    'fa-IR', { weekday: 'long' })
  const day = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })
  const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ]
  const month1 = new Date(Num)
  const monthName = monthNames[month1.getMonth()]

  // apollo query
  useQuery(flightQueries.SEARCHFLIGHT, {
    variables: {
      originName: originName,
      destinationName: destinationName,
      flightClass: flightclass,
      date: date
    },

    onCompleted: (res) => {
      setAirplaneItem(res.searchFlight)
    },
    onError: () => {
      setAirplaneItem([])
    }
  })

  const newArr = airplaneItem.map((item) => {
    return item.price
  })

  console.log(newArr, 'snk')

  const okk = newArr.sort((a, b) => (a.price > b.price) ? 1 : -1)

  console.log(okk, 'klklklklk')

  const numAscending = [...airplaneItem].sort((a, b) => a.price - b.price)
  console.log(numAscending, 'lllppppp')

  const [objectsToShow, setToShow] = useState(airplaneItem)

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1
    }
    return 0
  }
  const handleChange = (value) => {
    if (value == 'none') {
      setAirplaneItem([...airplaneItem])
    } else if (value) {
      let toType, toAscending
      switch (value) {
        case 'ascending' : toType = true; toAscending = true; break
        case 'descending' : toType = true; toAscending = false; break
        case 'high' : toType = false; toAscending = true; break
        case 'low' : toType = false; toAscending = false; break
      }
      const current = [...airplaneItem]
      current.sort((a, b) => toType
        ? compare(a.price, b.price, toAscending)
        : compare(a.price, b.price, toAscending))
      setAirplaneItem([...current])
    } else {
      setAirplaneItem([...airplaneItem])
    }
  }
  console.log(objectsToShow, 'show')
  return (
    <>
      <div className={styles1.headerCss}>
        <Header />
      </div>
      <div className={styles1.content}>
        <div className={styles1.filterDiv}>
          <Filter
            filterItem={airplaneItem}
            customeStrategySell={handleSellData}
          />
        </div>
        <div className={styles1.airCss}>
          <>

            {airplaneItem.length == 0
              ? <NotFound />
              : <>
                <div>
                  <button
                    type='button'
                    data-toggle='modal'
                    onClick={() => {
                      if (!showPriceTableModal) {
                        setShowPriceTableModal(true)
                      }
                    }}
                    className='btn py-1  my-2 mx-2  bg-soft   text-primary text-nowrap '
                  >
                    <FcSalesPerformance className='fa-lg' /> مقایسه قیمت‌ها
                  </button>
                  {showPriceTableModal && (
                    <PriceTable
                      isOpen={showPriceTableModal}
                      setIsOpen={setShowPriceTableModal}
                    />
                  )}
                  <button type='button' className='w-25 py-2 px-0 btn btn-خعفمهدث-primary rounded-3' value='high' onClick={(e) => handleChange(e.target.value)}>
                    ارزان‌ترین قیمت
                  </button>
                </div>
                <div className='d-flex flex-column '>

                  {(() => {
                    if (showSellData.length == 0) {
                      return (
                        <div>
                          {airplaneItem.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div>
                                    <img src={img} className={styles.imgCss} />
                                    <span> {item.airplaneCompany} </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> {item.capacity}  </span>
                                    <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

                                  </div>
                                </div>
                                <div className={styles.contentItem}>
                                  <div>
                                    <span className={styles.fontCss}>{item.originName}</span>
                                    <span className={styles.clockcss}> {item.departureTime}</span>
                                  </div>
                                  <div><i className=' fa fa-plane' style={{ transform: 'rotate(226deg)' }} /></div>
                                  <div>
                                    <span className={styles.fontCss}>{item.destinationName}</span>
                                    <span className={styles.clockcss}> {item.arrivalTime}</span>
                                  </div>
                                </div>
                                <div className={styles.contentItem1}>
                                  <div>
                                    <span>  {item.airportOrigin}</span>
                                    <span> {dayOfWeekName + day + monthName}   </span>
                                  </div>
                                  <div>
                                    <span> {new Date().getTime(item.arrivalTime).toString()} </span>
                                  </div>
                                  <div>
                                    <span>{item.airportDestination}</span>
                                    <span>   {dayOfWeekName + day + monthName}  </span>
                                  </div>
                                </div>
                                <div className={styles.contentIte3}>
                                  <div className='d-flex flex-column'>
                                    <span className='mt-1 text-center'>قیمت هر مسافر </span>
                                    <span className='text-primary' style={{ fontWeight: 'bold', fontSize: '20px' }}>  {item.price} </span>
                                  </div>
                                  <span
                                    className='mt-2  rounded-3 px-4 mx-2 py-2'
                                    onClick={() => {
                                      setShowInfoModal(true)
                                      setClickedItem(item._id)
                                    }}
                                    style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                  >جزییات
                                  </span>
                                  {showInfoModal && (
                                    <Info
                                      isOpen={showInfoModal}
                                      setIsOpen={setShowInfoModal}
                                      info={clickedItem}
                                    />

                                  )}
                                  <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else {
                      return (
                        <div className='App'>

                          {showSellData.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div>
                                    <img src={img} className={styles.imgCss} />
                                    <span> {item.airplaneCompany} </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> {item.capacity}  </span>
                                    <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

                                  </div>
                                </div>
                                <div className={styles.contentItem}>
                                  <div>
                                    <span className={styles.fontCss}>{item.originName}</span>
                                    <span className={styles.clockcss}> {item.departureTime}</span>
                                  </div>
                                  <div><i className=' fa fa-plane' style={{ transform: 'rotate(226deg)' }} /></div>
                                  <div>
                                    <span className={styles.fontCss}>{item.destinationName}</span>
                                    <span className={styles.clockcss}> {item.arrivalTime}</span>
                                  </div>
                                </div>
                                <div className={styles.contentItem1}>
                                  <div>
                                    <span>  {item.airportOrigin}</span>
                                    <span> {dayOfWeekName + day + monthName}   </span>
                                  </div>
                                  <div>
                                    <span> {new Date().getTime(item.arrivalTime).toString()} </span>
                                  </div>
                                  <div>
                                    <span>{item.airportDestination}</span>
                                    <span>   {dayOfWeekName + day + monthName}  </span>
                                  </div>
                                </div>
                                <div className={styles.contentIte3}>
                                  <div className='d-flex flex-column'>
                                    <span className='mt-1 text-center'>قیمت هر مسافر </span>
                                    <span className='text-primary' style={{ fontWeight: 'bold', fontSize: '20px' }}>  {item.price} </span>
                                  </div>
                                  <span
                                    className='mt-2  rounded-3 px-4 mx-2 py-2'
                                    onClick={() => {
                                      setShowInfoModal(true)
                                      setClickedItem(item._id)
                                    }}
                                    style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                  >جزییات
                                  </span>
                                  {showInfoModal && (
                                    <Info
                                      isOpen={showInfoModal}
                                      setIsOpen={setShowInfoModal}
                                      info={clickedItem}
                                    />

                                  )}
                                  <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>

                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    }
                  })()}

                </div>
              </>}
          </>
        </div>

      </div>

    </>
  )
}

export default AirplaneResult

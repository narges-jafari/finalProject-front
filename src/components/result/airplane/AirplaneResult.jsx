import React, { useState, useCallback, useEffect } from 'react'
import styles1 from '../../../assets/styles/AirplaneResult.module.css'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { FcSalesPerformance } from 'react-icons/fc'
import moment from 'moment'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import logo1 from '../../../assets/img/logo6.JPG'
import logo2 from '../../../assets/img/logo5.JPG'
import logo3 from '../../../assets/img/logo2.JPG'
import logo4 from '../../../assets/img/logo3.JPG'
import logo5 from '../../../assets/img/logo4.JPG'
import logo6 from '../../../assets/img/logo1.JPG'

import PriceTable from '../airplane/PriceTable'
import Filter from './Filter'
import Header from './Header'
import Info from './Info'
import NotFound from './NotFound'

const AirplaneResult = () => {
  // STATES
  const [showPriceTableModal, setShowPriceTableModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [airplaneItem, setAirplaneItem] = useState([])
  const [clickedItem, setClickedItem] = useState(false)
  const [showSellData, setShowSellData] = useState([])
  const [showSellData1, setShowSellData1] = useState([])
  const [filteredTicketsDate, setFilteredTicketsDate] = useState([])

  // FUNCTION FOR GET DATA FROM CHILD
  const handleSellData = useCallback((sell) => {
    setShowSellData(sell)
  }, [])
  const handleSellData1 = useCallback((sell) => {
    setShowSellData1(sell)
  }, [])

  const originName = window.localStorage.getItem('FlightOriginName').replace(/"/g, '')
  const destinationName = window.localStorage.getItem('FlightDestinationName').replace(/"/g, '')
  const date = window.localStorage.getItem('FlightDate').replace(/"/g, '')
  const flightclass = window.localStorage.getItem('FlightClass').replace(/"/g, '')
  const capacity = parseInt(window.localStorage.getItem('Capacity').replace(/"/g, ''))
  const capacity1 = parseInt(window.localStorage.getItem('Capacity1').replace(/"/g, ''))
  const capacity2 = parseInt(window.localStorage.getItem('Capacity2').replace(/"/g, ''))
  const allCapacity = capacity + capacity1 + capacity2
  const Num = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const dayOfWeekName = new Date(Num).toLocaleString(
    'fa-IR', { weekday: 'long' })
  const day = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })
  const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ]

  const handleCapacity = () => {
    if (!capacity2 && capacity && !capacity1) {
      return (
        capacity
      )
    } else if (!capacity1 && !capacity2 && !capacity) {
      return 1
    } else if (capacity1 && !capacity2 && capacity) {
      return capacity + capacity1
    } else if (!capacity1 && capacity2 && capacity) {
      return capacity + capacity2
    } else {
      return (
        allCapacity
      )
    }
  }
  const todayday = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const todaymonth = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const string1 = '۱۴۰۱' + '/' + todaymonth + '/' + todayday

  const month1 = new Date(Num)
  const monthName = monthNames[month1.getMonth()]
  console.log(handleCapacity(), 'lklk')
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
  console.log(flightclass, 'aaaa')
  // SORT FUNCTION
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
      setAirplaneItem([...filteredTicketsDate])
    } else if (value) {
      let toType, toAscending
      switch (value) {
        case 'ascending' : toType = true; toAscending = true; break
        case 'descending' : toType = true; toAscending = false; break
        case 'high' : toType = false; toAscending = true; break
        case 'low' : toType = false; toAscending = false; break
      }
      const current = [...filteredTicketsDate]
      current.sort((a, b) => toType
        ? compare(a.price, b.price, toAscending)
        : compare(a.price, b.price, toAscending))
      setAirplaneItem([...current])
    } else {
      setAirplaneItem([...filteredTicketsDate])
    }
  }
  const daynum = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const currentDate = '۱۴۰۱' + '/' + daynum + '/' + month

  const newDate = currentDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const current = new Date()

  const time = current.toLocaleTimeString('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
  const newTime = time.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

  // const startTime=airplaneItem.map(item=>item.startTime)

  useEffect(() => {
    setFilteredTicketsDate(
      airplaneItem.filter((item) =>
        item.date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)) >= newDate &&
        item.capacity >= handleCapacity()
      )
    )
  }, [airplaneItem])

  useEffect(() => {
    window.localStorage.setItem('AIRPLAINID', JSON.stringify(clickedItem))
  }, [clickedItem])

  const handleNameChange = (e) => {
    window.location.href = '/airplanepay'
    // setClickedRoom(clickedItem)
  }
  return (
    <>

      <div className={styles1.headerCss}>
        <Header />
      </div>

      <div className={styles1.content}>
        <div className={styles1.filterDiv}>
          <Filter
            filterItem={filteredTicketsDate}
            customeStrategySell={handleSellData}
            customeStrategySell1={handleSellData1}
          />
        </div>
        <div className={styles1.airCss}>
          <>

            {filteredTicketsDate.length == 0
              ? <NotFound
                  info={showSellData}
                  info1={showSellData1}
                />
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
                      showInfo={filteredTicketsDate}
                      priceInfo={showSellData}
                      nameInfo={showSellData1}
                    />
                  )}
                  <button type='button' className='w-25 py-2 px-0 btn btn-outline-primary rounded-3' value='high' onClick={(e) => handleChange(e.target.value)}>
                    ارزان‌ترین قیمت
                  </button>
                </div>
                <div className='d-flex flex-column '>

                  {(() => {
                    if (showSellData.length == 0 && showSellData1.length == 0) {
                      return (
                        <div>
                          {filteredTicketsDate.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div className='d-flex flex-row flex-wrap '>
                                    {(() => {
                                      if (item.airplaneCompany.includes('   ایران ایر تور')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo1} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('آسمان')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo2} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('تابان')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo3} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('کاسپین')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo4} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('کیش')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo5} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('زاگرس')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo6} />
                                          </div>

                                        )
                                      } else {
                                        return null
                                      }
                                    })()}

                                    <span className='text-secondary mt-4'><h5>{item.airplaneCompany} </h5> </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> {item.capacity <= 0 ? <span className='text-danger'>ظرفیت تکمیل</span> : <> {item.capacity}صندلی </>}  </span>
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
                                    <span>
                                      {(() => {
                                        if (item.arrivalTime) {
                                          const time1 = moment(item.departureTime, 'hh:mm')
                                          const time2 = moment(item.arrivalTime, 'hh:mm')

                                          const hours = time1.diff(time2, 'hours')
                                          time2.add(hours, 'hours')

                                          const minutes = time1.diff(time2, 'minutes')
                                          time2.add(minutes, 'minutes')

                                          const time3 = moment(hours, 'hh').format('hh')
                                          const time4 = moment(minutes, 'mm').format('mm')

                                          return (
                                            <div>
                                              {time3}ساعت و
                                              {time4}دقیقه
                                            </div>
                                          )
                                        } else {
                                          return (
                                            <div>catch all</div>
                                          )
                                        }
                                      })()}

                                    </span>
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
                                  {item.date == string1 && item.departureTime < newTime
                                    ? <span
                                        className='mt-2  rounded-3 px-4 mx-2 py-2'
                                        style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                      > انتخاب
                                    </span>
                                    : <button

                                        onClick={() => { handleNameChange(); setClickedItem(item._id) }}

                                        className='btn btn-lg btn-danger rounded-3  my-2'
                                      > انتخاب
                                    </button>}
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else if (showSellData.length !== 0 && showSellData1.length == 0) {
                      return (
                        <div className='App'>

                          {showSellData.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div className='d-flex flex-row flex-wrap '>
                                    {(() => {
                                      if (item.airplaneCompany.includes('   ایران ایر تور')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo1} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('آسمان')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo2} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('تابان')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo3} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('کاسپین')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo4} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('کیش')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo5} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('زاگرس')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo6} />
                                          </div>

                                        )
                                      } else {
                                        return null
                                      }
                                    })()}
                                    <span className='text-secondary mt-4'><h5>{item.airplaneCompany} </h5> </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> {item.capacity <= 0 ? <span className='text-danger'>ظرفیت تکمیل</span> : <> {item.capacity}صندلی </>}   </span>
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
                                    <span>
                                      {(() => {
                                        if (item.arrivalTime) {
                                          const time1 = moment(item.departureTime, 'hh:mm')
                                          const time2 = moment(item.arrivalTime, 'hh:mm')

                                          const hours = time1.diff(time2, 'hours')
                                          time2.add(hours, 'hours')

                                          const minutes = time1.diff(time2, 'minutes')
                                          time2.add(minutes, 'minutes')

                                          const time3 = moment(hours, 'hh').format('hh')
                                          const time4 = moment(minutes, 'mm').format('mm')

                                          return (
                                            <div>
                                              {time3}ساعت و
                                              {time4}دقیقه
                                            </div>
                                          )
                                        } else {
                                          return (
                                            <div>catch all</div>
                                          )
                                        }
                                      })()}

                                    </span>
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
                                  {item.date == string1 && item.departureTime < newTime
                                    ? <span
                                        className='mt-2  rounded-3 px-4 mx-2 py-2'
                                        style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                      > انتخاب
                                    </span>
                                    : <button
                                        onClick={() => { handleNameChange(); setClickedItem(item._id) }}

                                        className='btn btn-lg btn-danger rounded-3  my-2'
                                      > انتخاب
                                    </button>}
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else if (showSellData.length == 0 && showSellData1.length !== 0) {
                      return (
                        <div className='App'>

                          {showSellData1.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div className='d-flex flex-row flex-wrap '>
                                    {(() => {
                                      if (item.airplaneCompany.includes('   ایران ایر تور')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo1} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('آسمان')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo2} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('تابان')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo3} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('کاسپین')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo4} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('کیش')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo5} />
                                          </div>

                                        )
                                      } else if (item.airplaneCompany.includes('زاگرس')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo6} />
                                          </div>

                                        )
                                      } else {
                                        return null
                                      }
                                    })()}
                                    <span className='text-secondary mt-4'><h5>{item.airplaneCompany} </h5> </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> {item.capacity <= 0 ? <span className='text-danger'>ظرفیت تکمیل</span> : <> {item.capacity}صندلی </>}  </span>
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
                                    <span>
                                      {(() => {
                                        if (item.arrivalTime) {
                                          const time1 = moment(item.departureTime, 'hh:mm')
                                          const time2 = moment(item.arrivalTime, 'hh:mm')

                                          const hours = time1.diff(time2, 'hours')
                                          time2.add(hours, 'hours')

                                          const minutes = time1.diff(time2, 'minutes')
                                          time2.add(minutes, 'minutes')

                                          const time3 = moment(hours, 'hh').format('hh')
                                          const time4 = moment(minutes, 'mm').format('mm')

                                          return (
                                            <div>
                                              {time3}ساعت و
                                              {time4}دقیقه
                                            </div>
                                          )
                                        } else {
                                          return (
                                            <div>catch all</div>
                                          )
                                        }
                                      })()}

                                    </span>
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
                                  {item.date == string1 && item.departureTime < newTime
                                    ? <span
                                        className='mt-2  rounded-3 px-4 mx-2 py-2'
                                        style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                      > انتخاب
                                    </span>
                                    : <button
                                        onClick={() => { handleNameChange(); setClickedItem(item._id) }}

                                        className='btn btn-lg btn-danger rounded-3  my-2'
                                      > انتخاب
                                    </button>}
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else {
                      return (
                        <div className='App'>
                          <NotFound
                            info={showSellData}
                            info1={showSellData1}
                          />

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

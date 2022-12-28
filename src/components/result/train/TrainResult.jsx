import React, { useState, useCallback, useEffect } from 'react'
import styles1 from '../../../assets/styles/AirplaneResult.module.css'
import Filter from './Filter'
import { useQuery } from '@apollo/client'
import NotFound from './NotFound'
import styles from '../../../assets/styles/AirplaneList.module.css'
import PriceChart from './PriceChart'
import { FcSalesPerformance } from 'react-icons/fc'
import Header from './Header'
import moment from 'moment'
import Info from './Info'
import trainQueries from '../../../Apollo/Query/trainQueries'
import logo1 from '../../../assets/img/bg/tlogo.JPG'
import logo2 from '../../../assets/img/bg/tlogo1.JPG'
import logo3 from '../../../assets/img/bg/tlogo2.JPG'
import logo4 from '../../../assets/img/bg/tlogo3.JPG'
import logo5 from '../../../assets/img/bg/tlogo4.JPG'
import logo6 from '../../../assets/img/bg/tlogo5.JPG'

const TrainResult = () => {
  // STATES
  const [showPriceTableModal, setShowPriceTableModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [trainItem, setTrainItem] = useState([])
  const [clickedItem, setClickedItem] = useState(false)
  const [showSellData, setShowSellData] = useState([])
  const [showSellData1, setShowSellData1] = useState([])
  const [filteredTicketsDate, setFilteredTicketsDate] = useState([])
  // FUNCTIONS FOR GET DATA FROM CHILD
  const handleSellData = useCallback((sell) => {
    setShowSellData(sell)
  }, [])
  const handleSellData1 = useCallback((sell) => {
    setShowSellData1(sell)
  }, [])

  const originName = window.localStorage.getItem('TrainOriginName').replace(/"/g, '')
  const destinationName = window.localStorage.getItem('TrainDestinationName').replace(/"/g, '')
  const date = window.localStorage.getItem('TrainDate').replace(/"/g, '')
  const trainClass = window.localStorage.getItem('TrainClass').replace(/"/g, '')
  const Num = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const dayOfWeekName = new Date(Num).toLocaleString(
    'fa-IR', { weekday: 'long' })
  const day = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })
  const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ]

  const month1 = new Date(Num)
  const monthName = monthNames[month1.getMonth()]

  const daynum = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const currentDate = '۱۴۰۱' + '/' + daynum + '/' + month
  const newDate = currentDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

  useEffect(() => {
    setFilteredTicketsDate(
      trainItem.filter((item) =>
        item.date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)) > newDate
      )
    )
  }, [trainItem])

  // apollo query
  useQuery(trainQueries.SEARCHTRAIN, {
    variables: {
      originName: originName,
      destinationName: destinationName,
      hallType: trainClass,
      date: date
    },

    onCompleted: (res) => {
      setTrainItem(res.searchTrain)
    },
    onError: () => {
      setTrainItem([])
    }
  })
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
    if (value === 'none') {
      setTrainItem([...filteredTicketsDate])
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
      setTrainItem([...current])
    } else {
      setTrainItem([...filteredTicketsDate])
    }
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
            {filteredTicketsDate.length === 0
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
                    <PriceChart
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
                    if (showSellData.length === 0 && showSellData1.length === 0) {
                      return (
                        <div>
                          {filteredTicketsDate.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div className='d-flex flex-row flex-wrap '>
                                    {(() => {
                                      if (item.railCompany.includes('رجا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo1} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('فدک')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo2} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('ریل ترابر سبا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo3} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('ریل سیر کوثر')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo4} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('نورالرضا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo5} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('بن ریل')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo6} />
                                          </div>

                                        )
                                      } else {
                                        return null
                                      }
                                    })()}

                                    <span className='text-secondary mt-4'><h5>{item.railCompany} </h5> </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}>{item.capacity <= 0 ? <span className='text-danger'>ظرفیت تکمیل</span> : <> {item.capacity}صندلی </>}  </span>
                                    <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

                                  </div>
                                </div>
                                <div className={styles.contentItem}>
                                  <div>
                                    <span className={styles.fontCss}>{item.originName}</span>
                                    <span className={styles.clockcss}> {item.departureTime}</span>
                                  </div>
                                  <div><i className=' fa fa-train' /></div>
                                  <div>
                                    <span className={styles.fontCss}>{item.destinationName}</span>
                                    <span className={styles.clockcss}> {item.arrivalTime}</span>
                                  </div>
                                </div>
                                <div className={styles.contentItem1}>
                                  <div>
                                    <span>  {item.railwayOrigin}</span>
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
                                    <span>{item.railwayDestination}</span>
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
                                  {item.capacity <= 0
                                    ? <button
                                        className='btn btn-lg  rounded-3  my-2'
                                        style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                      > انتخاب
                                    </button>
                                    : <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>}
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else if (showSellData.length !== 0 && showSellData1.length === 0) {
                      return (
                        <div className='App'>

                          {showSellData.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div className='d-flex flex-row flex-wrap '>
                                    {(() => {
                                      if (item.railCompany.includes('رجا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo1} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('فدک')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo2} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('ریل ترابر سبا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo3} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('ریل سیر کوثر')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo4} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('نورالرضا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo5} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('بن ریل')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo6} />
                                          </div>

                                        )
                                      } else {
                                        return null
                                      }
                                    })()}
                                    <span className='text-secondary mt-4'><h5>{item.railCompany} </h5> </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}>{item.capacity <= 0 ? <span className='text-danger'>ظرفیت تکمیل</span> : <> {item.capacity}صندلی </>}  </span>
                                    <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

                                  </div>
                                </div>
                                <div className={styles.contentItem}>
                                  <div>
                                    <span className={styles.fontCss}>{item.originName}</span>
                                    <span className={styles.clockcss}> {item.departureTime}</span>
                                  </div>
                                  <div><i className=' fa fa-train' /></div>
                                  <div>
                                    <span className={styles.fontCss}>{item.destinationName}</span>
                                    <span className={styles.clockcss}> {item.arrivalTime}</span>
                                  </div>
                                </div>
                                <div className={styles.contentItem1}>
                                  <div>
                                    <span>  {item.railwayOrigin}</span>
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
                                    <span>{item.railwayDestination}</span>
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
                                  {item.capacity <= 0
                                    ? <button
                                        className='btn btn-lg  rounded-3  my-2'
                                        style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                      > انتخاب
                                    </button>
                                    : <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>}
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else if (showSellData.length === 0 && showSellData1.length !== 0) {
                      return (
                        <div className='App'>

                          {showSellData1.map((item, index) => {
                            return (
                              <div className={styles.content} key={index}>
                                <div className={styles.contentItem}>
                                  <div className='d-flex flex-row flex-wrap '>
                                    {(() => {
                                      if (item.railCompany.includes('رجا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo1} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('فدک')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo2} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('ریل ترابر سبا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo3} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('ریل سیر کوثر')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo4} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('نورالرضا')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo5} />
                                          </div>

                                        )
                                      } else if (item.railCompany.includes('بن ریل')) {
                                        return (
                                          <div>
                                            <img className={styles.imgCss} src={logo6} />
                                          </div>

                                        )
                                      } else {
                                        return null
                                      }
                                    })()}
                                    <span className='text-secondary mt-4'><h5>{item.railCompany} </h5> </span>

                                  </div>
                                  <div className={styles.chaircss}>
                                    <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> {item.capacity <= 0 ? <span className='text-danger'>ظرفیت تکمیل</span> : <> {item.capacity}صندلی </>} </span>
                                    <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

                                  </div>
                                </div>
                                <div className={styles.contentItem}>
                                  <div>
                                    <span className={styles.fontCss}>{item.originName}</span>
                                    <span className={styles.clockcss}> {item.departureTime}</span>
                                  </div>
                                  <div><i className=' fa fa-train' /></div>
                                  <div>
                                    <span className={styles.fontCss}>{item.destinationName}</span>
                                    <span className={styles.clockcss}> {item.arrivalTime}</span>
                                  </div>
                                </div>
                                <div className={styles.contentItem1}>
                                  <div>
                                    <span>  {item.railwayOrigin}</span>
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
                                    <span>{item.railwayDestination}</span>
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
                                  {item.capacity <= 0
                                    ? <button
                                        className='btn btn-lg  rounded-3  my-2'
                        // className='mt-2  rounded-3 px-4 mx-2 py-2'
                                        style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}
                                      > انتخاب
                                    </button>
                                    : <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>}
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

export default TrainResult

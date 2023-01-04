import React, { useState, useCallback, useEffect } from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import img from '../../../assets/img/need/5.JPG'
import styles1 from '../../../assets/styles/AirplaneList.module.css'
import { FcSalesPerformance } from 'react-icons/fc'
import { useQuery } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'

import Filter from './Filter'
import NotFound from './NotFound'
import Header from './Header'
import PriceTable from '../hotel/PriceTable'

const HotelResult = () => {
  // STATES
  const [showPriceTableModal, setShowPriceTableModal] = useState(false)
  const [showHotelInfo, setShowHotelInfo] = useState([])
  const [showStarData, setShowStarData] = useState([])
  const [showPriceData, setShowPriceData] = useState([])
  const [clickedItem, setClickedItem] = useState(false)
  const [filteredTicketsDate, setFilteredTicketsDate] = useState([])

  const city = window.localStorage.getItem('HotelName').replace(/"/g, '')
  // const cityName=window.localStorage.getItem('HotelCity')
  const startDate = window.localStorage.getItem('HotelStartDate').replace(/"/g, '')
  const endDate = window.localStorage.getItem('HotelEndDate').replace(/"/g, '')
console.log(city)
  // THIS FUNCTIONS IS FOR GET DATA FROM CHILD
  const handleStarData = useCallback((star) => {
    setShowStarData(star)
  }, [])
  const handlePriceData = useCallback((price) => {
    setShowPriceData(price)
  }, [])
  // APOLLO QUERY
  useQuery(hotelQueries.SEARCHHOTEL, {
    variables: {
      city: city,
      startDate: startDate.toString(),
      endDate: endDate.toString()
    },

    onCompleted: (res) => {
      setShowHotelInfo(res.searchHotel)
    },
    onError: () => {
      setShowHotelInfo([])
    }
  })
  const daynum = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const currentDate = '۱۴۰۱' + '/' + daynum + '/' + month
  const newDate = currentDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  useEffect(() => {
    setFilteredTicketsDate(
      showHotelInfo.filter((item) =>
        item.startDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)) >= newDate && item.capacity > 0
      )
    )
  }, [showHotelInfo])
  useEffect(() => {
    window.localStorage.setItem('HID', JSON.stringify(clickedItem))
  }, [clickedItem])
  // COMPARE FUNCTION
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
      setShowHotelInfo([...filteredTicketsDate])
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
      setShowHotelInfo([...current])
    } else {
      setShowHotelInfo([...filteredTicketsDate])
    }
  }

  // FUNCTION FOR GO ANOTHER PAGE
  const handleNameChange = (e) => {
    window.location.href = '/infohotel'
  }

  return (
    <>
      <div className={styles1.headerCss}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.filterDiv}>
          <Filter
            filterItem={filteredTicketsDate}
            filterPrice={handlePriceData}
            filterStar={handleStarData}
          />
        </div>
        <div className={styles.airCss}>
          <>
            {filteredTicketsDate.length === 0
              ? <NotFound
                  info={showStarData}
                  info1={showPriceData}
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
                      priceInfo={showPriceData}
                      starInfo={showStarData}
                    />
                  )}
                  <button type='button' className='w-25 py-2 px-0 btn btn-outline-primary rounded-3' value='high' onClick={(e) => handleChange(e.target.value)}>
                    ارزان‌ترین قیمت
                  </button>
                </div>
                <div className='d-flex flex-column '>
                  {(() => {
                    if (showPriceData.length === 0 && showStarData.length === 0) {
                      return (
                        <div>
                          {filteredTicketsDate.map((item, index) => {
                            return (

                              <div key={index} className='d-fkex flex-column w-100 '>

                                <div className={styles1.content1}>
                                  <div className={styles1.contentItem2}>
                                    <div className={styles1.divCss}>
                                      <img src={img} style={{ width: '100%', height: '95%', borderRadius: '12px', margin: '12px 0px 10px 0px' }} />
                                    </div>
                                    <div className='d-flex flex-column w-50 px-4  ' style={{ width: '60%' }}>
                                      <div className='mt-2 ' style={{ fontSize: '25px' }}>  {item.name}</div>
                                      {(() => {
                                        const rows = []

                                        for (let i = 0; i < item.star; i++) {
                                          rows.push(

                                            <i key={i} className='fa fa-star fa-lg  text-warning' />

                                          )
                                        }
                                        return (
                                          <div className='mt-2  d-flex flex-row'>
                                            {rows}

                                          </div>
                                        )
                                      })()}

                                      <div className='mt-2 text-secondary' style={{ fontSize: '14px' }}>
                                        شروع قیمت برای یک شب
                                      </div>
                                      <span className='mt-2  text-danger' style={{ fontSize: '22px' }}> {item.price}</span>
                                      <div className='d-flex flex-row    justify-content-between'>
                                        <span style={{ fontFamily: 'Vazir' }} className={styles1.addresCss}><i className='fa fa-map-marker px-2 mt-3' />
                                          {item.address}
                                        </span>
                                        <button
                                          onClick={() => {
                                            handleNameChange(setClickedItem(item._id))
                                            setClickedItem(item._id)
                                          }}
                                          className='btn btn-lg    btn-danger rounded-3  mt-0'
                                        >
                                          جزییات

                                        </button>

                                      </div>

                                    </div>

                                  </div>
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else if (showPriceData.length !== 0 && showStarData.length === 0) {
                      return (
                        <div>
                          {showPriceData.map((item, index) => {
                            return (

                              <div key={index} className='d-fkex flex-column w-100 '>

                                <div className={styles1.content1}>
                                  <div className={styles1.contentItem2}>
                                    <div className={styles1.divCss}>
                                      <img src={img} style={{ width: '100%', height: '95%', borderRadius: '12px', margin: '12px 0px 10px 0px' }} />
                                    </div>
                                    <div className='d-flex flex-column w-50 px-4  ' style={{ width: '60%' }}>
                                      <div className='mt-2 ' style={{ fontSize: '25px' }}>  {item.name}</div>
                                      {(() => {
                                        const rows = []

                                        for (let i = 0; i < item.star; i++) {
                                          rows.push(

                                            <i key={i} className='fa fa-star fa-lg  text-warning' />

                                          )
                                        }
                                        return (
                                          <div className='mt-2  d-flex flex-row'>
                                            {rows}

                                          </div>
                                        )
                                      })()}

                                      <div className='mt-2 text-secondary' style={{ fontSize: '14px' }}>
                                        شروع قیمت برای یک شب
                                      </div>
                                      <span className='mt-2  text-danger' style={{ fontSize: '22px' }}> {item.price}</span>
                                      <div className='d-flex flex-row    justify-content-between'>
                                        <span className={styles1.addresCss}><i className='fa fa-map-marker px-2 mt-3' />
                                          {item.address}
                                        </span>
                                        <button
                                          onClick={() => {
                                            handleNameChange()
                                            setClickedItem(item._id)
                                          }}
                                          className='btn btn-lg    btn-danger rounded-3  mt-0'
                                        >
                                          جزییات

                                        </button>

                                      </div>

                                    </div>

                                  </div>
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      )
                    } else if (showPriceData.length === 0 && showStarData.length !== 0) {
                      return (
                        <div>
                          {showStarData.map((item, index) => {
                            return (

                              <div key={index} className='d-fkex flex-column w-100 '>

                                <div className={styles1.content1}>
                                  <div className={styles1.contentItem2}>
                                    <div className={styles1.divCss}>
                                      <img src={img} style={{ width: '100%', height: '95%', borderRadius: '12px', margin: '12px 0px 10px 0px' }} />
                                    </div>
                                    <div className='d-flex flex-column w-50 px-4  ' style={{ width: '60%' }}>
                                      <div className='mt-2 ' style={{ fontSize: '25px' }}>  {item.name}</div>
                                      {(() => {
                                        const rows = []

                                        for (let i = 0; i < item.star; i++) {
                                          rows.push(

                                            <i key={i} className='fa fa-star fa-lg  text-warning' />

                                          )
                                        }
                                        return (
                                          <div className='mt-2  d-flex flex-row'>
                                            {rows}

                                          </div>
                                        )
                                      })()}

                                      <div className='mt-2 text-secondary' style={{ fontSize: '14px' }}>
                                        شروع قیمت برای یک شب
                                      </div>
                                      <span className='mt-2  text-danger' style={{ fontSize: '22px' }}> {item.price}</span>
                                      <div className='d-flex flex-row    justify-content-between'>
                                        <span className={styles1.addresCss}><i className='fa fa-map-marker px-2 mt-3' />
                                          {item.address}
                                        </span>
                                        <button
                                          onClick={() => {
                                            handleNameChange()
                                            setClickedItem(item._id)
                                          }}
                                          className='btn btn-lg    btn-danger rounded-3  mt-0'
                                        >
                                          جزییات

                                        </button>

                                      </div>

                                    </div>

                                  </div>
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
                            info={showStarData}
                            info1={showPriceData}
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

export default HotelResult

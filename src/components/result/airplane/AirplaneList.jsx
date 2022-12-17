
import React, { useState, useEffect } from 'react'
import img from '../../../assets/img/logo1.JPG'
import styles from '../../../assets/styles/AirplaneList.module.css'
import PriceTable from '../airplane/PriceTable'
import { FcSalesPerformance } from 'react-icons/fc'

import Info from './Info'
import NotFound from './NotFound'

import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'

const AirplaneList = (props) => {
  const [showPriceTableModal, setShowPriceTableModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [airplaneItem, setAirplaneItem] = useState([])
  const [airplaneItem1, setAirplaneItem1] = useState([])
  const [selectedYear, setSelectedYear] = useState()
  const filterByYear = (filteredData) => {
    // Avoid filter for null value
    if (!selectedYear) {
      return filteredData
    }

    const filteredCars = airplaneItem.filter(
      (item) => item.price === selectedYear
    )
    return filteredCars
  }
  // Toggle seletedYear state
  const handleYearChange = (event) => {
    const inputYear = Number(event.target.id)

    if (inputYear === selectedYear) {
      setSelectedYear('')
    } else {
      setSelectedYear(inputYear)
    }
  }
  useEffect(() => {
    const filteredData = filterByYear(filteredData)
    setAirplaneItem(filteredData)
  }, [selectedYear])

  const [clickedItem, setClickedItem] = useState(false)

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

  //  console.log(newArr,'snk')

  const handleCreateAlert = (e) => {
    const newArr = airplaneItem.map((item) => {
      return item.price
    })
    const okk = newArr.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }

  // console.log(okk,'klklklklk')

  const numAscending = [...airplaneItem].sort((a, b) => a.price - b.price)
  console.log(numAscending, 'lllppppp')

  return (

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
          </div>

          <div className='d-flex flex-column '>

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
          </>}
    </>
  )
}

export default AirplaneList

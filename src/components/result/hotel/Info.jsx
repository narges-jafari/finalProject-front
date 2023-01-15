import React, { useState, useEffect } from 'react'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { useQuery } from '@apollo/client'
import roomQueries from '../../../Apollo/Query/roomQueries'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
import img from '../../../assets/img/bg/hotel.JPG'
import RoomInfo from './RoomInfo'

const Info = (props) => {
  // STATES
  const [hotelData, setHotelData] = useState([])
  const [hotelRoomData, setHotelRoomData] = useState([])
  const [roomInfoModal, setRoomInfoModal] = useState()
  const [clickedItem, setClickedItem] = useState([])
  const [clickedRoom, setClickedRoom] = useState(false)
  const [filterData, setFilterData] = useState()

  const roomid = window.localStorage.getItem('HID').replace(/"/g, '')
  const passenger = window.localStorage.getItem('Passenger').replace(/"/g, '')
  const room = window.localStorage.getItem('Room').replace(/"/g, '')
  // APOLLO QUERY
  useQuery(roomQueries.SEARCHROOMBYHOTELID, {
    variables: {
      hotel: roomid
    },

    onCompleted: (res) => {
      setHotelRoomData(res.searchRoomByHotelId)
    },
    onError: () => {
      setHotelRoomData([])
    }
  })
  useQuery(hotelQueries.SEARCHHOTELBYID, {
    variables: {
      id: roomid
    },

    onCompleted: (res) => {
      setHotelData(res.searchHotelById)
    },
    onError: () => {
      setHotelData([])
    }
  })

  useEffect(() => {
    window.localStorage.setItem('ID', JSON.stringify(clickedItem))
  }, [clickedItem])
  console.log(clickedItem, 'click')

  const result =
    hotelRoomData.filter((item) =>
      item.isDelete === false
    )

  // FUNCTION FOR GO ANOTHER PAGE
  const handleNameChange = (e) => {
    window.location.href = '/hotelpay'
    // setClickedRoom(clickedItem)
  }
  // console.log( setClickedRoom(clickedItem),'llllllllllll')

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
      setHotelRoomData([...result])
    } else if (value) {
      let toType, toAscending
      switch (value) {
        case 'ascending' : toType = true; toAscending = true; break
        case 'descending' : toType = true; toAscending = false; break
        case 'high' : toType = false; toAscending = true; break
        case 'low' : toType = false; toAscending = false; break
      }
      const current = [...result]
      current.sort((a, b) => toType
        ? compare(a.price, b.price, toAscending)
        : compare(a.price, b.price, toAscending))
      setHotelRoomData([...current])
    } else {
      setHotelRoomData([...result])
    }
  }

  return (

    <>
      <div className='d-flex flex-column'>
        <div style={{ width: '60%', margin: '10px auto' }}>
          <span className={styles.headerCsshotel}>
            اطلاعات کلی
          </span>
        </div>
        <div className={styles.contenttrain}>
          <div className={styles.contenthotel1}>
            <span className={styles.titleCss}> هتل {hotelData.name}  </span>
            {(() => {
              const rows = []

              for (let i = 0; i < hotelData.star; i++) {
                rows.push(

                  <i key={i} className='fa fa-star fa-lg  text-warning' />

                )
              }
              return (
                <div className='my-2 px-4 d-flex flex-row'>
                  {rows}

                </div>
              )
            })()}

            <span style={{ fontFamily: 'Vazir' }} className='px-4'><i className='fa fa-map-marker  my-1' />
              {(() => {
                const en2faDigits = s => s.replace(/[0-9]/g, w => String.fromCharCode(w.charCodeAt(0) + 1728))
                if (hotelData.address) {
                  return (
                    en2faDigits(hotelData.address)
                  )
                }
              })()}
            </span>

            {(() => {
              if (hotelData.startDate) {
                const Num = hotelData.startDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                const dayOfWeekName = new Date(Num).toLocaleString(
                  'fa-IR', { weekday: 'long' })
                const day = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })
                const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
                  'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
                ]

                const month1 = new Date(Num)
                const monthName = monthNames[month1.getMonth()]
                const Num1 = hotelData.endDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                const dayOfWeekName1 = new Date(Num1).toLocaleString(
                  'fa-IR', { weekday: 'long' })
                const day1 = new Date(Num1).getDate().toLocaleString('fa-IR', { day: '2-digit' })

                const month2 = new Date(Num1)
                const monthName1 = monthNames[month2.getMonth()]
                return (

                  <div className='d-flex flex-row flex-wrap '>

                    <span className='px-4'>

                      از {dayOfWeekName + day + monthName}
                    </span>
                    <span>
                      تا {dayOfWeekName1 + day1 + monthName1}
                    </span>
                  </div>
                )
              }
            })()}

            <span className='px-4' style={{ fontFamily: 'Yekan' }}><h4>  قیمت    : {hotelData.price}</h4></span>
          </div>
          <div className={styles.imgboxcss}>
            <img className={styles.hotelimg} src={img} />
          </div>
        </div>
      </div>

      <div style={{ width: '60%', margin: '10px auto' }}>
        <span className={styles.headerCsshotel}>
          لیست اتاق‌های موجود

        </span>
        <button
          type='button'
          className='w-25 py-2 px-0 mx-4 btn btn-outline-primary rounded-3'
          value='high'
          onClick={(e) => handleChange(e.target.value)}
        >ارزان‌ترین قیمت
        </button>
      </div>
      <>
        {result.map((item, index) => {
          return (

            <div
              key={index}
              // onClick={() => {
              //   setClickedItem([item._id, hotelData._id])
              // }}
              className=' btn d-flex flex-column '
            >

              <div className={styles.contenttrain}>

                <div className={styles.contentItem}>

                  <span className={styles.fontCss11}> {item.name2 == '' ? <span> اتاق {item.name1}</span> : <span>  اتاق اول {item.name1}</span>} </span>
                  <span className={styles.fontCss11}> {item.name2 == '' ? null : <span> اتاق دوم  {item.name2}</span>} </span>

                  <div className={styles.chaircss}>
                    <span
                      onClick={() => {
                        setRoomInfoModal(true)
                        setClickedItem([item._id])
                      }}
                      className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}
                    > اطلاعات
                    </span>
                    {roomInfoModal && (
                      <RoomInfo
                        isOpen={roomInfoModal}
                        setIsOpen={setRoomInfoModal}
                        info={clickedItem}
                      />

                    )}
                  </div>
                </div>

                <div className={styles.contentIte3}>
                  <div className='d-flex flex-column'>
                    <span className='mt-1 text-center'>قیمت برای یک بزرگسال   </span>
                    <span className='text-primary mx-4' style={{ fontWeight: 'bold', fontSize: '20px' }}> {item.price} </span>

                  </div>
                  <button
                // onClick={handleNameChange}
                    onClick={() => { handleNameChange(); setClickedItem([item._id, hotelData._id]) }}
                    className='btn btn-lg btn-danger rounded-3  my-2'
                  > انتخاب
                  </button>

                </div>

              </div>

            </div>
          )
        })}
      </>

    </>

  )
}

export default Info

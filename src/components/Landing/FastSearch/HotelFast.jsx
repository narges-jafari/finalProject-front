import React, { useState, useEffect } from 'react'

import styles from '../../../assets/styles/FastSearch.module.css'
import { useQuery } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
const HotelFast = () => {
  const [data, setData] = useState([])
  const [hotelId, setHotelId] = useState(false)

  const today = new Date()
  console.log('today => ', today)
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  console.log('tomorrow => ', tomorrow, today)
  const dayOfWeekName = new Date(tomorrow).toLocaleString(
    'fa-IR', { weekday: 'long' })
  const day = new Date(tomorrow).toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date(tomorrow).toLocaleString('fa-IR', { month: '2-digit' })
  const string1 = '۱۴۰۱' + '/' + month + '/' + day
  const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ]
  const Num = string1.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

  const month1 = new Date(Num)
  const monthName = monthNames[month1.getMonth()]

  // apollo query
  useQuery(hotelQueries.SEARCHHOTELBYDATE, {
    variables: {
      startDate: string1
    },

    onCompleted: (res) => {
      setData(res.searchHotelbyDate)
    },
    onError: () => {
      setData([])
    }
  })
  const handleNameChange = (e) => {
    window.location.href = '/infofasthotel'
  }

  useEffect(() => {
    window.localStorage.setItem('HotelId', hotelId)
  }, [hotelId])


  return (
    <>
      <div className={styles.headerCss}>
        <span>
          جستجو سریع هتل
        </span>
      </div>

      <div className='d-flex flex-column   justify-content-between' style={{ margin: '10px auto', cursor: 'pointer' }}>

        <div className={styles.content}>
          {data.slice(0, 6).map((item, index) => (
            <button
              onClick={() => {
                handleNameChange(setHotelId(item._id))
                setHotelId(item._id)
              }}
              key={index}
              className={styles.contentItem}
            >
              <div className={styles.contentItem1}>
                <span>{item.name} </span>
                <i className='fa fa-hotel ' />
                <span> {item.city} </span>
              </div>
              <div className={styles.contentItem2}>
                <span>  {dayOfWeekName + day + monthName}  </span>

              </div>
              <div className={styles.contentItem3}>
                <span className='px-4'>  قیمت برای یک نفر  </span>
                <span className={styles.moneyfont}>{item.price}</span>

              </div>
            </button>

          ))}
        </div>

      </div>
    </>
  )
}

export default HotelFast

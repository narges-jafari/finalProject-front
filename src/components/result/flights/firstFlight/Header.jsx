import React from 'react'
import styles from '../../../../assets/styles/AirplaneResult.module.css'
import { IoAirplaneOutline } from 'react-icons/io5'

const Header = (props) => {
  const originName = window.localStorage.getItem('FlightOriginName').replace(/"/g, '')
  const destinationName = window.localStorage.getItem('FlightDestinationName').replace(/"/g, '')
  const flightclass = window.localStorage.getItem('FlightClass').replace(/"/g, '')
  const date = window.localStorage.getItem('FlightDate').replace(/"/g, '')
  const Num = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

  const dayOfWeekName = new Date(Num).toLocaleString(
    'fa-IR', { weekday: 'long' })
  const day = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })

  const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ]
  const month1 = new Date(Num)
  const monthName = monthNames[month1.getMonth()]

  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <span>{originName}</span>
            <span className='mx-1'>به</span>
            <span>{destinationName}</span>
          </div>
          <div className={styles.headerItem}>
            <span> {dayOfWeekName + day + monthName}  </span>

          </div>
          <div className={styles.headerItem}>
            <span>   {flightclass}  </span>

          </div>
          <div className={styles.headerItem1}>
            <a href='/'>
              <button>
                تغییر جستجو
              </button>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header

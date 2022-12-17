import React, { useState } from 'react'
import { Modal } from 'reactstrap'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import AirplanSearch from '../../Landing/Search/AirplanSearch'
import { GiCommercialAirplane } from 'react-icons/gi'

const Header = (props) => {
  const originName = window.localStorage.getItem('FlightOriginName').replace(/"/g, '')
  const destinationName = window.localStorage.getItem('FlightDestinationName').replace(/"/g, '')
  const flightclass = window.localStorage.getItem('FlightClass').replace(/"/g, '')
  const date = window.localStorage.getItem('FlightDate').replace(/"/g, '')
  const Num = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const time = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

  const dayOfWeekName = new Date(Num).toLocaleString(
    'fa-IR', { weekday: 'long' })
  console.log(dayOfWeekName)
  const day = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })
  // const time= new Date(Num).getTime().toLocaleString('fa-IR',{day:'2-digit'})

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
            <GiCommercialAirplane className={styles.iconcss} />
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

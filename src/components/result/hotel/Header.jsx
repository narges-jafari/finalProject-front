import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'

const Header = () => {
  const city = window.localStorage.getItem('HotelName').replace(/"/g, '')
  const startDate = window.localStorage.getItem('HotelStartDate').replace(/"/g, '')
  const endDate = window.localStorage.getItem('HotelEndDate').replace(/"/g, '')
  const Num = startDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const Num1 = endDate.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

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
  const dayOfWeekName1 = new Date(Num1).toLocaleString(
    'fa-IR', { weekday: 'long' })
  const day1 = new Date(Num1).getDate().toLocaleString('fa-IR', { day: '2-digit' })

  const month2 = new Date(Num1)
  const monthName1 = monthNames[month2.getMonth()]

  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <span>{city}</span>

          </div>
          <div className={styles.headerItem}>
            <span className='mx-1'> از {dayOfWeekName + day + monthName} </span>
            <span className='mx-1'>   تا {dayOfWeekName1 + day1 + monthName1}  </span>

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

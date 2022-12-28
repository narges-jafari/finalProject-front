import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'

const Header = (props) => {
  const city = window.localStorage.getItem('HotelCityName').replace(/"/g, '')

  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <span>  تمام هتل‌های  :{city}</span>
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

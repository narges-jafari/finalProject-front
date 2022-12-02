import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import HotelList from './HotelList'
// import Filter from './Filter.jsx'
import Filter from './Filter'
import { FcHome } from 'react-icons/fc'

const HotelResult = () => {
  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <FcHome className='mx-2' />
            <span>تهران</span>
          </div>
          <div className={styles.headerItem}>
            <span>چهارشنبه 17 شهریور </span>

          </div>
          <div className={styles.headerItem}>
            <span>جمعه 19 شهریور </span>

          </div>
          <div className={styles.headerItem}>
            <span>   1 مسافر </span>

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
      <div className={styles.content}>
        <div className={styles.filterDiv}><Filter /></div>
        <div className={styles.airCss}> <HotelList />
        </div>

      </div>

    </>
  )
}

export default HotelResult

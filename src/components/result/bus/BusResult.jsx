import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import BusList from './BusList'
// import Filter from './Filter.jsx'
import Filter from './Filter'
import Question from './Question'
import { GiBus } from 'react-icons/gi'

const BusResult = () => {
  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <span>تهران</span>
            <GiBus className={styles.iconcss1} />
            <span>مشهد</span>
          </div>
          <div className={styles.headerItem}>
            <span>چهارشنبه 17 شهریور </span>

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
        <div className={styles.airCss}> <BusList />
        </div>

      </div>

    </>
  )
}

export default BusResult

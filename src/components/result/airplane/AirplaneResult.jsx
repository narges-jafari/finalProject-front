import React, { useState } from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import AirplaneList from './AirplaneList'
import Filter from './Filter'
import { GiCommercialAirplane } from 'react-icons/gi'

const AirplaneResult = () => {
  const [showEdit, setShowEdit] = useState('')
  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <span>تهران</span>
            <GiCommercialAirplane className={styles.iconcss} />
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
        <div className={styles.airCss}> <AirplaneList />
        </div>

      </div>

    </>
  )
}

export default AirplaneResult

import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import AirplaneList from './AirplaneList'
import Filter from './Filter'

const AirplaneResult = () => {
  return (
    <>
      <div className={styles.headerCss}>
        <span className='mx-3'>بلیط هواپیما تهران به مشهد</span>
        <span className='mx-3'>تاریخ رفت:1مهر</span>

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

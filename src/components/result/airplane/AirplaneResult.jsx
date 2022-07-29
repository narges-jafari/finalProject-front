import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import AirplaneList from './AirplaneList'
// import Filter from './Filter.jsx'
import Filter from './Filter'
import Question from './Question'

const AirplaneResult = () => {
  return (
    <>
      <div className={styles.headerCss}>
        <span className='mx-3'>بلیط هواپیما تهران به مشهد</span>
        <span className='mx-3'>تاریخ رفت:1مهر</span>
        <span className='mx-3'>تاریخ برگشت:4مهر</span>

      </div>
      <div className={styles.content}>
        <div className={styles.filterDiv}><Filter /></div>
        <div className={styles.airCss}> <AirplaneList />
        </div>

      </div>
      <div className={styles.accordion}>
        <Question />
      </div>

    </>
  )
}

export default AirplaneResult

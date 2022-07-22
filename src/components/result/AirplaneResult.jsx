import React, { useState } from 'react'
// import classnames from 'classnames'
// import AirplaneContent from '../airplane/AirplaneContent.jsx'
// import BusContent from '../bus/BusContent.jsx'
// import TrainContent from '../train/TrainContent.jsx'
// import { FaBusAlt, FaSubway, FaPlane } from 'react-icons/fa'
import styles from '../../assets/styles/AirplaneResult.module.css'
import AirplaneList from './AirplaneList'
import Filter from './Filter.jsx'

const AirplaneResult = () => {


  return (
    <>
    <div className={styles.headerCss}>
  <span>بلیط هواپیما تهران به مشهد</span>
  <span>تاریخ رفت:1مهر</span>
  <span>تاریخ برگشت:4مهر</span>

  
 </div>
 <div className={styles.content}>
  <div className={styles.filterDiv}> <Filter/></div>
  <div className={styles.airCss}> <AirplaneList/>
</div>

 </div>
 {/* <div className={styles.bodyCss}>

 <div>nnnnnn</div>

 </div> */}



    </>
  )
}

export default AirplaneResult

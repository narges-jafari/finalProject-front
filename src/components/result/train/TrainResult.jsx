import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'
import TrainList from './TrainList'
// import Filter from './Filter.jsx'
import Filter from './Filter'
import { GiSubway } from "react-icons/gi";


const TrainResult = () => {
  return (
    <>
       <div className={styles.headerCss}>
        <div className={styles.header}>
     <div className={styles.headerItem}>
      <span>تهران</span>
      <GiSubway className={styles.iconcss1}/>
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
        <div className={styles.airCss}> <TrainList />
        </div>

      </div>

    </>
  )
}

export default TrainResult


import React from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import { FcDoNotMix,FcSalesPerformance,FcMultipleInputs } from "react-icons/fc";
const AllResult=(props)=>{

    const allTrain=props.AllTrain.reduce((a,v) =>  a = a + v.capacity , 0 )

    //counter function
    function statusCounter (inputs) {
      let counter = 0
      for (const input of inputs) {
        if (input._id !== null) counter += 1
      }
      return counter
    }

    return(
        <>
        <div className={styles.showAllCss}>
            <div className={styles.showAllCssItem}>
                <div className={styles.showAllCssItem1}>
                    <FcMultipleInputs size={36}/>
                </div>
                <div className={styles.showAllCssItem1}>
                    <span> کل بلیط </span>
                    <span>{allTrain}</span>
                </div>
            </div>
            <div className={styles.showAllCssItem}>
                <div className={styles.showAllCssItem1}>
                    <FcSalesPerformance  size={36}/>
                </div>
                <div className={styles.showAllCssItem1}>
                    <span>فروخته شده </span>
                    <span>{statusCounter(props.AllData)}</span>
                </div>
            </div>
            <div className={styles.showAllCssItem}>
                <div className={styles.showAllCssItem1}>
                <FcDoNotMix  size={36}/>
                </div>
                <div className={styles.showAllCssItem1}>
                    <span> فروخته نشده  </span>
                    <span>{allTrain-statusCounter(props.AllData)}</span>
                </div>
            </div>
        </div>
        </>
    )

}
export default AllResult
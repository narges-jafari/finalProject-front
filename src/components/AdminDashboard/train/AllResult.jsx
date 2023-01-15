
import React, { useState, useCallback } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import { FcDoNotMix,FcSalesPerformance,FcMultipleInputs } from "react-icons/fc";
const AllResult=()=>{

    return(
        <>
        <div className={styles.showAllCss}>
            <div className={styles.showAllCssItem}>
                <div className={styles.showAllCssItem1}>
                    <FcMultipleInputs size={36}/>
                </div>
                <div className={styles.showAllCssItem1}>
                    <span> کل بلیط </span>
                    <span>330</span>
                </div>
            </div>
            <div className={styles.showAllCssItem}>
                <div className={styles.showAllCssItem1}>
                    <FcSalesPerformance  size={36}/>
                </div>
                <div className={styles.showAllCssItem1}>
                    <span>فروخته شده </span>
                    <span>230</span>
                </div>
            </div>
            <div className={styles.showAllCssItem}>
                <div className={styles.showAllCssItem1}>
                <FcDoNotMix  size={36}/>
                </div>
                <div className={styles.showAllCssItem1}>
                    <span> فروخته نشده  </span>
                    <span>100</span>
                </div>
            </div>
        </div>
        </>
    )

}
export default AllResult
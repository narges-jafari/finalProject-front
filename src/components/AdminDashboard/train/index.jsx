
import React, { useState, useCallback } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import AllResult from './AllResult'
import BestAirplane from './BestAirplane'
import DoughnutChart from './DoughnutChart'

const ShowAllResult=()=>{

    return(
        <>
     <div className={styles.allContentCss}>
        <div>
            <AllResult/>
        </div>
        <div>
                <BestAirplane/>
        </div>
        <div>
                <DoughnutChart/>
        </div>
        <div></div>
     </div>
        </>
    )

}
export default ShowAllResult
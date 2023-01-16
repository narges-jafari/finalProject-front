
import React, { useState, useCallback } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import BestHotel from './BestHotel'

const ShowAllResult=()=>{

    return(
        <>
     <div className={styles.allContentCss}>
      
        <div>
                <BestHotel/>
        </div>
     
     </div>
        </>
    )

}
export default ShowAllResult
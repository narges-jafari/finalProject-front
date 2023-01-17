
import React, { useState } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import AllResult from './AllResult'
import BestBus from './BestBus'
import { useQuery } from '@apollo/client'
import busQueries from '../../../Apollo/Query/busQueries'

const ShowAllResult=()=>{
     //states
    const [busData,setBusData]=useState([])
    const [busTicket,setBusTicket]=useState([])
//apollo query
    useQuery(busQueries.SEARCHALLBUSTICKET, {
   

        onCompleted: (res) => {
          setBusData(res.searchAllBusTicke)
        },
        onError: () => {
            setBusData([])
        }
      })

      useQuery(busQueries.GETALLBUS, {
   

        onCompleted: (res) => {
            setBusTicket(res.buses)
        },
        onError: () => {
            setBusTicket([])
        }
      })
    const busName=busData.filter(item=>item.busBuy.bus.busCompany===   'آسوده سفر ترمینال غرب')
    const busName1=busData.filter(item=>item.busBuy.bus.busCompany===   'تک سفر ایرانیان')
    const busName2=busData.filter(item=>item.busBuy.bus.busCompany===  'آسیا سفر')
    const busName3=busData.filter(item=>item.busBuy.bus.busCompany===  'تعاونی 17 پیک صبا')
    const busName4=busData.filter(item=>item.busBuy.bus.busCompany===  'تعاونی 1 ایران پیما')
    const busName5=busData.filter(item=>item.busBuy.bus.busCompany===   'مارال سیر')
    const busName6=busData.filter(item=>item.busBuy.bus.busCompany===  'میهن نور')
 

    return(
        <>
     <div className={styles.allContentCss}>
        <div>
            <AllResult
               AllData={busData}
               AllBus={busTicket}
            
            />
        </div>
        <div>
                <BestBus

AllData={busData}
busName={busName}
busName1={busName1}
busName2={busName2}
busName3={busName3}
busName4={busName4}
busName5={busName5}
busName6={busName6}  
                
                />
        </div>
     
     </div>
        </>
    )

}
export default ShowAllResult
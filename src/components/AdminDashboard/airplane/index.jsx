
import React, { useState, useCallback } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import AllResult from './AllResult'
import BestAirplane from './BestAirplane'
import DoughnutChart from './DoughnutChart'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'


const ShowAllResult=()=>{
    const [flightData,setFlightData]=useState([])
    const [flightTicket,setFlightTicket]=useState([])

    useQuery(flightQueries.SEARCHALLFLIGHTTICKET, {
   

        onCompleted: (res) => {
          setFlightData(res.searchAllFlightTicke)
        },
        onError: () => {
          setFlightData([])
        }
      })

      useQuery(flightQueries.GETALLFLIGHT, {
   

        onCompleted: (res) => {
            setFlightTicket(res.flights)
        },
        onError: () => {
            setFlightTicket([])
        }
      })
    const flightName=flightData.filter(item=>item.flightBuy.flight.airplaneCompany=== ' زاگرس')
    const flightName1=flightData.filter(item=>item.flightBuy.flight.airplaneCompany===  '   ایران ایر تور')
    const flightName2=flightData.filter(item=>item.flightBuy.flight.airplaneCompany=== '  آسمان')
    const flightName3=flightData.filter(item=>item.flightBuy.flight.airplaneCompany=== ' تابان')
    const flightName4=flightData.filter(item=>item.flightBuy.flight.airplaneCompany=== ' کاسپین  ')
    const flightName5=flightData.filter(item=>item.flightBuy.flight.airplaneCompany===  ' کیش  ')

    return(
        <>
     <div className={styles.allContentCss}>
        <div>
            <AllResult
               AllData={flightData}
               AllFlight={flightTicket}
            />
        </div>
        <div>
                <BestAirplane 
                  AllData={flightData}
                  flightName={flightName}
                  flightName1={flightName1}
                  flightName2={flightName2}
                  flightName3={flightName3}
                  flightName4={flightName4}
                  flightName5={flightName5}   
                />
        </div>
        <div>
                <DoughnutChart
                  AllData={flightData}
                  flightName={flightName}
                  flightName1={flightName1}
                  flightName2={flightName2}
                  flightName3={flightName3}
                  flightName4={flightName4}
                  flightName5={flightName5}  
                />
        </div>
        <div></div>
     </div>
        </>
    )

}
export default ShowAllResult
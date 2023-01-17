
import React, { useState } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import AllResult from './AllResult'
import BestTrain from './BestTrain'
import DoughnutChart from './DoughnutChart'
import { useQuery } from '@apollo/client'
import trainQueries from '../../../Apollo/Query/trainQueries'

const ShowAllResult=()=>{
   //states
    const [trainData,setTrainData]=useState([])
    const [trainTicket,setTrainTicket]=useState([])
   //apollo query
    useQuery(trainQueries.SEARCHALLTRAINTICKET, {
   

        onCompleted: (res) => {
            setTrainData(res.searchAllTrainTicke)
        },
        onError: () => {
            setTrainData([])
        }
      })

      useQuery(trainQueries.GETALLTRAIN, {
   

        onCompleted: (res) => {
            setTrainTicket(res.trains)
        },
        onError: () => {
            setTrainTicket([])
        }
      })
    const trainName=trainData.filter(item=>item.trainBuy.train.railCompany==='فدک')
    const trainName1=trainData.filter(item=>item.trainBuy.train.railCompany===    'رجا')
    const trainName2=trainData.filter(item=>item.trainBuy.train.railCompany=== 'ریل ترابر سبا')
    const trainName3=trainData.filter(item=>item.trainBuy.train.railCompany===  'نورالرضا')
    const trainName4=trainData.filter(item=>item.trainBuy.train.railCompany===  'بن ریل')
    const trainName5=trainData.filter(item=>item.trainBuy.train.railCompany===   'ریل سیر کوثر')

    return(
        <>
     <div className={styles.allContentCss}>
        <div>
            <AllResult
              AllData={trainData}
              AllTrain={trainTicket}
            />
        </div>
        <div>
                <BestTrain
                       AllData={trainData}
                       trainName={trainName}
                       trainName1={trainName1}
                       trainName2={trainName2}
                       trainName3={trainName3}
                       trainName4={trainName4}
                       trainName5={trainName5} 
                />
        </div>
        <div>
                <DoughnutChart
                  AllData={trainData}
                  trainName={trainName}
                  trainName1={trainName1}
                  trainName2={trainName2}
                  trainName3={trainName3}
                  trainName4={trainName4}
                  trainName5={trainName5} 
                />
        </div>
        <div></div>
     </div>
        </>
    )

}
export default ShowAllResult
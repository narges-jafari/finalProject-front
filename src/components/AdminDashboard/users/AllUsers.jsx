
import React, { useState, useCallback } from 'react'
import styles from '../../../assets/styles/Dashboard.module.css'
import { FcDoNotMix,FcSalesPerformance,FcMultipleInputs } from "react-icons/fc";
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import trainQueries from '../../../Apollo/Query/trainQueries'
import busQueries from '../../../Apollo/Query/busQueries'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
import userQueries from '../../../Apollo/Query/userQueries'



import { Line } from "react-chartjs-2";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
    );





const AllUsers=()=>{

  //states
  const [busData,setBusData]=useState([])
  const [trainData,setTrainData]=useState([])
  const [flightData,setFlightData]=useState([])
  const [hotelData,setHotelData]=useState([])
  const [userData,setUserData]=useState([])

//apollo query
  useQuery(busQueries.SEARCHALLBUSTICKET, {
   

    onCompleted: (res) => {
      setBusData(res.searchAllBusTicke)
    },
    onError: () => {
      setBusData([])
    }
  })
  useQuery(hotelQueries.SEARCHALLHOTELTICKET, {
   

    onCompleted: (res) => {
      setHotelData(res.searchAllHotelTicke)
    },
    onError: () => {
      setHotelData([])
    }
  })
  useQuery(flightQueries.SEARCHALLFLIGHTTICKET, {
   

    onCompleted: (res) => {
      setFlightData(res.searchAllFlightTicke)
    },
    onError: () => {
      setFlightData([])
    }
  })
  useQuery(trainQueries.SEARCHALLTRAINTICKET, {
   

    onCompleted: (res) => {
      setTrainData(res.searchAllTrainTicke)
    },
    onError: () => {
      setTrainData([])
    }
  })

  useQuery(userQueries.GETALLUSERS, {
   

    onCompleted: (res) => {
      setUserData(res.users)
    },
    onError: () => {
      setUserData([])
    }
  })

    const query = '/۰۷/'
    const query1 = '/۰۸/'
    const query2 = '/۰۹/'
    const query3 = '/۱۰/'
    const query4 = '/۱۱/'

    
    const result = busData.map(item => item.date .includes(query))  
    const filter=result.filter(item=>item===true)
    const result1 = busData.map(item => item.date .includes(query1))  
    const filter1=result1.filter(item=>item===true)
    const result2 = busData.map(item => item.date .includes(query2))  
    const filter2=result2.filter(item=>item===true)

    const result3 = busData.map(item => item.date .includes(query3)) 
    const filter3=result3.filter(item=>item===true)
 
    const result4 = busData.map(item => item.date .includes(query4)) 
    const filter4=result4.filter(item=>item===true)

    const resultTrain = trainData.map(item => item.date .includes(query))  
    const filterTrain=resultTrain.filter(item=>item===true)
    const resultTrain1 = trainData.map(item => item.date .includes(query1))  
    const filterTrain1=resultTrain1.filter(item=>item===true)
    const resultTrain2 = trainData.map(item => item.date .includes(query2))  
    const filterTrain2=resultTrain2.filter(item=>item===true)

    const resultTrain3 = trainData.map(item => item.date .includes(query3)) 
    const filterTrain3=resultTrain3.filter(item=>item===true)
 
    const resultTrain4 = trainData.map(item => item.date .includes(query4)) 
    const filterTrain4=resultTrain4.filter(item=>item===true)


    const resultFlight = flightData.map(item => item.date .includes(query))  
    const filterFlight=resultFlight.filter(item=>item===true)
    const resultFlight1 = flightData.map(item => item.date .includes(query1))  
    const filterFlight1=resultFlight1.filter(item=>item===true)
    const resultFlight2 = flightData.map(item => item.date .includes(query2))  
    const filterFlight2=resultFlight2.filter(item=>item===true)

    const resultFlight3 = flightData.map(item => item.date .includes(query3)) 
    const filterFlight3=resultFlight3.filter(item=>item===true)
 
    const resultFlight4 = flightData.map(item => item.date .includes(query4)) 
    const filterFlight4=resultFlight4.filter(item=>item===true)


    const resultHotel = hotelData.map(item => item.date .includes(query))  
    const filterHotel=resultHotel.filter(item=>item===true)
    const resultHotel1 = hotelData.map(item => item.date .includes(query1))  
    const filterHotel1=resultHotel1.filter(item=>item===true)
    const resultHote2 = hotelData.map(item => item.date .includes(query2))  
    const filterHotel2=resultHote2.filter(item=>item===true)

    const resultHote3 = hotelData.map(item => item.date .includes(query3)) 
    const filterHotel3=resultHote3.filter(item=>item===true)
 
    const resultHote4 = hotelData.map(item => item.date .includes(query4)) 
    const filterHotel4=resultHote4.filter(item=>item===true)
 
 

//counter function
    function statusCounter (inputs) {
      let counter = 0
      for (const input of inputs) {
        if (input._id !== null) counter += 1
      }
      return counter
    }

    //data for chart 
const  data = {
    labels: ["مهر", "آبان", "آذر", "دی"],
    datasets: [
      {
        label: "هتل",
        data: [statusCounter(filterHotel),statusCounter(filterHotel1),statusCounter(filterHotel2),statusCounter(filterHotel3)],
        fill: true,
        backgroundColor: "#F1C40F",
        borderColor: "#F1C40F"
      },
      {
        label: "هواپیما",
        data: [statusCounter(filterFlight),statusCounter(filterFlight1),statusCounter(filterFlight2),statusCounter(filterFlight3)],
        fill: false,
        borderColor: "#58D68D ",
        backgroundColor: "#58D68D ",

      },
      {
        label: "قطار ",
        data: [statusCounter(filterTrain),statusCounter(filterTrain1),statusCounter(filterTrain2),statusCounter(filterTrain3)],
        fill: false,
        borderColor: "red ",
        backgroundColor: "red ",

      }
      ,    {
        label: "اتوبوس",
        data: [statusCounter(filter),statusCounter(filter1),statusCounter(filter2),statusCounter(filter3)],
        fill: false,
        borderColor: "#3498DB ",
        backgroundColor:'#3498DB ',
       
      
      }
    ]
  };
  
  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
  
    }
  };
  
  const options = {
    title: {
      display: true,
      text: "Chart Title"
    },
    scales: {
        x: {
          grid: {
            display: false      
          },
          ticks: {
            font: {
                family: 'Vazir', // Your font family
            },
        },
      
        },
        y: {
          grid: {
            display: false      
          },
          ticks: {
            font: {
                family: 'Yekan', // Your font family
            },
        },
         
        }
      },
  };

    return(
        <>
        <div className={styles.showAllCss}>
            <div className={styles.userContentItem}>
                <div >
                    <FcMultipleInputs size={36}/>
                </div>
                <div className='d-flex flex-column mx-4'>
                    <span>  کاربران </span>
                    <span>{statusCounter(userData)}</span>
                </div>
            </div>
            <div className={styles.userContentItem}>
                <div >
                    <FcMultipleInputs size={36}/>
                </div>
                <div className='d-flex flex-column mx-4'>
                    <span>  وسایل حمل ونقل </span>
                    <span></span>
                </div>
            </div>
            <div className={styles.userContentItem}>
                <div >
                    <FcMultipleInputs size={36}/>
                </div>
                <div className='d-flex flex-column mx-4'>
                    <span>  هتل </span>
                    <span>40</span>
                </div>
            </div>
        </div>
        <div className={styles.allUserchartCss}>
            <div className={styles.headerCss}>
                فعالیت ماهانه 
            </div>
            <div className={styles.allUserchartCss1}>
            <Line data={data} legend={legend}  options={options} />

            </div>
    </div>
        </>
    )

}
export default AllUsers
import React, { useState, useCallback } from 'react'
import {Bar,Pie ,Doughnut} from "react-chartjs-2";
import styles from '../../../assets/styles/Dashboard.module.css'
import { Table } from 'reactstrap'
import { useQuery } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'

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





function BestHotel() {
  const [hotelData,setHotelData]=useState([])


  useQuery(hotelQueries.SEARCHALLHOTELTICKET, {
   

    onCompleted: (res) => {
      setHotelData(res.searchAllHotelTicke)
    },
    onError: () => {
      setHotelData([])
    }
  })

    const hotelName=hotelData.map(item=>item.hotelBuy.hotel.name)
    const resultHotel= hotelName.filter((item, 
      index) => hotelName.indexOf(item) === index);
  



var duplicateCount1 = {};
hotelName.forEach(e => duplicateCount1[e] = duplicateCount1[e] ? duplicateCount1[e] + 1 : 1);
var countHotel = Object.keys(duplicateCount1).map(e => {return (duplicateCount1[e])});
console.log(countHotel)



  return (
    <>
<div className={styles.chartCss}>

<div className={styles.tableCss}>
<div className={styles.headerCss}>
     هتل‌های رزرو شده 
    </div>
    <div className={styles.tableContent}>
<Bar

          data={{
            // Name of the variables on x-axies for each bar
            labels: resultHotel,
            datasets: [
              {
                // Label for bars

                // Data or value of your each variable
                data: countHotel,
                // Color of each bar
                backgroundColor: [ "#F62CA3 ", "#1A5276 ", "#F1C40F","#BDC3C7","#40E0D0","#F39C12"],
                // Border color of each bar
                borderColor: [ "#F62CA3 ", "#1A5276 ", "#F1C40F","#BDC3C7","#40E0D0","#F39C12"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
          
            plugins: {
              legend: {
                  display: false,
               } }  ,
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
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
</div>
</div>


</div>
</>
  );
}

export default  BestHotel
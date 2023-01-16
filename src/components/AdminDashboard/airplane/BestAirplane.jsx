import React, { useState, useCallback } from 'react'
import {Bar,Pie ,Doughnut} from "react-chartjs-2";
import styles from '../../../assets/styles/Dashboard.module.css'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
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






function BestAirplane(props) {


  const names=props.AllData.map(item=>item.flightBuy.flight.destinationName)
  const result= names.filter((item, 
    index) => names.indexOf(item) === index);
    var duplicateCount = {};
    names.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);

    var countCity = Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});
    const numDescending = [...result].sort((a, b) => b - a);

    function statusCounter (inputs) {
      let counter = 0
      for (const input of inputs) {
        if (input._id !== null) counter += 1
      }
      return counter
    }


const data = {
    labels:numDescending.slice(0,3),
    datasets: [{
      data: countCity.slice(0,3),
      backgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  ",
      ],
      hoverBackgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  "
      ]
    }]
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    label:'kkkkk',
   
   
      
  }
  
  return (
    <>
{/*     <div>
      <Line
        data={{
          // x-axis label values
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
          datasets: [
            {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350,150],
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}
      />
    </div> */}
<div className={styles.chartCss}>
  <div className={styles.chartCssItem}>
    <div className={styles.headerCss}>
      محبوب‌ترین استان‌ها
    </div>
  <Pie data={data}   options={options}/>
</div>
<div className={styles.chartCssItem1}>
<div className={styles.headerCss}>
      بلیط های فروخته شده برای شرکت های هواپیمایی 
    </div>
<Bar

          data={{
            // Name of the variables on x-axies for each bar
            labels: ["زاگرس"," ایران ایر تور","آسمان ",  "تابان", "کاسپین", "کیش  "],
            datasets: [
              {
                // Label for bars

                // Data or value of your each variable
                data: [statusCounter(props.flightName),statusCounter(props.flightName1),statusCounter(props.flightName2)
                  ,statusCounter(props.flightName3),statusCounter(props.flightName4),statusCounter(props.flightName5)],
               
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
</>
  );
}

export default BestAirplane
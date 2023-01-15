import React from "react";
import {Bar,Pie ,Doughnut} from "react-chartjs-2";
import styles from '../../../assets/styles/Dashboard.module.css'
import * as Chartjs from "chart.js";

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


const data = {
  labels: [
    'مشهد',
    'تهران',
    'اصفهان',
  
  ],
  datasets: [{
    data: [300, 50, 100],
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
const data1 = {
  labels: [
    'مشهد',
    'تهران',
    'اصفهان',
    'مشهد',
    'تهران',
    'اصفهان',
  ],
  datasets: [{
    data: [300, 50, 100,300, 50, 100],
    backgroundColor: [
      "#F1C40F", "#BDC3C7", "#34495E  ",
    ],
    hoverBackgroundColor: [
      "#F1C40F", "#BDC3C7", "#34495E  "
    ]
  }]
};

const options1 = {
  maintainAspectRatio: false,
  responsive: true,
  label:'kkkkk',
  plugins: {
    legend: {
        display: false,
     } }  ,
 
 
    
}


function BestAirplane() {
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
      بلیط های فروخته شده برای شرکت های ریلی 
    </div>
<Bar

          data={{
            // Name of the variables on x-axies for each bar
            labels: ["فدک", "ریل ترابر سبا", "رجا", "نوالرضا","بن ریل","ریل سیر کوثر"],
            datasets: [
              {
                // Label for bars
                label: "بیشترین بلیط های فروخته شده بر اساس شرکت های ریلی",

                // Data or value of your each variable
                data: [1552, 780, 613, 1400,230,990],
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
                  }
                },
                y: {
                  grid: {
                    display: false      
                  }
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
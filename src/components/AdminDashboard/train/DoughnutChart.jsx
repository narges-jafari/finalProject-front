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
  plugins: {
    legend: {
      display: false,
    },
  },
tooltips: {
    enabled: false,
},

 
 
    
}


function DoughnutChart() {
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
<div className={styles.pieChartCss}>
    <div className={styles.headerCss}>
        لیست بلیط های فروخته شده بر اساس شرکت های  هواپیمایی
    </div>
    <div className={styles.pieChartCssItem}>
        <div className="d-flex flex-column ">
            <div  className={styles.headerCss}>
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1} width={250}  options={options1}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss} >
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1} width={250}  options={options1}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1} width={250}  options={options1}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1}  width={250} options={options1}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1} width={250}  options={options1}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1} width={250} options={options1}/>
            </div>
        </div>
     
    </div>
  


</div>
</>
  );
}

export default DoughnutChart
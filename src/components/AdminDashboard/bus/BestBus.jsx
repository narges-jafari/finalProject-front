import React from "react";
import {Bar,Pie } from "react-chartjs-2";
import styles from '../../../assets/styles/Dashboard.module.css'

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





function BestBus(props) {


  const names=props.AllData.map(item=>item.busBuy.bus.destinationName)
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

// data for pie chart
  const data = {
    labels: numDescending.slice(0,3),
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

<div className={styles.chartCss}>
  <div className={styles.chartCssItem}>
    <div className={styles.headerCss}>
      محبوب‌ترین استان‌ها
    </div>
  <Pie data={data}   options={options}/>
</div>
<div className={styles.chartCssItem1}>
<div className={styles.headerCss}>
      بلیط های فروخته شده برای شرکت های اتوبوسرانی 
    </div>
<Bar

          data={{
            // Name of the variables on x-axies for each bar
            labels: ['آسوده سفر ترمینال غرب', 'تک سفر ایرانیان', 'آسیا سفر', 'تعاونی 17 پیک صبا',
            'تعاونی 1 ایران پیما','مارال سیر',  'میهن نور'],
            datasets: [
              {
                // Label for bars

                // Data or value of your each variable
                data: [statusCounter(props.busName),statusCounter(props.busName1),statusCounter(props.busName2)
                  ,statusCounter(props.busName3),statusCounter(props.busName4),statusCounter(props.busName5)
                  ,statusCounter(props.busName6)],
               
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

export default BestBus
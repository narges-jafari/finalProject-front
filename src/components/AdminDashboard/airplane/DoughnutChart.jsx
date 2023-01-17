import React from 'react'
import {Doughnut} from "react-chartjs-2";
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





const DoughnutChart= (props) => {
 //get data from each flightcompany
  const flightName=props.flightName.map(item=>item.flightBuy.flight.destinationName)
  const result= flightName.filter((item, 
    index) => flightName.indexOf(item) === index);
    var duplicateCount = {};
    flightName.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
    var countFlightName= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});


    const flightName1=props.flightName1.map(item=>item.flightBuy.flight.destinationName)
    const result1= flightName1.filter((item, 
      index) => flightName1.indexOf(item) === index);
      var duplicateCount = {};
      flightName1.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
      var countFlightName1= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});

      const flightName2=props.flightName2.map(item=>item.flightBuy.flight.destinationName)
      const result2= flightName2.filter((item, 
        index) => flightName2.indexOf(item) === index);
        var duplicateCount = {};
        flightName2.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
        var countFlightName2= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});

        
        const flightName3=props.flightName3.map(item=>item.flightBuy.flight.destinationName)
        const result3= flightName3.filter((item, 
          index) => flightName3.indexOf(item) === index);
          var duplicateCount = {};
          flightName3.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
          var countFlightName3= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});

          
          const flightName4=props.flightName4.map(item=>item.flightBuy.flight.destinationName)
          const result4= flightName4.filter((item, 
            index) => flightName4.indexOf(item) === index);
            var duplicateCount = {};
            flightName4.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
            var countFlightName4= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});

            
            const flightName5=props.flightName5.map(item=>item.flightBuy.flight.destinationName)
            const result5= flightName5.filter((item, 
              index) => flightName5.indexOf(item) === index);
              var duplicateCount = {};
              flightName5.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
              var countFlightName5= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});
   // data for each chart        
  const data = {
    labels: result,
    datasets: [{
      data: countFlightName,
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
    plugins: {
      legend: {
        display: false,
      },
    },
  tooltips: {
      enabled: false,
  },
  
   
   
      
  }
  const data1 = {
    labels: result1,
    datasets: [{
      data: countFlightName1,
      backgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  ",
      ],
      hoverBackgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  "
      ]
    }]
  };
  
  const data2 = {
    labels: result2,
    datasets: [{
      data: countFlightName2,
      backgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  ",
      ],
      hoverBackgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  "
      ]
    }]
  };
  

  const data3 = {
    labels: result3 ,
    datasets: [{
      data: countFlightName3,
      backgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  ",
      ],
      hoverBackgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  "
      ]
    }]
  };
  

  const data4 = {
    labels: result4,
    datasets: [{
      data: countFlightName4,
      backgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  ",
      ],
      hoverBackgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  "
      ]
    }]
  };
  

  const data5 = {
    labels:result5,
    datasets: [{
      data: countFlightName5,
      backgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  ",
      ],
      hoverBackgroundColor: [
        "#F1C40F", "#BDC3C7", "#34495E  "
      ]
    }]
  };
  

 
  
   return (
    <>

<div className={styles.pieChartCss}>
    <div className={styles.headerCss}>
        لیست بلیط های فروخته شده بر اساس شرکت های  هواپیمایی
    </div>
    <div className={styles.pieChartCssItem}>
        <div className="d-flex flex-column ">
            <div  className={styles.headerCss}>
                 ایران ایر تور
            </div>
            <div>
            <Doughnut data={data1} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss} >
                 آسمان
            </div>
            <div>
            <Doughnut data={data2} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                 کاسپین
            </div>
            <div>
            <Doughnut data={data4} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                 زاگرس
            </div>
            <div>
            <Doughnut data={data}  width={250} options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                کیش 
            </div>
            <div>
            <Doughnut data={data5} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                 تابان
            </div>
            <div>
            <Doughnut data={data3} width={250} options={options}/>
            </div>
        </div>
     
    </div>
  


</div>
</>
  );
}

export default DoughnutChart
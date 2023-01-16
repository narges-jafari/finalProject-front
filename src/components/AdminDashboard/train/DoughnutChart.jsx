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




function DoughnutChart(props) {



  const trainName=props.trainName.map(item=>item.trainBuy.train.destinationName)
  const result= trainName.filter((item, 
    index) => trainName.indexOf(item) === index);
    var duplicateCount = {};
    trainName.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
    var countTrainName= Object.keys(duplicateCount).map(e => {return (duplicateCount[e])});

    const trainName1=props.trainName1.map(item=>item.trainBuy.train.destinationName)
    const result1= trainName1.filter((item, 
      index) => trainName1.indexOf(item) === index);
      var duplicateCount1 = {};
      trainName1.forEach(e => duplicateCount1[e] = duplicateCount1[e] ? duplicateCount1[e] + 1 : 1);
      var countTrainName1= Object.keys(duplicateCount1).map(e => {return (duplicateCount1[e])});

      const trainName2=props.trainName2.map(item=>item.trainBuy.train.destinationName)
      const result2= trainName2.filter((item, 
        index) => trainName2.indexOf(item) === index);
        var duplicateCount2 = {};
        trainName2.forEach(e => duplicateCount2[e] = duplicateCount2[e] ? duplicateCount2[e] + 1 : 1);
        var countTrainName2= Object.keys(duplicateCount2).map(e => {return (duplicateCount2[e])});

        
        const trainName3=props.trainName3.map(item=>item.trainBuy.train.destinationName)
        const result3= trainName3.filter((item, 
          index) => trainName3.indexOf(item) === index);
          var duplicateCount3 = {};
          trainName3.forEach(e => duplicateCount3[e] = duplicateCount3[e] ? duplicateCount3[e] + 1 : 1);
          var countTrainName3= Object.keys(duplicateCount3).map(e => {return (duplicateCount3[e])});

          
          const trainName4=props.trainName4.map(item=>item.trainBuy.train.destinationName)
          const result4= trainName4.filter((item, 
            index) => trainName4.indexOf(item) === index);
            var duplicateCount4 = {};
            trainName4.forEach(e => duplicateCount4[e] = duplicateCount4[e] ? duplicateCount4[e] + 1 : 1);
            var countTrainName4= Object.keys(duplicateCount4).map(e => {return (duplicateCount4[e])});

            
            const trainName5=props.trainName5.map(item=>item.trainBuy.train.destinationName)
            const result5= trainName5.filter((item, 
              index) => trainName5.indexOf(item) === index);
              var countTrainName5 = {};
              trainName5.forEach(e => countTrainName5[e] = countTrainName5[e] ? countTrainName5[e] + 1 : 1);
              var countTrainName5= Object.keys(countTrainName5).map(e => {return (countTrainName5[e])});
              console.log(result4,trainName4,countTrainName4,'kkkkkkkkk')

  const data = {
    labels: result,
    datasets: [{
      data: countTrainName,
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
      data: countTrainName1,
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
      data: countTrainName2,
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
      data: countTrainName3,
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
      data: countTrainName4,
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
      data: countTrainName5,
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
                شرکت رجا
            </div>
            <div>
            <Doughnut data={data1} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss} >
                شرکت نورالرضا
            </div>
            <div>
            <Doughnut data={data3} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت بن ریل
            </div>
            <div>
            <Doughnut data={data4} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت ریل ترابر سبا
            </div>
            <div>
            <Doughnut data={data2}  width={250} options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت ریل سیر کوثر
            </div>
            <div>
            <Doughnut data={data5} width={250}  options={options}/>
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className={styles.headerCss}>
                شرکت فدک
            </div>
            <div>
            <Doughnut data={data} width={250} options={options}/>
            </div>
        </div>
     
    </div>
  


</div>
</>
  );
}

export default DoughnutChart
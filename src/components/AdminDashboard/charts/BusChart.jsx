import React,{useState} from 'react'
import styles from '../../../assets/styles/Search.module.css'
import ReactApexChart from 'react-apexcharts'
import { useQuery } from '@apollo/client'
import busQueries from '../../../Apollo/Query/busQueries'
import { Line,Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
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
    Title,
    Tooltip,
    Legend
    );



    const [busData,setBusData]=useState([])

    const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
    const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
    const date = '۱۴۰۱' + '/' + month + '/' + day

    useQuery(busQueries.GETALLBUSTICKETBYDATE, {
        variables: {
          date: date
        },
    
        onCompleted: (res) => {
          setBusData(res.allBusTicketbyDate)
        },
        onError: () => {
          setBusData([''])
        }
      })

      

      const names=busData.map(item=>item.busBuy.bus.originName)


 const result= names.filter((item, 
      index) => names.indexOf(item) === index);

      
      function statusCounter (inputs) {
        let counter = 0
        for (const input of inputs) {
          if (input._id !== null) counter += 1
        }
        return counter
      }

var duplicateCount = {};
names.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
var countCity = Object.keys(duplicateCount).map(e => {return (duplicateCount[e]/statusCounter(busData))});

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    'red',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: false
}





function LineGraph() {
    return (
      <>
    <div style={{height: '500px', width: '500px', backgroundColor: 'white', position: 'relative'}}>
    <Pie data={data}  height={150} width={200} options={options}/>
  </div>
  </>
    );
  }
  
  export default LineGraph;
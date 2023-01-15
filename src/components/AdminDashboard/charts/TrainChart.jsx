import React,{useState} from 'react'
import styles from '../../../assets/styles/Search.module.css'



import ReactApexChart from 'react-apexcharts'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import trainQueries from '../../../Apollo/Query/trainQueries'
import busQueries from '../../../Apollo/Query/busQueries'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
import { AUTH_TOKEN } from '../../../constants/auth'

const GenerateChart = () => {
    const [data,setData]=useState([])
    const [trainData,setTrainData]=useState([])
    const [hotelData,setHotelData]=useState([])
    const [busData,setBusData]=useState([])

    const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
    const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
    const date = '۱۴۰۱' + '/' + month + '/' + day

      useQuery(trainQueries.GETALLTRAINTICKETBYDATE, {
        variables: {
          date: date
        },
    
        onCompleted: (res) => {
          setTrainData(res.allTrainTicketbyDate)
        },
        onError: () => {
            setTrainData([''])
        }
      })
      

      const trainNames=trainData.map(item=>item.trainBuy.train.originName)



      const trainResult= trainNames.filter((item, 
        index) => trainNames.indexOf(item) === index);     
      function statusCounter (inputs) {
        let counter = 0
        for (const input of inputs) {
          if (input._id !== null) counter += 1
        }
        return counter
      }


var duplicateTrainCount = {};
trainNames.forEach(e => duplicateTrainCount[e] = duplicateTrainCount[e] ? duplicateTrainCount[e] + 1 : 1);
var countTrainCity = Object.keys(duplicateTrainCount).map(e => {return (duplicateTrainCount[e]/statusCounter(trainData))});



  console.log(countTrainCity,';;;;;;;;;',trainResult,trainNames)
  const chartTrainData = {
    series: countTrainCity,
    options: {
        chart: {
     
          type: 'donut',
        },
        labels: trainResult,
        fill: {
            colors: ['#D68910','#F0B27A']
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%"
            }},
          tooltip: {
     
            y: {
              formatter: function (val) {
                return  (val*100) +'%'
              },
         
        
                colors: ['#EBDEF0', '#9C27B0']
            
            },
            theme:'dark',
          },
          legend: false
          ,

        // responsive: [{
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 600
        //     },
          
        //   }
        // }]
      },

    
    
    
  }

  return (
    <div >



      <ReactApexChart options={chartTrainData.options} series={chartTrainData.series} type='donut'  />

    </div>
  )
}

const TrainChart = () => {
  return (
    <div className='border mx-0'>

      <div  >
        <GenerateChart />
      </div>
    </div>
  )
}

export default TrainChart
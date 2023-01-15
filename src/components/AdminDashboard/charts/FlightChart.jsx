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
console.log(date)
    useQuery(flightQueries.GETALLFLIGHTTICKETBYDATE, {
        variables: {
          date: date
        },
    
        onCompleted: (res) => {
          setData(res.allFlightTicketbyDate)
        },
        onError: () => {
          setData([''])
        }
      })
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
      

      const names=data.map(item=>item.flightBuy.flight.originName)


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
var countCity = Object.keys(duplicateCount).map(e => {return (duplicateCount[e]/statusCounter(data))});

const chartBarData = {
    series: countCity,
    options: {
        chart: {
          type: 'donut',
        },
        labels: result,
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

        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 600
            },
          
          }
        }]
      },

    
    
    
  }

  

 


  return (
    <div>

        <ReactApexChart options={chartBarData.options} series={chartBarData.series} type='donut'    />



    </div>
  )
}

const FlightChart = () => {
  return (
    <div className='border mx-0' >

 
        <GenerateChart />
 
    </div>
  )
}

export default FlightChart



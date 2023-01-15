import React, { useState } from 'react'
import { Table } from 'reactstrap'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'
import styles from '../../../assets/styles/Ticket.module.css'

const AllFlightTicket = (props) => {
    const [data,setData]=useState([])
    const ref = React.createRef()

    const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
    const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
    const date = '۱۴۰۱' + '/' + month + '/' + day
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

      console.log(data)
    
    return (
      <>
       <div className='d-flex flex-column'>
       
       <div className={styles.headerAllTicket}> 
        بلیط‌های هواپیمای خریداری شده در تاریخ {date}
       
        <ReactTooltip className='bg-light text-secondary' />
          <Pdf targetRef={ref} filename='busList.pdf' x={4} p={3} y={0.8} scale={0.8} data-place='bottom' data-tip='excel '>
            {({ toPdf }) =>
              <i
                className='btn btn-outline-secondary fa fa-file-pdf-o    m-1   '
                data-tip=' دانلود  '
                data-place='bottom'
                onClick={toPdf}
              />}
          </Pdf>
        </div>
      <div
        className='table-responsive rounded   mt-3'
        ref={ref}

      >
  
        <Table className='w-75  mx-auto'>
          <thead >
            <tr   className='shadow p-3 mb-5 bg-white rounded'>
            <th   className='  text-dark'> ردیف
              </th>
              <th className='border-2 border-light '> مبدا
              </th>
              <th className='border-2 border-light '>
              مقصد
              </th>
              <th className='border-2 border-light '>
             نام‌کاربری خریدار
              </th>
              <th className='border-2 border-light '>
              کد پیگیری 

              </th>
            
            </tr>
          </thead>
       
          <tbody>
          {data.map((item,index)=>{
                    return(
            <tr key={index} className='shadow p-3 mb-5 bg-white rounded' style={{ backgroundColor: 'white' }}>
             

              <th style={{fontFamily:'Yekan'}} className='border-2 border-light ' scope='row'>{index+1}</th>
              <td className='border-2 border-light ' >{item.flightBuy.flight.originName}</td>
              <td className='border-2 border-light ' >{item.flightBuy.flight.destinationName}</td>
              <td className='border-2 border-light ' >{item.flightBuy.user.username}</td>
              <td className='border-2 border-light ' >{item.serialId}</td>
          
            </tr>
            
            )
        })}
          </tbody>
        </Table>
      </div>
    </div>
  
      </>
  
    )
  }
  
  export default AllFlightTicket
  
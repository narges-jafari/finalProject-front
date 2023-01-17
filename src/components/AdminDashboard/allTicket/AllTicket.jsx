
import React from 'react'
import AllBusTicket from './AllBusTicket'
import AllTrainTicket from './AllTrainTickets'
import AllFlightTicket from './AllFlightTicket'
import AllHotelTicket from './AllHotelTicket'
import styles from '../../../assets/styles/Ticket.module.css'

const AllTicket = (props) => {
  return (
    <>
    <div className={styles.tablecontent}>
      <AllFlightTicket/> 
     <AllBusTicket/>
    <AllTrainTicket/>
    <AllHotelTicket/>
    </div>
  

    </>

  )
}

export default AllTicket

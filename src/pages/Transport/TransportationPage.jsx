import React from 'react'
import BuyTicketAccordion from '../../components/buyTicket/airplane/BuyTicketAccordion.jsx'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
// import BuyTicketAccordion from '../../components/buyTicket/airplane/BuyTicketAccordion'
// import BusContent from '../../components/buyTicket/bus/BusContent'
// import TrainContent from '../../components/buyTicket/train/TrainContent'
// import Transport from '../../components/Transport'

const TransportationPage = () => {
  return (
    <>
      {/* <Transport /> */}
      {/* <TrainContent />
      <BusContent /> */}
      {/* <BuyTicketAccordion/> */}
      <Navbar/>
        <Header/>
      <div className='w-75 mx-auto my-5'>
      <BuyTicketAccordion/>

      </div>
      <Footer/>
    </>
  )
}

export default TransportationPage

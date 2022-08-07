import React from 'react'
import HotelContent from '../../components/hotelreservation/HotelContent.jsx'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'

const HotelReservationPage = () => {
  return (
    <>
      {/* <Transport /> */}
      {/* <TrainContent />
      <BusContent /> */}
      {/* <BuyTicketAccordion/> */}
      <Navbar />
      <Header />
      <div className=' mx-auto my-5' style={{ width: '80%' }}>
        <HotelContent />

      </div>
      <Footer />
    </>
  )
}

export default HotelReservationPage

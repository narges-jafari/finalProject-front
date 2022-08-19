import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import HotelResult from '../../components/result/hotel/HotelResult.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'

const HotelResultPage = () => {
  return (
    <>

      <HeaderLanding />

      <div className=' mx-auto '>
        <HotelResult />

      </div>
      <div style={{ marginTop: '200px' }}>
        <Footer />

      </div>
    </>
  )
}

export default HotelResultPage

import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import BusResult from '../../components/result/bus/BusResult'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'

const BusResultPage = () => {
  return (
    <>

      <HeaderLanding />

      <div className=' mx-auto '>
        <BusResult />

      </div>
      <div style={{ marginTop: '200px' }}>
        <Footer />

      </div>
    </>
  )
}

export default BusResultPage

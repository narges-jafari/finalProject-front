import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import AirplaneResult from '../../components/result/airplane/AirplaneResult'

const AirplaneResultPage = () => {
  return (
    <>

      <HeaderLanding />
      <div className=' mx-auto '>
        <AirplaneResult />

      </div>
      <div style={{ marginTop: '200px' }}>
        <Footer />

      </div>
    </>
  )
}

export default AirplaneResultPage

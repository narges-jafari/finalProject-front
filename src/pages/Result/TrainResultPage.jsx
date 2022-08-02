import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import TrainResult from '../../components/result/train/TrainResult'

const TrainResultPage = () => {
  return (
    <>

      <Navbar />
      <Header />
      <div className=' mx-auto '>
        <TrainResult />

      </div>
      <div style={{ marginTop: '200px' }}>
        <Footer />

      </div>
    </>
  )
}

export default TrainResultPage

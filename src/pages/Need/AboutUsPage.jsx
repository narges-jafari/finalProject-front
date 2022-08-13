import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import AboutUs from '../../components/Landing/Need/AboutUs.jsx'
import BusResult from '../../components/result/bus/BusResult'

const AboutUsPage = () => {
  return (
    <>
<div style={{backgroundColor:'#e6ebeb90'}}>
      <Navbar />
      <div style={{padding:'100px 0px 0px 0px '}}>
      <AboutUs/>

      </div>
      {/* <Header /> */}
      {/* <div style={{marginTop:'40px'}}>

      </div>
*/}
      <div style={{ marginTop: '20px' }}>
        <Footer />

      </div> 
      </div>
    </>
  )
}

export default AboutUsPage

import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import AirplaneResult from '../../components/result/airplane/AirplaneResult'
import styles from '../../assets/styles/Pages.module.css'

const AirplaneResultPage = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderLanding />

      </div>
      <div className=' mx-auto '>
        <AirplaneResult />

      </div>
      <div style={{ marginTop: '0px' }}>
        <Footer />

      </div>
    </>
  )
}

export default AirplaneResultPage

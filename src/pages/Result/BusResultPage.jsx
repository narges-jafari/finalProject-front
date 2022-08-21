import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'

import BusResult from '../../components/result/bus/BusResult'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'

const BusResultPage = () => {
  return (
    <>

      <div className={styles.content}>
        <HeaderLanding />

      </div>

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

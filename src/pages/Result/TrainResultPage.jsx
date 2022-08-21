import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import TrainResult from '../../components/result/train/TrainResult'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'

const TrainResultPage = () => {
  return (
    <>
      <div className={styles.bodycss}>
        <div className={styles.content}>
          <HeaderLanding />

        </div>

        <div className=' mx-auto '>
          <TrainResult />

        </div>
        <div style={{ marginTop: '20px' }}>
          <Footer />

        </div>
      </div>
    </>
  )
}

export default TrainResultPage

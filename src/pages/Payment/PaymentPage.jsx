import React from 'react'
import Payment from '../../components/Payment/Payment'

import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import Footer from '../../components/Landing/Footer/Footer.jsx'

import styles from '../../assets/styles/Pages.module.css'

const PaymentPage = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderLanding />

      </div>
      <div>

        <Payment />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Footer />

      </div>
    </>
  )
}

export default PaymentPage

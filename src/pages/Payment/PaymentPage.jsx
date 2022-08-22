import React from 'react'
import Payment from '../../components/Payment/Payment'

import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'

import styles from '../../assets/styles/Pages.module.css'

const PaymentPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
      {showData
        ? <>
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
        : <div>
          <NotLoginPage />
          </div>}
    </>
  )
}

export default PaymentPage

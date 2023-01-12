import React from 'react'
import PassengerInfo from '../../../components/Payment/bus/PassengerInfo'

import HeaderLanding from '../../../components/Landing/Navbar/HeaderLanding.jsx'
import Footer from '../../../components/Landing/Footer/Footer.jsx'
import { AUTH_TOKEN } from '../../../constants/auth'
import NotLoginPage from '../../NotLogin.jsx'

import styles from '../../../assets/styles/Pages.module.css'

const BusPaymentPage = () => {
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

            <PassengerInfo />
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

export default BusPaymentPage

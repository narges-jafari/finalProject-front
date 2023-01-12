import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import BusResult from '../../components/result/fastBus/BusResult'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN } from '../../constants/auth.js'
import NotLoginPage from '../NotLogin.jsx'

const BusFastResultPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
      {showData
        ? <>
          <div className={styles.bodycss}>

            <div className={styles.content}>
              <HeaderLanding />

            </div>

            <div className=' mx-auto '>
              <BusResult />

            </div>
            <div style={{ marginTop: '0px', backgroundColor: 'white' }}>
              <Footer />

            </div>
          </div>

          </>
        : <div>
          <NotLoginPage />
          </div>}
    </>
  )
}

export default BusFastResultPage

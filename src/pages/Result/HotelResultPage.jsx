import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HotelResult from '../../components/result/hotel/HotelResult.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'

const HotelResultPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
      {showData
        ? <>
          <div className={styles.content}>
            <HeaderLanding />

          </div>

          <div className=' mx-auto '>
            <HotelResult />

          </div>
          <div style={{ marginTop: '200px' }}>
            <Footer />

          </div>
          </>
        : <div>
          <NotLoginPage />
          </div>}
    </>
  )
}

export default HotelResultPage

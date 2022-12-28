import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Info from '../../components/result/hotel/Info'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'

const InfoResultPage = () => {
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
              <Info />

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

export default InfoResultPage

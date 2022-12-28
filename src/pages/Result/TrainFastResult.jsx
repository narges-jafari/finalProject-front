import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import TrainResult from '../../components/result/trainFast/TrainResult'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'

const TrainFastResultPage = () => {
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
              <TrainResult />

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

export default TrainFastResultPage

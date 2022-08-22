import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'

import BusResult from '../../components/result/bus/BusResult'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'

const BusResultPage = () => {
  const showData=window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
 
    {showData?
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
      </>:
      <div>
        <NotLoginPage/>
      </div>
}
    </>
  )
}

export default BusResultPage

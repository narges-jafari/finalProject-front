// UpdateRoom
import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import BusTicket from '../../components/ticket/BusTicket'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'

const FastBusTicketsPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
      {showData
        ? <div className={styles.bodycss}>
          <div className={styles.content}>
            <HeaderLanding />

          </div>

          <div className=' w-75 mx-auto  '>
            <BusTicket />

          </div>
          <div style={{ marginTop: '200px' }}>
            <Footer />

          </div>
          </div>

        : <div>
          <NotLoginPage />
        </div>}
    </>
  )
}

export default FastBusTicketsPage

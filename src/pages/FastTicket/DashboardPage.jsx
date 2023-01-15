// UpdateRoom
import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import Dashboard from '../../components/AdminDashboard/index'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'

const DashboardPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
      {showData
        ? <div className={styles.bodycss}>
          <div className={styles.content}>
            <HeaderLanding />

          </div>

          <div className=' '>
            <Dashboard />

          </div>
          <div className={styles.foterCss}>
            <Footer />

          </div>
          </div>

        : <div>
          <NotLoginPage />
        </div>}
    </>
  )
}

export default DashboardPage

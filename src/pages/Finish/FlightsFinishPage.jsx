import FlightFinish from '../../components/Payment/flights/FlightFinish.jsx'

import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN, HOTELBUY_ID, FLIGHTBUY_ID, HOTEL_ID } from '../../constants/auth'

import NotLoginPage from '../NotLogin.jsx'
const FlightsFinishPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)

  return (
    <>
      {showData

        ? <div className={styles.bodycss}>
          <div className={styles.content}>
            <HeaderLanding />

          </div>

          <div className=' mx-auto '>

            <FlightFinish />

          </div>
          <div style={{ backgroundColor: 'white', marginTop: '20px' }}>
            <Footer />

          </div>
          </div>
        : <div>
          <NotLoginPage />
          </div>}
    </>
  )
}

export default FlightsFinishPage

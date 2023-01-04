import Finish from '../../components/Payment/hotel/Finish.js'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'
const FinishPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  return (
    <>
      {showData

        ? <div className={styles.bodycss}>
          <div className={styles.content}>
            <HeaderLanding />

          </div>

          <div className=' mx-auto '>
            <Finish />

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

export default FinishPage

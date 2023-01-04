import AddTicketAccordion from '../../components/AddTicket'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import { AUTH_TOKEN, USER_ID } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'
const AddTicketPage = () => {
  const showData = window.localStorage.getItem(AUTH_TOKEN)
  const userId = window.localStorage.getItem(USER_ID)

  return (
    <>
      {showData

        ? <div className={styles.bodycss}>
          <div className={styles.content}>
            <HeaderLanding />

          </div>

          <div className=' mx-auto '>
            <AddTicketAccordion />

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

export default AddTicketPage

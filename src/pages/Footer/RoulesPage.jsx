import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import Roules from '../../components/Landing/Footer/Roules'
import styles from '../../assets/styles/Pages.module.css'

const RoulesPage = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderLanding />

      </div>
      <div style={{ backgroundColor: '#9293921b' }}>
        <Roules />

      </div>
    </>
  )
}

export default RoulesPage

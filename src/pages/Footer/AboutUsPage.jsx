import AboutUs from '../../components/Landing/Footer/AboutUs'
import styles from '../../assets/styles/Pages.module.css'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'

const AboutUsPage = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderLanding />

      </div>
      <div style={{ backgroundColor: '#9293921b' }}>
        <AboutUs />

      </div>
    </>
  )
}

export default AboutUsPage

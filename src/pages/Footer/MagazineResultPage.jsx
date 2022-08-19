
import styles from '../../assets/styles/Pages.module.css'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import MagazineResult from '../../components/Landing/Magazine'

const MagazineResultPage = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderLanding />

      </div>
      <div style={{ backgroundColor: '#9293921b' }}>
        <MagazineResult />

      </div>
    </>
  )
}

export default MagazineResultPage

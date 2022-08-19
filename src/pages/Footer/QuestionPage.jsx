import styles from '../../assets/styles/Pages.module.css'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import Questions from '../../components/Landing/Footer/Questions'

const QuestionPage = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderLanding />

      </div>
      <div style={{ backgroundColor: '#9293921b' }}>
        <Questions />

      </div>
    </>
  )
}

export default QuestionPage

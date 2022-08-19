
import styles from '../../assets/styles/Payment.module.css'
import PassengerInfo from './PassengerInfo'
const Payment = () => {
  return (
    <>
      <div className={styles.bodycss}>
        <div className={styles.content}>
          <div><PassengerInfo /></div>
        </div>
      </div>
    </>
  )
}

export default Payment

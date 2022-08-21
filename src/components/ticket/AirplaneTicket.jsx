
import styles from '../../assets/styles/Ticket.module.css'
const AirplaneTicket = () => {
  return (
    <>
    <div className={styles.content}>
      <div className={styles.contentItem2}>
        <span >
          نرگس جعفری
        </span>
        <div>
          <span >
            شماره پرواز
          </span>
          <span className={styles.fontcss}>1234</span>
        </div>
        </div>

    <span className={styles.headercss}>اطلاعات پرواز</span>

  <div className={styles.contentItem3}>
    <div>
      <span>مبدا</span>
      <span className={styles.fontcss}> تهران </span>
    </div>
    <div>
      <span>مقصد</span>
      <span className={styles.fontcss}> تهران </span>
    </div>

  </div>
  <div className={styles.contentItem3}>
    <div>
      <span>تاریخ پرواز</span>
      <span className={styles.fontcss}> 1401/01/01 </span>
    </div>
    <div>
      <span>ساعت پرواز</span>
      <span className={styles.fontcss}> 20:01 </span>
    </div>
    <div>
      <span>  ساعت رسیدن </span>
      <span className={styles.fontcss}> 21:30 </span>
    </div>

  </div>

  <span className={styles.headercss}>
    اطلاعات بلیط
  </span>
  <div className={styles.contentItem3}>
  <div>
      <span> ایرلاین</span>
      <span className={styles.fontcss}> ماهان </span>
    </div>
    <div>
      <span> مدل هواپیما</span>
      <span className={styles.fontcss}> بویینگ </span>
    </div>

  </div>
  <div className={styles.contentItem3}>
 
    <div>
      <span> کلاس کابیین </span>
      <span className={styles.fontcss}> فرست </span>
    </div>
    <div>
      <span>  بار مجاز </span>
      <span className={styles.fontcss}> 10 </span>
    </div>

  </div>
  

    </div>
   
    </>
  )
}

export default AirplaneTicket

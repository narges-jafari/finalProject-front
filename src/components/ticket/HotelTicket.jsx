import styles from '../../assets/styles/Ticket.module.css'

const HotelTicket = () => {
  return (
    <>
        <div >
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>نام هتل </span>
              <span className={styles.spancss1}> استقلال</span>
            </div>
            <div>
              <span className={styles.spancss}>  استان</span>
              <span className={styles.spancss1}>تهران</span>

            </div>
          

          
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>  نام مسافر</span>
              <span className={styles.spancss1}>نرگس جعفری</span>

            </div>
            <div>
              <span className={styles.spancss}>شماره اتاق</span>
              <span className={styles.spancss1}>491</span>
            </div>

          </div>
          <div className={styles.contentItem}>
          <div>
              <span className={styles.spancss}>   از تاریخ  </span>

              <span className={styles.spancss1}> 1401/01/01</span>

            </div>
            <div>
              <span className={styles.spancss}> تا تاریخ</span>
              <span className={styles.spancss1}>1401/01/03</span>
            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}> ستاره هتل </span>
              <span className={styles.spancss1}> 4ستاره</span>
            </div>
            <div>
              <span className={styles.spancss}>  قیمت</span>
              <span className={styles.spancss1}>210000</span>

            </div>
          

          
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelTicket

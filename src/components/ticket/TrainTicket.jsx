import styles from '../../assets/styles/Ticket.module.css'

const TrainTicket = () => {
  return (
    <>
         <div >
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>از ایستگاه</span>
              <span className={styles.spancss1}> تهران</span>
            </div>
            <div>
              <span className={styles.spancss}> تاریخ حرکت</span>
              <span className={styles.spancss1}>1401/01/01</span>

            </div>
            <div>
              <span className={styles.spancss}>  روز حرکت </span>

              <span className={styles.spancss1}>پنج شنبه</span>

            </div>

          
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>به ایستگاه</span>
              <span className={styles.spancss1}> زنجان</span>
            </div>
            <div>
              <span className={styles.spancss}>  نام مسافر</span>
              <span className={styles.spancss1}>نرگس جعفری</span>

            </div>
            <div>
              <span className={styles.spancss}>شماره قطار</span>
              <span className={styles.spancss1}>491</span>
            </div>

          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}> ساعت حرکت</span>
              <span className={styles.spancss1}> 17:45</span>
            </div>
            <div>
              <span className={styles.spancss}>  شماره سالن</span>
              <span className={styles.spancss1}>4</span>

            </div>
            <div>
              <span className={styles.spancss}> شماره صندلی</span>
              <span className={styles.spancss1}> 21 </span>

            </div>

          
          </div>
          <div className='mx-2'>
              <span className={styles.spancss}> ساعت ورود</span>
              <span className={styles.spancss1}>20:36</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default TrainTicket

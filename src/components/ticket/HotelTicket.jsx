import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/hotel.png'

const HotelTicket = () => {
  return (
    <>
      <div>
        <div className={styles.content}>
        <div className={styles.ticketHeader}>
            <div >
            <span>
           کد رهگیری :{12345666} 
            </span>
            <span>
           سریال بلیط :{111111} 
            </span>

            </div>
            <div style={{marginTop:'-4px'}}>
              <img src={train} className='w-50 h-75'/>
            </div>
            <div style={{marginTop:'-5px'}}>
            <span style={{fontSize:'20px',fontWeight:'bold'}}>تریپنو</span>
<img src={logo} className={styles.logoCss}/>

            </div>
          </div>
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
          <hr/>
          <div className={styles.ticketFooter}>
            <div >
              <img src={img} className={styles.barcodeCss} />
            </div>
            <div className={styles.ticketFooterItem}>
              <div className={styles.spanCssFooter}>
                توضیحات:
              </div>
            
              <span>
                1: ارائه کارت‌شناسایی معتبر برای اقامت در  هتل  ضروری است 
              </span>
              <span>
              2:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelTicket

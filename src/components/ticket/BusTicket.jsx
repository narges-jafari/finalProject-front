import styles from '../../assets/styles/Ticket.module.css'
import logo from '../../assets/img/16.png'
import bus from '../../assets/img/bus.png'
import img from '../../assets/img/barcode.JPG'

const BusTicket = () => {
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
              <img src={bus} className='w-50 h-75'/>
            </div>
            <div style={{marginTop:'-5px'}}>
            <span style={{fontSize:'20px',fontWeight:'bold'}}>تریپنو</span>
<img src={logo} className={styles.logoCss}/>

            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>از پایانه</span>
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
              <span className={styles.spancss}>به پایانه</span>
              <span className={styles.spancss1}> زنجان</span>
            </div>
            <div>
              <span className={styles.spancss}>  نام مسافر</span>
              <span className={styles.spancss1}>نرگس جعفری</span>

            </div>
            <div>
              <span className={styles.spancss}>شماره اتوبوس</span>
              <span className={styles.spancss1}>491</span>
            </div>

          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}> ساعت حرکت</span>
              <span className={styles.spancss1}> 17:45</span>
            </div>
            <div>
              <span className={styles.spancss}> شماره صندلی</span>
              <span className={styles.spancss1}> 21 </span>

            </div>

            <div  >
              <span className={styles.spancss}> ساعت ورود</span>
              <span className={styles.spancss1}>20:36</span>
            </div>
           
          </div>
          <div className={styles.contentItem}>
            <div>
            <span className={styles.spancss}>  قیمت </span>
              <span className={styles.spancss1}>123000</span>
            </div>
     
            </div>
            <hr className='bg-black'/>
        <div className={styles.ticketFooter}>
            <div >
              <img src={img} className={styles.barcodeCss} />
            </div>
            <div className={styles.ticketFooterItem}>
              <div className={styles.spanCssFooter}>
                توضیحات:
              </div>
              <span >
                1:حتما نیم‌ساعت قبل از حرکت اتوبوس در ایستگاه باشید 
              </span>
              <span>
                2: ارائه کارت‌شناسایی معتبر هنگام سوار شدن در اتوبوس  ضروری است 
              </span>
              <span>
              3:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusTicket

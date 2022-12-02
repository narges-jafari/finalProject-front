
import styles from '../../assets/styles/Ticket.module.css'

import logo from '../../assets/img/16.png'
import flight from '../../assets/img/flight.png'
import img from '../../assets/img/barcode.JPG'

const AirplaneTicket = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.ticketHeader}>
          <div>
            <span>
              سریال بلیط :{111111}
            </span>
            <span>
              شماره پرواز :{111111}
            </span>

          </div>
          <div style={{ marginTop: '-4px' }}>
            <img src={flight} className='w-50 h-75' />
          </div>
          <div style={{ marginTop: '-5px' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>تریپنو</span>
            <img src={logo} className={styles.logoCss} />

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
            <span> نام مسافر</span>
            <span className={styles.fontcss}> نرگس جعفری </span>
          </div>
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
          <div>
            <span>   قیمت </span>
            <span className={styles.fontcss}> 1250000 </span>
          </div>

        </div>
        <hr className='bg-black' />
        <div className={styles.ticketFooter}>
          <div>
            <img src={img} className={styles.barcodeCss} />
          </div>
          <div className={styles.ticketFooterItem}>
            <div className={styles.spanCssFooter}>
              توضیحات:
            </div>
            <span>
              1:حتما دو‌ساعت قبل از حرکت قطار در ایستگاه باشید
            </span>
            <span>
              2: ارائه کارت‌شناسایی معتبر هنگام سوار شدن در هواپیما  ضروری است
            </span>
            <span>
              3:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
            </span>
          </div>
        </div>

      </div>

    </>
  )
}

export default AirplaneTicket

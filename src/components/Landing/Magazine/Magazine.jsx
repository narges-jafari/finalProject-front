// import img from '../../../assets/img/need/2.JPG'
import img from '../../../assets/img/travel.jpg'

import img1 from '../../../assets/img/need/22.JPG'
import img2 from '../../../assets/img/need/4.JPG'
import img3 from '../../../assets/img/need/3.JPG'

import styles from '../../../assets/styles/Landing.module.css'

const Magazine = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.textcss}>
          <span className={styles.fontCss}>
            گزارش جامع گردشگری ایران : جایگاه ایران در مقایسه با دیگر کشورها
          </span>
          <span className={styles.spancss}>
            چه تعداد گردشگر به ایران سفر می‌کند؟ درآمد ایران از گردشگری چقدر است؟ ترکیه چقدر از ایران جلوتر است؟
          </span>
          <a className={styles.acss} href='https://flightio.com/blog/discover/iran-tourism-report'>
          <span className={styles.spancss1}>
            ادامه مطلب
          </span>
          </a>
        </div>
        <div className={styles.img}>
          <img src={img} style={{ width: '100%', height: '300px', borderRadius: '20px' }} />
        </div>
      </div>

      <div className={styles.content1}>
        <div className={styles.content1Item}>
          <img src={img1} className={styles.imgcss} />
          <a className={styles.acss1} href='https://www.jabama.com/mag/packing-checklist/'>

          <span className={styles.spantext}>ملزومات سفرچیه؟</span>
          </a>
        </div>
        <div className={styles.content1Item}>
          <img src={img2} className={styles.imgcss} />
          <a className={styles.acss1} href='https://flightio.com/blog/airlines/best-airlines-in-the-world'>

          <span className={styles.spantext}>  بهترین ایر‌لاین‌های دنیا کدامند؟</span>
          </a>

        </div>
        <div className={styles.content1Item}>
          <img src={img3} className={styles.imgcss} />
          <a className={styles.acss1} href='https://ghasedak24.com/article/176/%D8%B4%D8%B1%DA%A9%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B1-%D8%AF%D8%B1%D8%A2%D9%85%D8%AF-%D8%AF%D8%B1-%D8%B5%D9%86%D8%B9%D8%AA-%D8%B1%DB%8C%D9%84%DB%8C-%D8%AC%D9%87%D8%A7%D9%86-%DA%A9%D8%AF%D8%A7%D9%85%D9%86%D8%AF%D8%9F'>

          <span className={styles.spantext}>  
           شرکت‌های پر‌درآمد در صنعت ریلی جهان کدام‌اند؟
          </span>
          </a>

        </div>

      </div>
    </>
  )
}

export default Magazine

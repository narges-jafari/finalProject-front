import img from '../../../assets/img/need/2.JPG'
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
          <span className={styles.spancss1}>
            ادامه مطلب
          </span>
        </div>
        <div className={styles.img}>
          <img src={img} style={{ width: '100%', height: '300px', borderRadius: '20px' }} />
        </div>
      </div>

      <div className={styles.content1}>
        <div className={styles.content1Item}>
          <img src={img1} className={styles.imgcss} />
          <span className={styles.spantext}>ملزومات سفرچیه؟</span>

        </div>
        <div className={styles.content1Item}>
          <img src={img2} className={styles.imgcss} />
          <span className={styles.spantext}>  بهترین ایر لاین های دنیا کدامند؟</span>

        </div>
        <div className={styles.content1Item}>
          <img src={img3} className={styles.imgcss} />
          <span className={styles.spantext}>ملزومات سفرچیه؟</span>

        </div>

      </div>
    </>
  )
}

export default Magazine

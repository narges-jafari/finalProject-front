import styles from '../../../assets/styles/Necessary.module.css'
import img from '../../../assets/img/need/airplane.JPG'
import img1 from '../../../assets/img/need/bus.JPG'
import img2 from '../../../assets/img/need/train.JPG'
import img3 from '../../../assets/img/need/hotel.JPG'

const Necessary = () => {
  return (
    <>

      <div className={styles.flexContent}>
        <div className={styles.content}>
          <img src={img3} className={styles.imgcss} />
          <span>
            رزرو هتل با نازل‌ترین قیمت
          </span>
        </div>
        <div className={styles.content}>
          <img src={img} className={styles.imgcss} />

          <span>
            خرید بلیط  هواپیما از تمام شرکت‌های‌هواپیمایی
          </span>
        </div>
        <div className={styles.content}>
          <img src={img2} className={styles.imgcss} />
          <span>
            خرید بلیط قطار از تمام خطوط ریلی برای تمام مقاصد
          </span>
        </div>
        <div className={styles.content}>
          <img src={img1} className={styles.imgcss} />
          <span>
            خرید بلیط اتوبوس از تمام پایانه‌ها
          </span>
        </div>

      </div>

    </>
  )
}

export default Necessary

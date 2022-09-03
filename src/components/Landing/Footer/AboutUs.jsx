import styles from '../../../assets/styles/AboutUs.module.css'

// import img from '../../../assets/img/landing/water.jpg'
import img from '../../../assets/img/pic1.jpg'

import img1 from '../../../assets/img/need/phone.JPG'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <>
      <div className='d-flex flex-column w-75 ' style={{ margin: '0px auto 20px auto', padding: '50px 1px 0px 0px' }}>
        <span className={styles.spanCss}>
          اولویت ما رضایت شماست

        </span>
        <span className={styles.spanCss1}>
          با  تریپنو آشنا شوید

        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <p className={styles.pcss}>
            وب‌سایت تریپنو به عنوان یکی از سایت‌های  گردشگری ایران با قابلیت‌های مشارکت کاربران خود،
            دارای اطلاعات جامع و کاملی در خصوص ایرانگردی است. تریپنو شامل اطلاعات جامعی در
            خصوص جاذبه‌های گردشگری ایران و جهان، راهنمای حرفه‌ای ایرانگردی و اخبار و مقالات کاربردی
            حوزه گردشگری است. تریپنو به شما این‌امکان را می‌دهد تا اوقات فراغت خود را برای
            یک برنامه گردشگری درون‌شهری یا برون‌شهری به خوبی برنامه‌ریزی کنید، برای سفر خود
            بلیط هواپیما، قطار یا اتوبوس تهیه کنید، هتل رزرو کنید و یک راهنمای سفر کاربردی داشته‌باشید.
            اطلاعات تریپنو توسط گردشگران و مخاطبان سایت تهیه می شود و شما نیز این‌امکان را دارید
            تا به عنوان یک گردشگر حرفه‌ای یا غیر حرفه‌ای تجربیات، رویدادها و مکان‌های دیدنی شهر
            و مقاصد سفرتان را به دیگر گردشگران معرفی کنید و به گسترش فرهنگ گردشگری کمک کنید.

          </p>
        </div>
        <div className={styles.contentItem1}>
          <img src={img} className={styles.img} />

        </div>

      </div>

      <div className='d-flex flex-column w-75  ' style={{ margin: '70px auto 20px auto' }}>
        <span className={styles.spanCss}>
          ماموریت و چشم‌انداز تریپنو
        </span>
        <span className={styles.spanCss1}>
          فراتر از این‌ها خواهیم‌رفت
        </span>
      </div>
      <div className='d-flex flex-row justify-content-center flex-wrap w-75 ' style={{ margin: '60px auto' }}>
        <div className={styles.perpos}>
          <span className={styles.number}>1</span>
          <span className={styles.item}>
            بزرگ‌ترین سامانه خرید بلیط مسافرت

          </span>
        </div>
        <div className={styles.perpos1}>
          <span className={styles.number}>2</span>
          <span className={styles.item}>
            رهبر بازار گردشگری در خاورمیانه

          </span>

        </div>
        <div className={styles.perpos2}>
          <span className={styles.number}>3</span>
          <span className={styles.item}>
            مرجع کامل و معتبر راهنمای‌سفر

          </span>

        </div>
        <div className={styles.perpos3}>
          <span className={styles.number}>4</span>
          <span className={styles.item}>
            خلق تجربه مدرن و پایدار سفر

          </span>

        </div>
      </div>

      <div className='d-flex flex-column w-75 ' style={{ margin: '0px auto', fontFamily: 'Yekan' }}>
        <span className={styles.spanCss}>  شرکت تریپنو  </span>
        <span className='my-1'>
          نام شرکت: شرکت خدمات مسافرتی و جهانگردی دورپرواز

        </span>
        <span className='my-1'>
          نام مدیرعامل: نرگس  جعفری

        </span>
        <span className='my-1'>
          شماره ثبت شرکت: 11033

        </span>
        <span className='my-1'>
          شماره پروانه مجوز بند ب:‌ 848746

        </span>
        <span className='my-1'>
          <i className='fa fa-map-marker mx-1' />
          تهران - خیابان بهشتی - خیابان سرافراز - خیابان پنجم - پلاک 19
        </span>
      </div>
      <div className='d-flex flex-row flex-wrap w-75' style={{ margin: '100px auto', backgroundColor: 'white', borderRadius: '20px' }}>

        <div>
          <img src={img1} className={styles.phoneCss} />
        </div>
        <div className='d-flex flex-column ' style={{ margin: '40px auto' }}>
          <span className={styles.company}>
            پشتیبانی ٢٤ ساعت تریپنو
          </span>
          <div className='d-flex flex-row  flex-wrap '>
            <span className={styles.emailCss}>
              تلفن :
            </span>
            <span className={styles.emailCss1}>
              02141502
            </span>
          </div>
          <div className='d-flex flex-row flex-wrap  '>
            <span className={styles.emailCss}>
              ایمیل :
            </span>
            <span className={styles.emailCss1}>
              www.tripno@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <Footer />

      </div>

    </>
  )
}

export default AboutUs

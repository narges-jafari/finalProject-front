
import styles from '../../../assets/styles/Rules.module.css'
import img from '../../../assets/img/need/g1.JPG'
import img1 from '../../../assets/img/need/g2.jpg'
import Footer from './Footer'

const Roules = () => {
  return (
    <>
      <div className='d-flex flex-column w-75 ' style={{ margin: '0px auto 20px auto' }}>
        <span className={styles.spanCss}>
          قوانین و مقررات
        </span>
      </div>
      <div className='d-flex flex-column w-75 ' style={{ margin: '0px auto 20px auto' }}>
        <div className={styles.item}>
          <img src={img1} className={styles.img} />
          <span>1</span>
          <p className={styles.ptext}>
          عملیات خرید بلیط در وب‌سایت تریپنو مشمول مجموعه‌قوانین و مقررات تجارت الکترونیکی بوده و هرگونه تخلف تحت پیگرد قانونی قرار خواهد‌گرفت.

</p>
          <p />
        </div>
        <div className={styles.item}>
          <span>2</span>
          <p className={styles.ptext}>
          خدمات و محتوای ارائه‌شده توسط تریپنو جهت استفاده‌ در این‌وب‌سایت تولید شده و هر گونه سوء استفاده از اطلاعات، عکس‌ها،  طرح‌ها، لوگو و… از این‌وب‌سایت پیگرد قانونی خواهد‌داشت

</p>
          <img src={img} className={styles.img} />

        </div>
        <div className={styles.item}>
          <img src={img1} className={styles.img} />
          <span>3</span>
          <p className={styles.ptext}>
          کاربران تعهد می‌نمایند که اطلاعات خود را هنگام ثبت‌نام و رزرو به صورت صحیح در وب‌سایت وارد کنند. در صورت ورود اطلاعات ناقص يا نادرست، مسئولیت عواقب بعدی این‌عمل بر عهده‌ی کاربران خواهد‌بود.

</p>
          <p />
        </div>
        <div className={styles.item}>
          <span>4</span>
          <p className={styles.ptext}>
          وب‌سایت تریپنو اطلاعات‌شخصی‌کاربران را با هیچ مجموعه‌ی دیگری به اشتراک نخواهد‌گذاشت اما مراجع ذی‌صلاح تنها در صورت بروز موارد مصرح در قانون، امکان استفاده از این اطلاعات را خواهند‌داشت.

</p>
          <img src={img} className={styles.img} />

        </div>
        <div className={styles.item}>
          <img src={img1} className={styles.img} />
          <span>5</span>
          <p className={styles.ptext}>
          وب‌سایت تریپنو به فروش اینترنتی بلیط هواپیما می‌پردازد و در قبال شرایط اضطراری (بدی آب و هوا، بلایای طبیعی و غیره)، کنسلی، تاخیر یا تعجیل پرواز و یا اعلام ورشکستگی کلیه‌ی ایرلاین‌ها  مسئولیتی را بر عهده نخواهد‌داشت و کلیه مسولیت‌ها بر عهده‌ی شرکت‌های هواپیمایی مجری پرواز است.

</p>
          <p />
        </div>
      </div>
      <div className='bg-white'>
        <Footer />

      </div>
    </>
  )
}

export default Roules

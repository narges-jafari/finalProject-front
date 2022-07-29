import React from 'react'
import Nav from 'react-bootstrap/Nav'
import img from '../../../assets/img/landing/logo.PNG'
import neshan from '../../../assets/img/landing/neshan.jpg'
import namad from '../../../assets/img/landing/namad.jpg'
import digital from '../../../assets/img/landing/digital.jpg'
import styles from '../../../assets/styles/Footer.module.css'

import { BiCopyright } from 'react-icons/bi'
import { TbBrandInstagram, TbBrandTelegram, TbBrandWhatsapp, TbBrandTwitter } from 'react-icons/tb'

const Footer = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 justify-content-between mx-5' style={{ cursor: 'pointer' }}>
        <div className='d-flex flex-column flex-wrap my-2 border border-primary '>
          <span>درباره ی تریپنو</span>
          <p>
            سایت تریپنو به عنوان یکی از سایت های  گردشگری ایران با قابلیت های مشارکت کاربران خود، <br />
            دارای اطلاعات جامع و کاملی در خصوص ایرانگردی است. تریپنو شامل اطلاعات جامعی در <br />
            خصوص جاذبه های گردشگری ایران و جهان، راهنمای حرفه ای ایرانگردی و اخبار و مقالات کاربردی<br />
            حوزه گردشگری است. تریپنو به شما این امکان را می دهد تا اوقات فراغت خود را برای <br />
            یک برنامه گردشگری درون شهری یا برون شهری به خوبی برنامه ریزی کنید، برای سفر خود<br />
            بلیط هواپیما، قطار یا اتوبوس تهیه کنید، هتل رزرو کنید و یک راهنمای سفر کاربردی داشته باشید. <br />
            اطلاعات تریپنو توسط گردشگران و مخاطبان سایت تهیه می شود و شما نیز این امکان را دارید<br />
            تا به عنوان یک گردشگر حرفه ای یا غیر حرفه ای تجربیات، رویدادها و مکان های دیدنی شهر  <br />
            و مقاصد سفرتان را به دیگر گردشگران معرفی کنید و به گسترش فرهنگ گردشگری کمک کنید.<br />
          </p>
        </div>
        <div className='d-flex flex-column flex-wrap my-2  '>
          <span className='mx-3'>لینک های مهم</span>
          {/* <Link to="/about">About</Link> */}
          <Nav className='d-flex flex-column'>
            <Nav.Link href='#home' className='text-secondary'>
              <span>قوانین</span>
            </Nav.Link>
            <Nav.Link href='#link' className='text-secondary'>
              <span>در باره ی ما</span>
            </Nav.Link>
            <Nav.Link href='#link' className='text-secondary'>
              <span>سوالات متداول</span>
            </Nav.Link>
          </Nav>
        </div>

        <div className='d-flex flex-column flex-wrap my-2    '>
          <div className='d-flex flex-row flex-wrap justify-content-center'>
            <img src={img} className='rounded-circle' style={{ width: '70px', height: '70px', padding: '0px' }} />
            <span className='my-3'> تریپنو</span>
          </div>
          <div className='d-flex flex-row flex-wrap '>
            <span>
              <BiCopyright className='my-2' />
              تریپنو 1390-1401 تمامی حقوق محفوظ است
            </span>
          </div>
          <span className=' text-center my-2'>ساخته شده با <i className='fa fa-heart  text-danger' /> در ایران</span>
          <div className='d-flex flex-row flex-wrap justify-content-between '>
            <img src={neshan} className={styles.logoCss} />
            <img src={namad} className={styles.logoCss} />
            <img src={digital} className={styles.logoCss} />

          </div>
        </div>
      </div>
      <div className={styles.socialCss}>
        {/* <div ><TbBrandInstagram className='fa-2x mx-2 my-2' /></div> */}
        <div className='mx-2'><TbBrandInstagram className={styles.instagram} /></div>
        <div className='mx-2'><TbBrandTelegram className={styles.telegram} /></div>
        <div className='mx-2'><TbBrandWhatsapp className={styles.whatsapp} /></div>
        <div className='mx-2'><TbBrandTwitter className={styles.tweeter} /></div>

      </div>
    </>

  )
}

export default Footer

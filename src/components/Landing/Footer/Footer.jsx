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
      <div className={styles.contentFlex}>
        <div className='d-flex flex-column flex-wrap my-2  '>
          <span className='mx-3 mt-4'>   درباره‌ی تریپنو</span>
          {/* <Link to="/about">About</Link> */}
          <Nav className='d-flex flex-column'>
            <Nav.Link href='aboutus' className='text-secondary mt-2'>
              <span>درباره‌ی‌ما </span>
            </Nav.Link>
            <Nav.Link href='magazin' className='text-secondary'>
              <span>  مجله تریپنو </span>
            </Nav.Link>
          </Nav>
        </div>
        <div className='d-flex flex-column flex-wrap my-2  '>
          <span className='mx-3 mt-4'>    پشتیبانی  تریپنو</span>
          {/* <Link to="/about">About</Link> */}
          <Nav className='d-flex flex-column'>
            <Nav.Link href='roules' className='text-secondary mt-2'>
              <span>   قوانین </span>
            </Nav.Link>
            <Nav.Link href='question' className='text-secondary mt-2'>
              <span>   سوالات‌متداول </span>
            </Nav.Link>
          </Nav>
        </div>

        <div className='d-flex flex-column flex-wrap my-2    '>
          <div className='d-flex flex-row flex-wrap justify-content-center'>
            <img src={img} className='rounded-circle' style={{ width: '70px', height: '70px', padding: '0px' }} />
            <span className='my-3' style={{ fontWeight: 'bold', fontSize: '22px' }}> تریپنو</span>
          </div>
          <div className='d-flex flex-row flex-wrap ' style={{ fontFamily: 'Yekan' }}>
            <span>
              <BiCopyright className='my-2' />
              تریپنو 1400-1401 تمامی حقوق محفوظ است
            </span>
          </div>
          <span className=' text-center my-2'>ساخته‌شده با <i className='fa fa-heart  text-danger' /> در ایران</span>
          <div className='d-flex flex-row flex-wrap justify-content-between ' style={{ fontFamily: 'Yekan' }}>
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

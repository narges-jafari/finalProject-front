import React from 'react'
import img from '../assets/img/notlogin.JPG'
import styles from '../assets/styles/Pages.module.css'

const NotLoginPage = () => {
  return (
    <>
      <div className={styles.notloginflex}>
        <div className={styles.notloginflexItem}>
          <img src={img} className={styles.imgcss} />
        </div>
        <div className={styles.notloginflexItem1}>
          <span>
            برای مشاهده این‌صفحه باید وارد حساب کاربری شوید
          </span>
          <a href='login' className={styles.acss}>
            <span className='my-3 py-3' style={{ fontSize: '20px' }}> ورود</span>
          </a>
          <span />
        </div>
      </div>

    </>

  )
}

export default NotLoginPage

import React from 'react'
import img from '../../../assets/img/bg/not.JPG'
import styles from '../../../assets/styles/NotFound.module.css'

const NotLoginPage = () => {
  return (
    <>
      <div className={styles.notloginflex}>
        <div className={styles.notloginflexItem}>
          <img src={img} className={styles.imgcss} />
        </div>
        <div className={styles.notloginflexItem}>
          <span>
            بلیطی با این اطلاعات پیدا نشد از دوباره جستجو کنید
          </span>
          <a href='/' className={styles.acss}>
            <span className='my-3 py-3' style={{ fontSize: '20px' }}> جستجوی جدید</span>
          </a>
          <span />
        </div>
      </div>

    </>

  )
}

export default NotLoginPage

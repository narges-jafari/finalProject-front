import React from 'react'
import img from '../../../assets/img/bg/not.JPG'
import styles from '../../../assets/styles/NotFound.module.css'

const NotLoginPage = (props) => {
  return (
    <>
      <div className={styles.notloginflex}>
        <div className={styles.notloginflexItem}>
          <img src={img} className={styles.imgcss} />
        </div>
        {props.info.length === 0 && props.info1.length === 0
          ? <div className={styles.notloginflexItem}>
            <span>
              هتلی با این اطلاعات پیدا نشد از دوباره جستجو کنید
            </span>
            <a href='/' className={styles.acss}>
              <span className='my-3 py-3' style={{ fontSize: '20px' }}> جستجوی جدید</span>
            </a>
            <span />
          </div>
          : <div className={styles.notloginflexItem}>
            <span>
              امکان اعمال همزمان دوفیلتر وجود ندارد یکی از فیلتر های انتخابی را حذف کنید
            </span>

            </div>}
      </div>

    </>

  )
}

export default NotLoginPage

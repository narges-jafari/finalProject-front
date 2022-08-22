
import React, { useState } from 'react'

import styles from '../../../assets/styles/HeaderLanding.module.css'
import img from '../../../assets/img/landing/1.JPG'
import Header from './Header'

const HeaderLanding = () => {
  const [headerChange, setHeaderChange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setHeaderChange(true)
    } else {
      setHeaderChange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <>
      {!headerChange
        ? <div className={styles.divheader}>
          <div className={styles.headerCss}>
            <div>
              <img src={img} className={styles.logoCss} />
              <span className={styles.headerfont}>تریپنو</span>
            </div>

            <div className=' mt-4 '>
              <span className={styles.numberfont}>021-41502</span>
              <a href='login'>
                <button className={styles.buttonCssChange}>ورود/ثبت نام</button>

              </a>
              <Header />

            </div>

          </div>

          <div />
        </div>
        : <div className={styles.divheaderChange}>
          <div className={styles.headerCss}>
            <div>
              <img src={img} className={styles.logoCssChange} />
              <span className={styles.headerfontChange}>تریپنو</span>
            </div>

            <div>
              <span className={styles.numberfontChange}>021-41502</span>
              <a href='login'>
                <button className={styles.buttonCssChange}>ورود/ثبت نام</button>

              </a>
              <Header />
            </div>

          </div>

          <div />
        </div>}

    </>
  )
}

export default HeaderLanding

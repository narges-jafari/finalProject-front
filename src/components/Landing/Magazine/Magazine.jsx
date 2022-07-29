import React, { useState } from 'react'
import img from '../../../assets/img/landing/pic.jpg'
import styles from '../../../assets/styles/Landing.module.css'
// import styles from '../../../assets/styles/Airport.module.css'

const Magazine = () => {
  const [click, setClick] = useState(true)
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 mx-4 justify-content-between '>
        <div className={styles.card}>
          <img src={img} className={styles.imgmagezineCss} />
          <div className='d-flex flex-column flex-wrap py-2 bg-light'>
            <div>
              <span>95 درصد آب دریاچه ارومیه خشک شد</span>
            </div>
          </div>
          <div className='d-flex flex-row py-2 bg-danger mt-4'>
            {/* <i className='fa fa-users mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} /> */}
            <span className='mx-1'>نرگس جعفری </span>
            <span className='mx-1'>22تیر 1401</span>
          </div>
          {!click
            ? <>
              <button className={styles.btnCss} onClick={() => setClick(!click)}><i className='fa fa-angle-double-down fa-2x py-2' />
                <div className={styles.divCss}>یکی از علت های اصلی خشکی اب دریاچه ارومیه چاه های عمیقی است که زده شده است</div>

              </button>

            </>
            : <button className={styles.btnCss} onClick={() => setClick(!click)}><i className='fa fa-angle-double-up fa-2x py-1' /></button>}
        </div>
      </div>
    </>
  )
}

export default Magazine

import React from 'react'
import shop from '../../../assets/img/entertainment/shopping.jpg'
import img1 from '../../../assets/img/entertainment/s2.JPG'
import img2 from '../../../assets/img/entertainment/s3.JPG'

import Nav from 'react-bootstrap/Nav'

import styles from '../../../assets/styles/Entertainment.module.css'

const Shopping = () => {
  return (
    <>
      <div className={styles.contentflex}>
        <Nav>
          <Nav.Link className='text-dark' href='https://www.kojaro.com/attraction/29962-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-%D8%A8%D8%B2%D8%B1%DA%AF-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'>
            <div className={styles.card}>
              <img src={shop} className={styles.img} />
              <span className='text-center mt-2'>            ایران مال</span>
              <hr className='mx-3' />
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>تهران</span>

              </div>
            </div>

          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://www.kojaro.com/attraction/8196-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-%D9%88%DA%A9%DB%8C%D9%84/'>
            <div className={styles.card}>
              <img src={img1} className={styles.img} />
              <span className='text-center mt-2'>           بازار وکیل  </span>
              <hr className='mx-3' />
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>شیراز</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-dark' href='https://zorofemesitak.com/fa/%D8%B8%D8%B1%D9%88%D9%81-%D9%85%D8%B3%DB%8C-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%B2%D9%86%D8%AC%D8%A7%D9%86/news/2020/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%85%D8%B3-%D8%A7%D8%B2-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-%D9%85%D8%B3-%D8%B2%D9%86%D8%AC%D8%A7%D9%86/'>
            <div className={styles.card}>
              <img src={img2} className={styles.img} />
              <span className='text-center mt-2'>         بازار مس    </span>
              <hr className='mx-3' />
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>زنجان</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default Shopping

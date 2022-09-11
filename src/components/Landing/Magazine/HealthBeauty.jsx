import React from 'react'
import img from '../../../assets/img/entertainment/b1.JPG'
import img1 from '../../../assets/img/entertainment/b3.JPG'
import img2 from '../../../assets/img/entertainment/b2.JPG'

import Nav from 'react-bootstrap/Nav'

import styles from '../../../assets/styles/Entertainment.module.css'

const Trip = () => {
  return (
    <>
      <div className={styles.contentflex}>
        <Nav>
          <Nav.Link className='text-dark' href='http://razihos.tums.ac.ir/category?cat=71'>
            <div className={styles.card}>
              <img src={img} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>       بیمارستان پوست رازی       </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>تهران </span>

              </div>
            </div>

          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://www.clinichairtransplantation.com/ClinicDetail/1318/%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9-%D8%AA%D8%AE%D8%B5%D8%B5%DB%8C-%D9%BE%D9%88%D8%B3%D8%AA%D8%8C-%D9%85%D9%88-%D9%88-%D8%B2%DB%8C%D8%A8%D8%A7%DB%8C%DB%8C-%D8%A2%D8%AA%D8%B1%DB%8C%D8%B3%D9%80%D8%A7'>
            <div className={styles.card}>
              <img src={img1} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>             مرکز لیزر آتیسا  </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>تهران</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-dark' href='https://zorofemesitak.com/fa/%D8%B8%D8%B1%D9%88%D9%81-%D9%85%D8%B3%DB%8C-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%B2%D9%86%D8%AC%D8%A7%D9%86/news/2020/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%85%D8%B3-%D8%A7%D8%B2-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-%D9%85%D8%B3-%D8%B2%D9%86%D8%AC%D8%A7%D9%86/'>
            <div className={styles.card}>
              <img src={img2} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>          آرایشگاه الی     </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>تهران</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default Trip

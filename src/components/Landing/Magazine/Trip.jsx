import React from 'react'
import trip from '../../../assets/img/entertainment/trip.jpg'
import img from '../../../assets/img/entertainment/g1.JPG'
import img1 from '../../../assets/img/entertainment/g2.JPG'
import img2 from '../../../assets/img/entertainment/g3.jpg'
import img3 from '../../../assets/img/entertainment/g4.JPG'
import img4 from '../../../assets/img/entertainment/g5.JPG'

import Nav from 'react-bootstrap/Nav'

import styles from '../../../assets/styles/Entertainment.module.css'

const Trip = () => {
  return (
    <>
      <div className={styles.contentflex}>
        <Nav>
          <Nav.Link className='text-dark' href='https://disamag.com/%D9%BE%D8%A7%D9%88%D8%B1%D9%BE%D9%88%DB%8C%D9%86%D8%AA-%D8%AE%D8%A7%D9%86%D9%87-%D8%B7%D8%A8%D8%A7%D8%B7%D8%A8%D8%A7%DB%8C%DB%8C%E2%80%8C%D9%87%D8%A7-%DA%A9%D8%A7%D8%B4%D8%A7%D9%86/'>
            <div className={styles.card}>
              <img src={img2} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>           خانه‌ی طباطبایی‌ها </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>کاشان</span>

              </div>
            </div>

          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://irangard.com/mag/%D9%BE%D9%84-%D9%85%D8%B9%D9%84%D9%82-%D9%85%D8%B4%DA%AF%DB%8C%D9%86-%D8%B4%D9%87%D8%B1/'>
            <div className={styles.card}>
              <img src={img} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>         پل معلق مشگین‌شهر</span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>اردبیل</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-dark' href='https://www.irna.ir/news/83254778/%D8%A2%D8%A8%D8%B4%D8%A7%D8%B1%D9%87%D8%A7%DB%8C-%D9%84%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D8%AC%D8%A7%D8%B0%D8%A8%D9%87-%D9%87%D8%A7%DB%8C%DB%8C-%D8%A8%D9%87-%D8%AE%D9%86%D9%83%D8%A7%DB%8C-%D8%A8%D9%87%D8%A7%D8%B1'>
            <div className={styles.card}>
              <img src={img1} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>          آبشار‌های لرستان</span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>لرستان</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://www.kojaro.com/attraction/6395-%D8%BA%D8%A7%D8%B1-%D8%B9%D9%84%DB%8C%D8%B5%D8%AF%D8%B1/'>
            <div className={styles.card}>
              <img src={trip} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>      غار علیصدر   </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>همدان</span>

              </div>
            </div>

          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-dark' href='https://www.flytoday.ir/blog/%D9%85%DB%8C%D8%AF%D8%A7%D9%86-%D9%86%D9%82%D8%B4-%D8%AC%D9%87%D8%A7%D9%86-%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86/'>
            <div className={styles.card}>
              <img src={img4} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>       میدان نقش‌جهان    </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>اصفهان</span>

              </div>
            </div>

          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-dark' href='https://www.eligasht.com/Blog/tourism/%D8%AF%D8%B4%D8%AA-%D9%87%D9%88%DB%8C%D8%AC%D8%9B-%D8%AA%DA%A9%D9%87%E2%80%8C-%D8%A7%DB%8C-%D8%A7%D8%B2-%D8%A8%D9%87%D8%B4%D8%AA-%D8%A7%D9%85%D8%A7-%D9%86%D8%B2%D8%AF%DB%8C%DA%A9-%D8%AA%D9%87%D8%B1/'>
            <div className={styles.card}>
              <img src={img3} className={styles.img} />
              <span className='text-center mt-2  border-bottom border-secondary mx-3 pb-2'>       دشت هویچ   </span>
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

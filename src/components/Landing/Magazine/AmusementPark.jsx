import React from 'react'
import img from '../../../assets/img/entertainment/a1.JPG'
import img1 from '../../../assets/img/entertainment/a2.JPG'
import img2 from '../../../assets/img/entertainment/a3.JPG'

import styles from '../../../assets/styles/Entertainment.module.css'
import Nav from 'react-bootstrap/Nav'

const AmusementPark = () => {
  return (
    <>
      <div className={styles.contentflex}>
        <Nav>
          <Nav.Link className='text-dark' href='https://snapproom.com/blog/%D9%BE%D8%A7%D8%B1%DA%A9-%D9%87%D8%A7%DB%8C-%D8%A2%D8%A8%DB%8C-%D9%85%D8%B4%D9%87%D8%AF/'>
            <div className={styles.card}>
              <img src={img} className={styles.img} />
              <span className='text-center mt-2 border-bottom border-secondary mx-3 pb-2'>          موج‌های خروشان        </span>
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>مشهد</span>

              </div>
            </div>

          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://arshaclub.com/about'>
            <div className={styles.card}>
              <img src={img2} className={styles.img} />
              <span className='text-center mt-2 border-bottom border-secondary mx-3 pb-2'>                ارشا کلاب  </span>
              {/* <hr style={{position:'relative'}} className='mx-3' /> */}
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>تهران</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://www.raheeno.com/article/3083/%D9%BE%D8%A7%D8%B1%DA%A9-%D8%AC%D9%85%D8%B4%DB%8C%D8%AF%DB%8C%D9%87.aspx'>
            <div className={styles.card}>
              <img src={img1} className={styles.img} />
              <span className='text-center mt-2 border-bottom border-secondary mx-3 pb-2'>         پارک جمشیدیه        </span>
              <div className='d-flex flex-row flex-wrap justify-content-center my-1 text-danger mx-2'>

                <span>تهران </span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default AmusementPark

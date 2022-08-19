import React from 'react'
import img2 from '../../../assets/img/entertainment/r3.JPG'
import img from '../../../assets/img/entertainment/r1.JPG'
import img1 from '../../../assets/img/entertainment/r2.JPG'

import styles from '../../../assets/styles/Entertainment.module.css'
import Nav from 'react-bootstrap/Nav'

const CofeRestaurant = () => {
  return (
    <>
      <div className={styles.contentflex}>
        <Nav>
          <Nav.Link className='text-dark' href='https://faragasht.com/shandiz-mashhad/'>
            <div className={styles.card}>
              <img src={img} className={styles.img} />
              <span className='text-center mt-2'>         رستوران شاندیز       </span>
              <hr className='mx-3' />
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>مشهد</span>

              </div>
            </div>

          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className='text-dark' href='https://orkidehrestaurant.com/introduce-orkideh-saadat-abad-branch/'>
            <div className={styles.card}>
              <img src={img2} className={styles.img} />
              <span className='text-center mt-2'>               رستوران ارکیده  </span>
              <hr className='mx-3' />
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span> جاده چالوس   </span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-dark' href='https://foodism.app/place/%DA%A9%D8%A7%D9%81%D9%87-%D8%AF%D8%A7%D8%B1%DA%86%DB%8C%D9%86#lg=1&slide=7'>
            <div className={styles.card}>
              <img src={img1} className={styles.img} />
              <span className='text-center mt-2'>        کافه دارچین        </span>
              <hr className='mx-3' />
              <div className='d-flex flex-row flex-wrap text-danger justify-content-center my-1 mx-2'>
                <span>کرج</span>

              </div>
            </div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default CofeRestaurant

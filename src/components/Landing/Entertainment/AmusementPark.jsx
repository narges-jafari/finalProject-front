import React from 'react'
import img from '../../../assets/img/entertainment/park.jpg'
import styles from '../../../assets/styles/Entertainment.module.css'

const AmusementPark = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 justify-content-between mx-3' style={{ cursor: 'pointer' }}>
        <div className={styles.card}>
          <img src={img} className={styles.img} />
          <span className='text-center mt-2'>  شهربازی ارم</span>
          <hr className='mx-3' />
          <div className='d-flex flex-row flex-wrap justify-content-center my-1 mx-2'>
            <div className='mx-2'>
              <span>23</span>
              <i className='fa fa-comment text-secondary' />
            </div>
            <div className='mx-2'>
              <span>34</span>
              <i className='fa fa-heart text-danger' />
            </div>
            <div className='mx-2'>
              <span>123</span>
              <i className='fa fa-eye text-secondary' />

            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={img} className={styles.img} />
          <span className='text-center mt-2'>  شهربازی ارم</span>
          <hr className='mx-3' />
          <div className='d-flex flex-row flex-wrap justify-content-center my-1 mx-2'>
            <div className='mx-2'>
              <span>23</span>
              <i className='fa fa-comment text-secondary' />
            </div>
            <div className='mx-2'>
              <span>34</span>
              <i className='fa fa-heart text-danger' />
            </div>
            <div className='mx-2'>
              <span>123</span>
              <i className='fa fa-eye text-secondary' />

            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={img} className={styles.img} />
          <span className='text-center mt-2'>  شهربازی ارم</span>
          <hr className='mx-3' />
          <div className='d-flex flex-row flex-wrap justify-content-center my-1 mx-2'>
            <div className='mx-2'>
              <span>23</span>
              <i className='fa fa-comment text-secondary' />
            </div>
            <div className='mx-2'>
              <span>34</span>
              <i className='fa fa-heart text-danger' />
            </div>
            <div className='mx-2'>
              <span>123</span>
              <i className='fa fa-eye text-secondary' />

            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={img} className={styles.img} />
          <span className='text-center mt-2'>  شهربازی ارم</span>
          <hr className='mx-3' />
          <div className='d-flex flex-row flex-wrap justify-content-center my-1 mx-2'>
            <div className='mx-2'>
              <span>23</span>
              <i className='fa fa-comment text-secondary' />
            </div>
            <div className='mx-2'>
              <span>34</span>
              <i className='fa fa-heart text-danger' />
            </div>
            <div className='mx-2'>
              <span>123</span>
              <i className='fa fa-eye text-secondary' />

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AmusementPark

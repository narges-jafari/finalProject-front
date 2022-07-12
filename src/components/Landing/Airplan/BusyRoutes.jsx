import React from 'react'
import img from '../../../assets/img/Hotel/mahan.jpg'
import imglogo from '../../../assets/img/Hotel/ml.jpg'
import styles from '../../../assets/styles/Airport.module.css'
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa'


const BusyRoutes = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 mx-4 justify-content-between '>
        <div className=' d-flex flex-row justify-content-center ' style={{ width: '250px' }}>
          <img src={imglogo} className={styles.imgLogoCss} />
        </div>
        <div className={styles.card}>
          <img src={img} className={styles.imgCss} />
          <div className='d-flex flex-column flex-wrap py-2 bg-light'>
            <div>
              <i className='fa fa-map-marker mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} />
              <span>مبدا: اذربایجان شرقی</span>
            </div>
            <div>
              <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ color: '#e5e5f8' }} />
              <span>مقصد:مشهد </span>
            </div>
          </div>
          <div className='d-flex flex-row py-2 bg-danger'>
            <i className='fa fa-user mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} />
            <span>ظرفیت:4نفر </span>
            <i className='fa fa-dollar mx-2 my-2 fa-lg ' style={{ color: '#e5e5f8' }} />
            <span>قیمت:35000 </span>

          </div>
          <div className='d-flex flex-row flex-wrap py-2  justify-content-center mx-3'>
            <button className='btn btn-success btn-sm mx-2 w-50 text-center mt-3 '>خرید</button>
          </div>

        </div>
        <div className={styles.card}>
          <img src={img} className={styles.imgCss} />
          <div className='d-flex flex-column flex-wrap py-2 bg-light'>
            <div>
              <i className='fa fa-map-marker mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} />
              <span>مبدا: اذربایجان شرقی</span>
            </div>
            <div>
              <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ color: '#e5e5f8' }} />
              <span>مقصد:مشهد </span>
            </div>
          </div>
          <div className='d-flex flex-row py-2 bg-danger'>
            <i className='fa fa-user mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} />
            <span>ظرفیت:4نفر </span>
            <i className='fa fa-dollar mx-2 my-2 fa-lg ' style={{ color: '#e5e5f8' }} />
            <span>قیمت:35000 </span>

          </div>
          <div className='d-flex flex-row flex-wrap py-2  justify-content-center mx-3'>
            <button className='btn btn-success btn-sm mx-2 w-50 text-center mt-3 '>خرید</button>
          </div>

        </div>
        <div className={styles.card}>
          <img src={img} className={styles.imgCss} />
          <div className='d-flex flex-column flex-wrap py-2 bg-light'>
            <div>
              <i className='fa fa-map-marker mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} />
              <span>مبدا: اذربایجان شرقی</span>
            </div>
            <div>
              <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ color: '#e5e5f8' }} />
              <span>مقصد:مشهد </span>
            </div>
          </div>
          <div className='d-flex flex-row py-2 bg-danger'>
            <i className='fa fa-user mx-2 my-2 fa-lg  ' style={{ color: '#e5e5f8' }} />
            <span>ظرفیت:4نفر </span>
            <i className='fa fa-dollar mx-2 my-2 fa-lg ' style={{ color: '#e5e5f8' }} />
            <span>قیمت:35000 </span>

          </div>
          <div className='d-flex flex-row flex-wrap py-2  justify-content-center mx-3'>
            <button className='btn btn-success btn-sm mx-2 w-50 text-center mt-3 '>خرید</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default BusyRoutes

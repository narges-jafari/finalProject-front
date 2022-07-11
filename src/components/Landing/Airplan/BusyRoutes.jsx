import React from 'react'
import img from '../../../assets/img/Hotel/mahan.jpg'
import imglogo from '../../../assets/img/Hotel/ml.jpg'
import styles from '../../../assets/styles/Airport.module.css'

const BusyRoutes = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 mx-4 justify-content-between '>
        <div className=' d-flex flex-row justify-content-center ' style={{ width: '250px' }}>
          <img src={imglogo} className={styles.imgLogoCss} />
        </div>
        <div className={styles.card}>
          <img src={img} className={styles.imgCss} />

          <div className='d-flex flex-row flex-wrap'>
            <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary' />
            <span>مبدا:تهران</span>
            <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary' />
            <span>مقصد:مشهد </span>
          </div>
          <div>
            <i className='fa fa-user mx-2 my-2 fa-lg  text-primary' />
            <span>ظرفیت:4نفر </span>
            <i className='fa fa-money mx-2 my-2 fa-lg  text-primary' />
            <span>قیمت:35000 </span>

          </div>
          <div className='d-flex flex-row flex-wrap my-2  mx-3'>
            <button className='btn btn-secondary btn-sm mx-2 w-25 mt-5'>خرید</button>
            <button className='btn btn-secondary btn-sm w-50  mt-5'>اطلاعات</button>
          </div>

        </div>
        <div className={styles.card}>
          <img src={img} className={styles.imgCss} />
          <div className='d-flex flex-row flex-wrap'>
            <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary' />
            <span>مبدا:تهران</span>
            <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary' />
            <span>مقصد:مشهد </span>
          </div>
          <div>
            <i className='fa fa-user mx-2 my-2 fa-lg  text-primary' />
            <span>ظرفیت:4نفر </span>
            <i className='fa fa-money mx-2 my-2 fa-lg  text-primary' />
            <span>قیمت:35000 </span>

          </div>
          <div className='d-flex flex-row flex-wrap my-2  mx-3'>
            <button className='btn btn-secondary btn-sm mx-2 w-25 mt-5'>خرید</button>
            <button className='btn btn-secondary btn-sm w-50  mt-5'>اطلاعات</button>
          </div>

        </div>
        <div className={styles.card}>
          <img src={img} className={styles.imgCss} />
          <div className='d-flex flex-row flex-wrap'>
            <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary' />
            <span>مبدا:تهران</span>
            <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary' />
            <span>مقصد:مشهد </span>
          </div>
          <div>
            <i className='fa fa-user mx-2 my-2 fa-lg  text-primary' />
            <span>ظرفیت:4نفر </span>
            <i className='fa fa-money mx-2 my-2 fa-lg  text-primary' />
            <span>قیمت:35000 </span>

          </div>
          <div className='d-flex flex-row flex-wrap my-2  mx-3'>
            <button className='btn btn-secondary btn-sm mx-2 w-25 mt-5'>خرید</button>
            <button className='btn btn-secondary btn-sm w-50  mt-5'>اطلاعات</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default BusyRoutes

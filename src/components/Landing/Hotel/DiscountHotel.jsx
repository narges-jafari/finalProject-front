import React from 'react'
import img from '../../../assets/img/Hotel/eshotel.jpeg'
import styles from '../../../assets/styles/HotelSearch.module.css'


const DiscountHotel = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 justify-content-between mx-3' style={{ cursor: 'pointer' }}>
        <div className={styles.card}>
          <div className='d-flex flex-row flex-wrap mt-2 justify-content-end ' style={{ position: 'absolute', width: '250px' }}>
            <i className='fa fa-star  text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />

            {/* <i className='fa fa-star-half-full text-danger fa-lg' /> */}
          </div>
          <img src={img} className=' px-0 py-0' />
          <span className='text-center mt-2'>هتل پارسیان استقلال</span>
          <hr />
          <span className='text-center'>30%تخفیف</span>
          <span className='text-center mt-2'>شروع قیمت از234 </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>
        <div className={styles.card}>
          <div className='d-flex flex-row flex-wrap mt-2 justify-content-end ' style={{ position: 'absolute', width: '250px' }}>
            <i className='fa fa-star  text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />

            {/* <i className='fa fa-star-half-full text-danger fa-lg' /> */}
          </div>
          <img src={img} className=' px-0 py-0' />
          <span className='text-center mt-2'>هتل پارسیان استقلال</span>
          <hr />
          <span className='text-center'>30%تخفیف</span>
          <span className='text-center mt-2'>شروع قیمت از234 </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>
        <div className={styles.card}>
          <div className='d-flex flex-row flex-wrap mt-2 justify-content-end ' style={{ position: 'absolute', width: '250px' }}>
            <i className='fa fa-star  text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />

            {/* <i className='fa fa-star-half-full text-danger fa-lg' /> */}
          </div>
          <img src={img} className=' px-0 py-0' />
          <span className='text-center mt-2'>هتل پارسیان استقلال</span>
          <hr />
          <span className='text-center'>30%تخفیف</span>
          <span className='text-center mt-2'>شروع قیمت از234 </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>
        <div className={styles.card}>
          <div className='d-flex flex-row flex-wrap mt-2 justify-content-end ' style={{ position: 'absolute', width: '250px' }}>
            <i className='fa fa-star  text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />
            <i className='fa fa-star text-danger fa-lg' />

            {/* <i className='fa fa-star-half-full text-danger fa-lg' /> */}
          </div>
          <img src={img} className=' px-0 py-0' />
          <span className='text-center mt-2'>هتل پارسیان استقلال</span>
          <hr />
          <span className='text-center'> 30%تخفیف</span>
          <span className='text-center mt-2'>شروع قیمت از234 </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>

      </div>
    </>
  )
}

export default DiscountHotel

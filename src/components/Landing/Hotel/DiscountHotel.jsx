import React from 'react'
import img from '../../../assets/img/Hotel/eshotel.jpeg'

const DiscountHotel = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 justify-content-between mx-3'>
        <div className='  d-flex flex-column rounded-3 ' style={{ width: '250px', boxShadow: '0 0 4px 1px #ddd' }}>
          <div className='d-flex flex-row flex-wrap' style={{ position: 'absolute' }}>
            <i className='fa fa-star  text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star-half-full text-danger' />
          </div>
          <img src={img} className=' px-0 py-0' />
          <span>هتل پارسیان استقلال</span>
          <hr />
          <span>تخفیف</span>
          <span>شروع قیمت از </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>
        <div className='  d-flex flex-column rounded-3 ' style={{ width: '250px', boxShadow: '0 0 4px 1px #ddd' }}>
          <div className='d-flex flex-row flex-wrap' style={{ position: 'absolute' }}>
            <i className='fa fa-star  text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star-half-full text-danger' />
          </div>
          <img src={img} className=' px-0 py-0' />
          <span>هتل پارسیان استقلال</span>
          <hr />
          <span>تخفیف</span>
          <span>شروع قیمت از </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>
        <div className='  d-flex flex-column rounded-3 ' style={{ width: '250px', boxShadow: '0 0 4px 1px #ddd' }}>
          <div className='d-flex flex-row flex-wrap' style={{ position: 'absolute' }}>
            <i className='fa fa-star  text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star-half-full text-danger' />
          </div>
          <img src={img} className=' px-0 py-0' />
          <span>هتل پارسیان استقلال</span>
          <hr />
          <span>تخفیف</span>
          <span>شروع قیمت از </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>
        <div className='  d-flex flex-column rounded-3 ' style={{ width: '250px', boxShadow: '0 0 4px 1px #ddd' }}>
          <div className='d-flex flex-row flex-wrap' style={{ position: 'absolute' }}>
            <i className='fa fa-star  text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star text-danger' />
            <i className='fa fa-star-half-full text-danger' />
          </div>
          <img src={img} className=' px-0 py-0' />
          <span>هتل پارسیان استقلال</span>
          <hr />
          <span>تخفیف</span>
          <span>شروع قیمت از </span>
          <button className='btn btn-secondary btn-sm rounded-0 mt-5'>هم اکنون رزرو کنید</button>
        </div>

      </div>
    </>
  )
}

export default DiscountHotel

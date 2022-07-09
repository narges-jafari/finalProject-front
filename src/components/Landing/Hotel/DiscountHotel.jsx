import React from 'react'
import img from '../../../assets/img/Hotel/eshotel.jpeg'

const DiscountHotel =() =>{
    return(
        <>
        <div className='d-flex flex-row flex-wrap my-2 justify-content-between mx-3'>
            <div  className='border border-primary  d-flex flex-column ' style={{width:'250px'}}>
                <div className='d-flex flex-row flex-wrap' style={{position:'absolute'}}>
                <i className='fa fa-star  text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star-half-full text-danger'/>
                </div>
            <img src={img} className=' border'/>
                    <span>هتل پارسیان استقلال</span>
                    <hr/>
                    <span>تخفیف</span>
                    <span>شروع قیمت از </span>
                    <button className='btn btn-secondary btn-sm  mt-5'>هم اکنون رزرو کنید</button>
            </div>
            <div  className='border border-primary  d-flex flex-column ' style={{width:'250px'}}>
            <div className='d-flex flex-row flex-wrap' style={{position:'absolute'}}>
                <i className='fa fa-star  text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star-half-full text-danger'/>
                </div>
            <img src={img} className=' border'/>
                    <span>هتل پارسیان استقلال</span>
                    <hr/>
                    <span>تخفیف</span>
                    <span>شروع قیمت از </span>
                    <button className='btn btn-secondary btn-sm  mt-5'>هم اکنون رزرو کنید</button>
            </div>
            <div  className='border border-primary  d-flex flex-column ' style={{width:'250px'}}>
            <div className='d-flex flex-row flex-wrap' style={{position:'absolute'}}>
                <i className='fa fa-star  text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star-half-full text-danger'/>
                </div>
            <img src={img} className=' border'/>
                    <span>هتل پارسیان استقلال</span>
                    <hr/>
                    <span>تخفیف</span>
                    <span>شروع قیمت از </span>
                    <button className='btn btn-secondary btn-sm  mt-5'>هم اکنون رزرو کنید</button>
            </div>
            <div  className='border border-primary d-flex flex-column  ' style={{width:'250px'}}>
            <div className='d-flex flex-row flex-wrap bg-success' style={{position:'absolute'}}>
                <i className='fa fa-star  text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star text-danger'/>
                <i className='fa fa-star-half-full text-danger'/>
                </div>
            <img src={img} className=' border'/>
                    <span>هتل پارسیان استقلال</span>
                    <hr/>
                    <span>تخفیف</span>
                    <span>شروع قیمت از </span>
                    <button className='btn btn-secondary btn-sm mt-5'>هم اکنون رزرو کنید</button>
            </div>
            {/* <div  className='border border-primary  d-flex flex-column ' style={{width:'250px'}}>
            <img src={img} className=' border'/>
                    <span>هتل پارسیان استقلال</span>
                    <hr/>
            </div> */}



        </div>
        
        </>
        )


}

export default DiscountHotel

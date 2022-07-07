import React from 'react'
import img from '../../assets/img/Hotel/mahan.jpg'

const BusyRoutes =() => {
    return (
        <>
        <div className='d-flex flex-row flex-wrap my-2 justify-content-center mx-3'>
            <div  className='border border-primary mx-4 d-flex flex-column ' style={{width:'250px'}}>
            <img src={img} className=' border'/>
            <span>شرکت هواپیمایی ماهان </span>
                    <hr/>
                    <div className='d-flex flex-row flex-wrap'>
                    <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary'/>
                    <span>مبدا:تهران</span>
                    <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary'/>
                    <span>مقصد:مشهد </span>
                    </div>
                   
                     <div>
                     <i className='fa fa-user mx-2 my-2 fa-lg  text-primary'/>
                     <span>ظرفیت:4نفر </span>
                     <i className='fa fa-money mx-2 my-2 fa-lg  text-primary'/>
                     <span>قیمت:35000 </span>

                     </div>
                  
                  <div  className='d-flex flex-row flex-wrap my-2  mx-3'>
                  <button className='btn btn-secondary btn-sm mx-2 w-25 mt-5'>خرید</button>
                    <button className='btn btn-secondary btn-sm w-50  mt-5'>اطلاعات</button>
                  </div>
               

            </div>
            <div  className='border border-primary  d-flex flex-column ' style={{width:'250px'}}>
            <img src={img} className=' border'/>
            <span>شرکت هواپیمایی ماهان </span>
                    <hr/>
                    <div className='d-flex flex-row flex-wrap'>
                    <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary'/>
                    <span>مبدا:تهران</span>
                    <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary'/>
                    <span>مقصد:مشهد </span>
                    </div>
                   
                     <div>
                     <i className='fa fa-user mx-2 my-2 fa-lg  text-primary'/>
                     <span>ظرفیت:4نفر </span>
                     <i className='fa fa-money mx-2 my-2 fa-lg  text-primary'/>
                     <span>قیمت:35000 </span>

                     </div>
                  
                  <div  className='d-flex flex-row flex-wrap my-2  mx-3'>
                  <button className='btn btn-secondary btn-sm mx-2 w-25 mt-5'>خرید</button>
                    <button className='btn btn-secondary btn-sm w-50  mt-5'>اطلاعات</button>
                  </div>
               

            </div>
            <div  className='border border-primary mx-4  d-flex flex-column ' style={{width:'250px'}}>
            <img src={img} className=' border'/>
            <span>شرکت هواپیمایی ماهان </span>
                    <hr/>
                    <div className='d-flex flex-row flex-wrap'>
                    <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary'/>
                    <span>مبدا:تهران</span>
                    <i className='fa fa-map-marker mx-2 my-2 fa-lg  text-primary'/>
                    <span>مقصد:مشهد </span>
                    </div>
                   
                     <div>
                     <i className='fa fa-user mx-2 my-2 fa-lg  text-primary'/>
                     <span>ظرفیت:4نفر </span>
                     <i className='fa fa-money mx-2 my-2 fa-lg  text-primary'/>
                     <span>قیمت:35000 </span>

                     </div>
                  
                  <div  className='d-flex flex-row flex-wrap my-2  mx-3'>
                  <button className='btn btn-secondary btn-sm mx-2 w-25 mt-5'>خرید</button>
                    <button className='btn btn-secondary btn-sm w-50  mt-5'>اطلاعات</button>
                  </div>
               

            </div>
        </div>
        </>
        )

}

export default BusyRoutes
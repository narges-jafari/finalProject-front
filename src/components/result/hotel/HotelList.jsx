
import React, { useState } from 'react'
import img from '../../../assets/img/need/5.JPG'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { FaPlane } from 'react-icons/fa'
import PriceTable from '../airplane/PriceTable'
import { FcSalesPerformance } from 'react-icons/fc'

const HotelList = (props) => {
  const [showPriceTableModal, setShowPriceTableModal] = useState(false)

  return (
    <>
      <div>
        <button
          type='button'
          data-toggle='modal'
          onClick={() => {
            if (!showPriceTableModal) {
              setShowPriceTableModal(true)
            }
          }}
          className='btn py-1  mt-2 mx-2  bg-soft   text-primary text-nowrap '
        >
          <FcSalesPerformance className='fa-lg' /> مقایسه قیمت‌ها
        </button>
        {showPriceTableModal && (
          <PriceTable
            isOpen={showPriceTableModal}
            setIsOpen={setShowPriceTableModal}
          />
        )}
      </div>
      <div className='d-fkex flex-column w-100 '>

        <div className={styles.content1}>
          <div className={styles.contentItem2}>
            <div className={styles.divCss}>
              <img src={img} style={{ width: '100%', height: '95%', borderRadius: '12px', margin: '12px 0px 10px 0px' }} />
            </div>
            <div className='d-flex flex-column w-50 px-4  ' style={{ width: '60%' }}>
              <div className='mt-2 ' style={{ fontSize: '25px' }}> هتل استقلال</div>
              <div className='mt-2'>
                <i className='fa fa-star fa-lg mx-1 text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />

              </div>
              <div className='mt-2 text-secondary' style={{ fontSize: '14px' }}>
                شروع قیمت برای یک شب
              </div>
              <span className='mt-2  text-danger' style={{ fontSize: '22px' }}>1200000 تومان</span>
              <span className='' style={{ fontSize: '20px' }}><i className='fa fa-map-marker px-2 ' />تهران</span>
              <span className='mt-2 w-100  rounded-3 px-4  text-center py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
              <button className='btn w-100 btn-lg  btn-danger rounded-3  mt-2'> انتخاب</button>

            </div>

          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentItem2}>
            <div className={styles.divCss}>
              <img src={img} style={{ width: '100%', height: '95%', borderRadius: '12px', margin: '12px 0px 10px 0px' }} />
            </div>
            <div className='d-flex flex-column w-50 px-4  ' style={{ width: '60%' }}>
              <div className='mt-2 ' style={{ fontSize: '25px' }}> هتل استقلال</div>
              <div className='mt-2'>
                <i className='fa fa-star fa-lg mx-1 text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />

              </div>
              <div className='mt-2 text-secondary' style={{ fontSize: '14px' }}>
                شروع قیمت برای یک شب
              </div>
              <span className='mt-2  text-danger' style={{ fontSize: '22px' }}>1200000 تومان</span>
              <span className='' style={{ fontSize: '20px' }}><i className='fa fa-map-marker px-2 ' />تهران</span>
              <span className='mt-2 w-100  rounded-3 px-4  text-center py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
              <button className='btn w-100 btn-lg  btn-danger rounded-3  mt-2'> انتخاب</button>

            </div>

          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentItem2}>
            <div className={styles.divCss}>
              <img src={img} style={{ width: '100%', height: '95%', borderRadius: '12px', margin: '12px 0px 10px 0px' }} />
            </div>
            <div className='d-flex flex-column w-50 px-4  ' style={{ width: '60%' }}>
              <div className='mt-2 ' style={{ fontSize: '25px' }}> هتل استقلال</div>
              <div className='mt-2'>
                <i className='fa fa-star fa-lg mx-1 text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />
                <i className='fa fa-star fa-lg  text-warning' />

              </div>
              <div className='mt-2 text-secondary' style={{ fontSize: '14px' }}>
                شروع قیمت برای یک شب
              </div>
              <span className='mt-2  text-danger' style={{ fontSize: '22px' }}>1200000 تومان</span>
              <span className='' style={{ fontSize: '20px' }}><i className='fa fa-map-marker px-2 ' />تهران</span>
              <span className='mt-2 w-100  rounded-3 px-4  text-center py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
              <button className='btn w-100 btn-lg  btn-danger rounded-3  mt-2'> انتخاب</button>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default HotelList


import React, { useState } from 'react'
import img from '../../../assets/img/logo1.JPG'
import styles from '../../../assets/styles/AirplaneList.module.css'
import PriceTable from '../airplane/PriceTable'
import { FcSalesPerformance } from 'react-icons/fc'

const TrainList = (props) => {
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
          className='btn py-1  my-2 mx-2  bg-soft   text-primary text-nowrap '
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
      <div className='d-flex flex-column '>

        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div>
              <img src={img} className={styles.imgCss} />
              <span> رجا </span>

            </div>
            <div className={styles.chaircss}>
              <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> 6 صندلی مانده</span>
              <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.fontCss}>تهران</span>
              <span className={styles.clockcss}> 14:00</span>
            </div>
            <div><i className=' fa fa-train' /></div>
            <div>
              <span className={styles.fontCss}>مشهد</span>
              <span className={styles.clockcss}> 15:30</span>
            </div>
          </div>
          <div className={styles.contentItem1}>
            <div>
              <span> مهر آباد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
            <div>
              <span>1ساعت 30 دقیقه</span>
            </div>
            <div>
              <span>مشهد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
          </div>
          <div className={styles.contentIte3}>
            <div className='d-flex flex-column'>
              <span className='mt-1 text-center'>قیمت هر مسافر </span>
              <span className='text-primary' style={{ fontWeight: 'bold', fontSize: '20px' }}>  1200000 تومان</span>
            </div>
            <span className='mt-2  rounded-3 px-4 mx-2 py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
            <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>
          </div>

        </div>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div>
              <img src={img} className={styles.imgCss} />
              <span> زاگرس </span>

            </div>
            <div className={styles.chaircss}>
              <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> 6 صندلی مانده</span>
              <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.fontCss}>تهران</span>
              <span className={styles.clockcss}> 14:00</span>
            </div>
            <div><i className=' fa fa-plane' style={{ transform: 'rotate(226deg)' }} /></div>
            <div>
              <span className={styles.fontCss}>مشهد</span>
              <span className={styles.clockcss}> 15:30</span>
            </div>
          </div>
          <div className={styles.contentItem1}>
            <div>
              <span> مهر آباد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
            <div>
              <span>1ساعت 30 دقیقه</span>
            </div>
            <div>
              <span>مشهد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
          </div>
          <div className={styles.contentIte3}>
            <div className='d-flex flex-column'>
              <span className='mt-1 text-center'>قیمت هر مسافر </span>
              <span className='text-primary' style={{ fontWeight: 'bold', fontSize: '20px' }}>  1200000 تومان</span>
            </div>
            <span className='mt-2  rounded-3 px-4 mx-2 py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
            <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>
          </div>

        </div>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div>
              <img src={img} className={styles.imgCss} />
              <span> زاگرس </span>

            </div>
            <div className={styles.chaircss}>
              <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> 6 صندلی مانده</span>
              <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.fontCss}>تهران</span>
              <span className={styles.clockcss}> 14:00</span>
            </div>
            <div><i className=' fa fa-plane' style={{ transform: 'rotate(226deg)' }} /></div>
            <div>
              <span className={styles.fontCss}>مشهد</span>
              <span className={styles.clockcss}> 15:30</span>
            </div>
          </div>
          <div className={styles.contentItem1}>
            <div>
              <span> مهر آباد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
            <div>
              <span>1ساعت 30 دقیقه</span>
            </div>
            <div>
              <span>مشهد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
          </div>
          <div className={styles.contentIte3}>
            <div className='d-flex flex-column'>
              <span className='mt-1 text-center'>قیمت هر مسافر </span>
              <span className='text-primary' style={{ fontWeight: 'bold', fontSize: '20px' }}>  1200000 تومان</span>
            </div>
            <span className='mt-2  rounded-3 px-4 mx-2 py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
            <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>
          </div>

        </div>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div>
              <img src={img} className={styles.imgCss} />
              <span> زاگرس </span>

            </div>
            <div className={styles.chaircss}>
              <span className='text-danger rounded-3 mx-2 px-2' style={{ border: '1px solid #ddd' }}> 6 صندلی مانده</span>
              <span className='text-secondary rounded-3 mx-2 px-2 border' style={{ border: '1px solid #ddd' }}> سیستمی </span>

            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.fontCss}>تهران</span>
              <span className={styles.clockcss}> 14:00</span>
            </div>
            <div><i className=' fa fa-plane' style={{ transform: 'rotate(226deg)' }} /></div>
            <div>
              <span className={styles.fontCss}>مشهد</span>
              <span className={styles.clockcss}> 15:30</span>
            </div>
          </div>
          <div className={styles.contentItem1}>
            <div>
              <span> مهر آباد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
            <div>
              <span>1ساعت 30 دقیقه</span>
            </div>
            <div>
              <span>مشهد</span>
              <span> چهارشنبه 21 مرداد </span>
            </div>
          </div>
          <div className={styles.contentIte3}>
            <div className='d-flex flex-column'>
              <span className='mt-1 text-center'>قیمت هر مسافر </span>
              <span className='text-primary' style={{ fontWeight: 'bold', fontSize: '20px' }}>  1200000 تومان</span>
            </div>
            <span className='mt-2  rounded-3 px-4 mx-2 py-2' style={{ fontFamily: 'Vazir', backgroundColor: '#1a1a1a0c', fontSize: '17px', height: '47px' }}>جزییات</span>
            <button className='btn btn-lg btn-danger rounded-3  my-2'> انتخاب</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default TrainList

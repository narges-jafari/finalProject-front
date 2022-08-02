
import React, { useState } from 'react'
import img from '../../../assets/img/logo1.JPG'
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
          className='btn py-1  my-2 mx-2  bg-soft   text-primary text-nowrap '
        >
          <FcSalesPerformance className='fa-lg' /> مقایسه قیمت ها
        </button>
        {showPriceTableModal && (
          <PriceTable
            isOpen={showPriceTableModal}
            setIsOpen={setShowPriceTableModal}
          />
        )}
      </div>
      <div className={styles.content}>

        <div className={styles.contentItem}>
          <div className={styles.information}>
            <div className={styles.logoDiv}>
              <img src={img} className={styles.piclogo} />
              <span className=''>زاگرس</span>
            </div>
            <div className={styles.nameCss}>

              <span className={styles.name}>  سیستمی</span>
              <span className={styles.name}>   اکونومی</span>
              <span className={styles.name}>boeinh737</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaPlane className={styles.picCss} /></span>
              <span className={styles.city}>تهران
                <span className={styles.time}>12:00</span>
              </span>
            </div>

          </div>
          <div className={styles.buyCss}>
            <span className='mt-4'>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>خرید بلیط</button>

          </div>

        </div>

        <div className={styles.contentItem}>
          <div className={styles.information}>
            <div className={styles.logoDiv}>
              <img src={img} className={styles.piclogo} />
              <span className=''>زاگرس</span>
            </div>
            <div className={styles.nameCss}>

              <span className={styles.name}>  سیستمی</span>
              <span className={styles.name}>   اکونومی</span>
              <span className={styles.name}>boeinh737</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaPlane className={styles.picCss} /></span>
              <span className={styles.city}>تهران
                <span className={styles.time}>12:00</span>
              </span>
            </div>

          </div>
          <div className={styles.buyCss}>
            <span className='mt-4'>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>خرید بلیط</button>

          </div>

        </div>
        <div className={styles.contentItem}>
          <div className={styles.information}>
            <div className={styles.logoDiv}>
              <img src={img} className={styles.piclogo} />
              <span className=''>زاگرس</span>
            </div>
            <div className={styles.nameCss}>

              <span className={styles.name}>  سیستمی</span>
              <span className={styles.name}>   اکونومی</span>
              <span className={styles.name}>boeinh737</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaPlane className={styles.picCss} /></span>
              <span className={styles.city}>تهران
                <span className={styles.time}>12:00</span>
              </span>
            </div>

          </div>
          <div className={styles.buyCss}>
            <span className='mt-4'>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>خرید بلیط</button>

          </div>

        </div>
        <div className={styles.contentItem}>
          <div className={styles.information}>
            <div className={styles.logoDiv}>
              <img src={img} className={styles.piclogo} />
              <span className=''>زاگرس</span>
            </div>
            <div className={styles.nameCss}>

              <span className={styles.name}>  سیستمی</span>
              <span className={styles.name}>   اکونومی</span>
              <span className={styles.name}>boeinh737</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>

              <span><FaPlane className={styles.picCss} /></span>
              <span className={styles.city}>تهران
                <span className={styles.time}>12:00</span>
              </span>
            </div>

          </div>
          <div className={styles.buyCss}>
            <span className='mt-4'>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>خرید بلیط</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default HotelList

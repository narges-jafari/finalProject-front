
import React, { useState } from 'react'
import img from '../../../assets/img/train/3.JPG'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { FaSubway } from 'react-icons/fa'
import PriceChart from './PriceChart'
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
          <FcSalesPerformance className='fa-lg' /> مقایسه قیمت ها
        </button>
        {showPriceTableModal && (
          <PriceChart
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

              <span className={styles.name}>  کوپه ای 4نفره</span>
              <span className={styles.name}>   4ستاره4تختهامید</span>
              <span className={styles.name}>رجا</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaSubway className={styles.picCss} /></span>
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

              <span className={styles.name}>  کوپه ای 4نفره</span>
              <span className={styles.name}>   4ستاره4تختهامید</span>
              <span className={styles.name}>رجا</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaSubway className={styles.picCss} /></span>
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

              <span className={styles.name}>  کوپه ای 4نفره</span>
              <span className={styles.name}>   4ستاره4تختهامید</span>
              <span className={styles.name}>رجا</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaSubway className={styles.picCss} /></span>
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

              <span className={styles.name}>  کوپه ای 4نفره</span>
              <span className={styles.name}>   4ستاره4تختهامید</span>
              <span className={styles.name}>رجا</span>

            </div>
            <div className={styles.nameCss}>
              <span className={styles.city}>خراسان رضوی
                <span className={styles.time}>21:00</span>
              </span>
              <span><FaSubway className={styles.picCss} /></span>
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

export default TrainList

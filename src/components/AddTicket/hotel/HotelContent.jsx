import React, { useState } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import { dropdown1 } from '../../../constants/dropdown.js'

const HotelContent = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [traiTicket, setTrainticket] = useState(false)
  const [ticketDropDown, setTicketDropDown] = useState(false)
  const [showPassengerModal, setShowPassengerModal] = useState(false)

  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>   نام هتل</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>  ستاره هتل</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>نام استان  </label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>  آدرس</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>

          <div className={styles.content}>
            <label>    از تاریخ  </label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>  تا تاریخ  </label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>

          <div className={styles.content}>
            <label>    ظرفیت</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label> آپلود تصاویر  </label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>

        </div>

        <div className='d-flex flex-column mt-3 flex-wrap justify-content-between'>
          <label>اطلاعات</label>
          <textarea />
        </div>
        <div className={styles.content}>
          <button className='btn btn-sm btn-danger my-4 py-4 rounded-3  px-4 ' style={{ fontFamily: 'Vazir', fontSize: '18px', fontWeight: 'bold' }}>اضافه کردن</button>

        </div>

      </div>
    </>
  )
}

export default HotelContent

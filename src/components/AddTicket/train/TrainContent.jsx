import React, { useState, useRef } from 'react'

import styles from '../../../assets/styles/TrainContent.module.css'

import {trainCompany } from '../../../constants/trainCompany'



const TrainContent = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [traiTicket, setTrainticket] = useState(false)
  const [ticketDropDown, setTicketDropDown] = useState(false)
  const [showPassengerModal, setShowPassengerModal] = useState(false)
  const[showTrainCompany,setShowTrainCompany] =useState('')
  const[showTrainClass,setShowTrainClass] =useState('')
  const firstUpdate = useRef(true)


  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>
      
      
        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>  شهر مبدا</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label> شهر مقصد</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>راه آهن مبدا</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>راه آهن مقصد</label>
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
            <label>   ساعت حرکت</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   ساعت  رسیدن</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   تاریخ</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>     شماره قطار </label>
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
            <label>  نام شرکت   </label>
            <select
              name=''
              value={showTrainCompany}
              onChange={e => {
                firstUpdate.current = false
                setShowTrainCompany(e.target.value)
              }}
            >
              {trainCompany.map((name, index) => (
                <option value={name} key={index}>{name}
                </option>
              ))}
            </select>

          </div>
          <div className={styles.content}>
            <label>    نوع سالن </label>
            <select>
              <option>
                ویژه خواهران
              </option>
              <option>
                معمولی
              </option>
              <option>
                ویژه برادران
              </option>
              <option>
                کوپه دربست
              </option>
            </select>
          </div>

        </div>
        {/* <div className='d-flex flex-row mt-3 flex-wrap justify-content-between'>

        </div> */}
        <div className='d-flex flex-column mt-3 flex-wrap justify-content-between'>
          <label>اطلاعات</label>
          <textarea />
        </div>

        <div>
          <button className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4 '>جستجو</button>
        </div>

      </div>
    </>
  )
}

export default TrainContent

import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useMutation } from '@apollo/client'
import roomMutations from '../../../Apollo/Mutation/roomMutations'
import { hotelProperty } from '../../../constants/hotel'
import styles from '../../../assets/styles/TrainContent.module.css'
import img from '../../../assets/img/bg/finish.JPG'

import { HOTEL_ID, HOTEL_CAPACITY } from '../../../constants/auth'
import { toast, ToastContainer } from 'react-toastify'

const RoomInfo = (props) => {
  const capacityf = window.localStorage.getItem(HOTEL_CAPACITY)

  // STATES

  const [floor, setFloor] = useState(1)
  const [roomNumber, setRoomNumber] = useState(1)
  const [numberBed, setNumberBed] = useState(1)
  let [count, setCount] = useState(capacityf)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [userinfo, setUserInfo] = useState({
    property: [],
    response: []
  })

  // FUNCTION FOR CHECKBOXES
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target
    const { property } = userinfo

    // Case 1 :  The user checks the
    // Case 2  :  The user unchecks the box

    if (checked) {
      setUserInfo({
        property: [...property, value],
        response: [...property, value]
      })
    } else {
      setUserInfo({
        property: property.filter((e) => e !== value),
        response: property.filter((e) => e !== value)
      })
    }
  }

  const hotelId = window.localStorage.getItem(HOTEL_ID)
  // reset function
  const resetFields = () => {
    setFloor('')
    setName('')
    setRoomNumber('')
    setNumberBed('')
    setPrice('')
  }

  // apollo mutations
  const [addRoom] = useMutation(roomMutations.ADDROOM)
  const handleAddRoom = (e) => {
    e.preventDefault()
    addRoom({
      variables: {
        floor: parseInt(floor),
        name: name,
        roomNumber: parseInt(roomNumber),
        numberBed: parseInt(numberBed),
        information: userinfo.response,
        price: parseFloat(price),
        hotel: JSON.parse(hotelId)

      }
    })
      .then(({ data }) => {
        if (data.addRoomInfo !== null) {
          toast.success(' اتاق با موفقیت اضافه شد')
          resetFields()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }
  // counter function
  const decrementCount = () => {
    count = count - 1
    setCount(count)
  }

  return (
    <>

      {count <= 0
        ? <div>
          <img src={img} className={styles.imgCssModal} />
          </div>
        : <>
          <div className={styles.headerCss1}>
            <span>
              باید اطلاعات مربوط به
              <span className={styles.headerCss}>

                {count}
              </span>
              تا را وارد کنید
            </span>
          </div>

          <div className='d-flex flex-column flex-wrap my-2'>

            <div className='d-flex flex-row  flex-wrap justify-content-between'>
              <div className={styles.content}>
                <label>  شماره طبقه  </label>
                <input
                  type='number'
                  value={floor}
                  onChange={e => setFloor(e.target.value)}
                  className={styles.inputcss}
                />
              </div>
              <div className={styles.content}>
                <label>  اسم اتاق </label>
                <input
                  type='text'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={styles.inputcss}
                />
              </div>
              <div className={styles.content}>
                <label>  شماره اتاق </label>
                <input
                  type='number'
                  value={roomNumber}
                  onChange={e => setRoomNumber(e.target.value)}
                  className={styles.inputcss}
                />
              </div>
              <div className={styles.content}>
                <label> تعداد تخت  </label>
                <input
                  type='number'
                  value={numberBed}
                  onChange={e => setNumberBed(e.target.value)}
                  className={styles.inputcss}
                />
              </div>

              <div className={styles.content}>
                <label>    قیمت</label>
                <input
                  type='text'
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  className={styles.inputcss}
                />
              </div>

            </div>

            <div className={styles.headername}>
              امکانات
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-between'>
              <div className='d-flex flex-column justify-content-between'>
                {hotelProperty.slice(0, 6).map((item, index) => (
                  <div className={styles.checkboxCss} key={index}>
                    <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                    <span className={styles.checkboxitem}>{item}</span>
                  </div>
                ))}
              </div>
              <div className='d-flex flex-column justify-content-between'>
                {hotelProperty.slice(6, 12).map((item, index) => (
                  <div className={styles.checkboxCss} key={index}>
                    <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                    <span className={styles.checkboxitem}>{item}</span>
                  </div>
                ))}
              </div>
              <div className='d-flex flex-column justify-content-between'>
                {hotelProperty.slice(12, 18).map((item, index) => (
                  <div className={styles.checkboxCss} key={index}>
                    <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                    <span className={styles.checkboxitem}>{item}</span>
                  </div>
                ))}
              </div>
              <div className='d-flex flex-column justify-content-between'>
                {hotelProperty.slice(18, 24).map((item, index) => (
                  <div className={styles.checkboxCss} key={index}>
                    <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                    <span className={styles.checkboxitem}>{item}</span>
                  </div>
                ))}
              </div>

            </div>
            <div className={styles.content}>
              <button
                onClick={(e) => { handleAddRoom(e); decrementCount(e) }}
                className='btn btn-sm btn-danger my-4 py-4 rounded-3  px-4 ' style={{ fontFamily: 'Vazir', fontSize: '18px', fontWeight: 'bold' }}
              >اضافه کردن
              </button>
              <ToastContainer />

            </div>

          </div>
          </>}

    </>
  )
}

export default RoomInfo

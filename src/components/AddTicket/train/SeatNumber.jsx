import React, { useState, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useMutation } from '@apollo/client'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'
import { trainHallNumber, trainDegree } from '../../../constants/trainCompany'
import styles from '../../../assets/styles/TrainContent.module.css'
import img from '../../../assets/img/bg/finish.JPG'

import { TRAIN_ID, TRAIN_CAPACITY } from '../../../constants/auth'
import { toast, ToastContainer } from 'react-toastify'

const SeatNumber = (props) => {
  const capacityf = window.localStorage.getItem(TRAIN_CAPACITY)

  // STATES
  const [number, setNumber] = useState(1)
  const [numberTrain, setNumberTrain] = useState(1)
  let [count, setCount] = useState(capacityf)
  const [showHallNumber, setShowHalNumber] = useState('')
  const [showTrainDegree, setShowTrainDegree] = useState('')

  // ref
  const firstUpdate = useRef(true)

  const trainid = window.localStorage.getItem(TRAIN_ID)
  // reset function
  const resetFields = () => {
    setNumber('')
    setNumberTrain('')
    setShowHalNumber('')
    setShowTrainDegree('')
  }
  // apollo mutation
  const [addNumber] = useMutation(seatNumberMutations.ADDTRAINSEATNUMBER)
  const handleAddSeatNumber = (e) => {
    e.preventDefault()
    addNumber({
      variables: {
        number: parseInt(number),
        trainCompartment: parseInt(numberTrain),
        hallDegree: showTrainDegree,
        hallNumber: showHallNumber,
        train: JSON.parse(trainid)

      }
    })
      .then(({ data }) => {
        if (data.addSeatNumberTrain !== null) {
          toast.success('شماره صندلی با موفقیت اضافه شد')
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
              باید اطلاعات
              <span style={{ fontFamily: 'Yekan', fontSize: '18px' }} className='badge rounded-circle badge-light bg-danger mx-1'>

                {count}
              </span>
              تا شماره صندلی  اضافه کنید
            </span>
          </div>

          <div
            className='d-flex flex-row flex-wrap   justify-content-between my-1  mx-1 rounded-3 '
            style={{ backgroundColor: '#F2EFFB' }}
          >
            <div className={styles.contentNumber}>
              <label>      شماره صندلی  </label>
              <input
                value={number}
                min='1'
                max='170'
                type='number'
                onChange={e => setNumber(e.target.value)}
              />

            </div>
            <div className={styles.contentNumber}>
              <label>      شماره کوپه  </label>
              <input
                value={numberTrain}
                min='1'
                max='170'
                type='number'
                onChange={e => setNumberTrain(e.target.value)}
              />

            </div>

            <div className={styles.contentNumber}>
              <label>     شماره سالن </label>
              <select
                name=''
                value={showHallNumber}
                onChange={e => {
                  firstUpdate.current = false
                  setShowHalNumber(e.target.value)
                }}
              >
                {trainHallNumber.map((number, index) => (
                  <option value={number} key={index}>{number}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.contentNumber}>
              <label>     درجه سالن</label>
              <select
                name=''
                value={showTrainDegree}
                onChange={e => {
                  firstUpdate.current = false
                  setShowTrainDegree(e.target.value)
                }}
              >
                {trainDegree.map((degree, index) => (
                  <option value={degree} key={index}>{degree}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.contentNumber}>
              <button
                className='btn btn-warning'
                onClick={(e) => { handleAddSeatNumber(e); decrementCount(e) }}
              >
                اضافه کردن

              </button>

            </div>
            <ToastContainer />

          </div>
          </>}

    </>
  )
}

export default SeatNumber

import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useMutation } from '@apollo/client'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'
import { FLIGHT_ID, FLIGHT_CAPACITY } from '../../../constants/auth'
import { toast, ToastContainer } from 'react-toastify'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/TrainContent.module.css'

const SeatNumber = () => {
  // STATES
  const capacityf = window.localStorage.getItem(FLIGHT_CAPACITY)

  const [number, setNumber] = useState(1)
  let [count, setCount] = useState(capacityf)

  const flightid = window.localStorage.getItem(FLIGHT_ID)

  // APOLLO MUTATION
  const [addNumber] = useMutation(seatNumberMutations.ADDSEATNUMBER)
  const handleAddSeatNumber = (e) => {
    e.preventDefault()
    addNumber({
      variables: {
        number: parseInt(number),
        flight: JSON.parse(flightid)

      }
    })
      .then(({ data }) => {
        if (data.addSeatNumber !== null) {
          toast.success('شماره صندلی با موفقیت اضافه شد')
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  //COUNTER FUNCTION

  const decrementCount = () => {
    count = count - 1
    setCount(count)
  }

  return (
    <>
      {count <= 0 ? <div>
        <img src={img} className={styles.imgCssModal} />
                    </div>
        : <>
          <div>
            <span>
              باید
              <span style={{ fontFamily: 'Yekan', fontSize: '18px' }} className='badge rounded-circle badge-light bg-danger mx-1'>

                {count}
              </span>
              تا شماره صندلی  اضافه کنید
            </span>
          </div>
          <div
            className='d-flex flex-row justify-content-center my-1  mx-1 rounded-3 '
            style={{ backgroundColor: '#F2EFFB' }}
          >
            <label className='text-dark'>    شماره صندلی </label>
            <input
              value={number}
              min='1'
              max='170'
              type='number'
              onChange={e => setNumber(e.target.value)}
              className='border  mx-2  h-25 border-2  mt-2  w-25 rounded-3 '
              style={{ fontFamily: 'yekan' }}
            />
            <i
              className='fa fa-plus btn-sm rounded-circle btn-secondary bg-gradient  text-light  my-2 py-2  fa-lg mx-2 '
          // onClick={handleAddSeatNumber}
              onClick={(e) => { handleAddSeatNumber(e); decrementCount(e) }}
            />
            <ToastContainer />

          </div>

          </>}

    </>
  )
}

export default SeatNumber

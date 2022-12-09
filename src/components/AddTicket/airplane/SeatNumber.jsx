import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useMutation } from '@apollo/client'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'
import { FLIGHT_ID } from '../../../constants/auth'
import { toast, ToastContainer } from 'react-toastify'

const SeatNumber = (props) => {
  // STATES

  const [number, setNumber] = useState(1)
  const [addNumber] = useMutation(seatNumberMutations.ADDSEATNUMBER)
  const flightid = window.localStorage.getItem(FLIGHT_ID)

  const handleAddSeatNumber = (e) => {
    e.preventDefault()
    addNumber({
      variables: {
        number: parseInt(number),
        state: 2,
        trainCompartment: 6,
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

  return (
    <>
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
        />
        <i
          className='fa fa-plus btn-sm rounded-circle btn-secondary bg-gradient  text-light  my-2 py-2  fa-lg mx-2 '
          onClick={handleAddSeatNumber}
        />
        <ToastContainer />

      </div>

    </>
  )
}

export default SeatNumber

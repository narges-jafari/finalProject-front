import React, { useState } from 'react'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { USER_ID, TRAINBUY_ID, TRAINTICKET_ID } from '../../../constants/auth'
import { useQuery, useMutation } from '@apollo/client'
import { toast, ToastContainer } from 'react-toastify'
import seatnumberQueries from '../../../Apollo/Query/seatnumberQueries'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'

import 'react-toastify/dist/ReactToastify.css'
import trainMutations from '../../../Apollo/Mutation/trainMutations'

const TrainFinish = () => {
  // STATES
 
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  const trainBuyId = window.localStorage.getItem(TRAINBUY_ID).replace(/"/g, '')
  const trainId = window.localStorage.getItem('TRAINID').replace(/"/g, '')
  const capacity0 = parseInt(window.localStorage.getItem('Capacity').replace(/"/g, ''))
  const capacity1 = parseInt(window.localStorage.getItem('Capacity1').replace(/"/g, ''))
  const capacity2 = parseInt(window.localStorage.getItem('Capacity2').replace(/"/g, ''))

  const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const date = '۱۴۰۱' + '/' + month + '/' + day

  const allCapacity = capacity0 + capacity1 + capacity2
  const showAllCapacity = () => {
    if (!capacity2 && capacity0 && !capacity1) {
      return (
        capacity0
      )
    } else if (!capacity1 && !capacity2 && !capacity0) {
      return 1
    } else if (capacity1 && !capacity2 && capacity0) {
      return capacity0 + capacity1
    } else if (!capacity1 && capacity2 && capacity0) {
      return capacity0 + capacity2
    } else {
      return (
        allCapacity
      )
    }
  }
//apollo state
  const [seatnumbers, setSeatnumbers] = useState([])

//apollo query
  useQuery(seatnumberQueries.GETTRAINSEATNUMBER, {
    variables: {
      train: trainId,
      isDelete: false
    },

    onCompleted: (res) => {
      setSeatnumbers(res.getTrainSeatnumber)
    },
    onError: () => {
      setSeatnumbers([])
    }
  })


  //apollo mutation
  const [updateTrainCapacity] = useMutation(trainMutations.UPDATETRAINCAPACITY)
  const [deleteSeatnumber] = useMutation(seatNumberMutations.RESERVEDTRAINSEATNUMBER)
  const [createTicket] = useMutation(trainMutations.TRAINTICKET)

  const handleUpdateTrain = () => {
    updateTrainCapacity({
      variables: {
        id: trainId,
        capacity: capacity[0] - showAllCapacity()
      }
    })
      .then(({ data }) => {
        if (data.updateTrainCapacity !== null) {
          toast.success('ظرفیت به‌روزرسانی شد')
          // window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  const showValue = () => {
    if (showAllCapacity() == 1) {
      return 1
    } else return showAllCapacity()
  }

  const handleDeleteSeatnumber = (e) => {
    deleteSeatnumber({
      variables: {
        id: seatnumberId.slice(0, showValue()),
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedtraintSeat !== null) {
          toast.success('ظرفیت به‌روزرسانی شد')
        } else {
          toast.success('  شد')
        }
      })
  }

  const number = seatnumbers.map(item => item.number)
  const numberhall = seatnumbers.map(item => item.hallNumber)
  const numbertrain = seatnumbers.map(item => item.trainCompartment)
  const hallDegree = seatnumbers.map(item => item.hallDegree)

  const capacity = seatnumbers.map(item => item.train.capacity)

  const seatnumberId = seatnumbers.map(item => item._id)


  const handleCreateTicket = (e) => {
    createTicket({
      variables: {
        trainBuy: trainBuyId,
        serialId: Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        searchId: userId,
        date: date,
        seatnumber: number.slice(0, showValue()),
        hallNumber: numberhall.slice(0, showValue()),
        trainCompartment: numbertrain.slice(0, showValue()),
        hallDegree: hallDegree.slice(0, showValue())

      }
    })
      .then(({ data }) => {
        if (data.makeFlightTicket !== null) {
          window.localStorage.setItem(TRAINTICKET_ID, JSON.stringify(data.makeTrainTicket._id))
          handleDeleteSeatnumber()
          handleUpdateTrain()
          toast.success('ظرفیت به‌روزرسانی شد')

          window.location.href = 'fasttrainticket'
        }
      })
  }
  return (
    <>

      <div className={styles.finishheader}>
        <img src={img} className={styles.finishimg} />
        <span>
          رزرو هتل با موفقیت انجام شد
        </span>
        <button
          onClick={() => {
            handleCreateTicket()
          }}
          className='btn btn-primary ' type='button'
        >
          مشاهده بلیط
        </button>
        <ToastContainer />
      </div>

    </>
  )
}

export default TrainFinish

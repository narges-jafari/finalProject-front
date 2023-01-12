import React, { useState } from 'react'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { USER_ID, TRAINTICKET_ID } from '../../../constants/auth'
import { useQuery, useMutation } from '@apollo/client'
import seatnumberQueries from '../../../Apollo/Query/seatnumberQueries'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'
import trainMutations from '../../../Apollo/Mutation/trainMutations'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import trainQueries from '../../../Apollo/Query/trainQueries'
const TrainFinish = () => {
  // STATES
  const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  const [seatnumbers, setSeatnumbers] = useState([])
  const [seatnumbers1, setSeatnumbers1] = useState([])
  const [trainBuyId, setTrainBuyId] = useState([])

  const date = '۱۴۰۱' + '/' + month + '/' + day
  const trainId = window.localStorage.getItem('TRAINID').replace(/"/g, '')
  const trainId2 = window.localStorage.getItem('TRAINSECONDID').replace(/"/g, '')
  const capacity0 = parseInt(window.localStorage.getItem('Capacity').replace(/"/g, ''))
  const capacity1 = parseInt(window.localStorage.getItem('Capacity1').replace(/"/g, ''))
  const capacity2 = parseInt(window.localStorage.getItem('Capacity2').replace(/"/g, ''))
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
  const showValue = () => {
    if (showAllCapacity() == 1) {
      return 1
    } else return showAllCapacity()
  }

  useQuery(trainQueries.GETLASTTRAINBUY, {

    onCompleted: (res) => {
      setTrainBuyId(res.getAllTrainBuy)
    },
    onError: () => {
      setTrainBuyId([])
    }
  })

  const newTrainBuyId = trainBuyId.map(item => item._id)
  useQuery(seatnumberQueries.GETTRAINSEATNUMBER, {
    variables: {
      train: trainId,
      isDelete: false
    },

    onCompleted: (res) => {
      setSeatnumbers(res.getTrainSeatnumber)
    },
    onError: () => {
      setSeatnumbers(['ll'])
    }
  })
  useQuery(seatnumberQueries.GETTRAINSEATNUMBER, {
    variables: {
      train: trainId2,
      isDelete: false
    },

    onCompleted: (res) => {
      setSeatnumbers1(res.getTrainSeatnumber)
    },
    onError: () => {
      setSeatnumbers1([])
    }
  })

  const number = seatnumbers.map(item => item.number)
  const capacity = seatnumbers.map(item => item.train.capacity)
  const seatnumberId = seatnumbers.map(item => item._id)
  const trainCompartment=seatnumbers.map(item => item.trainCompartment)
  const hallDegree=seatnumbers.map(item => item.hallDegree)
  const hallNumber=seatnumbers.map(item => item.hallNumber)

  const number1 = seatnumbers1.map(item => item.number)
  const capacitysecond = seatnumbers1.map(item => item.train.capacity)
  const seatnumberId1 = seatnumbers1.map(item => item._id)
  const trainCompartment1=seatnumbers1.map(item => item.trainCompartment)
  const hallDegree1=seatnumbers1.map(item => item.hallDegree)
  const hallNumber1=seatnumbers1.map(item => item.hallNumber)

  const [updateTrainCapacity] = useMutation(trainMutations.UPDATETRAINCAPACITY)
  const handleUpdateTrain = () => {
    updateTrainCapacity({
      variables: {
        id: trainId,
        capacity: capacity[0] - showAllCapacity()
      }
    })
      .then(({ data }) => {
        if (data.updateTrainCapacity !== null) {
          // toast.success('ظرفیت به‌روزرسانی شد')
          // window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  console.log(seatnumbers,seatnumbers1,trainId,trainId2,capacitysecond[0]- showAllCapacity(),'lllllllll')

  const [updateTrainCapacity1] = useMutation(trainMutations.UPDATETRAINCAPACITY)
  const handleUpdateTrain1 = () => {
    updateTrainCapacity1({
      variables: {
        id: trainId2,
        capacity: capacitysecond[0] - showAllCapacity()
      }
    })
      .then(({ data }) => {
        if (data.updateTrainCapacity !== null) {
          // toast.success('ظرفیت به‌روزرسانی شد')
          // window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  const [deleteSeatnumber] = useMutation(seatNumberMutations.RESERVEDTRAINSEATNUMBER)
  const [deleteSeatnumber1] = useMutation(seatNumberMutations.RESERVEDTRAINSEATNUMBER)

  const handleDeleteSeatnumber = (e) => {
    deleteSeatnumber({
      variables: {
        id: seatnumberId.slice(0, showValue()),
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedtraintSeat !== null) {

        } else {

        }
      })
  }
  const handleDeleteSeatnumber1 = (e) => {
    deleteSeatnumber1({
      variables: {
        id: seatnumberId1.slice(0, showValue()),
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedtraintSeat !== null) {

        } else {

        }
      })
  }
  const [createTicket1] = useMutation(trainMutations.TRAINTICKET)
  const handleCreateTicket1 = (e) => {
    createTicket1({
      variables: {
        trainBuy: newTrainBuyId[1],
        serialId: Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        searchId: userId,
        date: date,
        seatnumber: number1.slice(0, showValue()),
        hallDegree: hallDegree1.slice(0, showValue()),
        hallNumber: hallNumber1.slice(0, showValue()),
        trainCompartment: trainCompartment1.slice(0, showValue()),

    
      }
    })
      .then(({ data }) => {
        if (data.makeTrainTicket !== null) {
          window.localStorage.setItem(TRAINTICKET_ID, JSON.stringify(data.makeTrainTicket._id))
          handleDeleteSeatnumber1()
          handleUpdateTrain1()
          window.location.href = 'fasttrainstickets'
        }
      })
  }

  const [createTicket] = useMutation(trainMutations.TRAINTICKET)
  const handleCreateTicket = (e) => {
    createTicket({
      variables: {
        trainBuy: newTrainBuyId[0],
        serialId: Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        searchId: userId,
        date: date,
        seatnumber: number.slice(0, showValue()),
        hallDegree: hallDegree.slice(0, showValue()),
        hallNumber: hallNumber.slice(0, showValue()),
        trainCompartment: trainCompartment.slice(0, showValue()),

      }
    })
      .then(({ data }) => {
        if (data.makeTrainTicket !== null) {
          window.localStorage.setItem(TRAINTICKET_ID, JSON.stringify(data.makeTrainTicket._id))
          handleDeleteSeatnumber()
          handleUpdateTrain()
          handleCreateTicket1()
      
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
      </div>

    </>
  )
}

export default TrainFinish

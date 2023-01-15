import React, { useState } from 'react'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { BUSBUY_ID, USER_ID, BUSTICKET_ID } from '../../../constants/auth'
import { useQuery, useMutation } from '@apollo/client'
import seatnumberQueries from '../../../Apollo/Query/seatnumberQueries'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'
import busMutations from '../../../Apollo/Mutation/busMutations'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
const BusFinish = () => {
  // STATES
  const [data, setData] = useState(false)
  const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  // const flightTicketId = window.localStorage.getItem(FLIGHTTICKET_ID).replace(/"/g, '')
  const busBuyId = window.localStorage.getItem(BUSBUY_ID).replace(/"/g, '')
  const [seatnumbers, setSeatnumbers] = useState([])

  const date = '۱۴۰۱' + '/' + month + '/' + day
  const busId = window.localStorage.getItem('BUSID').replace(/"/g, '')
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
  useQuery(seatnumberQueries.GETBUSSEATNUMBER, {
    variables: {
      bus: busId,
      isDelete: false
    },

    onCompleted: (res) => {
      setSeatnumbers(res.getBusSeatnumber)
    },
    onError: () => {
      setSeatnumbers(['lll'])
    }
  })

  const [updateBusCapacity] = useMutation(busMutations.UPDATEBUSCAPACITY)
  const [deleteSeatnumber] = useMutation(seatNumberMutations.RESERVEDBUSSEATNUMBER)
  const handleUpdateBus = () => {
    updateBusCapacity({
      variables: {
        id: busId,
        capacity: capacity[0] - showAllCapacity()
      }
    })
      .then(({ data }) => {
        if (data.updateBusCapacity !== null) {
          // toast.success('ظرفیت به‌روزرسانی شد')
          // window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  const number = seatnumbers.map(item => item.number)
  const capacity = seatnumbers.map(item => item.bus.capacity)

  const seatnumberId = seatnumbers.map(item => item._id)
  // const filterData=seatnumbers.map.filter(item=>item.isDelete==false)
  console.log(seatnumbers,busId, 'seat')

  const handleDeleteSeatnumber = (e) => {
    deleteSeatnumber({
      variables: {
        id: seatnumberId.slice(0, showValue()),
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedBusSeat !== null) {

        } else {

        }
      })
  }

  const [createTicket] = useMutation(busMutations.BUSTICKET)
  const handleCreateTicket = (e) => {
    createTicket({
      variables: {
        busBuy: busBuyId,
        serialId: Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        searchId: userId,
        date: date,
        seatnumber: number.slice(0, showValue())

      }
    })
      .then(({ data }) => {
        if (data.makeBusTicket !== null) {
          window.localStorage.setItem(BUSTICKET_ID, JSON.stringify(data.makeBusTicket._id))
          handleDeleteSeatnumber()
          handleUpdateBus()
          window.location.href = 'fastbusticket'
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

export default BusFinish

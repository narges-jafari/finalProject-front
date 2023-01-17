import React, { useState } from 'react'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { HOTELBUY_ID, USER_ID, FLIGHTBUY_ID, FLIGHTTICKET_ID } from '../../../constants/auth'
import { useQuery, useMutation } from '@apollo/client'
import seatnumberQueries from '../../../Apollo/Query/seatnumberQueries'
import seatNumberMutations from '../../../Apollo/Mutation/seatNumberMutations'
import flightMutations from '../../../Apollo/Mutation/flightMutations'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FlightFinish = () => {
  const capacity0 = parseInt(window.localStorage.getItem('Capacity').replace(/"/g, ''))
  const capacity1 = parseInt(window.localStorage.getItem('Capacity1').replace(/"/g, ''))
  const capacity2 = parseInt(window.localStorage.getItem('Capacity2').replace(/"/g, ''))
  const allCapacity = capacity0 + capacity1 + capacity2
  // STATE
  const [seatnumbers, setSeatnumbers] = useState([])

  const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  const flightBuyId = window.localStorage.getItem(FLIGHTBUY_ID).replace(/"/g, '')

  const date = '۱۴۰۱' + '/' + month + '/' + day
  const flightId = window.localStorage.getItem('AIRPLAINID').replace(/"/g, '')

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

  //apollo query
  useQuery(seatnumberQueries.GETFLIGHTSEATNUMBER, {
    variables: {
      flight: flightId,
      isDelete: false
    },

    onCompleted: (res) => {
      setSeatnumbers(res.getFlightSeatnumber)
    },
    onError: () => {
      setSeatnumbers(['ll'])
    }
  })


  //apollo mutations

  const [updateFlightCapacity] = useMutation(flightMutations.UPDATEFLIGHTCAPACITY)
  const [deleteSeatnumber] = useMutation(seatNumberMutations.RESERVEDSEATNUMBER)
  const handleUpdateFlight = () => {
    updateFlightCapacity({
      variables: {
        id: flightId,
        capacity: capacity[0] - showAllCapacity()
      }
    })
      .then(({ data }) => {
        if (data.updateFlightCapacity !== null) {
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
  const capacity = seatnumbers.map(item => item.flight.capacity)

  const seatnumberId = seatnumbers.map(item => item._id)

  const handleDeleteSeatnumber = (e) => {
    deleteSeatnumber({
      variables: {
        id: seatnumberId.slice(0, showValue()),
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedFlightSeat !== null) {

        } else {

        }
      })
  }

  const [createTicket] = useMutation(flightMutations.FLIGHTTICKET)
  const handleCreateTicket = (e) => {
    createTicket({
      variables: {
        flightBuy: flightBuyId,
        serialId: Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        searchId: userId,
        date: date,
        seatnumber: number.slice(0, showValue())

      }
    })
      .then(({ data }) => {
        if (data.makeFlightTicket !== null) {
          window.localStorage.setItem(FLIGHTTICKET_ID, JSON.stringify(data.makeFlightTicket._id))
          handleDeleteSeatnumber()
          handleUpdateFlight()
          window.location.href = 'fastflightticket'
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

export default FlightFinish

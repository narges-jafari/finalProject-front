import React, { useState } from 'react'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { HOTELTICKET_ID, HOTELBUY_ID, USER_ID } from '../../../constants/auth'
import { useQuery, useMutation } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
import hotelMutations from '../../../Apollo/Mutation/hotelMutations'
import roomMutations from '../../../Apollo/Mutation/roomMutations'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Finish = () => {
  // STATES
  const [data, setData] = useState(false)
  const [roomId, setRoomId] = useState([])
  const [hotelId, setHotelId] = useState([])
  const hotelBuyId = window.localStorage.getItem(HOTELBUY_ID).replace(/"/g, '')
  const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  const date = '۱۴۰۱' + '/' + month + '/' + day
  const id= window.localStorage.getItem('ID').replace(/"/g, '')
  const room = window.localStorage.getItem('Room').replace(/"/g, '')


  const handleRoom = () => {
    if (room == '') { return 1 } else {
      return 2
    }
  }

  useQuery(hotelQueries.SEARCHHOTELBUYBYID, {
    variables: {
      id: hotelBuyId
    },

    onCompleted: (res) => {
      setRoomId(res.searchHotelBuyById.room)
    },
    onError: () => {
      setRoomId(['kkk'])
    }
  })
  useQuery(hotelQueries.SEARCHHOTELBUYBYID, {
    variables: {
      id: hotelBuyId
    },

    onCompleted: (res) => {
      setHotelId(res.searchHotelBuyById.hotel)
    },
    onError: () => {
      setHotelId([])
    }
  })
  const [updateHotelCapacity] = useMutation(hotelMutations.UPDATEHOTELCAPACITY)
  const [deleteRoom] = useMutation(roomMutations.RESERVEDROOM)
  const handleDeleteRoom = (e) => {
    deleteRoom({
      variables: {
        id:id.slice(1, 25),
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedRoom !== null) {

        } else {

        }
      })
  }

  console.log( hotelId.capacity-handleRoom(),id.slice(1, 25),id.slice(26, 50),';;;;;;')

  const handleUpdateHotel = () => {
    updateHotelCapacity({
      variables: {
        id: id.slice(26, 50),
        capacity:  hotelId.capacity - handleRoom()
      }
    })
      .then(({ data }) => {
        if (data.updateHotelCapacity !== null) {
          // toast.success('ظرفیت به‌روزرسانی شد')
          // window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }


  const [createTicket] = useMutation(hotelMutations.TICKET)
  const handleCreateTicket = (e) => {
    createTicket({
      variables: {
        hotelBuy: hotelBuyId,
        serialId: Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        search: userId,
        date: date

      }
    })
      .then(({ data }) => {
        if (data.makeHotelTicket !== null) {
          window.localStorage.setItem(HOTELTICKET_ID, JSON.stringify(data.makeHotelTicket._id))
          handleDeleteRoom()
          handleUpdateHotel()
          window.location.href = 'fasthotelticket'
        }
      })
  }
  console.log(data)
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
          }} className='btn btn-primary ' type='button'
        >
          مشاهده بلیط
        </button>
      </div>

    </>
  )
}

export default Finish

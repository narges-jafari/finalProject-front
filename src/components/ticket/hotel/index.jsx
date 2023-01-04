import React, { useState } from 'react'
import styles from '../../../assets/styles/MakeTicket.module.css'
import { useMutation, useQuery } from '@apollo/client'

import hotelQueries from '../../../Apollo/Query/hotelQueries'
import hotelMutations from '../../../Apollo/Mutation/hotelMutations'
import roomMutations from '../../../Apollo/Mutation/roomMutations'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HOTELTICKET_ID, HOTELBUY_ID, USER_ID } from '../../../constants/auth'
const TicketInfo = () => {
  const [number, setNumber] = useState('')
  // const [roomId, setRoomId] = useState([])
  // const [hotelId, setHotelId] = useState([])
  const [error, setError] = useState('')
  const [allTicket, setAllTicket] = useState([])

  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  // const hoteliiii=window.localStorage.getItem(HOTELTICKET_ID).replace(/"/g, '')

  // console.log(hoteliiii,'مممم')
  const room = window.localStorage.getItem('Room').replace(/"/g, '')
  const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
  const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
  const date = '۱۴۰۱' + '/' + month + '/' + day

  function isValidCode (code) {
    return /^[0-9][0-9]{7}$/.test(code)
  }

  const handleCode = event => {
    if (!isValidCode(event.target.value)) {
      setError('سریال بلیط عدد 8رقمی است')
    } else {
      setError(null)
    }

    setNumber(event.target.value)
  }

  const resetFields = () => {
    setNumber('')
  }

  useQuery(hotelQueries.ALLHOTELTICKET, {

    onCompleted: (res) => {
      setAllTicket(res.allHotelTicket)
    },
    onError: () => {
      setAllTicket(['llll'])
    }
  })

  // const lastItem=allTicket.slice(-1)
  const userData = allTicket.map(item => item.hotelBuy)
  // const hotelBuyId=userData.map(item=>item._id)
  const hotelData = userData.map(item => item.hotel)
  const hoteCapacity = hotelData.map(item => item.capacity)
  const hotelId = hotelData.map(item => item._id)

  const roomData = userData.map(item => item.room)
  const roomName1 = roomData.map(item => item.name1)
  const roomName2 = roomData.map(item => item.name2)
  const roomId = roomData.map(item => item._id)
  const roomCapacity = roomData.map(item => item.capacity)
  // const ticketId=lastItem.map(item=>item._id)

  // console.log(hotelBuyId[0],'qqqqqq')

  // useQuery(hotelQueries.SEARCHHOTELBUYBYID, {
  //   variables: {
  //     id: hotelBuyId
  //   },

  //   onCompleted: (res) => {
  //     setRoomId(res.searchHotelBuyById.room)
  //   },
  //   onError: () => {
  //     setRoomId(['kkk'])
  //   }
  // })

  const handleRoom = () => {
    if (roomName1 && roomName2 == '') { return 1 } else if (roomName1 && roomName2) {
      return 2
    } else return null
  }

  // console.log(allTicket,'lqqqqqqqq')

  const [createTicket] = useMutation(hotelMutations.TICKET)
  const [updateHotelCapacity] = useMutation(hotelMutations.UPDATEHOTELCAPACITY)
  const [updateRoom] = useMutation(roomMutations.UPDATEROOMCAPACITY)
  const [deleteRoom] = useMutation(roomMutations.RESERVEDROOM)

  const handleUpdateHotel = (e) => {
    e.preventDefault()
    updateHotelCapacity({
      variables: {
        id: hotelId[0],
        capacity: hoteCapacity - handleRoom()
      }
    })
      .then(({ data }) => {
        if (data.updateHotelCapacity !== null) {
          toast.success('ظرفیت به‌روزرسانی شد')
          window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  const handleDeleteRoom = (e) => {
    deleteRoom({
      variables: {
        id: roomId[0],
        isDelete: true
      }
    })
      .then(({ data }) => {
        if (data.reservedRoom !== null) {

        } else {

        }
      })
  }

  const handleUpdateRoom = (e) => {
    updateRoom({
      variables: {
        id: roomId[0],
        capacity: 0
      }
    })
      .then(({ data }) => {
        if (data.updateRoomCapacity !== null) {
          toast.success('اتاق به‌روزرسانی شد')
          window.location.reload()
        } else {
          toast.error(
            'خطایی در برقراری با سرور اتفاق افتاد'
          )
        }
      })
  }

  // const handleCreateTicket = (e) => {
  //   if (!error ) {
  //     e.preventDefault()
  //     createTicket({
  //       variables: {
  //         hotelBuy: JSON.parse(id),
  //         serialId:parseInt(number),
  //         codeId: Math.floor(Math.random() * 99999999),
  //         search:userId,
  //         date: date,

  //       }
  //     })
  //       .then(({ data }) => {
  //         if (data.makeHotelTicket !== null) {
  //           toast.success('بلیط با موفقیت صادر شد')
  //           window.localStorage.setItem(HOTELTICKET_ID, JSON.stringify(data.makeHotelTicket._id))

  //         resetFields()
  //         } else {
  //           toast.error(
  //             'خطایی در برقراری با سرور اتفاق افتاد'
  //           )
  //         }
  //       })
  //   } else {
  //     toast.warning('اطلاعات را تایید نکرده‌اید')
  //   }
  // }

  // apollo query

  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.contentCss}>
          <div className={styles.topicCss}> ایجاد بلیط هتل</div>
          <div className='my-4 d-flex flex-column'>
            <label> سریال بلیط </label>
            <input
              value={number}
              onChange={handleCode}
              className={styles.inputCss}
            />
            <small className='text-danger rounded-3 p-2  mt-1'>{error}</small>

            {/* <button onClick={handleCreateTicket}>ایجاد بلیط</button> */}
            <ToastContainer />
          </div>
        </div>
        <div className={styles.contentCss}>
          <div className={styles.topicCss}> به روزرسانی ظرفیت اتاق  </div>

          <div className='my-4 d-flex flex-column'>

            <label>   ظرفیت قبلی</label>
            <input
              defaultValue={roomCapacity}
              className={styles.inputCss1}

              disabled
            />

            <button onClick={() => { handleUpdateRoom(); handleDeleteRoom() }}> به‌روز رسانی</button>
          </div>

        </div>
        <div className={styles.contentCss}>
          <div className={styles.topicCss}> به روزرسانی ظرفیت هتل  </div>
          <div className='my-4 d-flex flex-column'>
            <label> ظرفیت قبلی</label>
            <input
            // value={hoteCapacity}
            // onChange={e=>{setNumber(e.target.value)}}
              defaultValue={hoteCapacity}
              className={styles.inputCss1}
              disabled
            />
            <button onClick={handleUpdateHotel}> به‌روز رسانی</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default TicketInfo

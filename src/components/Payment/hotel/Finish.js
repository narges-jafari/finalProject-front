import React, { useState } from 'react'
import img from '../../../assets/img/bg/finish.JPG'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { HOTELTICKET_ID, HOTELBUY_ID,USER_ID } from '../../../constants/auth'
import { useQuery,useMutation } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
import hotelMutations from '../../../Apollo/Mutation/hotelMutations'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AllHotelTicket from '../../ticket/hotel/AllHotelTicket'
import HotelTicket from '../../ticket/HotelTicket'
const Finish = () => {
  // STATES
  const [data,setData]=useState(false)
const id= window.localStorage.getItem(HOTELBUY_ID).replace(/"/g, '')
const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
const userId=window.localStorage.getItem(USER_ID).replace(/"/g, '')
const date = '۱۴۰۱' + '/' + month + '/' + day

const [createTicket] = useMutation(hotelMutations.TICKET)
const handleCreateTicket = (e) => {
    createTicket({
      variables: {
        hotelBuy:id,
        serialId:Math.floor(Math.random() * 99999999),
        codeId: Math.floor(Math.random() * 99999999),
        search:userId,
        date: date,


      }
    })
      .then(({ data }) => {
        if (data.makeHotelTicket !== null) {
          window.localStorage.setItem(HOTELTICKET_ID, JSON.stringify(data.makeHotelTicket._id))
window.location.href='fasthotelticket'
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
        <button onClick={()=>{
          handleCreateTicket();

        }}  className="btn btn-primary " type="button" >
 مشاهده بلیط
</button>
      </div>


    </>
  )
}

export default Finish

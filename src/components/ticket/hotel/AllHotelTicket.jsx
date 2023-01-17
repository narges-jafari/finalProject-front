import React, { useState } from 'react'
import styles from '../../../assets/styles/Ticket.module.css'
import img from '../../../assets/img/barcode.JPG'
import logo from '../../../assets/img/16.png'
import train from '../../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import hotelQueries from '../../../Apollo/Query/hotelQueries'
import { HOTELTICKET_ID, USER_ID } from '../../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const AllHotelTicket = () => {

  //state
  const [data, setData] = useState([])


  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')

  //apollo query
  useQuery(hotelQueries.SEARCHHOTELTICKETBYUSERID, {
    variables: {
      id: userId
    },

    onCompleted: (res) => {
      setData(res.searchHotelTicketByUserId)
    },
    onError: () => {
      setData(['lll'])
    }
  })

  const lastItem = data.slice(-1)

  const userData = lastItem.map(item => item.hotelBuy)
  const hotelData = userData.map(item => item.hotel)
  const hotelName = hotelData.map(item => item.name)
  const hotelStar = hotelData.map(item => item.star)
  const startDate = hotelData.map(item => item.startDate)
  const endDate = hotelData.map(item => item.startDate)
  const city = hotelData.map(item => item.city)

  const roomData = userData.map(item => item.room)
  const roomName1 = roomData.map(item => item.name1)
  const roomName2 = roomData.map(item => item.name2)
  const roomNumber1 = roomData.map(item => item.roomNumber1)
  const roomNumber2 = roomData.map(item => item.roomNumber2)
  const price = roomData.map(item => item.price)
  const floor = roomData.map(item => item.floor)

  const fullName = userData.map(item => item.fullName
  )

  const birthDate = userData.map(item => item.birthDate)
  const nationalCode = userData.map(item => item.nationalCode)
  const gen = userData.map(item => item.gendere)

  const serial = lastItem.map(item => item.serialId)
  const code = lastItem.map(item => item.codeId)
  const date = lastItem.map(item => item.date)
//ref
  const ref = React.createRef()
  return (
    <>

      <>
        <ReactTooltip className='bg-light text-secondary' />
        <Pdf targetRef={ref} filename='ticket.pdf' x={4} p={3} y={0.8} scale={0.8} data-place='bottom' data-tip='excel '>
          {({ toPdf }) =>
            <i
              className='btn btn-outline-secondary fa fa-file-pdf-o    m-1   '
              data-tip=' دانلود بلیط'
              data-place='bottom'
              onClick={toPdf}
            />}
        </Pdf>

        <div ref={ref}>
          <div className={styles.content}>
            <div className={styles.ticketHeader}>
              <div>
                <span>
                  کد رهگیری :{code}
                </span>
                <span>
                  سریال بلیط :{serial}
                </span>

              </div>
              <div style={{ marginTop: '-4px' }}>
                <img src={train} className={styles.logoCss} />
              </div>
              <div style={{ marginTop: '-5px' }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>تریپنو</span>
                <img src={logo} className={styles.logoCss} />

              </div>
            </div>

            <div>

              <div className={styles.headernamecss}>اطلاعات هتل </div>
              <div className={styles.contentItem}>

                <div>
                  <span className={styles.spancss}>نام هتل </span>

                  <span className={styles.spancss1}> {hotelName}</span>
                </div>
                <div>
                  <span className={styles.spancss}>  استان</span>
                  <span className={styles.spancss1}>{city}</span>

                </div>

              </div>
              <div className={styles.contentItem}>
                <div>
                  <span className={styles.spancss}>   از تاریخ  </span>

                  <span className={styles.spancss1}> {startDate}</span>

                </div>
                <div>
                  <span className={styles.spancss}> تا تاریخ</span>
                  <span className={styles.spancss1}>{endDate}</span>
                </div>
              </div>

              <div className={styles.contentItem}>
                <div>
                  <span className={styles.spancss}> ستاره هتل </span>
                  <span className={styles.spancss1}> {hotelStar} ستاره </span>
                </div>

              </div>

            </div>

            <div className={styles.headernamecss}>اطلاعات اتاق </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  اسم اتاق </span>
                <span className={styles.spancss1}>
                  <span className='mx-1'>{roomName1}</span>
                  <span>
                    {roomName2}
                  </span>

                </span>
              </div>
              <div>
                <span className={styles.spancss}>  طبقه </span>
                <span className={styles.spancss1}>{floor}</span>

              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  شماره اتاق </span>
                <span className={styles.spancss1}>

                  <span>
                    <span className='mx-2'>{roomNumber1}</span>
                    {roomNumber2}
                  </span>

                </span>
              </div>
              <div>
                <span className={styles.spancss}>  قیمت </span>
                <span className={styles.spancss1}>{price} تومان </span>
              </div>

            </div>

            <div className={styles.headernamecss}>اطلاعات مسافر</div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  نام مسافر</span>
                <span className={styles.spancss1}> {fullName.join('/ ')}</span>

              </div>

              <div>
                <span className={styles.spancss}> کد ملی</span>

                <span className={styles.spancss1}> {nationalCode.join('/ ')}</span>

              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}> جنسیت </span>
                <span className={styles.spancss1}> {gen.join('/ ')}</span>

              </div>
              <div>
                <span className={styles.spancss}> تاریخ تولد </span>
                <span className={styles.spancss1}> {birthDate.join(' و  ')}</span>

              </div>
            </div>

            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  تاریخ صدور  </span>
                <span className={styles.spancss1}> {date[0]}</span>
              </div>
            </div>
            <hr />
            <div className={styles.ticketFooter}>
              <div>
                <img src={img} className={styles.barcodeCss} />
              </div>
              <div className={styles.ticketFooterItem}>
                <div className={styles.spanCssFooter}>
                  توضیحات:
                </div>

                <span>
                  1: ارائه کارت‌شناسایی معتبر برای اقامت در  هتل  ضروری است
                </span>
                <span>
                  2:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
                </span>
              </div>
            </div>
          </div>
        </div>

      </>
    </>
  )
}

export default AllHotelTicket

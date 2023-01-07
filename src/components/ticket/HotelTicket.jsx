import React, { useState } from 'react'
import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import hotelQueries from '../../Apollo/Query/hotelQueries'
import { HOTELTICKET_ID, USER_ID } from '../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'
import AllHotelTicket from './hotel/AllHotelTicket'

const HotelTicket = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [hotelData, setHotelData] = useState([])
  const [buyData, setBuyData] = useState([])
  const [roomData, setRoomData] = useState([])

  const ticketId = window.localStorage.getItem(HOTELTICKET_ID).replace(/"/g, '')
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  const capacity = window.localStorage.getItem('Passenger').replace(/"/g, '')
  const room = window.localStorage.getItem('Room').replace(/"/g, '')

  console.log(capacity, 'kkkمنمنن')
  useQuery(hotelQueries.SEARCHHOTELTICKETBYID, {
    variables: {
      id: ticketId
    },

    onCompleted: (res) => {
      setData(res.searchHotelTicketById)
      setHotelData(res.searchHotelTicketById.hotelBuy.hotel)
      setRoomData(res.searchHotelTicketById.hotelBuy.room)
      setUserData(res.searchHotelTicketById.hotelBuy.user)
      setBuyData(res.searchHotelTicketById.hotelBuy)
    },
    onError: () => {
      setData([])
      setHotelData([])
      setRoomData([])
      setUserData(['llll'])
      setBuyData([])
    }
  })

  const ref = React.createRef()
  console.log(userData._id, ';kd')
  return (
    <>
      {userData._id == userId
        ? <>
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
          {(() => {
            if (capacity) {
              const rows = []

              for (let i = 0; i < capacity; i++) {
                rows.push(

                  <div key={i}>
                    <div className={styles.content}>
                      <div className={styles.ticketHeader}>
                        <div>
                          <span>
                            کد رهگیری :{data.codeId}
                          </span>
                          <span>
                            سریال بلیط :{data.serialId}
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
                      <div className={styles.headernamecss}>اطلاعات هتل </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}>نام هتل </span>
                          <span className={styles.spancss1}> {hotelData.name}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  استان</span>
                          <span className={styles.spancss1}>{hotelData.city}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>   از تاریخ  </span>

                          <span className={styles.spancss1}> {hotelData.startDate}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}> تا تاریخ</span>
                          <span className={styles.spancss1}>{hotelData.endDate}</span>
                        </div>
                      </div>

                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}> ستاره هتل </span>
                          <span className={styles.spancss1}> {hotelData.star} ستاره </span>
                        </div>

                      </div>
                      <div className={styles.headernamecss}>اطلاعات اتاق </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  اسم اتاق </span>
                          <span className={styles.spancss1}>
                            {(() => {
                              if (room == 1 || room == '') {
                                return (
                                  <span>{roomData.name1}</span>
                                )
                              } else if (i % 2 == 0) {
                                return (
                                  <span>{roomData.name1}</span>
                                )
                              } else {
                                return (
                                  <span>{roomData.name2}</span>
                                )
                              }
                            })()}
                          </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  طبقه </span>
                          <span className={styles.spancss1}>{roomData.floor}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  شماره اتاق </span>
                          <span className={styles.spancss1}>
                            {(() => {
                              if (i % 2 == 0) {
                                return (
                                  <span>{roomData.roomNumber1}</span>
                                )
                              } else {
                                return (
                                  <span>{roomData.roomNumber2}</span>
                                )
                              }
                            })()}
                          </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  قیمت </span>
                          <span className={styles.spancss1}>{roomData.price} تومان </span>
                        </div>

                      </div>

                      <div className={styles.headernamecss}>اطلاعات مسافر</div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  نام مسافر</span>
                          <span className={styles.spancss1}> {buyData.fullName[i]}</span>

                        </div>

                        <div>
                          <span className={styles.spancss}> کد ملی</span>
                          <span className={styles.spancss1}> {buyData.nationalCode[i]}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}> جنسیت </span>
                          <span className={styles.spancss1}> {buyData.gendere[i]}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}> تاریخ تولد </span>
                          <span className={styles.spancss1}> {buyData.birthDate[i]}</span>

                        </div>
                      </div>

                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ صدور  </span>
                          <span className={styles.spancss1}> {data.date}</span>
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
                )
              }
              return (
                <div ref={ref} className='mt-2  d-flex flex-column'>
                  {rows}

                </div>
              )
            } else if (capacity == '') {
              return (
                <div ref={ref}>

                  <div className={styles.content}>
                    <div className={styles.ticketHeader}>
                      <div>
                        <span>
                          کد رهگیری :{data.codeId}
                        </span>
                        <span>
                          سریال بلیط :{data.serialId}
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
                    <div className={styles.headernamecss}>اطلاعات هتل </div>
                    <div className={styles.contentItem}>

                      <div>
                        <span className={styles.spancss}>نام هتل </span>
                        <span className={styles.spancss1}> {hotelData.name}</span>
                      </div>
                      <div>
                        <span className={styles.spancss}>  استان</span>
                        <span className={styles.spancss1}>{hotelData.city}</span>

                      </div>

                    </div>
                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}>   از تاریخ  </span>

                        <span className={styles.spancss1}> {hotelData.startDate}</span>

                      </div>
                      <div>
                        <span className={styles.spancss}> تا تاریخ</span>
                        <span className={styles.spancss1}>{hotelData.endDate}</span>
                      </div>
                    </div>

                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}> ستاره هتل </span>
                        <span className={styles.spancss1}> {hotelData.star} ستاره </span>
                      </div>

                    </div>
                    <div className={styles.headernamecss}>اطلاعات اتاق </div>
                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}>  اسم اتاق </span>
                        <span className={styles.spancss1}>

                          <span className='mx-1'>{roomData.name1}</span>
                          <span>{roomData.name2}</span>

                        </span>
                      </div>
                      <div>
                        <span className={styles.spancss}>  طبقه </span>
                        <span className={styles.spancss1}>{roomData.floor}</span>

                      </div>

                    </div>
                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}>  شماره اتاق </span>
                        <span className={styles.spancss1}>

                          <span className='mx-1'>{roomData.roomNumber1}</span>
                          <span>{roomData.roomNumber2}</span>

                        </span>
                      </div>
                      <div>
                        <span className={styles.spancss}>  قیمت </span>
                        <span className={styles.spancss1}>{roomData.price} تومان </span>
                      </div>

                    </div>

                    <div className={styles.headernamecss}>اطلاعات مسافر</div>
                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}>  نام مسافر</span>
                        <span className={styles.spancss1}> {buyData.fullName}</span>

                      </div>

                      <div>
                        <span className={styles.spancss}> کد ملی</span>
                        <span className={styles.spancss1}> {buyData.nationalCode}</span>

                      </div>

                    </div>
                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}> جنسیت </span>
                        <span className={styles.spancss1}> {buyData.gendere}</span>

                      </div>
                      <div>
                        <span className={styles.spancss}> تاریخ تولد </span>
                        <span className={styles.spancss1}> {buyData.birthDate}</span>

                      </div>
                    </div>

                    <div className={styles.contentItem}>
                      <div>
                        <span className={styles.spancss}>  تاریخ صدور  </span>
                        <span className={styles.spancss1}> {data.date}</span>
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
              )
            }
          })()}

          {/* )
      })} */}
          </> : null}
    </>
  )
}

export default HotelTicket

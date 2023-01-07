import React, { useState } from 'react'
import styles from '../../../assets/styles/Ticket.module.css'
import img from '../../../assets/img/barcode.JPG'
import logo from '../../../assets/img/16.png'
import train from '../../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import { HOTELTICKET_ID, USER_ID } from '../../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const AllHotelTicket = () => {
  const [data, setData] = useState([])

  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  useQuery(flightQueries.SEARCHFLIGHTTICKETBYUSERID, {
    variables: {
      userId: userId
    },

    onCompleted: (res) => {
      setData(res.searchFlightTicketByUserId)
    },
    onError: () => {
      setData([''])
    }
  })

  const userData = data.map(item => item.flightBuy)
  const fullName = userData.map(item => item.fullName)

  const birthDate = userData.map(item => item.birthDate)
  const nationalCode = userData.map(item => item.nationalCode)
  const gen = userData.map(item => item.gendere)
  const price = userData.map(item => item.price)
  const serial = data.map(item => item.serialId)
  const code = data.map(item => item.codeId)
  const date = data.map(item => item.date)
  const seatnumber = data.map(item => item.seatnumber)
  const flightData = userData.map(item => item.flight)
  const originName = flightData.map(item => item.originName)
  const destinationName = flightData.map(item => item.destinationName)
  const startDate = flightData.map(item => item.date)
  const flightClass = flightData.map(item => item.flightClass)
  const departureTime = flightData.map(item => item.departureTime)
  const arrivalTime = flightData.map(item => item.arrivalTime)
  const flightNumber = flightData.map(item => item.flightNumber)
  const airportOrigin = flightData.map(item => item.airportOrigin)
  const airportDestination = flightData.map(item => item.airportDestination)
  const airplaneCompany = flightData.map(item => item.airplaneCompany)

  // console.log(originName)

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
            <div className={styles.headernamecss}>اطلاعات پرواز </div>
            <div className={styles.contentItem}>

              <div>
                <span className={styles.spancss}> مبدا </span>
                <span className={styles.spancss1}> {originName}</span>
              </div>
              <div>
                <span className={styles.spancss}>  مقصد</span>
                <span className={styles.spancss1}>{destinationName}</span>

              </div>

            </div>
            <div className={styles.contentItem}>

              <div>
                <span className={styles.spancss}> فرودگاه مبدا </span>
                <span className={styles.spancss1}> {airportOrigin}</span>
              </div>
              <div>
                <span className={styles.spancss}>  فرودگاه مقصد</span>
                <span className={styles.spancss1}>{airportDestination}</span>

              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>    ساعت حرکت  </span>

                <span className={styles.spancss1}> {departureTime}</span>

              </div>
              <div>
                <span className={styles.spancss}>  ساعت رسیدن</span>
                <span className={styles.spancss1}>{arrivalTime}</span>
              </div>
            </div>

            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  تاریخ حرکت </span>
                <span className={styles.spancss1}> {startDate}  </span>
              </div>
              <div>
                <span className={styles.spancss}>   کلاس پرواز </span>
                <span className={styles.spancss1}> {flightClass}  </span>
              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>   شماره پرواز </span>
                <span className={styles.spancss1}> {flightNumber}  </span>
              </div>
              <div>
                <span className={styles.spancss}>    شرکت هواپیمایی</span>
                <span className={styles.spancss1}> {airplaneCompany}  </span>
              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>    قیمت </span>
                <span className={styles.spancss1}> {price}  </span>
              </div>

            </div>

            <div className={styles.headernamecss}>اطلاعات مسافر</div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  نام مسافر</span>
                <span className={styles.spancss1}>  {fullName.join('/ ')}</span>

              </div>

              <div>
                <span className={styles.spancss}> کد ملی</span>
                <span className={styles.spancss1}>  {nationalCode.join('/ ')}</span>

              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}> جنسیت </span>
                <span className={styles.spancss1}>  {gen.join('/ ')}</span>

              </div>
              <div>
                <span className={styles.spancss}> تاریخ تولد </span>
                <span className={styles.spancss1}>  {birthDate.join(' و  ')}</span>

              </div>
            </div>

            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  تاریخ صدور  </span>
                <span className={styles.spancss1}> {date}</span>
              </div>
              <div>
                <span className={styles.spancss}>   شماره صندلی </span>
                <span className={styles.spancss1}>  {seatnumber.join(' و  ')}  </span>
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

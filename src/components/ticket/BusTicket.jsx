import React, { useState } from 'react'
import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import busQueries from '../../Apollo/Query/busQueries'
import { BUSTICKET_ID, USER_ID } from '../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const BusTicket = () => {
   //state
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [busData, setBusData] = useState([])
  const [buyData, setBuyData] = useState([])

  const ticketId = window.localStorage.getItem(BUSTICKET_ID).replace(/"/g, '')
  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  const capacity = parseInt(window.localStorage.getItem('Capacity').replace(/"/g, ''))
  const capacity1 = parseInt(window.localStorage.getItem('Capacity1').replace(/"/g, ''))
  const capacity2 = parseInt(window.localStorage.getItem('Capacity2').replace(/"/g, ''))
  const allCapacity = capacity + capacity1 + capacity2

  const showAllCapacity = () => {
    if (!capacity2 && capacity && !capacity1) {
      return (
        capacity
      )
    } else if (!capacity1 && !capacity2 && !capacity) {
      return 1
    } else if (capacity1 && !capacity2 && capacity) {
      return capacity + capacity1
    } else if (!capacity1 && capacity2 && capacity) {
      return capacity + capacity2
    } else {
      return (
        allCapacity
      )
    }
  }

     //apollo query

  useQuery(busQueries.SEARCHBUSTICKETBYID, {
    variables: {
      id: ticketId
    },

    onCompleted: (res) => {
      setData(res.searchBusTicketById)
      setBusData(res.searchBusTicketById.busBuy.bus)
      setUserData(res.searchBusTicketById.busBuy.user)
      setBuyData(res.searchBusTicketById.busBuy)
    },
    onError: () => {
      setData([])
      setBusData([])
      setUserData([])
      setBuyData([])
    }
  })
//ref
  const ref = React.createRef()

  return (
    <>
      {userData._id === userId
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
            if (showAllCapacity()) {
              const rows = []

              for (let i = 0; i < showAllCapacity(); i++) {
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
                      <div className={styles.headernamecss}>اطلاعات اتوبوس </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> مبدا </span>
                          <span className={styles.spancss1}> {busData.originName}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  مقصد</span>
                          <span className={styles.spancss1}>{busData.destinationName}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> ترمینال مبدا </span>
                          <span className={styles.spancss1}> {busData.originTerminal}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  ترمینال مقصد</span>
                          <span className={styles.spancss1}>{busData.destinationTerminal}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    ساعت حرکت  </span>

                          <span className={styles.spancss1}> {busData.departureTime}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}>  ساعت رسیدن</span>
                          <span className={styles.spancss1}>{busData.arrivalTime}</span>
                        </div>
                      </div>

                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ حرکت </span>
                          <span className={styles.spancss1}> {busData.date}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    نام شرکت اتوبوسرانی </span>
                          <span className={styles.spancss1}> {busData.busCompany}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>   شماره اتوبوس </span>
                          <span className={styles.spancss1}> {busData.busNumber}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    قیمت </span>
                          <span className={styles.spancss1}> {buyData.price}  </span>
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
                        <div>
                          <span className={styles.spancss}>   شماره صندلی </span>
                          <span className={styles.spancss1}> {data.seatnumber[i]}  </span>
                        </div>
                      </div>

                      <hr />
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  امکانات  </span>
                          <span className={styles.spancss1}> {busData.information.slice(0, 6).join('_')}  </span>
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
                            1: ارائه کارت‌شناسایی معتبر هنگام سوار شدن  در اتوبوس ضروری است       
                          </span>
                          <span>
                            2:  حتما نیم ساعت قبل از زمان حرکت در ترمینال حاضر باشید
                          </span>
                          <span>
                            3:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
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
            }
          })()}

          {/* )
      })} */}
          </> : null}
    </>
  )
}

export default BusTicket

import React, { useState } from 'react'
import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import flightQueries from '../../Apollo/Query/flightQueries'
import { FLIGHTTICKET_ID, USER_ID } from '../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const FlightTickets = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [flightData, setFlightData] = useState([])
  const [buyData, setBuyData] = useState([])
  const [data1, setData1] = useState([])
  const [userData1, setUserData1] = useState([])
  const [flightData1, setFlightData1] = useState([])
  const [buyData1, setBuyData1] = useState([])
  const [ticketId, setTicketId] = useState([])

//   const ticketId = window.localStorage.getItem(FLIGHTTICKET_ID).replace(/"/g, '')
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

  useQuery(flightQueries.GETALLFLIGHTTICKET, {


    onCompleted: (res) => {
        setTicketId(res.getAllFlightTicket)

    },
    onError: () => {
        setTicketId([])

    }
  })

  const showTicketId=ticketId.map(item=>item._id)

  useQuery(flightQueries.SEARCHFLIGHTTICKETBYID, {
    variables: {
      id: showTicketId[0]
    },

    onCompleted: (res) => {
      setData(res.searchFlightTicketById)
      setFlightData(res.searchFlightTicketById.flightBuy.flight)
      setUserData(res.searchFlightTicketById.flightBuy.user)
      setBuyData(res.searchFlightTicketById.flightBuy)
    },
    onError: () => {
      setData([])
      setFlightData([])
      setUserData(['llll'])
      setBuyData([])
    }
  })
  useQuery(flightQueries.SEARCHFLIGHTTICKETBYID, {
    variables: {
      id: showTicketId[1]
    },

    onCompleted: (res) => {
      setData1(res.searchFlightTicketById)
      setFlightData1(res.searchFlightTicketById.flightBuy.flight)
      setUserData1(res.searchFlightTicketById.flightBuy.user)
      setBuyData1(res.searchFlightTicketById.flightBuy)
    },
    onError: () => {
      setData1([])
      setFlightData1([])
      setUserData1([])
      setBuyData1([])
    }
  })

  console.log(data1.serialId,data,'lllllllllllllllllllll')

  const ref = React.createRef()

  return (
    <>
    lllllllllll
    {userData._id === userId ? 
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
          {(() => {
            if (showAllCapacity()) {
              const rows = []

              for (let i = 0; i < showAllCapacity(); i++) {
                rows.push(
<>
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
                      <div className={styles.headernamecss}>اطلاعات پرواز رفت  </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> مبدا </span>
                          <span className={styles.spancss1}> {flightData.originName}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  مقصد</span>
                          <span className={styles.spancss1}>{flightData.destinationName}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> فرودگاه مبدا </span>
                          <span className={styles.spancss1}> {flightData.airportOrigin}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  فرودگاه مقصد</span>
                          <span className={styles.spancss1}>{flightData.airportDestination}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    ساعت حرکت  </span>

                          <span className={styles.spancss1}> {flightData.departureTime}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}>  ساعت رسیدن</span>
                          <span className={styles.spancss1}>{flightData.arrivalTime}</span>
                        </div>
                      </div>

                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ حرکت </span>
                          <span className={styles.spancss1}> {flightData.date}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>   کلاس پرواز </span>
                          <span className={styles.spancss1}> {flightData.flightClass}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>   شماره پرواز </span>
                          <span className={styles.spancss1}> {flightData.flightNumber}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    شرکت هواپیمایی</span>
                          <span className={styles.spancss1}> {flightData.airplaneCompany}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    قیمت </span>
                          <span className={styles.spancss1}> {buyData.price}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>   بار مجاز  </span>
                          <span className={styles.spancss1}> {flightData.allowedLoggage} کیلوگرم </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ صدور  </span>
                          <span className={styles.spancss1}> {data.date}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    شماره صندلی </span>
                          <span className={styles.spancss1}> {data.seatnumber[i]}  </span>
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

                 
                      <hr/>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  امکانات پرواز   </span>
                          <span className={styles.spancss1}> {flightData.information.slice(0, 6).join('_')} کیلوگرم </span>
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
                            2:  حتما یک ساعت قبل از زمان حرکت در فرودگاه حاضر باشید
                          </span>
                          <span>
                            3:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div key={i}>
                    <div className={styles.content}>
                      <div className={styles.ticketHeader}>
                        <div>
                          <span>
                            کد رهگیری :{data1.codeId}
                          </span>
                          <span>
                            سریال بلیط :{data1.serialId}
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
                      <div className={styles.headernamecss}>اطلاعات پرواز   </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> مبدا </span>
                          <span className={styles.spancss1}> {flightData1.originName}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  مقصد</span>
                          <span className={styles.spancss1}>{flightData1.destinationName}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> فرودگاه مبدا </span>
                          <span className={styles.spancss1}> {flightData1.airportOrigin}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  فرودگاه مقصد</span>
                          <span className={styles.spancss1}>{flightData1.airportDestination}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    ساعت حرکت  </span>

                          <span className={styles.spancss1}> {flightData1.departureTime}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}>  ساعت رسیدن</span>
                          <span className={styles.spancss1}>{flightData1.arrivalTime}</span>
                        </div>
                      </div>

                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ حرکت </span>
                          <span className={styles.spancss1}> {flightData1.date}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>   کلاس پرواز </span>
                          <span className={styles.spancss1}> {flightData1.flightClass}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>   شماره پرواز </span>
                          <span className={styles.spancss1}> {flightData1.flightNumber}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    شرکت هواپیمایی</span>
                          <span className={styles.spancss1}> {flightData1.airplaneCompany}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    قیمت </span>
                          <span className={styles.spancss1}> {buyData1.price}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>   بار مجاز  </span>
                          <span className={styles.spancss1}> {flightData1.allowedLoggage} کیلوگرم </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ صدور  </span>
                          <span className={styles.spancss1}> {data1.date}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    شماره صندلی </span>
                          <span className={styles.spancss1}> {data1.seatnumber[i]}  </span>
                        </div>
                      </div>

                      <div className={styles.headernamecss}>اطلاعات مسافر</div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  نام مسافر</span>
                          <span className={styles.spancss1}> {buyData1.fullName[i]}</span>

                        </div>

                        <div>
                          <span className={styles.spancss}> کد ملی</span>
                          <span className={styles.spancss1}> {buyData1.nationalCode[i]}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}> جنسیت </span>
                          <span className={styles.spancss1}> {buyData1.gendere[i]}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}> تاریخ تولد </span>
                          <span className={styles.spancss1}> {buyData1.birthDate[i]}</span>

                        </div>
                      </div>

                 
                      <hr/>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}>  امکانات پرواز   </span>
                          <span className={styles.spancss1}> {flightData1.information.slice(0, 6).join('_')} کیلوگرم </span>
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
                            2:  حتما یک ساعت قبل از زمان حرکت در فرودگاه حاضر باشید
                          </span>
                          <span>
                            3:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </>
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

export default FlightTickets

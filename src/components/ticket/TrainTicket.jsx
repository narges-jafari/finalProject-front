import React, { useState } from 'react'
import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import trainQueries from '../../Apollo/Query/trainQueries'

import { USER_ID, TRAINTICKET_ID } from '../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const TrainTicket = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [trainData, setTrainData] = useState([])
  const [buyData, setBuyData] = useState([])

  const ticketId = window.localStorage.getItem(TRAINTICKET_ID).replace(/"/g, '')
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

  useQuery(trainQueries.SEARCHTRAINICKETBYID, {
    variables: {
      id: ticketId
    },

    onCompleted: (res) => {
      setData(res.searchTrainTicketById)
      setTrainData(res.searchTrainTicketById.trainBuy.train)
      setUserData(res.searchTrainTicketById.trainBuy.user)
      setBuyData(res.searchTrainTicketById.trainBuy)
    },
    onError: () => {
      setData([])
      setTrainData([])
      setUserData([])
      setBuyData([])
    }
  })

  console.log(showAllCapacity(), capacity, data, userId, userData._id, ';;;;;;;;')

  const ref = React.createRef()

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
                      <div className={styles.headernamecss}>اطلاعات قطار </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> مبدا </span>
                          <span className={styles.spancss1}> {trainData.originName}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  مقصد</span>
                          <span className={styles.spancss1}>{trainData.destinationName}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>

                        <div>
                          <span className={styles.spancss}> راه‌آهن مبدا </span>
                          <span className={styles.spancss1}> {trainData.railwayOrigin}</span>
                        </div>
                        <div>
                          <span className={styles.spancss}>  راه‌آهن مقصد</span>
                          <span className={styles.spancss1}>{trainData.railwayDestination}</span>

                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    ساعت حرکت  </span>

                          <span className={styles.spancss1}> {trainData.departureTime}</span>

                        </div>
                        <div>
                          <span className={styles.spancss}>  ساعت رسیدن</span>
                          <span className={styles.spancss1}>{trainData.arrivalTime}</span>
                        </div>
                      </div>

                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>  تاریخ حرکت </span>
                          <span className={styles.spancss1}> {trainData.date}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    نام سالن </span>
                          <span className={styles.spancss1}> {trainData.hallType}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>   شماره قطار </span>
                          <span className={styles.spancss1}> {trainData.trainNumber}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    شرکت ریلی</span>
                          <span className={styles.spancss1}> {trainData.railCompany}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>   درجه سالن  </span>
                          <span className={styles.spancss1}> {data.hallDegree[i]}  </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>    شماره کوپه </span>
                          <span className={styles.spancss1}> {data.trainCompartment[i]}  </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}>    شماره سالن  </span>
                          <span className={styles.spancss1}> {data.hallNumber[i]}   </span>
                        </div>
                        <div>
                          <span className={styles.spancss}>     شماره صندلی </span>
                          <span className={styles.spancss1}> {data.seatnumber[i]}   </span>
                        </div>

                      </div>
                      <div className={styles.contentItem}>
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

                      </div>
                      <hr />
                      <div className={styles.contentItem}>
                        <div>
                          <span className={styles.spancss}> امکانات    </span>
                          <span className={styles.spancss1}> {trainData.information.slice(0, 6).join('_')}</span>
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
                            1: ارائه کارت‌شناسایی معتبر برای سوار شدن در  قطار ضروری است
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
            }
            // else if (showAllCapacity() ==1) {
            //   return (
            //     <div ref={ref}>
            //          <div className={styles.content}>
            //           <div className={styles.ticketHeader}>
            //             <div>
            //               <span>
            //                 کد رهگیری :{data.codeId}
            //               </span>
            //               <span>
            //                 سریال بلیط :{data.serialId}
            //               </span>

            //             </div>
            //             <div style={{ marginTop: '-4px' }}>
            //               <img src={train} className={styles.logoCss} />
            //             </div>
            //             <div style={{ marginTop: '-5px' }}>
            //               <span style={{ fontSize: '20px', fontWeight: 'bold' }}>تریپنو</span>
            //               <img src={logo} className={styles.logoCss} />

            //             </div>
            //           </div>
            //           <div className={styles.headernamecss}>اطلاعات قطار </div>
            //           <div className={styles.contentItem}>

            //             <div>
            //               <span className={styles.spancss}> مبدا </span>
            //               <span className={styles.spancss1}> {trainData.originName}</span>
            //             </div>
            //             <div>
            //               <span className={styles.spancss}>  مقصد</span>
            //               <span className={styles.spancss1}>{trainData.destinationName}</span>

            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>

            //             <div>
            //               <span className={styles.spancss}> راه‌آهن مبدا </span>
            //               <span className={styles.spancss1}> {trainData.railwayOrigin}</span>
            //             </div>
            //             <div>
            //               <span className={styles.spancss}>  راه‌آهن مقصد</span>
            //               <span className={styles.spancss1}>{trainData.railwayDestination}</span>

            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>    ساعت حرکت  </span>

            //               <span className={styles.spancss1}> {trainData.departureTime}</span>

            //             </div>
            //             <div>
            //               <span className={styles.spancss}>  ساعت رسیدن</span>
            //               <span className={styles.spancss1}>{trainData.arrivalTime}</span>
            //             </div>
            //           </div>

            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>  تاریخ حرکت </span>
            //               <span className={styles.spancss1}> {trainData.date}  </span>
            //             </div>
            //             <div>
            //               <span className={styles.spancss}>    نام سالن </span>
            //               <span className={styles.spancss1}> {trainData.hallType}  </span>
            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>   شماره قطار </span>
            //               <span className={styles.spancss1}> {trainData.trainNumber}  </span>
            //             </div>
            //             <div>
            //               <span className={styles.spancss}>    شرکت ریلی</span>
            //               <span className={styles.spancss1}> {trainData.railCompany}  </span>
            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>   درجه سالن  </span>
            //               <span className={styles.spancss1}> {data.hallDegree}  </span>
            //             </div>
            //             <div>
            //               <span className={styles.spancss}>    شماره کوپه </span>
            //               <span className={styles.spancss1}> {data.trainCompartment}  </span>
            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>    شماره سالن  </span>
            //               <span className={styles.spancss1}> {data.hallNumber}   </span>
            //             </div>
            //             <div>
            //               <span className={styles.spancss}>     شماره صندلی </span>
            //               <span className={styles.spancss1}> {data.seatnumber}   </span>
            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>    قیمت </span>
            //               <span className={styles.spancss1}> {buyData.price}  </span>
            //             </div>

            //           </div>

            //           <div className={styles.headernamecss}>اطلاعات مسافر</div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>  نام مسافر</span>
            //               <span className={styles.spancss1}> {buyData.fullName}</span>

            //             </div>

            //             <div>
            //               <span className={styles.spancss}> کد ملی</span>
            //               <span className={styles.spancss1}> {buyData.nationalCode}</span>

            //             </div>

            //           </div>
            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}> جنسیت </span>
            //               <span className={styles.spancss1}> {buyData.gendere}</span>

            //             </div>
            //             <div>
            //               <span className={styles.spancss}> تاریخ تولد </span>
            //               <span className={styles.spancss1}> {buyData.birthDate}</span>

            //             </div>
            //           </div>

            //           <div className={styles.contentItem}>
            //             <div>
            //               <span className={styles.spancss}>  تاریخ صدور  </span>
            //               <span className={styles.spancss1}> {data.date}</span>
            //             </div>

            //           </div>

            //           <hr />
            //           <div className={styles.ticketFooter}>
            //             <div>
            //               <img src={img} className={styles.barcodeCss} />
            //             </div>
            //             <div className={styles.ticketFooterItem}>
            //               <div className={styles.spanCssFooter}>
            //                 توضیحات:
            //               </div>

            //               <span>
            //                 1: ارائه کارت‌شناسایی معتبر برای اقامت در  هتل  ضروری است
            //               </span>
            //               <span>
            //                 2:  تلفن گویای ثبت نظرات 32345-021 می‌باشد
            //               </span>
            //             </div>
            //           </div>
            //         </div>
            //     </div>
            //   )
            // }
          })()}

          {/* )
      })} */}
          </> : null}
    </>
  )
}

export default TrainTicket

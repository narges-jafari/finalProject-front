import React, { useState } from 'react'
import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import trainQueries from '../../Apollo/Query/trainQueries'
import { FLIGHTTICKET_ID, USER_ID } from '../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const TrainsTicket = () => {

  //state
  const [data, setData] = useState([])

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

  useQuery(trainQueries.GETALLTRAINTICKET, {

    onCompleted: (res) => {
      setData(res.getAllTrainTicket)
    },
    onError: () => {
      setData([])
    }
  })

  const userData = data.map(item => item.trainBuy)
  const fullName = userData.map(item => item.fullName)

  const birthDate = userData.map(item => item.birthDate)
  const nationalCode = userData.map(item => item.nationalCode)
  const gen = userData.map(item => item.gendere)
  const price = userData.map(item => item.price)
  const serial = data.map(item => item.serialId)
  const code = data.map(item => item.codeId)
  const date = data.map(item => item.date)
  const trainCompartment = data.map(item => item.trainCompartment)
  const hallDegree = data.map(item => item.hallDegree)
  const hallNumber = data.map(item => item.hallNumber)
  const seatnumber = data.map(item => item.seatnumber)

  const trainData = userData.map(item => item.train)
  const originName = trainData.map(item => item.originName)
  const destinationName = trainData.map(item => item.destinationName)
  const startDate = trainData.map(item => item.date)
  const hallType = trainData.map(item => item.hallType)
  const departureTime = trainData.map(item => item.departureTime)
  const arrivalTime = trainData.map(item => item.arrivalTime)
  const trainNumber = trainData.map(item => item.trainNumber)
  const railwayOrigin = trainData.map(item => item.railwayOrigin)
  const railwayDestination = trainData.map(item => item.railwayDestination)
  const allowedLoggage = trainData.map(item => item.allowedLoggage)
  const information = trainData.map(item => item.information)
  const railCompany=trainData.map(item => item.railCompany)
  const allUserData = userData.map(item => item.user)
  const allUserId = allUserData.map(item => item._id)
//ref
  const ref = React.createRef()

  return (
    <>
      {allUserId[0] === userId
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
                  <>
                    <div key={i}>
                      <div className={styles.content}>
                        <div className={styles.ticketHeader}>
                          <div>
                            <span>
                              کد رهگیری :{code[0]}
                            </span>
                            <span>
                              سریال بلیط :{serial[0]}
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
                            <span className={styles.spancss1}> {originName[0]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>  مقصد</span>
                            <span className={styles.spancss1}>{destinationName[0]}</span>

                          </div>

                        </div>
                        <div className={styles.contentItem}>

                          <div>
                            <span className={styles.spancss}> راه‌آهن مبدا </span>
                            <span className={styles.spancss1}> {railwayOrigin[0]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>  راه‌آهن مقصد</span>
                            <span className={styles.spancss1}>{railwayDestination[0]}</span>

                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>    ساعت حرکت  </span>

                            <span className={styles.spancss1}> {departureTime[0]}</span>

                          </div>
                          <div>
                            <span className={styles.spancss}>  ساعت رسیدن</span>
                            <span className={styles.spancss1}>{arrivalTime[0]}</span>
                          </div>
                        </div>

                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  تاریخ حرکت </span>
                            <span className={styles.spancss1}> {startDate[0]}  </span>
                          </div>
                          <div>
                            <span className={styles.spancss}>   کلاس سالن  </span>
                            <span className={styles.spancss1}> {hallType[0]}  </span>
                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>   شماره قطار </span>
                            <span className={styles.spancss1}> {trainNumber[0]}  </span>
                          </div>
                          <div>
                            <span className={styles.spancss}>    شرکت ریلی</span>
                            <span className={styles.spancss1}> {railCompany[0]}  </span>
                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  شماره سالن   </span>
                            <span className={styles.spancss1}> {hallNumber[0][i]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>   شماره کوپه </span>
                            <span className={styles.spancss1}> {trainCompartment[0][i]}  </span>
                          </div>
                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>   درجه سالن  </span>
                            <span className={styles.spancss1}> {hallDegree[0][i]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>    شماره صندلی </span>
                            <span className={styles.spancss1}> {seatnumber[0][i]}  </span>
                          </div>
                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>    قیمت </span>
                            <span className={styles.spancss1}> {price[0]}  </span>
                          </div>
                          <div>
                            <span className={styles.spancss}>   بار مجاز  </span>
                            <span className={styles.spancss1}> {allowedLoggage[0]} کیلوگرم </span>
                          </div>

                        </div>

                        <div className={styles.headernamecss}>اطلاعات مسافر</div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  نام مسافر</span>
                            <span className={styles.spancss1}> {fullName[0][i]}</span>

                          </div>

                          <div>
                            <span className={styles.spancss}> کد ملی</span>
                            <span className={styles.spancss1}> {nationalCode[0][i]}</span>

                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}> جنسیت </span>
                            <span className={styles.spancss1}> {gen[0][i]}</span>

                          </div>
                          <div>
                            <span className={styles.spancss}> تاریخ تولد </span>
                            <span className={styles.spancss1}> {birthDate[0][i]}</span>

                          </div>
                        </div>

                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  تاریخ صدور  </span>
                            <span className={styles.spancss1}> {date[0]}</span>
                          </div>
                        
                        </div>

                        <hr />
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  امکانات  </span>
                            <span className={styles.spancss1}> {information[0].slice(0, 6).join('_')}  </span>
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
                              1: ارائه کارت‌شناسایی معتبر برای سوار شدن در قطار الزامی است 
                            </span>
                            <span>
                              2:  حتما یک ساعت قبل از زمان حرکت در راه‌آهن حاضر باشید
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
                              کد رهگیری :{code[1]}
                            </span>
                            <span>
                              سریال بلیط :{serial[1]}
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
                            <span className={styles.spancss1}> {originName[1]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>  مقصد</span>
                            <span className={styles.spancss1}>{destinationName[1]}</span>

                          </div>

                        </div>
                        <div className={styles.contentItem}>

                          <div>
                            <span className={styles.spancss}> راه‌آهن مبدا </span>
                            <span className={styles.spancss1}> {railwayOrigin[1]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>  راه‌آهن مقصد</span>
                            <span className={styles.spancss1}>{railwayDestination[1]}</span>

                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>    ساعت حرکت  </span>

                            <span className={styles.spancss1}> {departureTime[1]}</span>

                          </div>
                          <div>
                            <span className={styles.spancss}>  ساعت رسیدن</span>
                            <span className={styles.spancss1}>{arrivalTime[1]}</span>
                          </div>
                        </div>

                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  تاریخ حرکت </span>
                            <span className={styles.spancss1}> {startDate[1]}  </span>
                          </div>
                          <div>
                            <span className={styles.spancss}>   کلاس سالن  </span>
                            <span className={styles.spancss1}> {hallType[1]}  </span>
                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>   شماره قطار </span>
                            <span className={styles.spancss1}> {trainNumber[1]}  </span>
                          </div>
                          <div>
                            <span className={styles.spancss}>    شرکت ریلی</span>
                            <span className={styles.spancss1}> {railCompany[1]}  </span>
                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  شماره سالن   </span>
                            <span className={styles.spancss1}> {hallNumber[1][i]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>   شماره کوپه </span>
                            <span className={styles.spancss1}> {trainCompartment[1][i]}  </span>
                          </div>
                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>   درجه سالن  </span>
                            <span className={styles.spancss1}> {hallDegree[1][i]}</span>
                          </div>
                          <div>
                            <span className={styles.spancss}>    شماره صندلی </span>
                            <span className={styles.spancss1}> {seatnumber[1][i]}  </span>
                          </div>
                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>    قیمت </span>
                            <span className={styles.spancss1}> {price[0]}  </span>
                          </div>
                          <div>
                            <span className={styles.spancss}>   بار مجاز  </span>
                            <span className={styles.spancss1}> {allowedLoggage[1]} کیلوگرم </span>
                          </div>

                        </div>

                        <div className={styles.headernamecss}>اطلاعات مسافر</div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  نام مسافر</span>
                            <span className={styles.spancss1}> {fullName[0][i]}</span>

                          </div>

                          <div>
                            <span className={styles.spancss}> کد ملی</span>
                            <span className={styles.spancss1}> {nationalCode[0][i]}</span>

                          </div>

                        </div>
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}> جنسیت </span>
                            <span className={styles.spancss1}> {gen[0][i]}</span>

                          </div>
                          <div>
                            <span className={styles.spancss}> تاریخ تولد </span>
                            <span className={styles.spancss1}> {birthDate[0][i]}</span>

                          </div>
                        </div>

                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  تاریخ صدور  </span>
                            <span className={styles.spancss1}> {date[0]}</span>
                          </div>
                         
                        </div>

                        <hr />
                        <div className={styles.contentItem}>
                          <div>
                            <span className={styles.spancss}>  امکانات  </span>
                            <span className={styles.spancss1}> {information[1].slice(0, 6).join('_')}  </span>
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
                              1: ارائه کارت‌شناسایی معتبر برای سوار شدن در قطار الزامی است 
                            </span>
                            <span>
                              2:  حتما یک ساعت قبل از زمان حرکت در راه‌آهن حاضر باشید
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

export default TrainsTicket

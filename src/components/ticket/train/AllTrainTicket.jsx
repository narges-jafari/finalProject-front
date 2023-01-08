import React, { useState } from 'react'
import styles from '../../../assets/styles/Ticket.module.css'
import img from '../../../assets/img/barcode.JPG'
import logo from '../../../assets/img/16.png'
import train from '../../../assets/img/hotel.png'
import { useQuery } from '@apollo/client'
import trainQueries from '../../../Apollo/Query/trainQueries'
import {  USER_ID } from '../../../constants/auth'
import Pdf from 'react-to-pdf'
import ReactTooltip from 'react-tooltip'

const AllTrainTicket = () => {
  const [data, setData] = useState([])

  const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
  useQuery(trainQueries.SEARCHTRAINTICKETBYUSERID, {
    variables: {
      userId: userId
    },

    onCompleted: (res) => {
      setData(res.searchTrainTicketByUserId)
    },
    onError: () => {
      setData([])
    }
  })

  console.log(data,userId)

  const userData = data.map(item => item.trainBuy)
  const fullName = userData.map(item => item.fullName)
  const birthDate = userData.map(item => item.birthDate)
  const nationalCode = userData.map(item => item.nationalCode)
  const gen = userData.map(item => item.gendere)
  const price = userData.map(item => item.price)

  const serial = data.map(item => item.serialId)
  const code = data.map(item => item.codeId)
  const date = data.map(item => item.date)
  const seatnumber = data.map(item => item.seatnumber)
  const hallDegree = data.map(item => item.hallDegree)
  const hallNumber = data.map(item => item.hallNumber)
  const trainCompartment = data.map(item => item.trainCompartment)

  
  
  
  const trainData = userData.map(item => item.train)
  const originName = trainData.map(item => item.originName)
  const destinationName = trainData.map(item => item.destinationName)
  const startDate = trainData.map(item => item.date)
  const railCompany = trainData.map(item => item.railCompany)
  const departureTime = trainData.map(item => item.departureTime)
  const arrivalTime = trainData.map(item => item.arrivalTime)
  const trainNumber = trainData.map(item => item.trainNumber)
  const hallType = trainData.map(item => item.hallType)
  const railwayOrigin = trainData.map(item => item.railwayOrigin)
  const railwayDestination = trainData.map(item => item.railwayDestination)
  const information = trainData.map(item => item.information)
  const allUserData = userData.map(item => item.user)
  const allUserId = allUserData.map(item => item._id)


  console.log(allUserId)

  const ref = React.createRef()
  return (
    <>
 {allUserId==userId?
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
            <div className={styles.headernamecss}>اطلاعات قطار </div>
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
                <span className={styles.spancss}> راه‌آهن مبدا </span>
                <span className={styles.spancss1}> {railwayOrigin}</span>
              </div>
              <div>
                <span className={styles.spancss}>  راه‌آهن مقصد</span>
                <span className={styles.spancss1}>{railwayDestination}</span>

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
                <span className={styles.spancss}>    نام سالن </span>
                <span className={styles.spancss1}> {hallType}  </span>
              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>   شماره سالن </span>
                <span className={styles.spancss1}> {hallNumber.join(' _ ')}  </span>
              </div>
              <div>
                <span className={styles.spancss}>    شماره کوپه</span>
                <span className={styles.spancss1}> {trainCompartment.join(' _')}  </span>
              </div>
              </div>
              <div className={styles.contentItem}>
              <div>
             
                <span className={styles.spancss}>   شماره صندلی </span>
                <span className={styles.spancss1}>  {seatnumber.join('_ ')}  </span>
              </div>
              <div>
                <span className={styles.spancss}>    قیمت </span>
                <span className={styles.spancss1}> {price}  </span>
              </div>


            </div>
          
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>   شماره قطار </span>
                <span className={styles.spancss1}> {trainNumber}  </span>
              </div>
              <div>
                <span className={styles.spancss}>    شرکت ریلی</span>
                <span className={styles.spancss1}> {railCompany}  </span>
              </div>

            </div>
          

            <div className={styles.headernamecss}>اطلاعات مسافر</div>
            
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  نام مسافر</span>
                <span className={styles.spancss1}>  {fullName.join('_ ')}</span>

              </div>

              <div>
                <span className={styles.spancss}> کد ملی</span>
                <span className={styles.spancss1}>  {nationalCode.join('_')}</span>

              </div>

            </div>
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}> جنسیت </span>
                <span className={styles.spancss1}>  {gen.join('_ ')}</span>

              </div>
              <div>
                <span className={styles.spancss}> تاریخ تولد </span>
                <span className={styles.spancss1}>  {birthDate.join(' _ ')}</span>

              </div>
            </div>

            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>  تاریخ صدور  </span>
                <span className={styles.spancss1}> {date}</span>
              </div>
         
            </div>

            <hr />
            <div className={styles.contentItem}>
              <div>
                <span className={styles.spancss}>   اطلاعات  </span>
                <span className={styles.spancss1}> {information.join('_')}</span>
              </div>
         
            </div>

            <hr/>
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

      </>
      :<div style={{width:'70%',textAlign:'center'}} className=' rounded-3 px-4 py-3 justify-content-center alert-info border mx-auto my-4'>
        شما تاکنون بلیط قطار تهیه نکرده اید

        </div>}
    </>
  )
}

export default AllTrainTicket

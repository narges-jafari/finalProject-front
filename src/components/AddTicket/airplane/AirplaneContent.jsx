import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import { useMutation } from '@apollo/client'
import flightMutations from '../../../Apollo/Mutation/flightMutations'

import { flightClasses } from '../../../constants/flightClasses'
import { airplaneCompany } from '../../../constants/airplaneCompany'



const AirplaneContent = () => {
  const [destinationName, setDestinationName] = useState('')
  const [originName, setOriginName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [destinationAirport, setDestinationAirport] = useState('')
  const [originAirport, setOriginAirport] = useState('')
  const [price, setPrice] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [arrivalTime, setArrivalTime] = useState('')
  const [airplaneModel, setAirplaneModel] = useState('')
  const [flightNumber, setFlightNumber] = useState('')
  const [capacity, setCapacity] = useState('')
  const [airline, SetAirline] = useState('')
  const [flightClass, setFlightClass] = useState('')
  const [showairplaneCompany, setShowAirplaneCompany] = useState('')
  const [allowedLoggage, setAllowedLoggage] = useState('')
  const [information, setInformation] = useState('')
  // const [ticketDropDown, setTicketDropDown] = useState(false)
  const [showPassengerModal, setShowPassengerModal] = useState('')
  const firstUpdate = useRef(true)

  const resetFields = () => {
    setDestinationName('')
    setOriginName('')
    setStartDate('')
    setDestinationAirport('')
    setOriginAirport('')
    setPrice(null)
    setDepartureTime('')
    setArrivalTime('')
    setAirplaneModel('')
    setFlightNumber(null)
    setCapacity(null)
    SetAirline('')
    setFlightClass('')
    setAllowedLoggage(null)
    setInformation('')
  }

  // APOLLO
  const [createFlights] = useMutation(flightMutations.CREATEFLIGHT)

  const handleCreateAlert = (e) => {
    e.preventDefault()
    createFlights({
      variables: {
        originName: originName,
        destinationName: destinationName,
        price: parseInt(price),
        flightClass: flightClass,
        departureTime: departureTime,
        arrivalTime: arrivalTime,
        capacity: parseInt(capacity),
        flightNumber: parseInt(flightNumber),
        airportOrigin: originAirport,
        airportDestination: destinationAirport,
        information: information,
        date: startDate,
        airline: airline,
        airplaneModel: airplaneModel,
        allowedLoggage: parseInt(allowedLoggage)

      }
    })
      .then(({ data }) => {
        if (data.createFlight !== null) {
          // toast.success('Your alert have been create successfully')
          <div>cccccccc</div>
          resetFields()
        } else {
          <div>000000</div>
        }
      })
  }

  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>
     
        <div className='d-flex flex-row  flex-wrap justify-content-between'>
          <div className={styles.content}>
            <label>  شهر مبدا</label>
            <input
              type='text'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label> شهر مقصد</label>
            <input
              type='text'
              value={destinationName}
              onChange={e => setDestinationName(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>فرودگاه مبدا</label>
            <input
              type='text'
              value={originAirport}
              onChange={e => setOriginAirport(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>فرودگاه مقصد</label>
            <input
              type='text'
              value={destinationAirport}
              onChange={e => setDestinationAirport(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              value={price}
              onChange={e => setPrice(e.target.value)}
              className={styles.inputcss}
            />
          </div>

          <div className={styles.content}>
            <label>   ساعت پرواز</label>
            <input
              type='text'
              value={departureTime}
              onChange={e => setDepartureTime(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>   ساعت  رسیدن</label>
            <input
              type='text'
              value={arrivalTime}
              onChange={e => setArrivalTime(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>    تاریخ  پرواز</label>
            <input
              type='text'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>    مدل  هواپیما</label>
            <input
              type='text'
              value={airplaneModel}
              onChange={e => setAirplaneModel(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>     شماره پرواز </label>
            <input
              value={flightNumber}
              onChange={e => setFlightNumber(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>    ظرفیت</label>
            <input
              value={capacity}
              onChange={e => setCapacity(e.target.value)}
              className={styles.inputcss}
            />
          </div>
          <div className={styles.content}>
            <label>  نام شرکت   </label>
            <select
              name=''
              value={showairplaneCompany}
              onChange={e => {
                firstUpdate.current = false
                setShowAirplaneCompany(e.target.value)
              }}
            >
              {airplaneCompany.map((name, index) => (
                <option value={name} key={index}>{name}
                </option>
              ))}
            </select>

            {/* <select>
            <option>
              پرمیوم
            </option>
            <option>
              فرست
            </option>
            <option>
              بیزینس
            </option>
            <option>
              فرست
            </option>
           </select> */}
          </div>
          <div className={styles.content}>
            <label>    کلاس پرواز</label>
            <select
              name=''
              value={flightClass}
              onChange={e => {
                firstUpdate.current = false
                setFlightClass(e.target.value)
              }}
            >
              {flightClasses.map((classname, index) => (
                <option value={classname} key={index}>{classname}
                </option>
              ))}
            </select>

            {/* <select>
            <option>
              پرمیوم
            </option>
            <option>
              فرست
            </option>
            <option>
              بیزینس
            </option>
            <option>
              فرست
            </option>
           </select> */}
          </div>
          <div className={styles.content}>
            <label>      بار مجاز </label>
            <input
              value={allowedLoggage}
              onChange={e => setAllowedLoggage(e.target.value)}
              className={styles.inputcss}
            />
          </div>
        </div>
        {/* <div className='d-flex flex-row mt-3 flex-wrap justify-content-between'>

        </div> */}
        <div className='d-flex flex-column mt-3 flex-wrap justify-content-between'>
          <label>اطلاعات</label>
          <textarea
            value={information}
            onChange={e => setInformation(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={handleCreateAlert}
            className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4 '
          >جستجو
          </button>
        </div>

      </div>
    </>
  )
}

export default AirplaneContent

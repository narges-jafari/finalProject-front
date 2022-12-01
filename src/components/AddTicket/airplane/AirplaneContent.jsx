



import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import { useMutation } from '@apollo/client'
import flightMutations from '../../../Apollo/Mutation/flightMutations'
import { flightClasses } from '../../../constants/flightClasses'
import { airplaneCompany } from '../../../constants/airplaneCompany'
import { USER_ID } from '../../../constants/auth'
import { property } from '../../../constants/property'

import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const AirplaneContent = () => {

  const [originName, setOriginName] = useState('')
  const [destinationName, setDestinationName] = useState('')
  const [price, setPrice] = useState('')

  const [startDate, setStartDate] = useState('')
  const [destinationAirport, setDestinationAirport] = useState('')
  const [originAirport, setOriginAirport] = useState('')
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

  const firstUpdate = useRef(true)


    const [userinfo, setUserInfo] = useState({
      property: [],
      response: [],
    });
    const handleChange = (e) => {
      // Destructuring
      const { value, checked } = e.target;
      const { property } = userinfo;
        
      console.log(`${value} is ${checked}`);
       
      // Case 1 : The user checks the box
      if (checked) {
        setUserInfo({
          property: [...property, value],
          response: [...property, value],
        });
      }
       // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        property: property.filter((e) => e !== value),
        response: property.filter((e) => e !== value),
      });
    }
  };

  const resetFields = () => {
    setDestinationName('')
    setOriginName('')
    // setStartDate('')
    // setDestinationAirport('')
    // setOriginAirport('')
    setPrice('')
    // setDepartureTime('')
    // setArrivalTime('')
    // setAirplaneModel('')
    // setFlightNumber(null)
    // setCapacity(null)
    // setShowAirplaneCompany('')
    // setFlightClass('')
    // setAllowedLoggage(null)
    // setInformation('')
  }

  const userid = window.localStorage.getItem(USER_ID)
// console.log(checkedItems)

  const [createFlights] = useMutation(flightMutations.CREATEFLIGHT)
 
  const handleCreateAlert = (e) => {
    e.preventDefault( )
    createFlights({
        variables: {
          originName: originName,
        destinationName: destinationName,
        price: parseFloat(price),
          creator:JSON.parse(userid)

        }
      })
      .then(({ data }) => {
        if (data.createFlight !== null) {
          toast.success('عملیات اضافه شدن بلیط هواپیما با موفقیت انجام شد')
          resetFields()
        } else {
          toast.danger('خطایی رخ داد از دوباره تلاش کنید' )
        }
      })
  }

  console.log(userinfo.response,'kksdjfh')

  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>
          
       

          {/* {[checked]} */}
      <div className='bg-warning my-4'>
        مبدا و مقصد
</div>

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



        </div>
        <div className='bg-warning my-4'>
          ساعت و زمان 
</div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

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




        </div>
        <div className='bg-warning my-4'>
          هواپیما
</div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

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
            <label>    شماره صندلی</label>
            <input
              value={capacity}
              onChange={e => setCapacity(e.target.value)}
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
        <div className='bg-warning my-4'>
امکانات
</div>
<div className='d-flex flex-row flex-wrap justify-content-between'>
  <div className='d-flex flex-column justify-content-between'>
  {property.slice(0,5).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span  className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
  </div>
  <div className='d-flex flex-column justify-content-between'>
  {property.slice(5,10).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem} >{item}</span>
              </div>
            ))}
  </div>
  <div className='d-flex flex-column justify-content-between'>
  {property.slice(10,15).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
  </div>
  {userinfo.response}
    
          </div>


          <button
            onClick={handleCreateAlert}
            className='btn btn-sm btn-danger my-4 py-2 rounded-3 mx-2 px-4 '
          >
            اضافه کردن 
          </button>
          <ToastContainer />
      


        </div>
      
    </>
  )
}

export default AirplaneContent




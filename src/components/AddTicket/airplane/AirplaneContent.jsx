import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import { useMutation } from '@apollo/client'
import flightMutations from '../../../Apollo/Mutation/flightMutations'
import { airplaneCompany, flightClasses } from '../../../constants/airplane'
import { USER_ID, FLIGHT_ID, FLIGHT_CAPACITY } from '../../../constants/auth'
import { property } from '../../../constants/property'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AirplaneContent = (props) => {
  // STATES

  const [originName, setOriginName] = useState('')
  const [destinationName, setDestinationName] = useState('')
  const [price, setPrice] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [destinationAirport, setDestinationAirport] = useState('')
  const [originAirport, setOriginAirport] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [arrivalTime, setArrivalTime] = useState('')
  const [airplaneModel, setAirplaneModel] = useState('')
  const [flightNumber, setFlightNumber] = useState('')
  const [capacity, setCapacity] = useState('')
  const [flightClass, setFlightClass] = useState('')
  const [showairplaneCompany, setShowAirplaneCompany] = useState('')
  const [allowedLoggage, setAllowedLoggage] = useState('')
  const [error, setError] = useState(null)
  const [error1, setError1] = useState(null)
  const [error2, setError2] = useState(null)
  const [error3, setError3] = useState(null)
  const [error4, setError4] = useState(null)
  const [error5, setError5] = useState(null)
  const [error6, setError6] = useState(null)
  const [error7, setError7] = useState(null)
  const [error8, setError8] = useState(null)
  const [error9, setError9] = useState(null)
  const [error10, setError10] = useState(null)
  const [userinfo, setUserInfo] = useState({
    property: [],
    response: []
  })

  // REF
  const firstUpdate = useRef(true)

  // FUNCTION FOR CHECKBOXES
  const handleChange = (e) => {
  // Destructuring
    const { value, checked } = e.target
    const { property } = userinfo

    // Case 1 : The user checks the box
    // Case 2  : The user unchecks the box
    if (checked) {
      setUserInfo({
        property: [...property, value],
        response: [...property, value]
      })
    } else {
      setUserInfo({
        property: property.filter((e) => e !== value),
        response: property.filter((e) => e !== value)
      })
    }
  }

  // FUNCTION FOR RESET
  const resetFields = () => {
    setDestinationName('')
    setOriginName('')
    setCapacity('')
    setStartDate(new Date(''))
    setDestinationAirport('')
    setOriginAirport('')
    setPrice('')
    setDepartureTime('')
    setArrivalTime('')
    setAirplaneModel('')
    setFlightNumber('')
    setShowAirplaneCompany('')
    setFlightClass('')
    setAllowedLoggage('')
  }

  const userid = window.localStorage.getItem(USER_ID)

  // APOLLO MUTATION
  const [createFlights] = useMutation(flightMutations.CREATEFLIGHT)

  const handleCreateFlight = (e) => {
    if (!error) {
      e.preventDefault()
      createFlights({
        variables: {
          originName: originName,
          destinationName: destinationName,
          capacity: parseInt(capacity),
          date: startDate.toString(),
          airportDestination: destinationAirport,
          airportOrigin: originAirport,
          departureTime: departureTime,
          arrivalTime: arrivalTime,
          price: parseFloat(price),
          airplaneModel: airplaneModel,
          flightNumber: parseInt(flightNumber),
          flightClass: flightClass,
          airplaneCompany: showairplaneCompany,
          allowedLoggage: parseInt(allowedLoggage),
          information: userinfo.response,
          creator: JSON.parse(userid)

        }
      })
        .then(({ data }) => {
          if (data.createFlight !== null) {
            toast.success('عملیات اضافه شدن بلیط هواپیما با موفقیت انجام شد')
            window.localStorage.setItem(FLIGHT_ID, JSON.stringify(data.createFlight._id))
            window.localStorage.setItem(FLIGHT_CAPACITY, JSON.stringify(data.createFlight.capacity))

            resetFields()
          } else {
            toast.error(
              'خطایی در برقراری با سرور اتفاق افتاد'
            )
          }
        })
    } else {
      toast.warning('خطایی رخ داد از دوباره تلاش کنید')
    }
  }

  // VALIDATIONS
  // originName validation
  function isValidName (email) {
    return /^[\u0600-\u06FF\s]+$/.test(email)
  }

  const handlename = event => {
    if (!isValidName(event.target.value)) {
      setError('باید زبان کیبورد را عوض کنید!')
    } else if (originName.length < 2) {
      setError('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError(null)
    }

    setOriginName(event.target.value)
  }

  // destinationName validation
  const handlename1 = event => {
    if (!isValidName(event.target.value)) {
      setError1('باید زبان کیبورد را عوض کنید!')
    } else if (destinationName.length < 2) {
      setError1('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError1(null)
    }

    setDestinationName(event.target.value)
  }

  // setOriginAirport validation
  const handlename2 = event => {
    if (!isValidName(event.target.value)) {
      setError2('باید زبان کیبورد را عوض کنید!')
    } else if (originAirport.length < 2) {
      setError2('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError2(null)
    }

    setOriginAirport(event.target.value)
  }

  // setDestinationAirport
  const handlename3 = event => {
    if (!isValidName(event.target.value)) {
      setError3('باید زبان کیبورد را عوض کنید!')
    } else if (destinationAirport.length < 2) {
      setError3('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError3(null)
    }

    setDestinationAirport(event.target.value)
  }
  // airplaneModel validation
  const handlename4 = event => {
    if (!isValidName(event.target.value)) {
      setError6('فقط حروف الفبای فارسی مجاز هست')
    } else if (airplaneModel.length < 2) {
      setError6('حداقل باید سه حرف وارد کنید!  ')
    } else {
      setError6(null)
    }

    setAirplaneModel(event.target.value)
  }

  // capacity validation
  function isValidCapacity (cp) {
    return /^\d$/.test(cp)
  }

  const handlecapacity = event => {
    if (!isValidCapacity(event.target.value)) {
      setError4(' باید اعداد بین 9-1 را وارد کنید')
    } else {
      setError4(null)
    }

    setCapacity(event.target.value)
  }
  // flightNumber validation
  function isValidClass (item) {
    return /^[2-9][0-9]{3}$/.test(item)
  }
  const handlFlightClass = event => {
    if (!isValidClass(event.target.value)) {
      setError5('باید اعداد بین 2000تا9999 را وارد کنید')
    } else {
      setError5(null)
    }

    setFlightNumber(event.target.value)
  }

  // allowedLoggage validation
  function isValidWeight (item) {
    return /^[0-9]{2}$/.test(item)
  }
  const handlWeight = event => {
    if (!isValidWeight(event.target.value)) {
      setError7('باید اعداد بین 99-10 را وارد کنید')
    } else {
      setError7(null)
    }

    setAllowedLoggage(event.target.value)
  }
  // times validation
  function isValidftime (item) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(item)
  }
  const handlfTime = event => {
    if (!isValidftime(event.target.value)) {
      setError8(' فرمت صحیح HH:MM است ')
    } else {
      setError8(null)
    }

    setDepartureTime(event.target.value)
  }
  function isValidsTime (item) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(item)
  }
  const handlesTime = event => {
    if (!isValidsTime(event.target.value)) {
      setError9(' فرمت صحیح HH:MM است ')
    } else {
      setError9(null)
    }

    setArrivalTime(event.target.value)
  }
  // price validation

  function isValidsPrice (item) {
    return /^[+-]?([0-9]*[.])?[0-9]+$/.test(item)
  }
  const handlePrice = event => {
    if (!isValidsPrice(event.target.value)) {
      setError10('فرمت وارد شده صحیح نیست')
    } else {
      setError10(null)
    }

    setPrice(event.target.value)
  }

  return (
    <>

      <div className='d-flex flex-column flex-wrap my-2'>

        <div className={styles.headername}>
          مبدا و مقصد
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

          <div className={styles.content}>
            <label>  شهر مبدا</label>
            <input
              type='text'
              value={originName}
              onChange={handlename}

              className={styles.inputcss}
              name='originName'
            />
            {error
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}

          </div>

          <div className={styles.content}>
            <label> شهر مقصد</label>
            <input
              type='text'
              value={destinationName}
              onChange={handlename1}
              className={styles.inputcss}
            />
            {error1
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error1}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>

          <div className={styles.content}>
            <label>فرودگاه مبدا</label>
            <input
              type='text'
              value={originAirport}
              onChange={handlename2}
              className={styles.inputcss}
            />
            {error2
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error2}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>فرودگاه مقصد</label>
            <input
              type='text'
              value={destinationAirport}
              onChange={handlename3}
              className={styles.inputcss}
            />
            {error3
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error3}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>

        </div>
        <div className={styles.headername}>
          ساعت و زمان
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

          <div className={styles.content}>
            <label>   ساعت پرواز</label>
            <input
              type='text'
              value={departureTime}
              onChange={handlfTime}

              className={styles.inputcss}
            />
            {error8
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error8}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>   ساعت  رسیدن</label>
            <input
              type='text'
              value={arrivalTime}
              onChange={handlesTime}
              className={styles.inputcss}
            />
            {error9
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error9}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>    تاریخ  پرواز</label>
            <DatePicker
              inputClass={styles.inputDateCss}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              calendar={persian}
              locale={persianfa}
              defaultValue=''
              calendarPosition='bottom-right'
              placeholder='تاریخ پرواز'
              format='YYYY/MM/DD'
            />
            {startDate == null
              ? <>
                <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />
                  این فیلد ضروری هست
                </small>
                </div>
              </>
              : null}
          </div>

        </div>
        <div className={styles.headername}>
          هواپیما
        </div>

        <div className='d-flex flex-row  flex-wrap justify-content-between'>

          <div className={styles.content}>
            <label>    مدل  هواپیما</label>
            <input
              type='text'
              value={airplaneModel}
              onChange={handlename4}
              className={styles.inputcss}
            />
            {error6
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error6}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>     شماره پرواز </label>
            <input
              value={flightNumber}
              onChange={handlFlightClass}
              className={styles.inputcss}
            />
            {error5
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error5}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>
          <div className={styles.content}>
            <label>    ظرفیت </label>
            <input
              value={capacity}
              onChange={handlecapacity}
              className={styles.inputcss}
            />
            {error4
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error4}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>

          <div className={styles.content}>
            <label>   قیمت</label>
            <input
              value={price}
              onChange={handlePrice}
              className={styles.inputcss}
            />
            {error10
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error10}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
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
              onChange={handlWeight}
              className={styles.inputcss}
            />
            {error7
              ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'><i className='fa fa-exclamation-triangle' />{error7}</small> </div>
              : <div className='alert alert-white rounded-2 p-2 mt-1'>{null}</div>}
          </div>

        </div>
        <div className={styles.headername}>
          امکانات
        </div>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <div className='d-flex flex-column justify-content-between'>
            {property.slice(0, 5).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {property.slice(5, 10).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            {property.slice(10, 15).map((item, index) => (
              <div className={styles.checkboxCss} key={index}>
                <input value={item} type='checkbox' onChange={handleChange} style={{ marginLeft: '20px', marginTop: '15px' }} />
                <span className={styles.checkboxitem}>{item}</span>
              </div>
            ))}
          </div>
          {/* {userinfo.response} */}

        </div>

        <button
          onClick={handleCreateFlight}
          className='btn btn-sm btn-danger my-4 py-2 rounded-3 mx-2 px-4 '
        >
          اضافه کردن
        </button>
        <ToastContainer />
        {/* {flightid?rows:null} */}

      </div>

    </>
  )
}

export default AirplaneContent

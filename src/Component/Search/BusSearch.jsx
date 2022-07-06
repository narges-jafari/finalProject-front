import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import styles from '../../assets/styles/css/hotelSearch.module.css'
import DatePicker from 'react-multi-date-picker'
import { stayDate } from '../../constants/search.js'
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap'

const BusSearch = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate,setStartDate] =useState(new Date())
  const [endDate,setEndDate] =useState(new Date())


  return (
    <>
      <div className='d-flex flex-row flex-wrap'>
        <div className='mx-2 my-1' style={{width:'300px'}}>
          <input
            type='text'
            placeholder='مبدا'
            onChange={e => setOriginName(e.target.value)}
            className='border border-1 border-secondary w-100  rounded-3 '
            style={{padding:'3px'}}
          />
                            {/* <i className ={' fa fa-hotel ' + styles.hotelIconCss}/> */}

          {originName}
        </div>
        <div className='mx-2 my-1' style={{width:'300px'}}>
          <input
            type='text'
            placeholder='مقصد'
            onChange={e => setDestinationName(e.target.value)}
            className='border border-1 border-secondary w-100  rounded-3 '
            style={{padding:'3px'}}
          />
                            {/* <i className ={' fa fa-hotel ' + styles.hotelIconCss}/> */}

          {destinationName}
        </div>

        <div className='mx-2 my-1'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
            style={{padding :'15px'}}
          />
        </div>
        <div className='mx-2 my-1'>
          <DatePicker
           selected={endDate}
           onChange={(date) => setEndDate(date)}
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
            style={{padding :'15px'}}
          />
        </div>
      </div>
    </>
  )
}

export default BusSearch

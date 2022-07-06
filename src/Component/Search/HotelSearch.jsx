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

const HotelSearch = () => {
  const [hotelName, setHotelName] = useState()
  const [stayDateDropDown, setStateDateDropDown] = useState(false)
  const [stayDateValue, setStateDateValue] = useState()

  return (
    <>
      <div className='d-flex flex-row flex-wrap'>
        <div className='mx-2 my-1' style={{width:'300px'}}>
          <input
            type='text'
            placeholder='نام هتل را وارد کنید'
            onChange={e => setHotelName(e.target.value)}
            className='border border-1 border-secondary w-100  rounded-3 '
            style={{padding:'3px'}}
          />
                            {/* <i className ={' fa fa-hotel ' + styles.hotelIconCss}/> */}

          {hotelName}
        </div>
        <div className='mx-2 my-1 ' >
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
            style={{ padding :'15px', width:'100px'}}
          />
        </div>
        <div className='mx-2 my-1'>
          <ButtonDropdown
            isOpen={stayDateDropDown}
            toggle={() => setStateDateDropDown(!stayDateDropDown)}
            style={{
              borderWidth: '1px',
              borderRadius: '5px',
              borderStyle: 'solid',
              borderColor: '#ccc7c788',
              marginLeft: '0.5rem'
            }}
          >
            <Button id='caret' style={{width:'70px'}} color='white' className='px-1 py-1'>
              {stayDateValue}
            </Button>
            <DropdownToggle
              caret
              className='btn btn-sm bg-light text-dark rounded-2'
              style={{
                borderRight: '1px #ccc7c788 solid',
                borderTop: 'none',
                borderBottom: 'none',
                borderLeft: '1px #ccc7c788 solid',
                backgroundColor: '#8f989e'
              }}
            >
              {
              !stayDateDropDown ? <i className='mdi mdi-chevron-down' />: 
              <i className='mdi mdi-chevron-up'/>
            }
            </DropdownToggle>
            <DropdownMenu style={{width:'70px'}}>

              {
          stayDate.map((date, index) => (
            <DropdownItem
              key={index}
              value={date}
              onClick={(e) => {
                setStateDateValue(e.target.value)
              }}
            >{date}
            </DropdownItem>
          ))
         }
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </div>
    </>
  )
}

export default HotelSearch

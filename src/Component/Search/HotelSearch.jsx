import React,{useState} from 'react'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import styles from '../../assets/styles/css/hotelSearch.module.css'
import DatePicker from "react-multi-date-picker"
import {stayDate} from '../../constants/search.js'
import {
    Button,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from 'reactstrap'

const HotelSearch = () =>{
    const [hotelName, setHotelName] = useState()
    const [stayDateDropDown, setStateDateDropDown] = useState()
    const [stayDateValue, setStateDateValue] = useState()


    return (
        <>
        <div className='d-flex flex-row '>
         
            <div>
                <input 
                type='text'
                placeholder='نام هتل را وارد کنید'  
                onChange={e=>{setHotelName(e.target.value)}}
                className='border border-secondary mx-2 rounded-3 '
                />
                            {/* <i className ={' fa fa-hotel ' + styles.hotelIconCss}/> */}

                {hotelName}
            </div>
            <div>
            <DatePicker
        calendar={persian}
        locale={persian_fa}
      calendarPosition="bottom-right"
      className='border border-secondary'
    />
            </div>
            <div>
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
            <Button id='caret' style={{ width: '300px' }} color='white' className='px-1 py-1'>
            {stayDateValue}
            </Button>
            <DropdownToggle caret color='' className='btn btn-sm bg-light text-dark'
            style={{borderRight:'none',
            borderTop:'none',
            borderBottom:'none',
            borderLeft:'1px #ccc7c788 solid',
            backgroundColor:'#8f989e'}}
            >
            {!stayDateDropDown?
              <i className='mdi mdi-chevron-down' />:<i className='mdi mdi-chevron-up' />
               
            }
            </DropdownToggle>
            <DropdownMenu className={styles.dropdownCss} name='selectMulti'>

                 
                  {
          stayDate.map((date,index) => (
          
            <DropdownItem   key={index} 
            value={date} 
                  onClick={(e) => {
                    setStateDateValue(e.target.value)
                  }}>{date}
             
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

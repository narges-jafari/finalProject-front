import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { dropdown1, dropdown2 } from '../../../constants/dropdown.js'
import {
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown
} from 'reactstrap'
import styles from '../../../assets/styles/TrainContent.module.css'

import Passenger from './Pasenger.jsx'

const TrainContent = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [traiType, setTrainType] = useState(false)
  const [trainDropDown, setTrainDropDown] = useState(false)
  const [traiTicket, setTrainticket] = useState(false)
  const [ticketDropDown, setTicketDropDown] = useState(false)
  const [showPassengerModal, setShowPassengerModal] = useState(false)

  return (
    <>
      <div className='d-flex flex-row flex-wrap mx-5 my-4 '>
        <div className='mx-2 my-2'>
          <ButtonDropdown
            isOpen={trainDropDown}
            toggle={() => setTrainDropDown(!trainDropDown)}
            style={{
              borderWidth: '1px',
              borderRadius: '5px',
              borderStyle: 'solid',
              borderColor: '#556EE6',
              marginLeft: '0.5rem'
            }}
          >
            <Button id='caret' style={{ width: '130px' }} color='white' className='px-1 py-1'>
              {!traiType ? 'نوع سالن ' : traiType}
            </Button>
            <DropdownToggle caret color='primary' className='btn btn-sm rounded-3   my-0' />
            <DropdownMenu className='py-0  px-0 '>
              {dropdown2.map((type, id) => (
                <DropdownItem
                  value={type} key={id}
                  onClick={(e) => {
                    setTrainType(e.target.value)
                  }}
                >{type}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className='mx-2 my-2'>
          <ButtonDropdown
            isOpen={ticketDropDown}
            toggle={() => setTicketDropDown(!ticketDropDown)}
            style={{
              borderWidth: '1px',
              borderRadius: '5px',
              borderStyle: 'solid',
              borderColor: '#556EE6',
              marginLeft: '0.5rem'
            }}
          >
            <Button id='caret' placeholder='jjjjjjj' style={{ width: '130px' }} color='white' className='px-1 py-1'>
              {!traiTicket ? 'نوع بلیط ' : traiTicket}
            </Button>
            <DropdownToggle caret color='primary' className='btn btn-sm rounded-3   my-0' />
            <DropdownMenu className='py-0  px-0 '>
              {dropdown1.map((train, id) => (
                <DropdownItem
                  value={train} key={id}
                  onClick={(e) => {
                    setTrainticket(e.target.value)
                  }}
                >{train}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </div>

        <button
          type='button'
          data-toggle='modal'
          onClick={() => {
            if (!showPassengerModal) {
              setShowPassengerModal(true)
            }
          }}
          className='btn h-25 my-2 text-primary border border-primary rounded-3 text-nowrap py-1 '
        >
          <i className='fa fa-cog text-danger mx-1' /> مسافران
        </button>
        {showPassengerModal && (
          <Passenger
            isOpen={showPassengerModal}
            setIsOpen={setShowPassengerModal}
          />
        )}

      </div>
      <div className='d-flex flex-row flex-wrap my-2'>
        <div className='mx-2 my-2'>
          <i
            className=' fa fa-map-marker   my-2 mx-2 fa-lg '
            style={{ position: 'absolute', color: '#d0cbcbb0' }}
          />

          <input
            type='text'
            placeholder=' مبدا'
            onChange={e => setOriginName(e.target.value)}
            className={styles.inputcss}
          />

          {originName}
        </div>
        <div className='mx-2 my-2'>
          <i
            className=' fa fa-map-marker   my-2 mx-2 fa-lg '
            style={{ position: 'absolute', color: '#d0cbcbb0' }}
          />

          <input
            type='text'
            placeholder=' مقصد'
            onChange={e => setDestinationName(e.target.value)}
            className={styles.inputcss}
          />

          {destinationName}
        </div>
        <div className='mx-2 my-2 '>
          <i className='fa fa-calendar my-2 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            placeholder='تاریخ رفت'
            style={{ height: '40px', width: '180px', paddingRight: '40px', border: '1px solid #80808033' }}
          />
        </div>
        {traiTicket === 'یک طرفه'
          ? null
          : <div className='mx-2 my-2 '>
            <i className='fa fa-calendar my-2 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
              placeholder='تاریخ برگشت'
              style={{ height: '40px', width: '180px', paddingRight: '40px', border: '1px solid #80808033' }}
            />
          </div>}
        <div>
          <button className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4'>جستجو</button>
        </div>
      </div>
    </>
  )
}

export default TrainContent

import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import styles from '../../../assets/styles/TrainContent.module.css'
import Passenger from '../train/Pasenger'
import { dropdown1 } from '../../../constants/dropdown.js'

import {
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown
} from 'reactstrap'

const AirplaneContent = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [traiTicket, setTrainticket] = useState(false)
  const [ticketDropDown, setTicketDropDown] = useState(false)
  const [showPassengerModal, setShowPassengerModal] = useState(false)

  return (
    <>
      <div className='d-flex flex-column flex-wrap my-2'>
        <div className='d-flex flex-row mt-4 mx-3'>
          <ButtonDropdown
            isOpen={ticketDropDown}
            toggle={() => setTicketDropDown(!ticketDropDown)}
            style={{
              borderWidth: '1px',
              borderRadius: '5px',
              borderStyle: 'solid',
              borderColor: '#556EE6',
              marginLeft: '0.5rem',
              height: '33px',
              marginTop: '7px'
            }}
          >
            <Button id='caret' placeholder='jjjjjjj' style={{ width: '130px' }} color='white' className='py-0'>
              {!traiTicket ? 'نوع بلیط ' : traiTicket}
            </Button>
            <DropdownToggle caret color='primary' className='btn btn-sm rounded-3 حغ-0  my-0' />
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
          <button
            type='button'
            data-toggle='modal'
            onClick={() => {
              if (!showPassengerModal) {
                setShowPassengerModal(true)
              }
            }}
            className='btn py-1  my-2 mx-2  bg-soft bg-warning  text-primary border border-primary rounded-3 text-nowrap '
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
        <div className='d-flex flex-row '>
          <div className='mx-2 my-2'>
            <i
              className=' fa fa-map-marker   my-2 mx-2 fa-lg '
              style={{ position: 'absolute', color: '#d0cbcbb0' }}
            />

            <input
              type='text'
              placeholder=' پرواز از'
              value={originName}
              onChange={e => setOriginName(e.target.value)}
              className={styles.inputcss}
            />

            {/* {originName} */}
            <i className='fa fa-exchange btn  fa-lg ' onClick={e => { setOriginName(destinationName); setDestinationName(originName) }} style={{ position: 'absolute', marginRight: '-14px' }} />

          </div>
          <div className='mx-2 my-2'>
            <i
              className=' fa fa-map-marker   my-2 mx-2 fa-lg '
              style={{ position: 'absolute', color: '#d0cbcbb0' }}
            />

            <input
              type='text'
              placeholder=' پرواز به'
              onChange={e => setDestinationName(e.target.value)}
              className={styles.inputcss}
              value={destinationName}
            />

            {/* {destinationName} */}
          </div>
        </div>
        <div className='d-flex flex-row mt-3 '>
          <div className='mx-2 my-2 '>
            <i className='fa fa-calendar mt-3 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
              placeholder='تاریخ رفت'
              style={{ height: '40px', width: '300px', paddingRight: '40px', border: '1px solid #80808033' }}
            />
          </div>
          <div className='mx-2 my-2 '>
            <i className='fa fa-calendar mt-3 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              calendar={persian}
              locale={persianfa}
              calendarPosition='bottom-right'
              placeholder='تاریخ برگشت'
              style={{ height: '40px', width: '300px', paddingRight: '40px', border: '1px solid #80808033' }}
            />
          </div>
        </div>

        <div>
          <button className='btn btn-sm btn-danger my-2 py-2 rounded-3 mx-2 px-4 '>جستجو</button>
        </div>

      </div>
    </>
  )
}

export default AirplaneContent

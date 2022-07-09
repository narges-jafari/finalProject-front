import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persianfa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

const TrainSearch = () => {
  const [destinationName, setDestinationName] = useState()
  const [originName, setOriginName] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <>
      <div className='d-flex flex-row flex-wrap'>
        <div className='mx-2 my-1' style={{ width: '300px' }}>
          <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ position: 'absolute', color: '#d0cbcbb0' }} />

          <input
            type='text'
            placeholder='مبدا '
            onChange={e => setOriginName(e.target.value)}
            className='border border-1 border-secondary w-100  rounded-3 '
            style={{ paddingTop: '3px ', paddingBottom: '4px', paddingRight: '25px' }}
          />

          {originName}
        </div>
        <div className='mx-2 my-1' style={{ width: '300px' }}>
          <i className='fa fa-map-marker mx-2 my-2 fa-lg ' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <input
            type='text'
            placeholder=' مقصد'
            onChange={e => setDestinationName(e.target.value)}
            className='border border-1 border-secondary w-100  rounded-3 '
            style={{ paddingTop: '3px ', paddingBottom: '4px', paddingRight: '25px' }}
          />

          {destinationName}
        </div>

        <div className='mx-2 my-1'>
          <i className='fa fa-calendar my-2 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            style={{ paddingTop: '15px', paddingBottom: '15px', width: '130px', paddingRight: '40px' }}
          />
        </div>
        <div className='mx-2 my-1'>
          <i className='fa fa-calendar my-2 mx-2' style={{ position: 'absolute', color: '#d0cbcbb0' }} />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            calendar={persian}
            locale={persianfa}
            calendarPosition='bottom-right'
            style={{ paddingTop: '15px', paddingBottom: '15px', width: '130px', paddingRight: '40px' }}
          />
        </div>
        <div>
          <i className='fa fa-search my-2 mx-2' style={{ position: 'absolute' }} />
          <button className='ntn btn-sm btn-primary  px-4'>جستجو</button>
        </div>
      </div>
    </>
  )
}

export default TrainSearch

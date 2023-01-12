
import React, { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'

import classnames from 'classnames'


import styles from '../../../assets/styles/Filter.module.css'

const Filter = (props) => {
  // STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [money, setMoney] = useState()
  const [items, setItems] = useState([])
  const [search, setSearch] = useState()
  const [filteredTicketsMoney, setFilteredTicketsMoney] = useState([])

  const [items1, setItems1] = useState([])
  const [filteredTicketsName, setFilteredTicketsName] = useState([])

  // FUNCTIONS FOR SET VALUE
  const handleMoneyChange = (e) => {
    setMoney(e.target.value)
  }

  const handleNameChange = (e) => {
    setSearch(e.target.value)
  }

  // RESET FUNCTIONS
  const reset = () => {
    setMoney()
    setSearch()
  }

  const resetMoney = () => {
    setMoney()
  }
  const resetName = () => {
    setSearch()
  }

  // ACCORDION'S TOGGLE FUNCTIONS
  const toggleCol1 = () => {
    setCol1(!col1)
    setCol2(false)
  }

  const toggleCol2 = () => {
    setCol2(!col2)
    setCol1(false)
  }

  const found = props.filterItem.map(item => item._id)

  // COUNTER FUNCTION
  function statusCounter (inputs) {
    let counter = 0
    for (const input of inputs) {
      if (input._id !== null) counter += 1
    }
    return counter
  }
  useEffect(() => {
    setItems(props.filterItem)

    setFilteredTicketsName(
      items.filter((item) =>
        item.busCompany.replace(/"/g, '') === (search)
      )
    )
  }, [search, items, props.handleName(filteredTicketsName)])
  useEffect(() => {
    setItems1(props.filterItem)

    setFilteredTicketsMoney(
      items1.filter(
        user => (user.price) >= money - 300000 && (user.price) <= money
      )
    )
  }, [money, items1, props.handlePrice(filteredTicketsMoney)
  ])
  return (
    <>

      <div className='accordion  py-0 rounded-3 my-1 ' id='accordion' style={{ border: '1px solid #dddddd6b ', backgroundColor: '#dddddd6b', fontFamily: 'Yekan' }}>
        <div style={{ fontSize: '14px' }}>
          <div className='d-flex py-2 flex-row  flex-wrap justify-content-around'>
            <span>
              {/* {statusCounter(found)} */}

              {(() => {
                if (filteredTicketsMoney.length == 0 && filteredTicketsName.length == 0) {
                  return (
                    <>
                      تعداد نتایج : {statusCounter(found)}

                    </>
                  )
                } else if (filteredTicketsMoney.length !== 0 && filteredTicketsName.length == 0) {
                  return (
                    <>
                      تعداد نتایج:  {statusCounter(filteredTicketsMoney)}

                    </>
                  )
                } else if (filteredTicketsName.length !== 0 && filteredTicketsMoney.length == 0) {
                  return (
                    <>
                      تعداد نتایج: {statusCounter(filteredTicketsName)}

                    </>
                  )
                } else {
                  return (
                    null
                  )
                }
              })()}
            </span>
            <button className='btn btn-sm btn-outline-danger' onClick={reset}>لغو فیلتر‌ها</button>
          </div>
          <div>
            {money == null
              ? null
              : <div className='border border-1 border-secondary w-50 mx-3 my-2 px-1 rounded-3'>
                <span>
                  قیمت{money}
                </span>
                <i onClick={resetMoney} className='fa fa-close text-danger ' />
                </div>}
            {search == null
              ? null
              : <div className='border border-1 border-secondary w-50 mx-3 my-2 px-1 rounded-3'>
                <span>
                  نام : {search}
                </span>
                <i onClick={resetName} className='fa fa-close text-danger ' />
              </div>}

          </div>

        </div>

        <div className='accordion-item  '>

          <h2 className='accordion-header ' id='headingtwo'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col1
              })}
              type='button'
              style={{
                cursor: 'pointer',
                backgroundColor: '#FFFF',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1.01125rem',
                color: '#405057',
                // boxShadow: '0 0 4px 1px #ddd',
                direction: 'rtl'

              }}
            >
              رنج قیمت
              {col1
                ? <i
                    onClick={toggleCol1}
                    className='fa fa-angle-down fa-lg' style={{ float: 'left' }}
                  />

                : <i
                    onClick={toggleCol1}
                    className='fa fa-angle-up fa-lg' style={{ float: 'left' }}
                  />}
            </button>
          </h2>

          <Collapse isOpen={col1} className={styles.inputnumber}>
            <div>
              <form>
                <fieldset>

                  <input
                    type='radio'
                    name='age'
                    className='mx-2'
                    id='age-range-1'
                    value='300000'
                    onChange={handleMoneyChange}

                    checked={money === '300000'}
                  />
                  <label htmlFor='age-range-1 '>0-300000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-2'
                    value='600000'
                    onChange={handleMoneyChange}
                    // onChange={e => { setMoney(e.target.value); props.customeStrategySell(filteredCountries1) }}

                    className='mx-2'
                    checked={money === '600000'}
                  />
                  <label htmlFor='age-range-2'>300000-600000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='900000'
                    onChange={handleMoneyChange}
                    // onClick={e => { setMoney(e.target.value); props.customeStrategySell(filteredCountries1) }}

                    className='mx-2'
                    checked={money === '900000'}
                  />
                  <label htmlFor='age-range-3'>900000-1200000 تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='1500000'
                    onChange={handleMoneyChange}
                    // onChange={e => { setMoney(e.target.value); props.customeStrategySell(filteredCountries1) }}
                    className='mx-2'
                    checked={money === '1500000'}
                  />
                  <label htmlFor='age-range-3'>1200000-1500000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='1800000'
                    onChange={handleMoneyChange}
                    // onChange={e => { setMoney(e.target.value); props.customeStrategySell(filteredCountries1) }}

                    className='mx-2'
                    checked={money === '1800000'}
                  />
                  <label htmlFor='age-range-3'>1500000-1800000 تومان</label><br />
                </fieldset>
              </form>
            </div>
          </Collapse>
          <h2 className='accordion-header' id='headingthree'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col2
              })}
              type='button'
              style={{
                cursor: 'pointer',
                backgroundColor: '#FFFF',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1.01125rem',
                color: '#405057'
                // boxShadow: '0 0 4px 1px #ddd',

              }}
            >
              شرکت‌های اتوبوسرانی
              {col2
                ? <i
                    onClick={toggleCol2}
                    className='fa fa-angle-down fa-lg'
                    style={{ float: 'left' }}
                  />
                : <i
                    onClick={toggleCol2}

                    className='fa fa-angle-up fa-lg' style={{ float: 'left' }}
                  />}
            </button>
          </h2>

          <Collapse isOpen={col2}>

            <div className='d-flex flex-column '>
              <form>
                <fieldset>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value= 'آسوده سفر ترمینال غرب'
                      onChange={handleNameChange}
                      checked={search ===  'آسوده سفر ترمینال غرب'}
                    />
                    <span className='mx-1'> آسوده سفر ترمینال غرب </span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=  'تک سفر ایرانیان'
                      onChange={handleNameChange}
                      checked={search ===   'تک سفر ایرانیان'}
                    />
                    <span className='mx-1'> تک سفر ایرانیان</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value='تعاونی 1 ایران پیما'
                      onChange={handleNameChange}
                      checked={search === 'تعاونی 1 ایران پیما'}
                    />
                    <span className='mx-1'> تعاونی 1 ایران پیما</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value='تعاونی 17 پیک صبا'
                      onChange={handleNameChange}
                      checked={search === 'تعاونی 17 پیک صبا'}
                    />
                    <span className='mx-1'> تعاوی 17 پیک صبا</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value= 'مارال سیر'
                      onChange={handleNameChange}
                      checked={search === 'مارال سیر'}
                    />
                    <span className='mx-1'> مارال سیر </span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=  'میهن نور'
                      onChange={handleNameChange}
                      checked={search ===  'میهن نور'}
                    />
                    <span className='mx-1'> میهن نور</span>
                  </div>

                </fieldset>
              </form>
            </div>

          </Collapse>
        </div>

      </div>

    </>
  )
}

export default Filter

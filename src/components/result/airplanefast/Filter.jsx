
import React, { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'

import classnames from 'classnames'
import logo1 from '../../../assets/img/logo6.JPG'
import logo2 from '../../../assets/img/logo5.JPG'
import logo3 from '../../../assets/img/logo2.JPG'
import logo4 from '../../../assets/img/logo3.JPG'
import logo5 from '../../../assets/img/logo4.JPG'
import logo6 from '../../../assets/img/logo1.JPG'

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

  // FUNCTION FOR SET VALUE
  const handleMoneyChange = (e) => {
    setMoney(e.target.value)
  }

  const handleNameChange = (e) => {
    setSearch(e.target.value)
  }

  // reset function
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
        item.airplaneCompany.replace(/"/g, '').includes(search)
      )
    )
  }, [search, items, props.customeStrategySell1(filteredTicketsName)])
  useEffect(() => {
    setItems1(props.filterItem)

    setFilteredTicketsMoney(
      items1.filter(
        user => (user.price) >= money - 500000 && (user.price) <= money
      )
    )
  }, [money, items1, props.customeStrategySell(filteredTicketsMoney)
  ])

  return (
    <>

      <div className='accordion  py-0 rounded-3 my-1 ' id='accordion' style={{ border: '1px solid #dddddd6b ', backgroundColor: '#dddddd6b', fontFamily: 'Yekan' }}>
        <div style={{ fontSize: '14px' }}>
          <div className='d-flex py-2 flex-row  flex-wrap justify-content-around'>
            <span>

              {(() => {
                if (filteredTicketsMoney.length === 0 && filteredTicketsName.length === 0) {
                  return (
                    <>
                      تعداد نتایج : {statusCounter(found)}

                    </>
                  )
                } else if (filteredTicketsMoney.length !== 0 && filteredTicketsName.length === 0) {
                  return (
                    <>
                      تعداد نتایج:  {statusCounter(filteredTicketsMoney)}

                    </>
                  )
                } else if (filteredTicketsName.length !== 0 && filteredTicketsMoney.length === 0) {
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
                    value='1000000'
                    onChange={handleMoneyChange}
                    checked={money === '1000000'}
                  />
                  <label htmlFor='age-range-1 '>0-1000000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-2'
                    value='1500000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '1500000'}
                  />
                  <label htmlFor='age-range-2'>1000000-1500000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='2000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '2000000'}
                  />
                  <label htmlFor='age-range-3'>1500000-2000000 تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='2500000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '2500000'}
                  />
                  <label htmlFor='age-range-3'>2000000-2500000تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='3000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '3000000'}
                  />
                  <label htmlFor='age-range-3'>2500000-3000000تومان</label><br />
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
              شرکت‌های هواپیمایی
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
                      value='ایران ایر تور'
                      onChange={handleNameChange}
                      checked={search === 'ایران ایر تور'}
                    />
                    <img src={logo1} className={styles.logoCss} />
                    <span className='mx-1'> ایران ایرتور</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=' آسمان'
                      onChange={handleNameChange}
                      checked={search === ' آسمان'}
                    />
                    <img src={logo2} className={styles.logoCss} />
                    <span className='mx-1'> آسمان</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=' تابان'
                      onChange={handleNameChange}
                      checked={search === ' تابان'}
                    />
                    <img src={logo3} className={styles.logoCss} />
                    <span className='mx-1'> تابان</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=' کاسپین  '
                      onChange={handleNameChange}
                      checked={search === ' کاسپین  '}
                    />
                    <img src={logo4} className={styles.logoCss} />
                    <span className='mx-1'> کاسپین</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=' کیش'
                      onChange={handleNameChange}
                      checked={search === ' کیش'}
                    />
                    <img src={logo5} className={styles.logoCss} />
                    <span className='mx-1'> کیش</span>
                  </div>
                  <div className='d-flex flex-row my-1 mx-3'>
                    <input
                      type='radio'
                      name='age'
                      className='mx-2'
                      id='age-range-1'
                      value=' زاگرس'
                      onChange={handleNameChange}
                      checked={search === ' زاگرس'}
                    />
                    <img src={logo6} className={styles.logoCss} />
                    <span className='mx-1'> زاگرس</span>
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

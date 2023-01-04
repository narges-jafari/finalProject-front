
import React, { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'

import classnames from 'classnames'

import styles from '../../../assets/styles/Filter.module.css'

const Filter = (props) => {
  // STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [money, setMoney] = useState()
  const [star, setStar] = useState()
  const [items, setItems] = useState([])
  const [data, setData] = useState([])
  const [filteredTicketsStar, setFilteredTicketsStar] = useState([])
  const [filteredTicketsMoney, setFilteredTicketsMoney] = useState([])

  // FUNCTION FOR SET VALUE
  const handleMoneyChange = (e) => {
    setMoney(e.target.value)
  }
  const handleStarChange = (e) => {
    setStar(e.target.value)
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

  // FUNCTION FOR RESET
  const reset = () => {
    setMoney()
    setStar()
  }

  const resetMoney = () => {
    setMoney()
  }
  const resetStar = () => {
    setStar()
  }

  useEffect(() => {
    setItems(props.filterItem)

    setFilteredTicketsStar(
      items.filter((item) =>
        item.star == star
      )
    )
  }, [star, items, props.filterStar(filteredTicketsStar)])
  useEffect(() => {
    setData(props.filterItem)

    setFilteredTicketsMoney(
      data.filter(
        user => (user.price) >= money - 500000 && (user.price) <= money
      )
    )
  }, [money, data, props.filterPrice(filteredTicketsMoney)
  ])

  const found = props.filterItem.map(item => item._id)
  // COUNTER FUNCTION
  function statusCounter (inputs) {
    let counter = 0
    for (const input of inputs) {
      if (input._id !== null) counter += 1
    }
    return counter
  }

  return (
    <>
      <div className='accordion  py-0 rounded-3 ' id='accordion' style={{ border: '1px solid #dddddd6b ', backgroundColor: '#dddddd6b', fontFamily: 'Yekan' }}>
        <div style={{ fontSize: '14px' }}>
          <div className='d-flex py-2 flex-row  flex-wrap justify-content-around'>
            <span>
              {/* {statusCounter(found)} */}

              {(() => {
                if (filteredTicketsMoney.length === 0 && filteredTicketsStar.length === 0) {
                  return (
                    <>
                      تعداد نتایج : {statusCounter(found)}

                    </>
                  )
                } else if (filteredTicketsMoney.length !== 0 && filteredTicketsStar.length === 0) {
                  return (
                    <>
                      تعداد نتایج:  {statusCounter(filteredTicketsMoney)}

                    </>
                  )
                } else if (filteredTicketsStar.length !== 0 && filteredTicketsMoney.length === 0) {
                  return (
                    <>
                      تعداد نتایج: {statusCounter(filteredTicketsStar)}

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
            {star == null
              ? null
              : <div className='border border-1 border-secondary w-50 mx-3 my-2 px-1 rounded-3'>
                <span>
                  ستاره : {star}
                </span>
                <i onClick={resetStar} className='fa fa-close text-danger ' />
              </div>}

          </div>

        </div>

        <div className='accordion-item border-0 '>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col1
              })}
              type='button'
              onClick={toggleCol1}
              style={{
                cursor: 'pointer',
                backgroundColor: '#FFFF',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1.01125rem',
                color: '#405057',
                direction: 'rtl'

              }}
            >
              ستاره هتل
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col1}>

            {/* <div className='d-flex flex-column '>
              <i className='fa fa-star my-2 mx-2'><span className='mx-2'>کمتر از سه ستاره</span></i>
              <i className='fa fa-star my-2 mx-2'><span className='mx-2'>چهار ستاره</span></i>
              <i className='fa fa-star my-2 mx-2'><span className='mx-2'>پنج ستاره</span></i>

            </div> */}
            <div className='mx-3'>
              <form>
                <fieldset>

                  <input
                    type='radio'
                    name='age'
                    className='mx-2'
                    id='age-range-1'
                    value='1'
                    onChange={handleStarChange}
                    checked={star === '1'}
                  />
                  <label htmlFor='age-range-1 '> یک ستاره</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-2'
                    value='2'
                    onChange={handleStarChange}
                    className='mx-2'
                    checked={star === '2'}
                  />
                  <label htmlFor='age-range-2'>دو ستاره</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='3'
                    onChange={handleStarChange}
                    className='mx-2'
                    checked={star === '3'}
                  />
                  <label htmlFor='age-range-3'> سه ستاره</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='4'
                    onChange={handleStarChange}
                    className='mx-2'
                    checked={star === '4'}
                  />
                  <label htmlFor='age-range-7'>چهار ستاره </label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='5'
                    onChange={handleStarChange}
                    className='mx-2'
                    checked={star === '5'}
                  />
                  <label htmlFor='age-range-7'>پنج ستاره </label><br />
                </fieldset>
              </form>
            </div>
          </Collapse>

          <h2 className='accordion-header' id='headingtwo'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col2
              })}
              type='button'
              onClick={toggleCol2}
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
              {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col2} className={styles.inputnumber}>
            <div className='mx-3'>
              <form>
                <fieldset>

                  <input
                    type='radio'
                    name='age'
                    className='mx-2'
                    id='age-range-1'
                    value='500000'
                    onChange={handleMoneyChange}
                    checked={money === '500000'}
                  />
                  <label htmlFor='age-range-1 '>0-500000تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-2'
                    value='1000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '1000000'}
                  />
                  <label htmlFor='age-range-2'>1000000-1500000تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='1500000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '1500000'}
                  />
                  <label htmlFor='age-range-3'>1500000-2000000تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='2500000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '2500000'}
                  />
                  <label htmlFor='age-range-7'>2000000-2500000 تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='3000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '3000000'}
                  />
                  <label htmlFor='age-range-7'>2500000-3000000 تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='3500000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '3500000'}
                  />
                  <label htmlFor='age-range-7'>3000000-3500000 تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='4000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '4000000'}
                  />
                  <label htmlFor='age-range-7'>3500000-4000000 تومان</label><br />
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

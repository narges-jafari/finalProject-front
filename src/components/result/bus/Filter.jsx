
import React, { useState } from 'react'
import { Collapse } from 'reactstrap'

import classnames from 'classnames'

import styles from '../../../assets/styles/Filter.module.css'

const Filter = () => {
  // STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)
  const [money, setMoney] = useState()

  // this function will be called when a radio button is checked
  const handleMoneyChange = (e) => {
    setMoney(e.target.value)
  }

  // ACCORDION'S TOGGLE FUNCTIONS
  const toggleCol1 = () => {
    setCol1(!col1)
    setCol2(false)
    setCol3(false)
  }

  const toggleCol2 = () => {
    setCol2(!col2)
    setCol1(false)
    setCol3(false)
  }
  const toggleCol3 = () => {
    setCol3(!col3)
    setCol1(false)
    setCol2(false)
  }
  return (
    <>
      <div className='accordion  py-0 rounded-3 ' id='accordion' style={{ border: '1px solid #dddddd6b ', backgroundColor: '#dddddd6b', fontFamily: 'Yekan' }}>
        <div style={{ fontSize: '14px' }}>
          <div className='d-flex py-2 flex-row  flex-wrap justify-content-around'>
            <span> نتایج33 </span>
            <span>لغو فیلتر ها</span>
          </div>
          <div>
            {money == null
              ? null
              : <div className='border border-1 border-primary w-75 mx-3 my-2 px-1 rounded-3'>
                <span>قیمت{money}</span>
                <i className='fa fa-close text-danger ' />
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
              ساعت
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col1}>

            <div className='d-flex flex-column '>
              <div className='d-flex flex-row mx-1  my-1 justify-content-around'>
                <div className='mx-1 px-2 rounded-3' style={{ backgroundColor: '#9293921b', width: '35%' }}>
                  <i className='fa fa-sun-o text-warning px-1 mt-2' />
                  <span>
                    12 تا 5
                  </span>
                  <br />
                  <span className='text-secondary mx-3 px-2' style={{ fontSize: '12px' }}>صبح زود</span>

                </div>
                <div className='mx-1 px-2 rounded-3' style={{ backgroundColor: '#9293921b', width: '35%' }}>
                  <i className='fa fa-sun-o text-warning px-1 mt-2' />
                  <span>
                    5 تا 12
                  </span>
                  <br />
                  <span className='text-secondary mx-3 px-2' style={{ fontSize: '12px' }}>صبح </span>

                </div>
              </div>
              <div className='d-flex flex-row mx-1 my-1 justify-content-around'>
                <div className='mx-1 px-2 rounded-3' style={{ backgroundColor: '#9293921b', width: '35%' }}>
                  <i className='fa fa-sun-o text-warning px-1 mt-2' />
                  <span>
                    12 تا 5
                  </span>
                  <br />
                  <span className='text-secondary mx-3 px-2' style={{ fontSize: '12px' }}>  بعد از ظهر</span>

                </div>
                <div className='mx-1 px-2 rounded-3' style={{ backgroundColor: '#9293921b', width: '35%' }}>
                  <i className='fa fa-sun-o text-warning px-1 mt-2' />
                  <span>
                    5تا 12
                  </span>
                  <br />
                  <span className='text-secondary mx-3 px-2' style={{ fontSize: '12px' }}>شب </span>

                </div>
              </div>

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
                    value='0-300000'
                    onChange={handleMoneyChange}
                    checked={money === '0-300000'}
                  />
                  <label htmlFor='age-range-1 '>0-300000تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-2'
                    value='300000-500000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '300000-500000'}
                  />
                  <label htmlFor='age-range-2'>300000-500000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='500000-700000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '500000-700000'}
                  />
                  <label htmlFor='age-range-3'>500000-700000 تومان</label><br />
                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='700000-1000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '700000-1000000'}
                  />
                  <label htmlFor='age-range-3'>700000-1000000 تومان</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='1000000+'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '1000000+'}
                  />
                  <label htmlFor='age-range-7'>1000000+ تومان</label><br />
                </fieldset>
              </form>
            </div>
          </Collapse>
          <h2 className='accordion-header' id='headingthree'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col3
              })}
              type='button'
              onClick={toggleCol3}
              style={{
                cursor: 'pointer',
                backgroundColor: '#FFFF',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1.01125rem',
                color: '#405057',
                // boxShadow: '0 0 4px 1px #ddd',
                border: '1px solid red'

              }}
            >
              شرکت‌های اتوبوسرانی
              {col3 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col3}>
            <div className='d-flex flex-column '>
              <span className='mx-4 my-1'>
                آسوده سفر ترمینال غرب
              </span>
              <span className='mx-4 my-1'>
                تک سفر ایرانیان
              </span>
              <span className='mx-4 my-1'>
                آسیا سفر
              </span>
              <span className='mx-4 my-1'>
                تعاونی 17 پیک صبا
              </span>
              <span className='mx-4 my-1'>
                تعاونی 1 ایران پیما
              </span>
              <span className='mx-4 my-1'>
                مارال سیر
              </span>
              <span className='mx-4 my-1'>
                میهن نور
              </span>
            </div>
          </Collapse>
        </div>

      </div>

    </>
  )
}

export default Filter

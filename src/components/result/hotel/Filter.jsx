
import React, { useState } from 'react'
import { Collapse } from 'reactstrap'

import classnames from 'classnames'
import logo1 from '../../../assets/img/logo6.JPG'
import logo2 from '../../../assets/img/logo5.JPG'
import logo3 from '../../../assets/img/logo2.JPG'
import logo4 from '../../../assets/img/logo3.JPG'
import logo5 from '../../../assets/img/logo4.JPG'
import logo6 from '../../../assets/img/logo1.JPG'

import styles from '../../../assets/styles/Filter.module.css'

const Filter = () => {
  // STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [money, setMoney] = useState()

  // this function will be called when a radio button is checked
  const handleMoneyChange = (e) => {
    setMoney(e.target.value)
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
              ستاره هتل
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col1}>

            <div className='d-flex flex-column '>
              <i className='fa fa-star my-2 mx-2'><span className='mx-2'>کمتر از سه ستاره</span></i>
              <i className='fa fa-star my-2 mx-2'><span className='mx-2'>چهار ستاره</span></i>
              <i className='fa fa-star my-2 mx-2'><span className='mx-2'>پنج ستاره</span></i>

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

          <Collapse isOpen={col2}>
            <div className='mx-3'>
              <form>
                <fieldset>

                  <input
                    type='radio'
                    name='age'
                    className='mx-2'
                    id='age-range-1'
                    value='0-10000000'
                    onChange={handleMoneyChange}
                    checked={money === '0-10000000'}
                  />
                  <label htmlFor='age-range-1 '>0-10000000</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-2'
                    value='10000000-20000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '10000000-20000000'}
                  />
                  <label htmlFor='age-range-2'>10000000-20000000</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-3'
                    value='20000000-30000000'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '20000000-30000000'}
                  />
                  <label htmlFor='age-range-3'>20000000-30000000</label><br />

                  <input
                    type='radio'
                    name='age'
                    id='age-range-7'
                    value='30000000+'
                    onChange={handleMoneyChange}
                    className='mx-2'
                    checked={money === '30000000+'}
                  />
                  <label htmlFor='age-range-7'>30000000+</label><br />
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


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
  const [col3, setCol3] = useState(false)
  const [value, setValue] = useState('')
  const handleNameChange = (event) => {
    setValue(event.target.value)
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
      <div className='accordion border border-1 border-secondary rounded-3 ' id='accordion'>
        <div style={{ fontSize: '14px' }}>
          <div className='d-flex py-2 flex-row  flex-wrap justify-content-around'>
            <span>نمایش 14 از 14 پرواز</span>
            <span>لغو فیلتر ها</span>
          </div>
          <div>
            <div className='border border-1 border-primary w-75 mx-3 my-2 px-1 rounded-3'>
              <span>ساعت حرکت 06:00تا24:00</span>
              <i className='fa fa-close text-danger ' />
            </div>
          </div>

        </div>
        <hr />
        <div className='accordion-item border-0 mb-2'>
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
                fontSize: '0.8125rem',
                color: '#405057',
                direction: 'rtl'

              }}
            >
              ساعت حرکت
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col1}>
            <input type='text' value={value} className='mx-4 ' style={{ borderRadius: '5px', border: '1px solid #80808026' }} onChange={handleNameChange} />

          </Collapse>
          <hr />
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
                fontSize: '0.8125rem',
                color: '#405057',
                // boxShadow: '0 0 4px 1px #ddd',
                direction: 'rtl'

              }}
            >
              کلاس پروازی
              {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col2}>
            <div className='d-flex flex-column my-1 ' style={{ cursor: 'pointer' }}>
              <i className='fa fa-star my-1 mx-4 '><span className='mx-2 '>بیزینس</span></i>
              <i className='fa fa-star my-1 mx-4'><span className='mx-2'>اکونومی</span></i>
              <i className='fa fa-star my-1 mx-4'><span className='mx-2'>پریمیوم اکونومی</span></i>
              <i className='fa fa-star my-1 mx-4'><span className='mx-2'>پریمیوم بیزینس</span></i>
              <i className='fa fa-star my-1 mx-4'><span className='mx-2'>فرست</span></i>
              <i className='fa fa-star my-1 mx-4'><span className='mx-2'>پریمیوم فرست</span></i>
            </div>
          </Collapse>
          <hr />
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
                fontSize: '0.8125rem',
                color: '#405057',
                // boxShadow: '0 0 4px 1px #ddd',
                border: '1px solid red'

              }}
            >
              شرکت های هواپیمایی
              {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col3}>
            <div className='d-flex flex-column '>
              <div className='d-flex flex-row my-1 mx-3 '><img src={logo1} className={styles.logoCss} /><span className='mx-1'>ایران ایرتور</span></div>
              <div className='d-flex flex-row my-1 mx-3'><img src={logo2} className={styles.logoCss} /><span className='mx-1'>آسمان </span></div>
              <div className='d-flex flex-row my-1 mx-3'><img src={logo3} className={styles.logoCss} /><span className='mx-1'> تابان</span></div>
              <div className='d-flex flex-row my-1 mx-3'><img src={logo4} className={styles.logoCss} /><span className='mx-1'>کاسپین</span></div>
              <div className='d-flex flex-row my-1 mx-3'><img src={logo5} className={styles.logoCss} /><span className='mx-1'>کیش</span></div>
              <div className='d-flex flex-row my-1 mx-3'><img src={logo6} className={styles.logoCss} /><span className='mx-1'>زاگرس</span></div>
              {/* <div className='d-flex flex-row '><img/><span></span></div> */}
            </div>
          </Collapse>
        </div>

      </div>

    </>
  )
}

export default Filter

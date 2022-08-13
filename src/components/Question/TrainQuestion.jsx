
import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import styles from '../../assets/styles/Question.module.css'


const TrainQuestion = () => {
// STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)



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
    <div className={styles.Question}>
      <h5 className={styles.headerfont} >    سوالات متداول خرید بلیط قطار     </h5>
      <div className='accordion rounded-3 w-75' style={{margin:'10px auto'}} id='accordion'>
        <div className='accordion-item border-0 my-2'>
          <h2 className='accordion-header my-2' id='headingOne'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col1
              })}
              type='button'
              onClick={toggleCol1}
              style={{
                // cursor: 'pointer',
                backgroundColor: '#FFFF',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '0.8125rem',
                color: '#405057',
                // boxShadow: '0 0 4px 1px #ddd'

              }}
            >
              <i className='fa fa-question fa-lg mx-3' />
              <span className={styles.spanfont}>
                قیمت رزرو قطار چه قدر است؟
                 </span>
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col1}>
            <p>قیمت و ظرفیت نتایج ممکن است معتبر نباشد. برای اطمینان از نمایش به‌روزترین نتایج لطفا مجددا جستجو کنید.
            </p>
          </Collapse>
          <h2 className='accordion-header my-2' id='headingtwo'>
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
                // boxShadow: '0 0 4px 1px #ddd'

              }}
            >
              <i className='fa fa-question fa-lg mx-3' />  
              <span className={styles.spanfont}>  
              هنگام مسافرت با قطار چه مدارکی را باید همراه داشته باشیم؟
              </span>

              {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col2}>
            <p>قیمت و ظرفیت نتایج ممکن است معتبر نباشد. برای اطمینان از نمایش به‌روزترین نتایج لطفا مجددا جستجو کنید.
            </p>
          </Collapse>
          <h2 className='accordion-header my-2' id='headingthree'>
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
                // boxShadow: '0 0 4px 1px #ddd'

              }}
            > <i className='fa fa-question fa-lg mx-3' />
            <span className={styles.spanfont}> 
            مدت زمان معطلی مسافرت با قطار چه قدر است ؟
             </span>
              {col3 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>

          <Collapse isOpen={col3}>
            <p>قیمت و ظرفیت نتایج ممکن است معتبر نباشد. برای اطمینان از نمایش به‌روزترین نتایج لطفا مجددا جستجو کنید.
            </p>
          </Collapse>
    
        </div>

      </div>
      </div>
    </>
  )
}

export default TrainQuestion

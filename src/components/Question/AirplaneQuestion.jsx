
import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import styles from '../../assets/styles/Question.module.css'

const AirplaneQuestion = () => {
// STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)
  const [col4, setCol4] = useState(false)
  const [col5, setCol5] = useState(false)

  // ACCORDION'S TOGGLE FUNCTIONS
  const toggleCol1 = () => {
    setCol1(!col1)
    setCol2(false)
    setCol3(false)
    setCol4(false)
    setCol5(false)
  }

  const toggleCol2 = () => {
    setCol2(!col2)
    setCol1(false)
    setCol3(false)
    setCol4(false)
    setCol5(false)
  }
  const toggleCol3 = () => {
    setCol3(!col3)
    setCol1(false)
    setCol2(false)
    setCol4(false)
    setCol5(false)
  }

  const toggleCol4 = () => {
    setCol4(!col4)
    setCol1(false)
    setCol2(false)
    setCol3(false)
    setCol5(false)
  }

  const toggleCol5 = () => {
    setCol5(!col5)
    setCol1(false)
    setCol2(false)
    setCol3(false)
    setCol4(false)
  }
  return (
    <>
      <div className={styles.Question}>
        <h5 className={styles.headerfont}>   سوالات متداول خرید بلیط هواپیما    </h5>
        <div className='accordion rounded-3 w-75' style={{ margin: '10px auto' }} id='accordion'>
          <div className='accordion-item border-0 my-2'>
            <h2 className='accordion-header my-2' id='headingOne'>
              <button
                className={classnames('fw-medium', 'text-end', 'border-0', {
                  collapsed: !col1
                })}
                type='button'
                onClick={toggleCol1}
                style={{
                  backgroundColor: '#FFFF',
                  borderRadius: '0.8rem',
                  width: '100%',
                  padding: '0.9rem 1.25rem',
                  fontSize: '0.8125rem',
                  color: '#405057'

                }}
              >
                <i className='fa fa-question fa-lg mx-3' />
                <span className={styles.spanfont}> چه طور تاریخ پرواز را تغییر دهیم ؟</span>
                {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
              </button>
            </h2>

            <Collapse isOpen={col1}>
              <p className='mx-4 px-4'>
                برای تغییر تاریخ بلیط سفر خود وارد حساب کاربری در تریپنو شوید و با انتخاب بلیط مورد نظر، از پشتیبانی ۲۴ ساعته تریپنو کمک بگیرید.
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
                  color: '#405057'

                }}
              >
                <i className='fa fa-question fa-lg mx-3' />
                <span className={styles.spanfont}>  میزان و مقدار بار مجاز در پرواز  چه‌قدر است ؟</span>

                {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
              </button>
            </h2>

            <Collapse isOpen={col2}>
              <p className='mx-4 px-4'>
                این‌رقم وابسته به قوانین ایرلاین‌ها است. ممکن است بین ۵ یا ۷ کیلوگرم تا ۲۵ و ۲۰ کیلوگرم امکان حمل بار در هواپیما را داشته‌باشید. در هنگام خرید بلیط حتما به جزئیات پرواز و بلیط دقت کنید و میزان بار را مطمئن شوید.
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
                  color: '#405057'

                }}
              > <i className='fa fa-question fa-lg mx-3' />
                <span className={styles.spanfont}> آیا امکان استرداد بلیط هواپیما از تریپنو وجود دارد؟</span>
                {col3 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
              </button>
            </h2>

            <Collapse isOpen={col3}>
              <p className='mx-4 px-4'>
                فعلا این‌امکان وجود ندارد
              </p>
            </Collapse>
            <h2 className='accordion-header my-2' id='headingfoure'>
              <button
                className={classnames('fw-medium', 'text-end', 'border-0', {
                  collapsed: !col4
                })}
                type='button'
                onClick={toggleCol4}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#FFFF',
                  borderRadius: '0.8rem',
                  width: '100%',
                  padding: '0.9rem 1.25rem',
                  fontSize: '0.8125rem',
                  color: '#405057'

                }}
              > <i className='fa fa-question fa-lg mx-3 ' />
                <span className={styles.spanfont}>
                  رزرو بلیط هواپیما برای کودکان ارزان‌تر است؟
                </span>
                {col4 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
              </button>
            </h2>

            <Collapse isOpen={col4}>
              <p className='mx-4 px-4'>
                قیمت بلیط پرواز داخلی برای کودکان زیر ۱۲ سال حدود ۵۰ الی ۷۵ درصد، و برای نوزادان زیر ۲ سال، حدود ۱۰ درصد قیمت بزرگسال همان بلیط است. این‌قوانین نسبت به نوع بلیط متفاوت خواهد‌بود.
              </p>
            </Collapse>
            <h2 className='accordion-header my-2' id='headingfive'>
              <button
                className={classnames('fw-medium', 'text-end', 'border-0', {
                  collapsed: !col5
                })}
                type='button'
                onClick={toggleCol5}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#FFFF',
                  borderRadius: '0.8rem',
                  width: '100%',
                  padding: '0.9rem 1.25rem',
                  fontSize: '0.8125rem',
                  color: '#405057'

                }}
              > <i className='fa fa-question fa-lg mx-3 ' />
                <span className={styles.spanfont}>
                  مقررات حمل حیوان خانگی در پرواز چیست؟
                </span>
                {col5 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
              </button>
            </h2>

            <Collapse isOpen={col5}>
              <p className='mx-4 px-4'>
                حمل حیوان خانگی با هواپیما در کشور‌ها و ایرلاین‌های مختلف قوانین متفاوتی دارد؛ برای مثال ورود حیوان خانگی به داخل کابین هواپیما‌ها‌ی ایران ممنوع است و در پرواز‌ها‌ی داخلی لازم است حیوان خانگی خود را در پایانه تحویل دهید و در فرودگاه مقصد از سالن دریافت بار تحویل بگیرید.
              </p>
            </Collapse>
          </div>

        </div>
      </div>
    </>
  )
}

export default AirplaneQuestion

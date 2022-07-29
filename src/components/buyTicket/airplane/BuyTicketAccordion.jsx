import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import AirplaneContent from '../airplane/AirplaneContent.jsx'
import BusContent from '../bus/BusContent.jsx'
import TrainContent from '../train/TrainContent.jsx'
import { FaBusAlt, FaSubway, FaPlane } from 'react-icons/fa'
import styles from '../../../assets/styles/TrainContent.module.css'

const BuyTicketAccordion = () => {
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
      <div className='accordion ' id='accordion'>
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
                boxShadow: '0 0 4px 1px #ddd',
                direction: 'rtl'

              }}
            >
              <FaPlane className={styles.iconCss} />

              خرید بلیط هواپیما
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>
          <Collapse isOpen={col1}><AirplaneContent /></Collapse>
        </div>

        <div className='accordion-item mb-2 border-0'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col2
              })}
              type='button'
              onClick={toggleCol2}
              style={{
                cursor: 'pointer',
                backgroundColor: '#EFF2F7',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '0.8125rem',
                color: '#405057',
                boxShadow: '0 0 4px 1px #ddd'
              }}
            >
              <FaSubway className={styles.iconCss} />
              خرید بلیط قطار
              {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}

            </button>
          </h2>
          <Collapse isOpen={col2}><TrainContent /></Collapse>

        </div>
        <div className='accordion-item mb-2 border-0'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className={classnames('fw-medium', 'text-end', 'border-0', {
                collapsed: !col3
              })}
              type='button'
              onClick={toggleCol3}
              style={{
                cursor: 'pointer',
                backgroundColor: '#EFF2F7',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '0.8125rem',
                color: '#405057',
                boxShadow: '0 0 4px 1px #ddd'
              }}
            >
              <FaBusAlt className={styles.iconCss} />

              خرید بلیط اتوبوس
              {col3 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}

            </button>
          </h2>
          <Collapse isOpen={col3}> <BusContent /></Collapse>

        </div>
      </div>

    </>
  )
}

export default BuyTicketAccordion

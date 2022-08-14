import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import classnames from 'classnames'
import AirplaneContent from './airplane/AirplaneContent'
import BusContent from './bus/BusContent.jsx'
import TrainContent from './train/TrainContent.jsx'
import { FaBusAlt, FaSubway, FaPlane, FaHotel } from 'react-icons/fa'
import styles from '../../assets/styles/TrainContent.module.css'
import HotelContent from './hotel/HotelContent'

const AddTicketAccordion = () => {
  // STATE VARIABLES
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)
  const [col4, setCol4] = useState(false)

  // ACCORDION'S TOGGLE FUNCTIONS
  const toggleCol1 = () => {
    setCol1(!col1)
    setCol2(false)
    setCol3(false)
    setCol4(false)

  }

  const toggleCol2 = () => {
    setCol2(!col2)
    setCol1(false)
    setCol3(false)
    setCol4(false)

  }
  const toggleCol3 = () => {
    setCol3(!col3)
    setCol1(false)
    setCol2(false)
    setCol4(false)

  }

  const toggleCol4 = () => {
    setCol4(!col4)
    setCol1(false)
    setCol2(false)
    setCol3(false)

  }

  return (
    <>
      <div className='accordion w-75 ' id='accordion' style={{margin:'1px auto'}}>
      <div className='accordion-item border-0 mb-2'>
          <h2 className='accordion-header' id='headingfour'>
            <button
              className={classnames('fw-bold', 'text-end', 'border-0', {
                collapsed: !col4
              })}
              type='button'
              onClick={toggleCol4}
              style={{
                cursor: 'pointer',
                backgroundColor: '#EFF2F7',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1.0125rem',
                color: '#405057',
                boxShadow: '0 0 4px 1px #ddd',
                fontFamily:'Vazir'

              }}
            >
              <FaHotel className={styles.iconCss} />

                افزودن بلیط هتل 
              {col4 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>
          <Collapse isOpen={col4} style={{width:'80%',margin:'0px auto'}}><HotelContent/></Collapse>
        </div>
        <div className='accordion-item border-0 mb-2'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className={classnames('fw-bold', 'text-end', 'border-0', {
                collapsed: !col1
              })}
              type='button'
              onClick={toggleCol1}
              style={{
                cursor: 'pointer',
                backgroundColor: '#EFF2F7',
                borderRadius: '0.8rem',
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1.0125rem',
                color: '#405057',
                boxShadow: '0 0 4px 1px #ddd'

              }}
            >
              <FaPlane className={styles.iconCss} />

              افزودن بلیط هواپیما
              {col1 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}
            </button>
          </h2>
          <Collapse isOpen={col1}><AirplaneContent /></Collapse>
        </div>

        <div className='accordion-item mb-2 border-0'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className={classnames('fw-bold', 'text-end', 'border-0', {
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
                fontSize: '1.0125rem',
                color: '#405057',
                boxShadow: '0 0 4px 1px #ddd'
              }}
            >
              <FaSubway className={styles.iconCss} />
              افزودن بلیط قطار
              {col2 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}

            </button>
          </h2>
          <Collapse isOpen={col2} style={{width:'80%',margin:'0px auto'}}><TrainContent /></Collapse>

        </div>
        <div className='accordion-item mb-2 border-0'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className={classnames('fw-bold', 'text-end', 'border-0', {
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
                fontSize: '1.0125rem',
                color: '#405057',
                boxShadow: '0 0 4px 1px #ddd'
              }}
            >
              <FaBusAlt className={styles.iconCss} />

              افزودن بلیط اتوبوس
              {col3 ? <i className='fa fa-angle-down fa-lg' style={{ float: 'left' }} /> : <i className='fa fa-angle-up fa-lg' style={{ float: 'left' }} />}

            </button>
          </h2>
          <Collapse isOpen={col3} style={{width:'80%',margin:'0px auto'}}> <BusContent /></Collapse>

        </div>
      </div>

    </>
  )
}

export default AddTicketAccordion

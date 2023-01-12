import React, { useState } from 'react'
import {
  Modal,
  TabContent, TabPane,
  Row, Col
} from 'reactstrap'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { useQuery } from '@apollo/client'
import busQueries from '../../../Apollo/Query/busQueries'
import img from '../../../assets/img/bg/Capture222222.JPG'
import img2 from '../../../assets/img/bg/Captureeeeeeeeee.JPG'
import img1 from '../../../assets/img/bg/Captureddddkkk.JPG'

import classnames from 'classnames'
import Nav from 'react-bootstrap/Nav'
const Info = (props) => {
  // STATES
  const [currentActiveTab, setCurrentActiveTab] = useState('1')
  const [busData, setBusData] = useState([])

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  // APOLLO QUERY
  useQuery(busQueries.SEARCH, {
    variables: {
      id: props.info
    },

    onCompleted: (res) => {
      setBusData(res.searchBusbyId.information)
    },
    onError: () => {
      setBusData([])
    }
  })

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={() => {
        props.setIsOpen()
      }}
      centered
      size='lg'
    >
      <div className={styles.modalCss}>

        <div className={styles.modalCssContent}>
          <button
            type='button'
            onClick={() => {
              props.setIsOpen(false)
              window.location.reload()
            }}
            className={styles.iconCss}
            data-dismiss='modal'
            aria-label='Close'
          >
            <i className='fa fa-close' aria-hidden='true' />
          </button>

          <div className='modal-body'>


          <div className='d-flex flex-row flex-wrap justify-content-between'>
                      <div className='d-flex flex-column justify-content-between'>
                        {busData.slice(0, 5).map((item, index) => (
                          <div key={index}>
                            <span className={styles.checkboxitem}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className='d-flex flex-column justify-content-between'>
                        {busData.slice(5, 10).map((item, index) => (
                          <div className={styles.checkboxCss} key={index}>
                            <span className={styles.checkboxitem}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className='d-flex flex-column justify-content-between'>
                        {busData.slice(10, 15).map((item, index) => (
                          <div className={styles.checkboxCss} key={index}>
                            <span className={styles.checkboxitem}>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
     

          </div>
        </div>
        <div className={styles.modalCssContent1}>

          <img src={img} className={styles.modalimgCss} />
        </div>
      </div>
    </Modal>
  )
}

export default Info

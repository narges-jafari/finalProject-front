import React, { useState } from 'react'
import {
  Modal,
  TabContent, TabPane,
  Row, Col
} from 'reactstrap'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { useQuery } from '@apollo/client'
import flightQueries from '../../../Apollo/Query/flightQueries'
import img from '../../../assets/img/bg/Capture222222.JPG'
import img2 from '../../../assets/img/bg/Captureeeeeeeeee.JPG'
import img1 from '../../../assets/img/bg/Captureddddkkk.JPG'

import classnames from 'classnames'
import Nav from 'react-bootstrap/Nav'
const Info = (props) => {
  const [currentActiveTab, setCurrentActiveTab] = useState('1')

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  const [airplaneItem1, setAirplaneItem1] = useState([])
  const [airplaneItem2, setAirplaneItem2] = useState([])

  useQuery(flightQueries.SEARCH, {
    variables: {
      id: props.info
    },

    onCompleted: (res) => {
      setAirplaneItem1(res.searchFlightbyId.information)
      setAirplaneItem2(res.searchFlightbyId.allowedLoggage)
    },
    onError: () => {
      setAirplaneItem1([])
      setAirplaneItem2([])
    }
  })

  console.log(airplaneItem2, ';;;;;;;;;;')

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

            <Nav variant='pills' defaultActiveKey='/home' className={styles.navCss}>
              <Nav.Item>
                <Nav.Link
                  className={classnames({
                    active:
                currentActiveTab === '1'
                  })}
                  style={{ border: 'none' }}
                  onClick={() => { toggle('1') }}
                >
                  امکانات
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={classnames({
                    active:
                currentActiveTab === '2'
                  })}
                  onClick={() => { toggle('2') }}
                >
                  بار مجاز
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={classnames({
                    active:
                currentActiveTab === '3'
                  })}
                // style={{ border: 'none' }}
                  onClick={() => { toggle('3') }}
                >
                  قوانین استرداد
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent activeTab={currentActiveTab} className={styles.tabcontentCss}>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <div className='d-flex flex-row flex-wrap justify-content-between'>
                      <div className='d-flex flex-column justify-content-between'>
                        {airplaneItem1.slice(0, 5).map((item, index) => (
                          <div key={index}>
                            <span className={styles.checkboxitem}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className='d-flex flex-column justify-content-between'>
                        {airplaneItem1.slice(5, 10).map((item, index) => (
                          <div className={styles.checkboxCss} key={index}>
                            <span className={styles.checkboxitem}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className='d-flex flex-column justify-content-between'>
                        {airplaneItem1.slice(10, 15).map((item, index) => (
                          <div className={styles.checkboxCss} key={index}>
                            <span className={styles.checkboxitem}>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId='2'>
                <Row>
                  <Col sm='12'>
                    <div className='d-flex flex-row flex-wrap justify-content-between'>
                      <div className={styles.weightCss}>
                        <img src={img1} className={styles.img1Css} />
                        بزرگسال:{airplaneItem2}کیلوگرم

                      </div>
                      <div className={styles.weightCss}>
                        <img src={img2} className={styles.img1Css} />
                        کودک:{airplaneItem2}کیلوگرم

                      </div>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId='3'>
                <Row>
                  <Col sm='12'>
                    <div className='d-flex flex-column my-2'>
                      برای اطلاع از قوانین استرداد با پشتیبانی سایت به شماره41502-021 تماس بگیرید
                    </div>
                  </Col>
                </Row>
              </TabPane>

            </TabContent>

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

import React, { useState } from 'react'
import {
  Modal,
  TabContent, TabPane,
  Row, Col
} from 'reactstrap'
import styles from '../../../assets/styles/AirplaneList.module.css'
import { useQuery } from '@apollo/client'
import roomQueries from '../../../Apollo/Query/roomQueries'
import img from '../../../assets/img/bg/22222.JPG'
import img2 from '../../../assets/img/bg/floor.JPG'

import classnames from 'classnames'
import Nav from 'react-bootstrap/Nav'
const Info = (props) => {
  // STATES
  const [currentActiveTab, setCurrentActiveTab] = useState('1')
  const [roomInfo, setRoomInfo] = useState([])
  const [roomData, setRoomData] = useState([])

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }



  // apollo query
  useQuery(roomQueries.SEARCHROOMBYID, {
    variables: {
      id: props.info[0]
    },

    onCompleted: (res) => {
      setRoomInfo(res.searchRoomById.information)
      setRoomData(res.searchRoomById)
    },
    onError: () => {
      setRoomInfo([])
      setRoomData([])
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
                  اطلاعات
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent activeTab={currentActiveTab} className={styles.tabcontentCss}>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <div className='d-flex flex-row flex-wrap justify-content-between'>
                      <div className='d-flex flex-row flex-wrap justify-content-between'>
                        <div className='d-flex flex-column justify-content-between'>
                          {roomInfo.slice(0, 5).map((item, index) => (
                            <div key={index}>
                              <span className={styles.checkboxitem}>{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                          {roomInfo.slice(5, 10).map((item, index) => (
                            <div className={styles.checkboxCss} key={index}>
                              <span className={styles.checkboxitem}>{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                          {roomInfo.slice(10, 15).map((item, index) => (
                            <div className={styles.checkboxCss} key={index}>
                              <span className={styles.checkboxitem}>{item}</span>
                            </div>
                          ))}
                        </div>

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
                        <img src={img2} className={styles.img1Css} />
                        طبقه :{roomData.floor}

                      </div>
                      <div className={styles.weightCss}>
                        <img src={img2} className={styles.img1Css} />
                        {/* شماره اتاق اول :{roomData.roomNumber1} */}
                        {/* شماره اتاق دوم  :{roomData.roomNumber1} */}
                        {roomData.roomNumber2 == 1
                          ? <span> شماره اتاق :{roomData.roomNumber1}</span>
                          : <span> شماره اتاق اول  :{roomData.roomNumber1}</span>}
                        {roomData.roomNumber2 == null
                          ? null
                          : <span> شماره اتاق دوم  :{roomData.roomNumber2}</span>}

                      </div>
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

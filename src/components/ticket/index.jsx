import React, { useState } from 'react'
import classnames from 'classnames'
import Nav from 'react-bootstrap/Nav'
import {
  TabContent, TabPane,
  Row, Col
} from 'reactstrap'

import styles from '../../assets/styles/BuyTicket.module.css'

import HotelTicket from './HotelTicket'
import AirplaneTicket from './AirplaneTicket'
import TrainTicket from './TrainTicket'
import BusTicket from './BusTicket'

const BuyTicket = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState('1')

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  return (
    <>
      <div className={styles.header}>
        <Nav variant='pills' defaultActiveKey='/home' className={styles.content}>
          <Nav.Item className={styles.nameItem}>
            <Nav.Link
              className={classnames({
                active:
                currentActiveTab === '1'
              })}
              style={{ border: 'none' }}
              onClick={() => { toggle('1') }}
            >
              بلیط هتل
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nameItem}>
            <Nav.Link
              className={classnames({
                active:
                currentActiveTab === '2'
              })}
                // style={{ border: 'none' }}
              onClick={() => { toggle('2') }}
            >
              بلیط هواپیما
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nameItem}>
            <Nav.Link
              className={classnames({
                active:
                currentActiveTab === '3'
              })}
                // style={{ border: 'none' }}
              onClick={() => { toggle('3') }}
            >
              بلیط قطار
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nameItem}>
            <Nav.Link
              className={classnames({
                active:
                currentActiveTab === '4'
              })}
                // style={{ border: 'none' }}
              onClick={() => { toggle('4') }}
            >
              بلیط اتوبوس
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <TabContent activeTab={currentActiveTab} className={styles.tabContent}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              {/* <Trip /> */}
              <HotelTicket />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              {/* <Shopping /> */}
              <AirplaneTicket />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col sm='12'>
              {/* <HealthBeauty /> */}
              <TrainTicket />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='4'>
          <Row>
            <Col sm='12'>
              <BusTicket />
            </Col>
          </Row>
        </TabPane>

      </TabContent>
    </>
  )
}

export default BuyTicket

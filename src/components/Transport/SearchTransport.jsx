import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap'
import classnames from 'classnames'
import AirplanSearch from '../Landing/Search/AirplanSearch'
import TrainSearch from '../Landing/Search/TrainSearch'
import BusSearch from '../Landing/Search/BusSearch'
// import HotelSearch from './HotelSearch'
// import AirplanSearch from './AirplanSearch'
// import BusSearch from './BusSearch'
// import TrainSearch from './TrainSearch'
// import styles from '../../assets/styles/css/Search.module.css'

function SearchTransport () {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1')

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  return (
    <div
      // style={{ display: 'block', width: 700, padding: 30 }}
      className='w-50'
    >
      <Nav tabs     >
        <NavItem >
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '1'
            })}
            onClick={() => { toggle('1') }}
          > <i className='fa fa-building' /> هواپیما
          </NavLink>
        </NavItem>
        <NavItem>

          <NavLink
            className={classnames({
              active:
                currentActiveTab === '2'
            })}
            onClick={() => { toggle('2') }}
          ><i className='fa fa-plane px-1' />
            قطار
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '3'
            })}
            onClick={() => { toggle('3') }}
          ><i className='fa fa-train px-1' />اتوبوس
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentActiveTab}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
            <AirplanSearch />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
             <TrainSearch/>

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col sm='12'>
              <BusSearch/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default SearchTransport

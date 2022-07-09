import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap'
import classnames from 'classnames'
import HotelSearch from './HotelSearch'
import AirplanSearch from './AirplanSearch'
import BusSearch from './BusSearch'
import TrainSearch from './TrainSearch' 
// import styles from '../../assets/styles/css/Search.module.css'
import styles from '../../../assets/styles/Search.module.css'

function Search () {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1')

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  return (
    <div
    className='w-75'
    >
      <div 
        className='w-100' 
        style={{
          cursor: 'pointer',
          backgroundColor: '#EFF2F7',
          borderRadius: '0.8rem',
          width: '100%',
          // padding: '0.9rem 1.25rem',
          fontSize: '0.8125rem',
          color: '#405057',
          boxShadow: '0 0 4px 1px #ddd'
        }}
      >
      <Nav tabs  className='  my-0 ' style={{backgroundColor:'#80808031'}}>
        <NavItem className=''  style={{border:'none'}}>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '1'
            })}
            // style={{border:'none'}}
            onClick={() => { toggle('1') }}
          > <i className='fa fa-building' /> هتل
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
            هواپیما
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '3'
            })}
            onClick={() => { toggle('3') }}
          ><i className='fa fa-train px-1' />قطار
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '4'
            })}
            onClick={() => { toggle('4') }}
          ><i className='fa fa-bus px-1' />اتوبوس
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentActiveTab} className=' '>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              <HotelSearch />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              <AirplanSearch />

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col sm='12'>
              <TrainSearch />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='4'>
          <Row>
            <Col sm='12'>
              <BusSearch />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </div>
    </div>
  )
}

export default Search

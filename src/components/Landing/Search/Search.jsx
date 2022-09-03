import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { FaBusAlt, FaSubway, FaHotel, FaPlane } from 'react-icons/fa'
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap'
import classnames from 'classnames'
import HotelSearch from './HotelSearch'
import AirplanSearch from './AirplanSearch'
import BusSearch from './BusSearch'
import TrainSearch from './TrainSearch'
import styles from '../../../assets/styles/Search.module.css'

function Search (props) {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1')

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  return (
    <>
      <div className={styles.fontCss}>
        {(() => {
          switch (currentActiveTab) {
            case '1':
              return <span>رزرو هتل</span>
            case '2':
              return <span>خرید بلیط هواپیما</span>
            case '3':
              return <span>خرید بلیط قطار</span>
            case '4':
              return <span>خرید بلیط اتوبوس</span>
            default:
              return null
          }
        })()}
      </div>
      <div
        className=' d-flex flex-row justify-content-center flex-wrap '
        style={{ marginTop: '-100px' }}
      >
        <div
          className={styles.divcontent}
        >
          <Nav tabs className=' my-0 rounded-2  d-flex flex-row flex-wrap' style={{ backgroundColor: '#ddd' }}>
            <NavItem className={styles.navItemCss} style={{ border: 'none' }}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '1'
                })}
                onClick={() => { toggle('1'); props.selectTab('1') }}
              >
                {
                 currentActiveTab === '1'
                   ? <div style={{ fontWeight: 'bold', fontSize: '16px' }} className='text-danger'><FaHotel className='mx-1 fa-lg ' />هتل </div>
                   : <div className='text-success '><FaHotel className='mx-1 fa-lg ' />هتل </div>
              }
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItemCss}>

              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '2'
                })}
                onClick={() => { toggle('2'); props.selectTab('2') }}
              >
                {
                 currentActiveTab === '2'
                   ? <div style={{ fontWeight: 'bold', fontSize: '16px' }} className='text-danger'> <FaPlane className='mx-1 fa-lg ' />هواپیما </div>
                   : <div className='text-success'> <FaPlane className='mx-1 fa-lg ' />هواپیما </div>
              }
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItemCss}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '3'
                })}
                onClick={() => { toggle('3'); props.selectTab('3') }}
              >

                {
                 currentActiveTab === '3'
                   ? <div style={{ fontWeight: 'bold', fontSize: '16px' }} className='text-danger'><FaSubway className='mx-1 fa-lg' />قطار </div>
                   : <div className='text-success'><FaSubway className='mx-1 fa-lg' />قطار </div>
              }
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItemCss}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '4'
                })}
                onClick={() => { toggle('4'); props.selectTab('4') }}
              >
                {
                 currentActiveTab === '4'
                   ? <div style={{ fontWeight: 'bold', fontSize: '16px' }} className='text-danger'><FaBusAlt className='mx-1 fa-lg' />اتوبوس</div>
                   : <div className='text-success'><FaBusAlt className='mx-1 fa-lg' />اتوبوس</div>
              }
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={currentActiveTab}>
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
    </>
  )
}

export default Search

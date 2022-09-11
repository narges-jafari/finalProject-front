import React, { useState } from 'react'
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap'
import { FcShop, FcLandscape, FcBusinesswoman, FcSportsMode, FcFactory } from 'react-icons/fc'

import classnames from 'classnames'

import styles from '../../../assets/styles/Entertainment.module.css'
import Trip from './Trip'
import Shopping from './Shopping'
import CofeRestaurant from './CafeRestaurant'
import HealthBeauty from './HealthBeauty'
import AmusementPark from './AmusementPark'

function Search () {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1')

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }

  return (
    <>
      <div className={styles.headercss}>
        تفریح‌گردی
      </div>
      <div
        className=' d-flex flex-row justify-content-center flex-wrap '
      >
        <div
          className={styles.divcontent}
        >
          <Nav tabs className={styles.navCss}>
            <NavItem className={styles.navitemCss}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '1'
                })}
                style={{ border: 'none' }}
                onClick={() => { toggle('1') }}
              >
                <div className={styles.navDivCss}>
                  <FcLandscape className='fa-2x' />گردش و سفر

                </div>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navitemCss}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '2'
                })}
                style={{ border: 'none' }}
                onClick={() => { toggle('2') }}
              >
                <div className={styles.navDivCss}>
                  <FcShop className='fa-2x' />   خرید و مد
                </div>

              </NavLink>
            </NavItem>
            <NavItem className={styles.navitemCss}>

              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '3'
                })}
                style={{ border: 'none' }}
                onClick={() => { toggle('3') }}
              >
                <div className={styles.navDivCss}>
                  <FcBusinesswoman className='fa-2x' />
                  سلامت و زیبایی

                </div>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navitemCss}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '4'
                })}
                style={{ border: 'none' }}
                onClick={() => { toggle('4') }}
              >
                {/* <i className='fa fa-train px-1' /> */}

                <div className={styles.navDivCss}>
                  <FcFactory className='fa-2x' />
                  رستوران و کافه

                </div>

              </NavLink>
            </NavItem>
            <NavItem className={styles.navitemCss}>
              <NavLink
                className={classnames({
                  active:
                currentActiveTab === '5'
                })}
                style={{ border: 'none' }}
                onClick={() => { toggle('5') }}
              >
                {/* <i className='fa fa-bus px-1' /> */}
                <div className={styles.navDivCss}>
                  <FcSportsMode className='fa-2x' />
                  ورزش و بازی

                </div>
              </NavLink>
            </NavItem>
          </Nav>
          <div className={styles.divCss1} />
          <TabContent activeTab={currentActiveTab} className={styles.tabContentCss}>
            <TabPane tabId='1'>
              <Row>
                <Col sm='12'>
                  <Trip />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='2'>
              <Row>
                <Col sm='12'>
                  <Shopping />

                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='3'>
              <Row>
                <Col sm='12'>
                  <HealthBeauty />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='4'>
              <Row>
                <Col sm='12'>
                  <CofeRestaurant />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='5'>
              <Row>
                <Col sm='12'>
                  <AmusementPark />
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

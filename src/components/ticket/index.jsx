import React, { useState } from 'react'
import classnames from 'classnames'
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import HotelTicket from './HotelTicket'
import AirplaneTicket from './AirplaneTicket'
import TrainTicket from './TrainTicket'
import BusTicket from './BusTicket'

const BuyTicket = () => {
  // STATE VARIABLES
  const [customActiveTab, setCustomActiveTab] = useState('indicators')

  // TOGGLE FUNCTIONS FOR TABS
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab)
    }
  }

  const customTabs = [
    {
      id: 'hotelticket',
      name: 'بلیط هتل',
      component: <HotelTicket />
    },
    {
      id: 'airplaneticket',
      name: 'بلیط هواپیما',
      component: <AirplaneTicket />
    },
    {
      id: 'trainticket',
      name: 'بلیط قطار',
      component: <TrainTicket />
    },
    {
      id: 'busticket',
      name: 'بلیط اتوبوس',
      component: <BusTicket />
    }]

  return (
    <Card style={{ border: 'none', cursor: 'pointer', backgroundColor: 'white', borderRadius: '0px' }}>
      <CardBody>
        <Nav tabs style={{ border: 'none', color: 'black' }} className='nav-tabs-custom nav-justified'>
          {customTabs.map((tab) => (
            <NavItem key={tab.id}>
              <NavLink
                className={classnames({ active: customActiveTab === tab.id })}
                onClick={() => { toggleCustom(tab.id) }}
                style={{ border: 'none' }}
              >
                {tab.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={customActiveTab} className='p-3 text-muted '>
          {customTabs.map((tab) => (
            <TabPane tabId={tab.id} key={tab.id}>
              {tab.component}
            </TabPane>
          ))}
        </TabContent>
      </CardBody>
    </Card>
  )
}

export default BuyTicket

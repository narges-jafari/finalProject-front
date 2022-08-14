import React, { useState } from 'react'
import classnames from 'classnames'
import {
  Card,
  CardBody,
  Label,
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

// import Chart from './Charts/Chart'
// import AddAccordion from './IndicatorsState/AddAccordion'
// import AddAlert from './AddAlert'
// import AlertTable from './MyAlert/AlertTable'

const AddTicket = () => {
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
      component: <HotelTicket/>
    },
    {
      id: 'airplaneticket',
      name: 'بلیط هواپیما',
      component: <AirplaneTicket/>
    },
    {
      id: 'trainticket',
      name: 'بلیط قطار',
      component: <TrainTicket/>
    },
    {
      id: 'busticket',
      name: 'بلیط اتوبوس',
      component: <BusTicket/>
    }]

  return (
    <Card style={{border:'none', cursor:'pointer'}}>
      <CardBody >
        <Nav tabs style={{border:'none',color:'black'}} className='nav-tabs-custom nav-justified'>
          {customTabs.map((tab) => (
            <NavItem key={tab.id}  >
              <NavLink
                className={classnames({ active: customActiveTab === tab.id })}
                onClick={() => { toggleCustom(tab.id) }}
                style={{border:'none',color:'red'}}
              >
                {tab.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={customActiveTab} className='p-3 text-muted ' >
          {customTabs.map((tab) => (
            <TabPane tabId={tab.id} key={tab.id} >
              {tab.component}
            </TabPane>
          ))}
        </TabContent>
      </CardBody>
    </Card>
  )
}

export default AddTicket

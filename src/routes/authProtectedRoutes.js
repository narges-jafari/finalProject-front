import React from 'react'
import { Navigate } from 'react-router-dom'

// Dashboard
import HomePage from '../pages/Common/HomePage'
import TransportationPage from '../pages/Transport/TransportationPage'
import AirplaneResultPage from '../pages/Result/AirplaneResultPage'
import RegisterPage from '../pages/Authentication/RegisterPage'
import LoginPage from '../pages/Authentication/LoginPage'
import ForgetPasswordPage from '../pages/Authentication/ForgetPasswordPage'
import TrainResultPage from '../pages/Result/TrainResultPage'
import BusResultPage from '../pages/Result/BusResultPage'
import HotelReservationPage from '../pages/Hotel/HotelSearchPage'
import HotelResultPage from '../pages/Result/HotelResultPage'
import PaymentPage from '../pages/Payment/PaymentPage'
import AddTicketPage from '../pages/AddTicket/AddTicketPage'
import BuyTicketPage from '../pages/BuyTicket/BuyTicketPage'

const authProtectedRoutes = [
  { path: '/ticket', component: TransportationPage },
  { path: '/resultairplain', component: AirplaneResultPage },
  { path: '/resulttrain', component: TrainResultPage },

  { path: '/resultbus', component: BusResultPage },
  { path: '/resulthotel', component: HotelResultPage },
  { path: '/airplanepay', component: PaymentPage },

  { path: '/addticket', component: AddTicketPage },
  { path: '/buyticket', component: BuyTicketPage },

  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Navigate to='/ticket' /> }
]

export default authProtectedRoutes

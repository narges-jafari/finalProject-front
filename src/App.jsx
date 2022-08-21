import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/Common/HomePage'
import AirplaneResultPage from './pages/Result/AirplaneResultPage'
import RegisterPage from './pages/Authentication/RegisterPage'
import LoginPage from './pages/Authentication/LoginPage'
import TrainResultPage from './pages/Result/TrainResultPage'
import BusResultPage from './pages/Result/BusResultPage'
import HotelResultPage from './pages/Result/HotelResultPage'
import PaymentPage from './pages/Payment/PaymentPage'
import AddTicketPage from './pages/AddTicket/AddTicketPage'
import BuyTicketPage from './pages/BuyTicket/BuyTicketPage'
import AboutUsPage from './pages/Footer/AboutUsPage'
import RoulesPage from './pages/Footer/RoulesPage'
import QuestionPage from './pages/Footer/QuestionPage'
import MagazineResultPage from './pages/Footer/MagazineResultPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resultairplain' element={<AirplaneResultPage />} />
        <Route path='/resulttrain' element={<TrainResultPage />} />
        <Route path='/resultbus' element={<BusResultPage />} />
        <Route path='/resulthotel' element={<HotelResultPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/airplanepay' element={<PaymentPage />} />
        <Route path='/addticket' element={<AddTicketPage />} />
        <Route path='/buyticket' element={<BuyTicketPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/roules' element={<RoulesPage />} />
        <Route path='/question' element={<QuestionPage />} />
        <Route path='/magazin' element={<MagazineResultPage />} />

      </Routes>
    </Router>

  )
}
export default App

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/Common/HomePage'
import TransportationPage from './pages/Transport/TransportationPage'
import AirplaneResultPage from './pages/Result/AirplaneResultPage'
import RegisterPage from './pages/Authentication/RegisterPage'
import LoginPage from './pages/Authentication/LoginPage'
import ForgetPasswordPage from './pages/Authentication/ForgetPasswordPage'
import TrainResultPage from './pages/Result/TrainResultPage'
import BusResultPage from './pages/Result/BusResultPage'
import HotelReservationPage from './pages/Hotel/HotelSearchPage'
import HotelResultPage from './pages/Result/HotelResultPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ticket' element={<TransportationPage />} />
        <Route path='/resultairplain' element={<AirplaneResultPage />} />
        <Route path='/resulttrain' element={<TrainResultPage />} />
        <Route path='/resultbus' element={<BusResultPage />} />
        <Route path='/hotel' element={<HotelReservationPage />} />
        <Route path='/resulthotel' element={<HotelResultPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgetpassword' element={<ForgetPasswordPage />} />

      </Routes>
    </Router>

  )
}
export default App

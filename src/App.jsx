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
import AirplaneFastResultPage from './pages/Result/AirplaneFastResultPage'
import TrainFastResultPage from './pages/Result/TrainFastResult'
import InfoResultPage from './pages/Result/InfoResultPage'
import HotelFastResultPage from './pages/Result/HotelFastResultPage'
import InfoFastPage from './pages/Result/InfoFastPage'

const App = (props) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/roules' element={<RoulesPage />} />
          <Route path='/question' element={<QuestionPage />} />
          <Route path='/magazin' element={<MagazineResultPage />} />
          <Route path='/resultairplane' element={<AirplaneResultPage />} />
          <Route path='/resultfastairplane' element={<AirplaneFastResultPage />} />
          <Route path='/resulttrain' element={<TrainResultPage />} />
          <Route path='/resultfasttrain' element={<TrainFastResultPage />} />

          <Route path='/resultbus' element={<BusResultPage />} />
          <Route path='/resulthotel' element={<HotelResultPage />} />
          <Route path='/resultfasthotel' element={<HotelFastResultPage />} />
          <Route path='/infohotel' element={<InfoResultPage />} />
          <Route path='/infofasthotel' element={<InfoFastPage />} />

          <Route path='/airplanepay' element={<PaymentPage />} />
          <Route path='/addticket' element={<AddTicketPage />} />
          <Route path='/buyticket' element={<BuyTicketPage />} />

        </Routes>
      </Router>

    </>
  )
}
export default App

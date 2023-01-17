import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/Common/HomePage'
import AirplaneResultPage from './pages/Result/AirplaneResultPage'
import RegisterPage from './pages/Authentication/RegisterPage'
import LoginPage from './pages/Authentication/LoginPage'
import TrainResultPage from './pages/Result/TrainResultPage'
import BusResultPage from './pages/Result/BusResultPage'
import HotelResultPage from './pages/Result/HotelResultPage'
import AddTicketPage from './pages/AddTicket/AddTicketPage'
import BuyTicketPage from './pages/BuyTicket/BuyTicketPage'
import AboutUsPage from './pages/Footer/AboutUsPage'
import RoulesPage from './pages/Footer/RoulesPage'
import QuestionPage from './pages/Footer/QuestionPage'
import MagazineResultPage from './pages/Footer/MagazineResultPage'
import AirplaneFastResultPage from './pages/Result/AirplaneFastResultPage'
import FastBusTicketsPage from './pages/FastTicket/FastBusTicket'
import DashboardPage from './pages/FastTicket/DashboardPage'
import TrainFastResultPage from './pages/Result/TrainFastResult'
import InfoResultPage from './pages/Result/InfoResultPage'
import HotelFastResultPage from './pages/Result/HotelFastResultPage'
import BusFastResultPage from './pages/Result/BusFastResultPage'
import InfoFastPage from './pages/Result/InfoFastPage'
import HotelPaymentPage from './pages/Payment/hotel/HotelPaymentPage'
import BusPaymentPage from './pages/Payment/bus/BusPaymentPage'
import Finish from './pages/Finish/FinishPage'
import FastHotelTicketPage from './pages/FastTicket/FastHotelTicket'
import AirplanePaymentPage from './pages/Payment/airplane/AirplanePaymentPage'
import FlightFinishPage from './pages/Finish/FlightFinishPage'
import BusFinishPage from './pages/Finish/BusFinishPage'
import FastFlightTicketPage from './pages/FastTicket/FastFlightTicket'
import FastFlighstTicketsPage from './pages/FastTicket/FastFlightsTickets'
import FastTrainsTicketsPage from './pages/FastTicket/FastTrainsTickets'
import FastTrainTicketPage from './pages/FastTicket/FastTrainTicket'
import FirstFlightResultPage from './pages/Result/FirstFlightResoltPage'
import SecondFlightResoltPage from './pages/Result/SecondFlightResoltPage'
import FirstTrainResultPage from './pages/Result/FirstTrainResultPage'
import SecondTrainResultPage from './pages/Result/SecondTrainResultPage'
import TrainPaymentPage from './pages/Payment/train/TrainPaymentPage'
import FlightPaymentPage from './pages/Payment/flights/FlightsPaymentPage'
import TrainsPaymentsPage from './pages/Payment/trains/TrainsPaymentsPage'
import TrainFinishPage from './pages/Finish/TrainFinishPage'
import FlightsFinishPage from './pages/Finish/FlightsFinishPage'
import TrainsFinishPage from './pages/Finish/TrainsFinishPage'

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
          <Route path='/fastbusticket' element={<FastBusTicketsPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/resulttrain' element={<TrainResultPage />} />
          <Route path='/resultfasttrain' element={<TrainFastResultPage />} />
          <Route path='/resultbus' element={<BusResultPage />} />
          <Route path='/resulthotel' element={<HotelResultPage />} />
          <Route path='/resultfasthotel' element={<HotelFastResultPage />} />
          <Route path='/resultfastbus' element={<BusFastResultPage />} />
          <Route path='/infohotel' element={<InfoResultPage />} />
          <Route path='/infofasthotel' element={<InfoFastPage />} />
          <Route path='/hotelpay' element={<HotelPaymentPage />} />
          <Route path='/buspay' element={<BusPaymentPage />} />
          <Route path='/airplanepay' element={<AirplanePaymentPage />} />
          <Route path='/firstflightresult' element={<FirstFlightResultPage />} />
          <Route path='/secondflightresult' element={<SecondFlightResoltPage />} />
          <Route path='/firsttrainresult' element={<FirstTrainResultPage />} />
          <Route path='/secondtrainresult' element={<SecondTrainResultPage />} />
          <Route path='/trainpay' element={<TrainPaymentPage />} />
          <Route path='/airplanepays' element={<FlightPaymentPage />} />
          <Route path='/trainpays' element={<TrainsPaymentsPage />} />
          <Route path='/fasttrainticket' element={<FastTrainTicketPage />} />
          <Route path='/finishtrain' element={<TrainFinishPage />} />
          <Route path='/finishflights' element={<FlightsFinishPage />} />
          <Route path='/finishtrains' element={<TrainsFinishPage />} />
          <Route path='/fasthotelticket' element={<FastHotelTicketPage />} />
          <Route path='/fastflightticket' element={<FastFlightTicketPage />} />
          <Route path='/fastflightstickets' element={<FastFlighstTicketsPage />} />
          <Route path='/fasttrainstickets' element={<FastTrainsTicketsPage />} />
          <Route path='/addticket' element={<AddTicketPage />} />
          <Route path='/buyticket' element={<BuyTicketPage />} />
          <Route path='/finish' element={<Finish />} />
          <Route path='/finishflight' element={<FlightFinishPage />} />
          <Route path='/finishbus' element={<BusFinishPage />} />
        </Routes>
      </Router>

    </>
  )
}
export default App

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/Common/HomePage'
import TransportationPage from './pages/Transport/TransportationPage'
import AirplaneResultPage from './pages/Result/AirplaneResultPage'
import RegisterPage from './pages/Authentication/RegisterPage'
import LoginPage from './pages/Authentication/LoginPage'
import ForgetPasswordPage from './pages/Authentication/ForgetPasswordPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ticket' element={<TransportationPage />} />
        <Route path='/result' element={<AirplaneResultPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgetpassword' element={<ForgetPasswordPage />} />

      </Routes>
    </Router>

  )
}
export default App

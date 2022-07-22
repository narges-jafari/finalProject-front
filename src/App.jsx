import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/Common/HomePage'
import TransportationPage from './pages/Transport/TransportationPage'
import AirplaneResultPage from './pages/Result/AirplaneResultPage'


const App = () => {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route  path='/ticket' element={<TransportationPage />} />
        <Route path='/result' element={<AirplaneResultPage />} />

      </Routes>
    </Router>

  )
}
export default App

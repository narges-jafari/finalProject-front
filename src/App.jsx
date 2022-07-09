import React from 'react'
import {Route , BrowserRouter as Router, Routes} from 'react-router-dom'
import HomePage from './pages/Common/HomePage'
import TransportationPage from './pages/Transport/TransportationPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<HomePage />}/>
        <Route path='/ticket'  element={<TransportationPage />}/>

      </Routes>
    </Router>
  )
}
export default App

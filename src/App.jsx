import React from 'react'
// import BusSearch from './Component/Search/BusSearch'
// import HotelSearch from './Component/Search/HotelSearch'
// import AiplanSearch from './Component/Search/AirplanSearch'
// import TrainSearch from './Component/Search/TrainSearch'
import Search from './Component/Search/Search'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Navbar/Header'

// import Search from './Component/Search/Search/Search'


const App = () => {
  return (
    <div>

      {/* <HotelSearch />
      <BusSearch/>
    <AiplanSearch/>
    <TrainSearch/> */}
    {/* <Search/> */}
    <Navbar/>
    <Header/>
    <Search/>
    </div>
  )
}
export default App
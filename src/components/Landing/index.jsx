import React from 'react'
import Search from './Search/Search'
import Navbar from './Navbar/Navbar'
import Header from './Navbar/Header'
import DiscountHotel from './Hotel/DiscountHotel'
import BusyRoutes from './Airplan/BusyRoutes'
import Footer from './Footer/Footer'


const Landing = () => {
    return (
        <div>
    
          <Navbar />
          <Header />
          <Search />
          <br />
          <hr />
          <DiscountHotel />
          <BusyRoutes />
          <Footer />
    
        </div>
      )

}

export default Landing
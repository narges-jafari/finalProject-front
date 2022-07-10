import React from 'react'
import Search from './Search/Search'
import Navbar from './Navbar/Navbar'
import Header from './Navbar/Header'
import DiscountHotel from './Hotel/DiscountHotel'
import BusyRoutes from './Airplan/BusyRoutes'
import Footer from './Footer/Footer'
// import img from '../../assets/img/landing/logo.PNG'
import styles from '../../assets/styles/Search.module.css'

const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div className={styles.divCss}>
        {/* <div className='my-5'> */}
        <Search />

        {/* </div> */}
      </div>
      <div>
        <div className='d-flex flex-row flex-wrap justify-content-center my-5'>
          <h6 className=' border-bottom border-2 border-primary py-2 '>هتل های پنج ستاره</h6>
        </div>
        <DiscountHotel />
      </div>
      <div>
        <BusyRoutes />
      </div>
      <div>
        <Footer />

      </div>

    </div>
  )
}

export default Landing

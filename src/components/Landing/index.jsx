import React from 'react'
import Search from './Search/Search'
import Navbar from './Navbar/Navbar'
import Header from './Navbar/Header'
import HotelSlide from './Hotel/HotelSlide'
// import BusyRoutes from './Airplan/BusyRoutes'
import Footer from './Footer/Footer'
// import img from '../../assets/img/landing/logo.PNG'
import styles from '../../assets/styles/Search.module.css'
import BusyRoutsSlide from './Airplan/BusyRoutsSlide'
import AmusementPark from './Entertainment/AmusementPark'
import CofeRestaurant from './Entertainment/CafeRestaurant'
import Shopping from './Entertainment/Shopping'
import Trip from './Entertainment/Trip'
import HealthBeauty from './Entertainment/HealthBeauty'
import SearchEntertainment from './Entertainment/SearchEntertainment'

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
        <HotelSlide />
      </div>
      <div>
        <div className='d-flex flex-row flex-wrap justify-content-center my-5'>
          <h6 className=' border-bottom border-2 border-primary py-2 '> مسیر های پر تردد </h6>
        </div>
        <BusyRoutsSlide />
      </div>
      <div>
        <SearchEntertainment />
      </div>
      <div style={{marginTop:'100px'}}>
        <Footer />
      </div>

    </div>
  )
}

export default Landing

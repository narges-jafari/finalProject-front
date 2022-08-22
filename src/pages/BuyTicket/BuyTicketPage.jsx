import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'
import BuyTicket from '../../components/ticket'
import { AUTH_TOKEN } from '../../constants/auth'
import NotLoginPage from '../NotLogin.jsx'


const BuyTicketPage = () => {
  const showData=window.localStorage.getItem(AUTH_TOKEN)
  console.log(showData)
  return (
    <>
    {showData? 
       <div className={styles.bodycss}>
       <div className={styles.content}>
         <HeaderLanding />
   
       </div>
   
       <div className=' mx-auto  '>
         <BuyTicket />
   
       </div>
       <div style={{ marginTop: '200px' }}>
         <Footer />
   
       </div>
     </div>
   

    :
    <div>
    <NotLoginPage/>
  </div>
 
}
    </>
  )
}

export default BuyTicketPage

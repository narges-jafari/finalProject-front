import React from 'react'
import Footer from '../Landing/Footer/Footer'
// import Footer from '../../Landing/Footer/Footer'
import Header from '../Landing/Navbar/Header'
import Navbar from '../Landing/Navbar/Navbar'
import SearchTransport from './SearchTransport'


const Transport = () => {
    return(
        <>
        <Navbar/>
        <Header/>
        <SearchTransport/>
        <Footer/>
        </>
        )
}

export default Transport
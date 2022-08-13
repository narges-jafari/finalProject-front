import React from 'react'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import Rules from '../../components/Landing/Need/Rules.jsx'

const RulesPage = () => {
  return (
    <>
<div style={{backgroundColor:'#e6ebeb90'}}>
<Navbar />
<div style={{padding:'100px 0px 0px 0px '}}>
<Rules/>

      </div>

      <div style={{ marginTop: '20px' }}>
        <Footer />

      </div>
      </div>
    </>
  )
}

export default RulesPage

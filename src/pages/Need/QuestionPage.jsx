import React from 'react'
// import Filter from '../../components/result/Filter'
import Footer from '../../components/Landing/Footer/Footer.jsx'
import Header from '../../components/Landing/Navbar/Header.jsx'
import Navbar from '../../components/Landing/Navbar/Navbar.jsx'
import Question from '../../components/Landing/Need/Question.jsx'

const QuestionPage = () => {
  return (
    <>
    <div >
      <Navbar />
      <div style={{margin:'-100px 0px 0px 0px '}}>
      <Question/>

      </div>

      <div style={{ marginTop: '20px' }}>
        <Footer />

      </div> 
      </div>
     
    </>
  )
}

export default QuestionPage

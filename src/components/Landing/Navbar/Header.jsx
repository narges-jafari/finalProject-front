import React from 'react'
// import img from '../../assets/img/landing/logo.PNG'
// import styles from '../../assets/styles/css/Navbar.module.css'

const Header = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center  border border-primary py-2 bg-soft bg-warning'>
        <div className='d-flex flex-row flex-wrap justify-content-center  mx-4'>
          <div className='mx-2 '>خرید بلیط</div>
          <div className='mx-2 '>رزرو هتل</div>
          <div className='mx-2 '>تفریح گردی</div>
          <div className='mx-2 '>رستوران گردی </div>
          <div className='mx-2 '>مجله</div>
          <div className='mx-2 '>در باره ی ما</div>

        </div>
        <div>
          <div className='d-flex flex-row flex-wrap justify-content-start '>
            <button className='mx-2 btn btn-outline-danger btn-sm'>ورود</button>
            <button className=' btn btn-danger btn-sm mx-2'>عضویت</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

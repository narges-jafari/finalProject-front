import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '../../../assets/styles/HeaderLanding.module.css'
import { FcHome, FcPlus, FcManager, FcMindMap, FcAbout, FcTodoList } from 'react-icons/fc'
import {
  USER_ID,
  AUTH_TOKEN

} from '../../../constants/auth'
const Header = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
//   const userId = window.localStorage.getItem(USER_ID).replace(/"/g, '')
// console.log(userId)
  return (
    <>
      <i className='fa fa-bars fa-lg mx-2 text-center py-0 text-secondary   ' onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>

            <div className=' my-4   '>
              <span className={styles.numberfont1}>021-41502</span>
              <a href='login' className={styles.acss}>
                <button className={styles.buttonCss1}>ورود/ثبت نام</button>
              </a>
            </div>

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#5e5e911f' }}>
          <div className='d-flex flex-column '>
            <a href='/' className={styles.acss}>
              <span className='my-1'>
                <FcHome className='mx-2 fa-lg' />
                صفحه‌اصلی
              </span>
            </a>
            {/* { userId && userId === '63820b4ccfb5bb161bd8ceb5'?
            <a href='addticket' className={styles.acss}>
              <FcPlus className='mx-2  fa-lg' />
              
              <span>
                اضافه کردن بلیط
              </span>
            </a>:null}
            { userId && userId== '63820b4ccfb5bb161bd8ceb5'?
            <a href='makehotelticket' className={styles.acss}>
              <FcAbout className='mx-2  fa-lg' />
              
              <span>
                ایجاد بلیط
              </span>
            </a>:null} */}
            <a href='buyticket' className={styles.acss}>
              <span className='my-1'>
                <FcTodoList className='mx-2 fa-lg' />
                 بلیط‌های خریداری شده
              </span>
            </a>
            <a href='aboutus' className={styles.acss}>
              <span className='my-1'>
                <FcMindMap className='mx-2 fa-lg' />
                درباره‌ی تریپنو
              </span>
            </a>

          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header

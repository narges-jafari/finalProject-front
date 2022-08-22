import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '../../../assets/styles/HeaderLanding.module.css'
import { FcHome, FcPlus, FcManager, FcMindMap } from 'react-icons/fc'
import { useQuery } from '@apollo/client'
import userQueries from '../../../Apollo/Query/userQueries'
import { useNavigate } from 'react-router-dom';

import {
  AUTH_TOKEN,
  USER_ID

} from '../../../constants/auth'


const Header = () => {
  const [show, setShow] = useState(false)
  const [showusername, setShowUsername] = useState(false)


  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [isloggin,setIsLogin]=useState(false)
  let navigate = useNavigate()

  const userid = window.localStorage.getItem(USER_ID)
  const usertoken = window.localStorage.getItem(AUTH_TOKEN)

console.log(usertoken,userid)

  useQuery(userQueries.USERS, {
    variables: { 
      userId:userid
    },

    onCompleted: (res) => {
      setShowUsername(res.users)
    },
    onError: () => {
      setShowUsername([])
    }
  })  
  const logout = () => {
    localStorage.removeItem('auth-token');
    navigate('/')
    setIsLogin(false);
  };


  return (
    <>
      <i className='fa fa-bars fa-lg mx-2 text-center py-0 text-secondary   ' onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {usertoken?
      
              <div className=' my-4   '>
              <span className={styles.numberfont11}>{showusername.username}</span>
              <a href='login' className={styles.acss}>
                <button onClickCapture={logout} className={styles.buttonCss1}> خروج</button>
              </a>
            </div>
           :
             <div className=' my-4   '>
             <span className={styles.numberfont1}>021-41502</span>
             <a href='login' className={styles.acss}>
               <button className={styles.buttonCss1}>ورود/ثبت نام</button>
             </a>
           </div>
}
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
            <a href='addticket' className={styles.acss}>
              <FcPlus className='mx-2  fa-lg' />
              <span>
                اضافه کردن بلیط
              </span>
            </a>
            <a href='buyticket' className={styles.acss}>
              <span className='my-1'>
                <FcManager className='mx-2 fa-lg' />
                صفحه‌ی کاربران
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

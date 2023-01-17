import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '../../../assets/styles/HeaderLanding.module.css'
import { FcHome, FcPlus, FcManager, FcMindMap, FcTodoList } from 'react-icons/fc'
import {
  USER_ID,
  AUTH_TOKEN
} from '../../../constants/auth'
import { useQuery } from '@apollo/client'
import userQueries from '../../../Apollo/Query/userQueries'


const Header = (props) => {

  //states
  const [show, setShow] = useState(false)
  const [data, setData] = useState(false)


  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const userId = window.localStorage.getItem(USER_ID)
  const token = window.localStorage.getItem(AUTH_TOKEN)

  // apollo query
  useQuery(userQueries.SEARCHUSERBYID, {
    variables: {
      id: JSON.parse(userId)
    },

    onCompleted: (res) => {
      setData(res.searchUserById)
    },
    onError: () => {
      setData([])
    }
  })

    const logout = () => {
    localStorage.removeItem('auth-token')
    window.location.reload()

  }
  return (
    <>
      <i className='fa fa-bars fa-lg mx-2 text-center py-0 text-secondary   ' onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>

            <div className=' my-4   '>
             
              <span className={styles.numberfont1}>021-41502</span>
              {token
                ? <button onClickCapture={logout}   className={styles.buttonCss1}>{data.username}</button>
                : <a href='login' className={styles.acss}>
                  <button  className={styles.buttonCss1}>ورود/ثبت نام</button>
                  </a>}
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
            {data.role == 'مدیر'
              ? <>
                <a href='addticket' className={styles.acss}>
                  <FcPlus className='mx-2  fa-lg' />

                  <span>
                    اضافه کردن بلیط
                  </span>
                </a>
                <a href='dashboard' className={styles.acss}>
              <span className='my-1'>
                < FcManager className='mx-2 fa-lg' />
                  صفحه مدیریت
              </span>
            </a>

              </>
              : null}
              {data.role == 'مدیر' ?null:
                <a href='buyticket' className={styles.acss}>
                <span className='my-1'>
                  <FcTodoList className='mx-2 fa-lg' />
                    بلیط‌ها 
                </span>
              </a>
              }
          
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

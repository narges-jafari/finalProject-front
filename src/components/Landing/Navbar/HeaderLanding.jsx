
import React, { useState } from 'react'

import styles from '../../../assets/styles/HeaderLanding.module.css'
import { useQuery } from '@apollo/client'
import userQueries from '../../../Apollo/Query/userQueries'

import img from '../../../assets/img/16.png'

import Header from './Header'

import { useNavigate } from 'react-router-dom'
import {
  USER_ID,
  AUTH_TOKEN

} from '../../../constants/auth'

const HeaderLanding = () => {
  const [showusername, setShowUsername] = useState(false)
  const [setIsLogin] = useState(false)
  const navigate = useNavigate()

  const [headerChange, setHeaderChange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setHeaderChange(true)
    } else {
      setHeaderChange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  const usertoken = window.localStorage.getItem(AUTH_TOKEN)
  const userId = window.localStorage.getItem(USER_ID)

  useQuery(userQueries.SEARCHUSERBYID, {
    variables: {
      id: JSON.parse(userId)
    },
    onCompleted: (res) => {
      setShowUsername(res.searchUserById)
    },
    onError: () => {
      setShowUsername([])
    }
  })
  const logout = () => {
    localStorage.removeItem('auth-token')
    // localStorage.removeItem('user-id')
    // setIsLogin(false)
  }

  console.log(showusername.username)

  return (
    <>
      {!headerChange
        ? <div className={styles.divheader}>
          <div className={styles.headerCss}>
            <div>
              <img src={img} className={styles.logoCss} />
              <span className={styles.headerfont}>تریپنو</span>
            </div>

            <div className=' mt-4 '>
              <span className={styles.numberfont}>021-41502</span>
              {!usertoken || usertoken == 'undefined'
                ? <>
                  <a href='login'>
                    <button className={styles.buttonCssChange}>ورود/ثبت نام</button>
                  </a>
                  <button onClickCapture={logout} className={styles.buttonCssChange}>خروج </button>

                </>
                : <>
                  <button className={styles.buttonCssChange}>{showusername.username} </button>

                  <a href='/'>
                    <button onClickCapture={logout} className={styles.buttonCssChange}>خروج </button>

                  </a>
                  </>}
              <Header />

            </div>

          </div>

          <div />
        </div>
        : <div className={styles.divheaderChange}>
          <div className={styles.headerCss}>
            <div>
              <img src={img} className={styles.logoCssChange} />
              <span className={styles.headerfontChange}>تریپنو</span>
            </div>

            <div>
              <span className={styles.numberfontChange}>021-41502</span>
              {!usertoken || usertoken == 'undefined'
                ? <>
                  <a href='login'>
                    <button className={styles.buttonCssChange1}>ورود/ثبت نام</button>
                  </a>
                  <button onClickCapture={logout} className={styles.buttonCssChange1}>خروج </button>

                </>

                : <>
                  <button className={styles.buttonCssChange1}>{showusername.username} </button>

                  <a href='/'>
                    <button onClickCapture={logout} className={styles.buttonCssChange1}>خروج </button>

                  </a>
                </>}
              <Header
                userUsername={showusername.username}
              />
            </div>

          </div>

          <div />
        </div>}

    </>
  )
}

export default HeaderLanding

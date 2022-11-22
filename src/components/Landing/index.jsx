import React, { useState, useCallback } from 'react'
import Search from './Search/Search'
import Footer from './Footer/Footer'
import styles from '../../assets/styles/Search.module.css'
import HeaderLanding from './Navbar/HeaderLanding'
import HotelQuestion from '../Question/HotelQuestion'
import AirplaneQuestion from '../Question/AirplaneQuestion'
import TrainQuestion from '../Question/TrainQuestion'
import AirplaneFast from './FastSearch/AirplaneFast'
import HotelFast from './FastSearch/HotelFast'
import TrainFast from './FastSearch/TrainFast'
import Necessary from './Necessary/Necessary'
import SuggestionList from './Suggestion/SuggestionList'
import { AUTH_TOKEN, USER_ID } from '../../constants/auth'

const Landing = () => {
  const [showActiveTab, setActiveTab] = useState([])

  const userid = window.localStorage.getItem(USER_ID)
  const usertoken = window.localStorage.getItem(AUTH_TOKEN)
  // console.log(userid,usertoken)

  const handleTab = useCallback((tab) => {
    setActiveTab(tab)
  }, [])
  return (
    <div style={{ backgroundColor: '#92939211' }}>
      {(() => {
        switch (showActiveTab) {
          case '1':
            return (
              <div className={styles.divhotelCss}>
                <HeaderLanding />
                <Search
                  selectTab={handleTab}
                />

              </div>
            )
          case '2':
            return (
              <div className={styles.divairplaneCss}>
                <HeaderLanding />
                <Search
                  selectTab={handleTab}
                />

              </div>
            )
          case '3':
            return (
              <div className={styles.divtrainCss}>
                <HeaderLanding />
                <Search
                  selectTab={handleTab}
                />

              </div>
            )
          case '4':
            return (
              <div className={styles.divbusCss}>
                <HeaderLanding />
                <Search
                  selectTab={handleTab}
                />

              </div>
            )
          default:
            return (
              <div className={styles.divhotelCss}>
                <HeaderLanding />
                <Search
                  selectTab={handleTab}
                />

              </div>
            )
        }
      })()}
      {(() => {
        switch (showActiveTab) {
          case '1':
            return (
              <div>
                <HotelFast />

              </div>
            )
          case '2':
            return (
              <div>
                <AirplaneFast />

              </div>
            )
          case '3':
            return (
              <div>
                <TrainFast />

              </div>
            )

          default:
            return (
              null
            )
        }
      })()}
      <Necessary />

      {(() => {
        switch (showActiveTab) {
          case '1':
            return (
              <div>
                <HotelQuestion />

              </div>
            )
          case '2':
            return (
              <div>
                <AirplaneQuestion />

              </div>
            )
          case '3':
            return (
              <div>
                <TrainQuestion />

              </div>
            )

          default:
            return (
              null
            )
        }
      })()}

<SuggestionList/>

      <div style={{ marginTop: '20px', backgroundColor: 'white' }}>
        <Footer />
      </div>

    </div>
  )
}

export default Landing

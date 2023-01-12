import React, { useState, useCallback, useEffect } from 'react'

import styles from '../../../assets/styles/SuggestionList.module.css'

const SuggestionList = () => {
  const [flightName, setflightName] = useState()
  const handleNameChange = (e) => {
    setflightName(e.target.value)
    window.location.href = '/resultfastairplane'
  }

  const [trainName, setTrainName] = useState()
  const handleTrainNameChange = (e) => {
    setTrainName(e.target.value)
    window.location.href = '/resultfasttrain'
  }

  const [cityName, setCityName] = useState()
  const handleHotelCityChange = (e) => {
    setCityName(e.target.value)
    window.location.href = '/resultfasthotel'
  }

  const [busName, setBusName] = useState()
  const handleBusNameChange = (e) => {
    setBusName(e.target.value)
    window.location.href = '/resultfastbus'
  }

  useEffect(() => {
    { window.localStorage.setItem('FlightOriginName', flightName)
      window.localStorage.setItem('TrainOriginName', trainName)
      window.localStorage.setItem('HotelCityName', cityName)
      window.localStorage.setItem('BusOriginName', busName)

    }
  }, [flightName, trainName, cityName, busName])

  console.log(trainName, ';;;')

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <span className={styles.spanHeader}>
            رزرو هتل
          </span>
          <button
            value='تهران'
            onClick={handleHotelCityChange}
            className={styles.spanItem}
          >
            هتل  تهران
          </button>
          <button
            value='مشهد'
            onClick={handleHotelCityChange}
            className={styles.spanItem}
          >
            هتل  مشهد
          </button>
          <button
            value='یزد'
            onClick={handleHotelCityChange}
            className={styles.spanItem}
          >
            هتل  یزد
          </button>
          <button
            value='تبریز'
            onClick={handleHotelCityChange}
            className={styles.spanItem}
          >
            هتل تبریز
          </button>
          <button
            value='کیش'
            onClick={handleHotelCityChange}
            className={styles.spanItem}
          >
            هتل کیش
          </button>
          <button
            value='مازندران'
            onClick={handleHotelCityChange}
            className={styles.spanItem}
          >
            هتل مازندران
          </button>
        </div>

        <div className={styles.contentItem}>
          <span className={styles.spanHeader}>
            بلیط هواپیما
          </span>
          <button
            value='تهران'
            onClick={handleNameChange}
            className={styles.spanItem}
          >
            بلیط هواپیما تهران
          </button>

          <button
            value='مشهد'
            onClick={handleNameChange}
            className={styles.spanItem}
          >
            بلیط هواپیما مشهد
          </button>
          <button
            value='اصفهان'
            onClick={handleNameChange}
            className={styles.spanItem}
          >
            بلیط هواپیما اصفهان
          </button>
          <button
            value='تبریز'
            onClick={handleNameChange}
            className={styles.spanItem}
          >
            بلیط هواپیما تبریز
          </button>
          <button
            value='کیش'
            onClick={handleNameChange}
            className={styles.spanItem}
          >
            بلیط هواپیما کیش
          </button>
          <button
            value='خوزستان'
            onClick={handleNameChange}
            className={styles.spanItem}
          >
            بلیط هواپیما خوزستان
          </button>
        </div>

        <div className={styles.contentItem}>
          <span className={styles.spanHeader}>
            بلیط قطار
          </span>
          <button
            value='تهران'
            onClick={handleTrainNameChange}
            className={styles.spanItem}
          >
            بلیط قطار تهران
          </button>

          <button
            value='مشهد'
            onClick={handleTrainNameChange}
            className={styles.spanItem}
          >
            بلیط قطار مشهد
          </button>
          <button
            value='اصفهان'
            onClick={handleTrainNameChange}
            className={styles.spanItem}
          >
            بلیط قطار اصفهان
          </button>
          <button
            value='تبریز'
            onClick={handleTrainNameChange}
            className={styles.spanItem}
          >
            بلیط قطار تبریز
          </button>
          <button
            value='زنجان'
            onClick={handleTrainNameChange}
            className={styles.spanItem}
          >
            بلیط قطار زنجان
          </button>
          <button
            value='خوزستان'
            onClick={handleTrainNameChange}
            className={styles.spanItem}
          >
            بلیط قطار خوزستان
          </button>
        </div>

        <div className={styles.contentItem}>
          <span className={styles.spanHeader}>
            بلیط اتوبوس
          </span>
          <button
            value='تهران'
            onClick={handleBusNameChange}
            className={styles.spanItem}
          >
            بلیط اتوبوس تهران
          </button>

          <button
            value='مشهد'
            onClick={handleBusNameChange}
            className={styles.spanItem}
          >
            بلیط اتوبوس مشهد
          </button>
          <button
            value='اصفهان'
            onClick={handleBusNameChange}
            className={styles.spanItem}
          >
            بلیط اتوبوس اصفهان
          </button>
          <button
            value='تبریز'
            onClick={handleBusNameChange}
            className={styles.spanItem}
          >
            بلیط اتوبوس تبریز
          </button>
          <button
            value='زنجان'
            onClick={handleBusNameChange}
            className={styles.spanItem}
          >
            بلیط اتوبوس زنجان
          </button>
          <button
            value='خوزستان'
            onClick={handleBusNameChange}
            className={styles.spanItem}
          >
            بلیط اتوبوس خوزستان
          </button>
        </div>

      </div>
    </>
  )
}

export default SuggestionList

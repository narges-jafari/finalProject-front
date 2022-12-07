import React, { useState } from 'react'
import styles from '../../../assets/styles/TrainContent.module.css'
import 'react-toastify/dist/ReactToastify.css'

const SeatNumber = (props) => {
  // STATES

  const [number, setNumber] = useState('')



  return (
    <>
      <div className={styles.content}>
            <label>     شماره صندلی </label>
            <input
              value={number}
              onChange={e => setNumber(e.target.value)}
              className={styles.inputcss}
            />
          </div>
        <button>افزودن</button>
    

    </>
  )
}

export default SeatNumber

import React from 'react'
import styles from '../../../assets/styles/AirplaneResult.module.css'

const Header = (props) => {
  const originName = window.localStorage.getItem('BusOriginName').replace(/"/g, '')

  return (
    <>
      <div className={styles.headerCss}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
          تمامی بلیط ها از مبدا : {originName}
          </div>
         
          <div className={styles.headerItem1}>
            <a href='/'>
              <button>
                تغییر جستجو
              </button>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header

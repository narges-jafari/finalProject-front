import React, { useState } from 'react'
import { Modal } from 'reactstrap'
import styles from '../../../assets/styles/AirplaneList.module.css'

const Info = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={() => {
        props.setIsOpen()
      }}
      centered
      size='lg'
    >
      <div className='modal-header py-2'>
        <h6 className='modal-title mt-0'>    توضیحات تکمیلی </h6>
        <button
          type='button'
          onClick={() => {
            props.setIsOpen(false)
          }}
          className='close p-0 px-3 rounded-3 btn btn-sm btn-danger'
          data-dismiss='modal'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body' style={{ color: 'red' }}>
        <div className={styles.modalbodycss}>
          <p>
            dddddddddddddddddddddddddddddddddddddddd
          </p>

        </div>

      </div>
      <div className='modal-footer d-flex justify-content-center border-0'>
        <button
          type='button'
          className='btn btn-primary  text-dark border border-1  py-1'
          onClick={() => {
            props.setIsOpen(false)
          }}
          data-dismiss='modal'
        >
          بستن
        </button>

      </div>
    </Modal>
  )
}

export default Info

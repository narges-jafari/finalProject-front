import React, { useState } from 'react'
import { Modal } from 'reactstrap'

const Passenger = (props) => {
  const [numbr1, setNumber1] = useState()
  const [numbr2, setNumber2] = useState()
  const [numbr3, setNumber3] = useState()
  const [numbr4, setNumber4] = useState()


  return (
    <Modal
      isOpen={props.isOpen}
      toggle={() => {
        props.setIsOpen()
      }}
      centered
      size='sm'
    >
      <div className='modal-header py-2'>
        <h6 className='modal-title mt-0'>انتخاب مسافران</h6>
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
      <div className='modal-body'>
        <div className='d-flex flex-column text-dark fw-bold text-center  '>
          <div className='d-flex flex-row my-2 text-dark justify-content-between text-center'>

            <span className='my-2'> بزرگسال(بالای 12سال)</span>
            <input
              type='number'
              className='border border-1 border-primary w-25 rounded-3 ms-2 btn btn-sm px-1 py-1'
              defaultValue={1}
              value={numbr1}
              onChange={e => setNumber1(e.target.value)}
            />
          </div>
          <div className='d-flex flex-row my-2 text-dark justify-content-between text-center'>
            <span className='my-2'> کودک(۲ تا ۱۲ سال)</span>
            <input
              type='number'
              className='border border-1 border-primary w-25 rounded-3 ms-2 btn btn-sm px-1 py-1'
              defaultValue={0}
              value={numbr2}
              onChange={e => { setNumber2(e.target.value) }}

            />
          </div>
          <hr/>
          <span className='text-center'>انتخاب اتاق</span>
          <div className='d-flex flex-row my-2 text-dark justify-content-between text-center'>
            <span className='my-2'>  اتاق تک تختخوابه</span>

            <input
              type='number'
              className='border border-1 border-primary w-25 rounded-3 ms-2 btn btn-sm px-1 py-1'
              defaultValue={0}
              value={numbr3}
              onChange={e => { setNumber3(e.target.value) }}
            />
          </div>
          <div className='d-flex flex-row my-2 text-dark justify-content-between text-center'>
            <span className='my-2'>  اتاق  بیشتر از یک تخت</span>

            <input
              type='number'
              className='border border-1 border-primary w-25 rounded-3 ms-2 btn btn-sm px-1 py-1'
              defaultValue={0}
              value={numbr4}
              onChange={e => { setNumber4(e.target.value) }}
            />
          </div>

        </div>
      </div>
      <div className='modal-footer d-flex justify-content-center border-0'>
        <button
          type='button'
          className='btn bg-white text-dark border border-1 border-primary py-1'
          onClick={() => {
            props.setIsOpen(false)
          }}
          data-dismiss='modal'
        >
          Cancel
        </button>
        <button type='button' className='btn btn-primary py-1'>
          Save changes
        </button>
      </div>
    </Modal>
  )
}

export default Passenger

import { Modal } from 'reactstrap'

const NotesModal = (props) => {
  return (
    <>
    <Modal
      size='sm'
      isOpen={props.isOpen}
      toggle={() => {
        props.setIsOpen()
      }}
    >
      <div className='modal-header py-2 border-0'>
        <h6 className='modal-title mt-0' id='mySmallModalLabel'>
          نکات مهم 
        </h6>
        <button
          onClick={() => {
            props.setIsOpen(false)
          }}
          type='button'
          className='close'
          data-dismiss='modal'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body'>
        <div className='ms-3'>
          <label htmlFor='RSI'>llllllll </label>

          <input
            id='RSI'
            type='number'
            className='border border-2 border-primary w-25 rounded-3 py-1 ms-2'
            // value={buyNumber}
            // onChange={e => {
            //   setBuyNumber(e.target.value)
            // }}
          />
        </div>
        <div className='modal-footer d-flex justify-content-end border-0 mt-3'>
          <button
            type='button'
            className='btn bg-white border border-secondary px-3'
            onClick={() => props.setIsOpen(false)}
          >
            Cancle
          </button>
          <button
            type='button'
            // onClick={() => { setBuySubmit([indicatorname, buyNumber]); props.customeStrategybuy([indicatorname, buyNumber]); props.setIsOpen(false) }}
            className='btn btn-primary w-25'
          >
            Ok
          </button>
        </div>
      </div>
    </Modal>
    </>

  )
}

export default NotesModal

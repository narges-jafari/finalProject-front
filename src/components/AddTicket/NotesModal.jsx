import { Modal } from 'reactstrap'
import SeatNumber from './airplane/SeatNumber'
import { FLIGHT_CAPACITY } from '../../constants/auth'
import img from '../../assets/img/bg/Capturewee.JPG'

const NotesModal = (props) => {
  const capacityf = window.localStorage.getItem(FLIGHT_CAPACITY)

  const rows = []

  for (let i = 0; i < capacityf; i++) {
    rows.push(<SeatNumber key={i} />)
  }

  return (
    <>
      <Modal
        size='sm'
        isOpen={props.isOpen}
        className=' '
        toggle={() => {
          props.setIsOpen()
        }}
      >
        <div
          className='modal-header    py-2 border-0'
          style={{ backgroundColor: '#CECEF6' }}
        >

          <h6 className='modal-title mt-0' style={{ fontFamily: 'Vazir' }}>
            اضافه کردن  صندلی
          </h6>
          <i
            className='fa fa-close btn-sm rounded-circle  btn-light text-danger  my-2 py-2  fa-lg mx-2 '
            onClick={() => {
              props.setIsOpen(false)
            }}
          />
        </div>

        <div className='modal-body'>

          {rows}

        </div>
        <div
          className=''
          style={{ backgroundColor: '#A9E2F3' }}
        >
          <img src={img} style={{ width: '100%', height: '50px' }} />

        </div>
      </Modal>
    </>

  )
}

export default NotesModal

import { Modal } from 'reactstrap'
import RoomInfo from './hotel/RoomInfo'
import img from '../../assets/img/bg/Capturewee.JPG'

const NotesModal = (props) => {
  return (
    <>
      <Modal
        size='md'
        isOpen={props.isOpen}
        className=' border-4'
        toggle={() => {
          props.setIsOpen()
        }}
      >
        <div
          className='modal-header    py-2 border-0'
          style={{ backgroundColor: '#CECEF6' }}
        >

          <h6 className='modal-title mt-0' style={{ fontFamily: 'Vazir' }}>
            اضافه کردن  اتاق
          </h6>
          <i
            className='fa fa-close  rounded-circle   text-danger  my-2 py-2  fa-lg '
            onClick={() => {
              props.setIsOpen(false)
            }}
          />
        </div>

        <div className='modal-body'>

          <RoomInfo />

        </div>
        <div
          className=''
          style={{ backgroundColor: '#A9E2F3' }}
        >
          <img src={img} style={{ width: '100%', height: '70px' }} />

        </div>
      </Modal>
    </>

  )
}

export default NotesModal

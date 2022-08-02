import React from 'react'
// import ReactTooltip from 'react-tooltip'
import { Table } from 'reactstrap'
// import styles from '../../../assets/styles/IndicatorTable.module.css'
// import IndicatorModal from './IndicatorModal.jsx'
// import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { Modal } from 'reactstrap'
import HelpTable from './HelpTable'

const setCellColor = (cell) => {
  const cellValue = parseFloat(cell)
  if (cellValue < 2500000) {
    return { backgroundColor: '#34C38F' }
  } else if ((cellValue > 2500000) & (cellValue < 3500000)) {
    return { backgroundColor: '#84D4B7' }
  } else if ((cellValue > 3500000) & (cellValue < 6500000)) {
    return { backgroundColor: 'rgba(128, 128, 128, 0.148)' }
  } else if (cellValue > 7500000) {
    return { backgroundColor: '#F46A6A' }
  } else if ((cellValue > 6500000) & (cellValue < 7500000)) {
    return { backgroundColor: '#FFA2A2' }
  }
}
const PriceTable = (props) => {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        toggle={() => {
          props.setIsOpen()
        }}
        centered
        size='lg-sm'
      >
        <div className='modal-header py-2'>
          <h6 className='modal-title mt-0'> مشاهده قیمت ها </h6>
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
          <div>
            <HelpTable />
          </div>
          <div className='d-flex flex-column'>
            <div className='d-flex flex-row justify-content-end'>
              {/* <ReactHTMLTableToExcel
          id='test-table-xls-button'
          className='btn btn-outline-primary bx bxs-download m-1 fa-lg p-1'
          table='indicator-table'
          filename='test'
          sheet='tablexls'
          buttonText=''
          data-tip='Download Data'
          data-place='bottom'
        /> */}
              {/* <button
          className='btn btn-outline-primary  m-1 mdi mdi-rotate-3d-variant fa-lg p-1'
          data-tip='Refresh Data'
          data-place='bottom'
        /> */}
              {/* <ReactTooltip /> */}
            </div>
            <div
              className='table-responsive rounded mt-3'
            >
              <Table id='indicator-table' bordered>
                <thead>
                  <tr>
                    <th> نام شرکت هواپیمایی
                    </th>
                    <th>
                      قیمت
                    </th>
                    <th>
                      ساعت حرکت
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>ایران ایرتور</td>
                    <td style={setCellColor(1150000)}>1450000</td>
                    <td>12:43بعد ازظهر</td>
                  </tr>
                  <tr>

                    <td>زاگرس </td>
                    <td style={setCellColor(6100000)}>4450000</td>
                    <td>12:45بعد ازظهر</td>
                  </tr>

                  <tr>
                    <td>تابان</td>
                    <td style={setCellColor(7600000)}>1200000</td>
                    <td>5:10قبل از ظهر</td>
                  </tr>
                  <tr>
                    <td>کیش</td>
                    <td style={setCellColor(6100000)}>5670000</td>
                    <td>7:40قبل از ظهر</td>
                  </tr>
                </tbody>
              </Table>
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
            بستن
          </button>

        </div>

      </Modal>

    </>
  )
}

export default PriceTable

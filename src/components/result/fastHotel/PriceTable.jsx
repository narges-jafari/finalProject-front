import React from 'react'
import { Table, Modal } from 'reactstrap'
import HelpTable from './HelpTable'

const setCellColor = (cell) => {
  // FUNCTION FOR SET COLORS
  const cellValue = parseFloat(cell)
  if (cellValue < 600000) {
    return { backgroundColor: '#34C38F' }
  } else if ((cellValue > 600000) & (cellValue < 1500000)) {
    return { backgroundColor: '#84D4B7' }
  } else if ((cellValue > 1500000) & (cellValue < 2500000)) {
    return { backgroundColor: 'rgba(128, 128, 128, 0.148)' }
  } else if (cellValue > 3600000) {
    return { backgroundColor: '#F46A6A' }
  } else if ((cellValue > 2500000) & (cellValue < 3600000)) {
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
          <h6 className='modal-title mt-0'>   مقایسه قیمت‌ها </h6>
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
            <div
              className='table-responsive rounded mt-3'
            >
              <Table id='indicator-table' bordered style={{ fontFamily: 'Yekan' }}>
                <thead>
                  <tr>
                    <th> نام  هتل
                    </th>
                    <th>
                      قیمت
                    </th>
                    <th>
                      از تاریخ
                    </th>
                    <th>
                      تا تاریخ
                    </th>

                  </tr>
                </thead>
                {(() => {
                  if (props.priceInfo.length === 0 && props.starInfo.length === 0) {
                    return (
                      <>
                        {props.showInfo.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>

                                <td>

                                  {item.name}
                                </td>
                                <td style={setCellColor(item.price)}>{item.price}</td>
                                <td>{item.startDate} </td>
                                <td>{item.endDate} </td>

                              </tr>

                            </tbody>
                          )
                        })}
                      </>
                    )
                  } else if (props.priceInfo.length !== 0 && props.starInfo.length === 0) {
                    return (
                      <>
                        {props.priceInfo.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>

                                <td>

                                  {item.name}
                                </td>
                                <td style={setCellColor(item.price)}>{item.price}</td>
                                <td>{item.startDate} </td>
                                <td>{item.endDate} </td>

                              </tr>

                            </tbody>
                          )
                        })}
                      </>
                    )
                  } else if (props.priceInfo.length === 0 && props.starInfo.length !== 0) {
                    return (
                      <>
                        {props.starInfo.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>

                                <td>

                                  {item.name}
                                </td>
                                <td style={setCellColor(item.price)}>{item.price}</td>
                                <td>{item.startDate} </td>
                                <td>{item.endDate} </td>

                              </tr>

                            </tbody>
                          )
                        })}
                      </>
                    )
                  } else {
                    return null
                  }
                })()}

              </Table>
            </div>
          </div>
        </div>
        <div className='modal-footer d-flex justify-content-center border-0' />

      </Modal>

    </>
  )
}

export default PriceTable

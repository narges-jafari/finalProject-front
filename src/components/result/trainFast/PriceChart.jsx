import React from 'react'
import { Table, Modal } from 'reactstrap'

import HelpTable from './HelpTable'
import logo1 from '../../../assets/img/bg/tlogo.JPG'
import logo2 from '../../../assets/img/bg/tlogo1.JPG'
import logo3 from '../../../assets/img/bg/tlogo2.JPG'
import logo4 from '../../../assets/img/bg/tlogo3.JPG'
import logo5 from '../../../assets/img/bg/tlogo4.JPG'
import logo6 from '../../../assets/img/bg/tlogo5.JPG'

// FUNCTION FOR SET COLORS
const setCellColor = (cell) => {
  const cellValue = parseFloat(cell)
  if (cellValue < 150000) {
    return { backgroundColor: '#34C38F' }
  } else if ((cellValue > 150000) & (cellValue < 300000)) {
    return { backgroundColor: '#84D4B7' }
  } else if ((cellValue > 300000) & (cellValue < 900000)) {
    return { backgroundColor: 'rgba(128, 128, 128, 0.148)' }
  } else if (cellValue > 1500000) {
    return { backgroundColor: '#F46A6A' }
  } else if ((cellValue > 900000) & (cellValue < 1500000)) {
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
                    <th> نام شرکت ریلی
                    </th>
                    <th>
                      قیمت
                    </th>
                    <th>
                      ساعت حرکت
                    </th>

                  </tr>
                </thead>
                {(() => {
                  if (props.priceInfo.length === 0 && props.nameInfo.length === 0) {
                    return (
                      <>
                        {props.showInfo.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>

                                <td>

                                  {(() => {
                                    if (item.railCompany.includes('رجا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo1} />
                                          {item.railCompany}
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('فدک')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo2} />
                                          {item.railCompany}

                                        </div>

                                      )
                                    } else if (item.railCompany.includes('ریل ترابر سبا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo3} />
                                          {item.railCompany}

                                        </div>

                                      )
                                    } else if (item.railCompany.includes('ریل سیر کوثر')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo4} />
                                          {item.railCompany}

                                        </div>

                                      )
                                    } else if (item.railCompany.includes('نورالرضا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo5} />
                                          {item.railCompany}

                                        </div>

                                      )
                                    } else if (item.railCompany.includes('بن ریل')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo6} />
                                          {item.railCompany}

                                        </div>

                                      )
                                    } else {
                                      return null
                                    }
                                  })()}
                                </td>
                                <td style={setCellColor(item.price)}>{item.price}</td>
                                <td>{item.departureTime} </td>
                              </tr>

                            </tbody>
                          )
                        })}
                      </>
                    )
                  } else if (props.priceInfo.length !== 0 && props.nameInfo.length === 0) {
                    return (
                      <>
                        {props.priceInfo.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>

                                <td>

                                  {(() => {
                                    if (item.railCompany.includes('رجا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo1} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('فدک')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo2} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('ریل ترابر سبا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo3} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('ریل سیر کوثر')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo4} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('نورالرضا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo5} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('بن ریل')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo6} />
                                        </div>

                                      )
                                    } else {
                                      return null
                                    }
                                  })()}
                                </td>
                                <td style={setCellColor(item.price)}>{item.price}</td>
                                <td>{item.departureTime} </td>
                              </tr>

                            </tbody>
                          )
                        })}
                      </>
                    )
                  } else if (props.priceInfo.length === 0 && props.nameInfo.length !== 0) {
                    return (
                      <>
                        {props.nameInfo.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr>

                                <td>

                                  {(() => {
                                    if (item.railCompany.includes('رجا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo1} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('فدک')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo2} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('ریل ترابر سبا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo3} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('ریل سیر کوثر')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo4} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('نورالرضا')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo5} />
                                        </div>

                                      )
                                    } else if (item.railCompany.includes('بن ریل')) {
                                      return (
                                        <div>
                                          <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logo6} />
                                        </div>

                                      )
                                    } else {
                                      return null
                                    }
                                  })()}
                                </td>
                                <td style={setCellColor(item.price)}>{item.price}</td>
                                <td>{item.departureTime} </td>
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

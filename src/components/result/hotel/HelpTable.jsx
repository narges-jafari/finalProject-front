import React from 'react'

const HelpTable = () => {
  return (
    <>

      <div className='accordion-item border-0 mb-2'>
        <i className='fa fa-question-circle-o px-1 mx-1 my-2'><span className='mx-1'>راهنمای رنگ ها</span></i>
        <div className='d-flex flex-wrap  flex-row mx-2'>
          <div
            className='text-center '
            style={{ background: ' #34C38F', width: '90px', height: '30px' }}
          >خیلی پایین
          </div>
          <div
            className='text-center '
            style={{ background: ' #84D4B7', width: '90px', height: '30px' }}
          >پایین
          </div>
          <div
            className='text-center  '
            style={{ background: '#80808026', width: '90px', height: '30px' }}
          >معمولی
          </div>
          <div
            className='text-center '
            style={{ background: '#FFA2A2', width: '90px', height: '30px' }}
          >بالا
          </div>
          <div
            className='text-center '
            style={{ background: '#F46A6A', width: '90px', height: '30px' }}
          >خیلی بالا
          </div>
        </div>

      </div>
    </>
  )
}

export default HelpTable

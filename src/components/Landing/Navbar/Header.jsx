import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../../../assets/styles/HeaderLanding.module.css'

const Header =() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i className='fa fa-bars fa-lg mx-2 text-center py-0 text-secondary   '  onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >
          <div className=' my-4   ' >
<span className={styles.numberfont1}>021-41502</span>
<button className={styles.buttonCss1}>ورود/ثبت نام</button>



</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'#5e5e911f'}}>
          <div className='d-flex flex-column '>
            <span className='my-1'>
              <i className='fa fa-user mx-2 '/>صفحه اصلی
            </span>
            <span className='my-1'>
              <i className='fa fa-user mx-2 '/>اضافه کردن بلیط
            </span>
            <span className='my-1'>
              <i className='fa fa-user mx-2 '/>صفحه کاربران
            </span>
            <span className='my-1'>
              <i className='fa fa-user mx-2 '/>درباره ی تریپنو
            </span>

          </div>
     
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header
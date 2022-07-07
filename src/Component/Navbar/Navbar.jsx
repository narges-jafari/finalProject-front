import React,{useState,useEffect} from 'react'
import img from '../../assets/img/landing/logo.PNG'
import styles from '../../assets/styles/css/Navbar.module.css'


const Navbar =() =>{
    const today = new Date().toLocaleDateString('fa-IR');
    // console.log('mmmm',today);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
new Date().toLocaleDateString('fa-IR', options);
const [dateState, setDateState] = useState(new Date());
useEffect(() => {
       setInterval(() => setDateState(new Date()), 30000);
}, []);
    return (
        <>
   <div className='d-flex flex-row flex-wrap justify-content-between'>
    <div className='d-flex flex-row '>
    <div className='mx-3'>
        <img src={img} className='rounded-circle' style={{width:'100px',height:'100px',padding:'0px'}} />
        </div>
        <div className='my-4'>
            تریپنو
        </div>
  </div>
   <div className='d-flex flex-column mx-5 my-2'>
   <div  className='d-flex flex-row'>
      <i className='fa fa-calendar mx-2 my-2 fa-lg'/>
      <p>
              {' '}
              {dateState.toLocaleDateString('fa-IR', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
    
    </div>
    <div  className='d-flex flex-row'>
      <i className='fa fa-clock-o mx-2 my-2 fa-lg'/>
    <p className=''>
            {dateState.toLocaleString('fa-IR', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            
    </p>
    
    </div>


   </div>
   </div>
        </>
      )

}

export default Navbar

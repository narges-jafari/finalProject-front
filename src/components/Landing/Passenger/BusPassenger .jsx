import React, { useState } from 'react'

import styles from '../../../assets/styles/Passenger.module.css'


const BusPassenger =( props) =>{

    const [num,setNum] =useState(0)
    const [num1,setNum1] =useState(0)
    const [num2,setNum2] =useState(0)



    return(
        <>
        
        <div className='d-flex flex-column '>
            <div className='d-flex flex-row flex-wrap my-2 justify-content-between'>
                <span className={styles.fontCss} >بزرگسال</span>
                <div className='d-flex flex-row flex-wrap  justify-content-between mx-2'>
                <i className='fa fa-plus btn btn-primary   fa-lg mx-2 ' onClick={e=>{setNum(num+1) ; props.AllPassenger(num+num1+num2+1) }} style={{width:'25px',height:'25px',borderRadius:'50%',textAlign:'center',padding:'7px 0px 0px 0px',color:'white'}}/>
                <span style={{fontFamily:'Yekan',fontWeight:'bold',fontSize:'16px' }}>{num}</span>
                <i className='fa fa-minus btn btn-primary  fa-lg mx-2 ' onClick={e=>{setNum(num-1); props.AllPassenger(num+num1+num2-1)}} style={{width:'25px',height:'25px',borderRadius:'50%',textAlign:'center',padding:'7px 0px 0px 0px',color:'white'}}/>
                </div>

            </div>
            <span className={styles.hidefont}>  12 سال به بالا  </span>

            <div className='d-flex flex-row flex-wrap justify-content-between'>

                <span className={styles.fontCss} >کودک</span>
                <div className='d-flex flex-row flex-wrap my-2  justify-content-between mx-2'>
                <i className='fa fa-plus btn btn-primary   fa-lg mx-2 ' onClick={e=>{setNum1(num1+1); props.AllPassenger(num+num1+num2+1)}} style={{width:'25px',height:'25px',borderRadius:'50%',textAlign:'center',padding:'7px 0px 0px 0px',color:'white'}}/>
                <span style={{fontFamily:'Yekan',fontWeight:'bold',fontSize:'16px' }}>{num1}</span>
                <i className='fa fa-minus btn btn-primary  fa-lg mx-2 ' onClick={e=>{setNum1(num1-1); props.AllPassenger(num+num1+num2-1)}} style={{width:'25px',height:'25px',borderRadius:'50%',textAlign:'center',padding:'7px 0px 0px 0px',color:'white'}}/>
                </div>
                </div>
                <span className={styles.hidefont}>   2 تا 12 سال   </span>

                <div className='d-flex flex-row flex-wrap justify-content-between'>

                <span className={styles.fontCss} >نوزاد</span>
                <div className='d-flex flex-row flex-wrap my-2  justify-content-between mx-2'>
                <i className='fa fa-plus btn btn-primary   fa-lg mx-2 ' onClick={e=>{setNum2(num2+1); props.AllPassenger(num+num1+num2+1)}} style={{width:'25px',height:'25px',borderRadius:'50%',textAlign:'center',padding:'7px 0px 0px 0px',color:'white'}}/>
                <span style={{fontFamily:'Yekan',fontWeight:'bold',fontSize:'16px' }}>{num2}</span>
                <i className='fa fa-minus btn btn-primary  fa-lg mx-2 ' onClick={e=>{setNum2(num2-1); props.AllPassenger(num+num1+num2-1)}} style={{width:'25px',height:'25px',borderRadius:'50%',textAlign:'center',padding:'7px 0px 0px 0px',color:'white'}}/>
                </div>
                </div>
                <span className={styles.hidefont}>  تا 2 سال    </span>
        </div>
        </>
        
        )
}

export default BusPassenger
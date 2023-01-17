import React, { useState } from 'react'
import styles from '../../assets/styles/Dashboard.module.css'
import AllTicket from './allTicket/AllTicket'
import ShowAllResult from './airplane/index'
import ShowAllResultTrain from './train/index'
import ShowAllResultBus from './bus/index'
import ShowAllResultHotel from './hotel/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import AllUsers from './users/AllUsers'



const Dashboard = () => {
//states
    const [name,setName]=useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
      }
    const day = new Date().toLocaleString('fa-IR', { day: '2-digit' })
    const month = new Date().toLocaleString('fa-IR', { month: '2-digit' })
    const date = '۱۴۰۱' + '/' + month + '/' + day
    const Num = date.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    const dayOfWeekName = new Date(Num).toLocaleString(
        'fa-IR', { weekday: 'long' })
      const newDay = new Date(Num).getDate().toLocaleString('fa-IR', { day: '2-digit' })
    const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ]
  const month1 = new Date(Num)
  const monthName = monthNames[month1.getMonth()]
  return (
 <>
 <div className={styles.content}>

   <div className={styles.dashboardContent}>
 
   <div className={styles.dashboardContentItem}>
       <i style={{color:'#34495E '}} className='fa fa-shopping-cart  mt-1 fa-lg'/>
       <button  
         value='بلیط‌ها'
         onClick={handleNameChange}
       >بلیط‌ها  </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i style={{color:'#34495E '}} className='fa fa-users  mt-1 fa-lg'/>

   <button 
    value=' کاربران'
    onClick={handleNameChange}
   >کاربران </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i style={{color:'#34495E '}} className='fa fa-hotel  mt-1 fa-lg'/>

   <button
     value=' هتل '
     onClick={handleNameChange}
   >   هتل ها</button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i style={{color:'#34495E '}} className='fa fa-plane  mt-1 fa-lg'/>
   <button
     value='  هواپیما'
     onClick={handleNameChange}
   >      هواپیما  </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i style={{color:'#34495E '}} className='fa fa-train  mt-1 fa-lg'/>
   <button
     value='  قطار'
     onClick={handleNameChange}
   >      قطار  </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i style={{color:'#34495E '}} className='fa fa-bus  mt-1 fa-lg'/>
   <button
     value='  اتوبوس'
     onClick={handleNameChange}
   >      اتوبوس  </button>
   </div>
   <div className={styles.dashboardContentItem1}>
   {dayOfWeekName + newDay + monthName}
   </div>
 
  
</div>

 <div className={styles.showContent}>
 {(() => {
    if(name ==='بلیط‌ها'){
        return (
            <AllTicket/>
        )
    }else if(name==='  هواپیما'){
        return (
            <ShowAllResult/>
        )
    }else if(name==='  قطار'){
      return (
          <ShowAllResultTrain/>
      )
  }else if(name===' کاربران'){
    return (
        <AllUsers/>
    )
}else if(name==='  اتوبوس'){
  return (
      <ShowAllResultBus/>
  )
}else if(name===' هتل '){
  return (
      <ShowAllResultHotel/>
  )
}else {
  return(
    <AllTicket/>

  )
}
        })()}
        
 </div>
 </div>
 </>
  )
}

export default Dashboard

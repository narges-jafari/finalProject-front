import React, { useState, useLayoutEffect ,useRef } from 'react'
import styles from '../../assets/styles/Dashboard.module.css'
import AllTicket from './allTicket/AllTicket'
import ShowAllResult from './airplane/index'
import ShowAllResultTrain from './train/index'
import ShowAllResultBus from './bus/index'
import ShowAllResultHotel from './hotel/index'



import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import HeaderLanding from '../Landing/Navbar/HeaderLanding';
import AllUsers from './users/AllUsers'



const Dashboard = () => {

  // useLayoutEffect(() => {
  //   console.log(div);
  //   const divAnimate = div.current.getBoundingClientRect().top;
  //   console.log(divAnimate);
  //   const onScroll = () => {
  //     if (divAnimate < window.scrollY) {
  //       console.log("ok");
  //       div.current.style.position = "fixed";
  //       div.current.style.top = -20;
  //       div.current.style.button = 0;

  //       div.current.style.right = 0;
  //     } else {
  //       div.current.style.position = "relatives";
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const [headerChange, setHeaderChange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setHeaderChange(true)
    } else {
      setHeaderChange(true)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

    const [name,setName]=useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
      }
      console.log(name)
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
       <i className='fa fa-shopping-cart text-primary mt-1 fa-lg'/>
       <button  
         value='بلیط های خریداری شده'
         onClick={handleNameChange}
       >بلیط های خریداری شده</button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i className='fa fa-users text-primary mt-1 fa-lg'/>

   <button 
    value=' کاربران'
    onClick={handleNameChange}
   >کاربران </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i className='fa fa-hotel text-primary mt-1 fa-lg'/>

   <button
     value=' هتل ها'
     onClick={handleNameChange}
   >   هتل ها</button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i className='fa fa-plane text-primary mt-1 fa-lg'/>
   <button
     value='  هواپیما'
     onClick={handleNameChange}
   >      هواپیما  </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i className='fa fa-train text-primary mt-1 fa-lg'/>
   <button
     value='  قطار'
     onClick={handleNameChange}
   >      قطار  </button>
   </div>
   <div className={styles.dashboardContentItem}>
   <i className='fa fa-bus text-primary mt-1 fa-lg'/>
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
    if(name ==='بلیط های خریداری شده'){
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
}else if(name===' هتل ها'){
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

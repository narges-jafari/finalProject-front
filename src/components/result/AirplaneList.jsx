import img from '../../assets/img/logo1.JPG'
import styles from '../../assets/styles/Filter.module.css'
import { FaBusAlt, FaSubway, FaHotel, FaPlane } from 'react-icons/fa'

const AirplaneList = () => {
    return(
      <>
      <div className={styles.content}>

       
      <div className={styles.contentItem} >
      <div className={styles.information}>
        <div className={styles.nameCss}>
        <img src={img} className={styles.piclogo} />
                    <span className=''>زاگرس</span>
                    <span  className={styles.name}>  سیستمی</span>
            <span  className={styles.name}>   اکونومی</span>
            <span className={styles.name}>boeinh737</span>

        </div>
        <div className={styles.nameCss}>
        <span className={styles.city}>خراسان رضوی</span>
              <span className={styles.time}>21:00</span>
              <span><FaPlane className={styles.picCss}/></span>
              <span className={styles.city}>تهران</span>
              <span className={styles.time}>12:00</span>
        </div>


      </div>
        <div className={styles.buyCss}>
        <span>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>انتخاب بلیط</button>


        </div>
        
      

       </div>

       <div className={styles.contentItem} >
      <div className={styles.information}>
        <div className={styles.nameCss}>
        <img src={img} className={styles.piclogo} />
                    <span className=''>زاگرس</span>
                    <span  className={styles.name}>  سیستمی</span>
            <span  className={styles.name}>   اکونومی</span>
            <span className={styles.name}>boeinh737</span>

        </div>
        <div className={styles.nameCss}>
        <span className={styles.city}>خراسان رضوی</span>
              <span className={styles.time}>21:00</span>
              <span><FaPlane className={styles.picCss}/></span>
              <span className={styles.city}>تهران</span>
              <span className={styles.time}>12:00</span>
        </div>


      </div>
        <div className={styles.buyCss}>
            <span>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>انتخاب بلیط</button>
            


        </div>
        
      

       </div>
       <div className={styles.contentItem} >
      <div className={styles.information}>
        <div className={styles.nameCss}>
        <img src={img} className={styles.piclogo} />
                    <span className=''>زاگرس</span>
                    <span  className={styles.name}>  سیستمی</span>
            <span  className={styles.name}>   اکونومی</span>
            <span className={styles.name}>boeinh737</span>

        </div>
        <div className={styles.nameCss}>
        <span className={styles.city}>خراسان رضوی</span>
              <span className={styles.time}>21:00</span>
              <span><FaPlane className={styles.picCss}/></span>
              <span className={styles.city}>تهران</span>
              <span className={styles.time}>12:00</span>
        </div>


      </div>
        <div className={styles.buyCss}>
        <span>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>انتخاب بلیط</button>


        </div>
        
      

       </div>
       <div className={styles.contentItem} >
      <div className={styles.information}>
        <div className={styles.nameCss}>
        <img src={img} className={styles.piclogo} />
                    <span className=''>زاگرس</span>
                    <span  className={styles.name}>  سیستمی</span>
            <span  className={styles.name}>   اکونومی</span>
            <span className={styles.name}>boeinh737</span>

        </div>
        <div className={styles.nameCss}>
        <span className={styles.city}>خراسان رضوی</span>
              <span className={styles.time}>21:00</span>
              <span><FaPlane className={styles.picCss}/></span>
              <span className={styles.city}>تهران</span>
              <span className={styles.time}>12:00</span>
        </div>


      </div>
        <div className={styles.buyCss}>
        <span>1230000ريال</span>
            <span>ظرفیت9نفر</span>
            <button className='btn btn-sm px-3 btn-danger mt-2'>انتخاب بلیط</button>


        </div>
        
      

       </div>
       
       

    </div>
      </>
        )

}

export default AirplaneList
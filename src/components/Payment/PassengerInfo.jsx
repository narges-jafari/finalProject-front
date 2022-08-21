import styles from '../../assets/styles/PassengerInfo.module.css'

const PassengerInfo = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 justify-content-lg-around  '>
        <div className={styles.content}>
          <div>مسافر اصلی</div>

          <div className={styles.contentItem}>
            <div className={styles.contentItem1}>
              <label> نام ونام خانوادگی </label>
              <input
                type='text '
                className={styles.inputCss}
              />
            </div>
            <div className={styles.contentItem1}>
              <label>تاریخ تولد</label>
              <input
                type='text '
                className={styles.inputCss}
              />

            </div>
            <div className={styles.contentItem1}>
              <label> کد ملی</label>
              <input
                type='text '
                className={styles.inputCss}
              />

            </div>

          </div>
        </div>

        <div className={styles.columncss}>
          <div className={styles.content1}>
            <div className='d-flex flex-row flex-wrap  my-2 text-danger justify-content-between'>
              <span>قیمت بلیط </span>
              <span>1200000 تومان</span>
            </div>
            <div className='d-flex flex-row flex-wrap text-success my-2 justify-content-between'>
              <span>مبلغ قابل پرداخت  </span>
              <span>1200000 تومان</span>
            </div>

          </div>
          <div className={styles.content1}>
            <div>
              <input
                type='checkbox'
                className='mx-4 my-4'
              />
              تمامی
              اطلاعات فوق را تایید می‌کنم
            </div>

          </div>
          <div className={styles.content1}>
            <button className='btn btn-success rounded-3 my-3'>
              پرداخت

            </button>
          </div>

        </div>

      </div>

    </>
  )
}

export default PassengerInfo

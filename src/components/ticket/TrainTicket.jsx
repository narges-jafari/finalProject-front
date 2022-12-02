import styles from '../../assets/styles/Ticket.module.css'
import img from '../../assets/img/barcode.JPG'
import logo from '../../assets/img/16.png'
import train from '../../assets/img/train2.png'

const TrainTicket = () => {
  return (
    <>
      <div>
        <div className={styles.content}>
          <div className={styles.ticketHeader}>
            <div>
              <span>
                کد رهگیری :{12345666}
              </span>
              <span>
                سریال بلیط :{111111}
              </span>

            </div>
            <div style={{ marginTop: '-4px' }}>
              <img src={train} />
            </div>
            <div style={{ marginTop: '-5px' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>تریپنو</span>
              <img src={logo} className={styles.logoCss} />

            </div>
          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>از ایستگاه</span>
              <span className={styles.spancss1}> تهران</span>
            </div>
            <div>
              <span className={styles.spancss}> تاریخ حرکت</span>
              <span className={styles.spancss1}>1401/01/01</span>

            </div>
            <div>
              <span className={styles.spancss}>  روز حرکت </span>

              <span className={styles.spancss1}>پنج شنبه</span>

            </div>

          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}>به ایستگاه</span>
              <span className={styles.spancss1}> زنجان</span>
            </div>
            <div>
              <span className={styles.spancss}>  نام مسافر</span>
              <span className={styles.spancss1}>نرگس جعفری</span>

            </div>
            <div>
              <span className={styles.spancss}>شماره قطار</span>
              <span className={styles.spancss1}>491</span>
            </div>

          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}> ساعت حرکت</span>
              <span className={styles.spancss1}> 17:45</span>
            </div>
            <div>
              <span className={styles.spancss}>  شماره سالن</span>
              <span className={styles.spancss1}>4</span>

            </div>
            <div>
              <span className={styles.spancss}> شماره صندلی</span>
              <span className={styles.spancss1}> 21 </span>

            </div>

          </div>
          <div className={styles.contentItem}>
            <div>
              <span className={styles.spancss}> ساعت ورود</span>
              <span className={styles.spancss1}>20:36</span>
            </div>
          </div>

          <div className={styles.priceCss}>
            <div className='py-2 px-2'>
              ویژه خواهران
            </div>
            <div className={styles.priceCssItem}>
              <div className={styles.priceCssItem1}>
                <div>
                  <span className={styles.spancss}>  پذیرایی</span>

                </div>
                <div>
                  <span className={styles.spancss}>  تخفیف</span>
                  <span className={styles.spancss1}> %0 </span>

                </div>

              </div>
              <div className={styles.priceCssItem1}>
                <div>
                  <span className={styles.spancss}>  بهاء بلیط</span>
                  <span className={styles.spancss1}> 123000 </span>

                </div>
                <div>
                  <span className={styles.spancss}>  خدمات ایستگاهی</span>
                  <span className={styles.spancss1}> 1200 </span>

                </div>
                <div>
                  <span className={styles.spancss}>  قیمت</span>
                  <span className={styles.spancss1}> 125000 </span>

                </div>
              </div>
            </div>
          </div>

          <div className={styles.ticketFooter}>
            <div>
              <img src={img} className={styles.barcodeCss} />
            </div>
            <div className={styles.ticketFooterItem}>
              <div className={styles.spanCssFooter}>
                توضیحات:
              </div>
              <span>
                1:حتما نیم‌ساعت قبل از حرکت قطار در ایستگاه راه‌آهن باشید
              </span>
              <span>
                2: ارائه کارت‌شناسایی معتبر هنگام سوار شدن در قطار  ضروری است
              </span>
              <span>
                3:  تلفن گویای ثبت نظرات 021-03234 می‌باشد
              </span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default TrainTicket

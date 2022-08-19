import styles from '../../assets/styles/PassengerInfo.module.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const PassengerInfo = () => {
  return (
    <>
      <div className={styles.content}>
        <div>مسافر اصلی</div>

        <div className={styles.contentItem}>
          <div className={styles.contentItem1}>
            <label> نام </label>
            <input
              type='text '
              className={styles.inputCss}
            />
          </div>
          <div className={styles.contentItem1}>
            <label> نام خانوادگی </label>
            <input
              type='text '
              className={styles.inputCss}
            />
          </div>
        </div>
        <div className={styles.contentItem11}>
          <div className={styles.contentItem2}>
            <label>جنسیت</label>
            <select>
              <option>  زن</option>
              <option> مرد </option>

            </select>
          </div>
          <div className={styles.contentItem2}>
            <label>تاریخ تولد</label>
            <input
              type='text '
              className={styles.inputCss}
            />

          </div>
          <div className={styles.contentItem2}>
            <label> کد ملی</label>
            <input
              type='text '
              className={styles.inputCss}
            />

          </div>

        </div>
      </div>

    </>
  )
}

export default PassengerInfo

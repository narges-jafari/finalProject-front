import styles from '../../../assets/styles/SuggestionList.module.css'


const SuggestionList = () => {
    return (
        <>
        <div className={styles.content} >
        <div className={styles.contentItem}>
                <span className={styles.spanHeader}>
                    رزرو هتل
                </span>
                <span className={styles.spanItem}>
                 رزرو هتل تهران
                </span>
                <span className={styles.spanItem} >
                 رزرو هتل شیراز
                </span>
                <span className={styles.spanItem}>
                 رزرو هتل مشهد
                </span>
                <span className={styles.spanItem}>
                رزرو هتل تبریز
                </span>
                <span className={styles.spanItem}>
                رزرو هتل اصفهان
                </span>
                <span className={styles.spanItem}>
                رزرو هتل   یزد
                </span>
            </div>

            <div className={styles.contentItem}>
                <span className={styles.spanHeader}>
                     بلیط هواپیما 
                </span>
                <span className={styles.spanItem}>
                بلیط هواپیما تهران
                </span>
                <span className={styles.spanItem} >
                بلیط هواپیما مشهد
                </span>
                <span className={styles.spanItem}>
                بلیط هواپیما اردبیل
                </span>
                <span className={styles.spanItem}>
                بلیط هواپیما شیراز
                </span>
                <span className={styles.spanItem}>
                بلیط هواپیما اصفهان
                </span>
                <span className={styles.spanItem}>
                بلیط هواپیما کیش
                </span>
            </div>

            <div className={styles.contentItem}>
                <span className={styles.spanHeader}>
                بلیط قطار
                </span>
                <span className={styles.spanItem}>
                بلیط قطار زنجان
                </span>
                <span className={styles.spanItem} >
                بلیط قطار تهران
                </span>
                <span className={styles.spanItem}>
                بلیط قطار مشهد
                </span>
                <span className={styles.spanItem}>
                بلیط قطار سمنان
                </span>
                <span className={styles.spanItem}>
                بلیط قطار اراک
                </span>
                <span className={styles.spanItem}>
                بلیط قطار خوزستان
                </span>
            </div>

            <div className={styles.contentItem}>
                <span className={styles.spanHeader}>
                بلیط اتوبوس
                </span>
                <span className={styles.spanItem}>
                بلیط اتوبوس میانه
                </span>
                <span className={styles.spanItem} >
                بلیط اتوبوس همدان
                </span>
                <span className={styles.spanItem}>
                بلیط اتوبوس قزوین
                </span>
                <span className={styles.spanItem}>
                بلیط اتوبوس ساوه
                </span>
                <span className={styles.spanItem}>
                بلیط اتوبوس ارومیه
                </span>
                <span className={styles.spanItem}>
                بلیط اتوبوس شیراز
                </span>
            </div>


        </div>
        </>
        )

}

export default SuggestionList
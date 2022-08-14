import AddTicketAccordion from "../../components/AddTicket"
import Footer from '../../components/Landing/Footer/Footer.jsx'
import HeaderLanding from '../../components/Landing/Navbar/HeaderLanding.jsx'
import styles from '../../assets/styles/Pages.module.css'

const AddTicketPage =() =>{

return(
    <div className={styles.bodycss}>
    <div className={styles.content}>
      <HeaderLanding/>
    
      </div>
    
    
          <div className=' mx-auto ' >
          <AddTicketAccordion/>
    
          </div>
          <div style={{ marginTop: '200px' }}>
            <Footer />
    
          </div>
          </div>
    
)
}

export default AddTicketPage
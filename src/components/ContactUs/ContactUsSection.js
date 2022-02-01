import ContactImg from '../../assets/contact.jpg'
import ContactDetails from './ContactDetails'
const ContactUsSection=()=>{
    return(
        <div className='page'>
        <h1 className='text-center' style={{color:'#4876A3'}}>Contact Us</h1>
        <div style={{display:'flex' , justifyContent:'space-evenly',alignItems:'center'}}>
            <img style={{width:'50%'}} src={ContactImg}/>
            <ContactDetails />
        </div>
        </div>
    )
}

export default ContactUsSection
import React from 'react'
import { Navbar } from './Navbar'
import './Contact.css'
// import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
export const Contactus = () => {
  return (
    <div>
      <Navbar/>
      <div className="topcontact">
        <h1>Contact Us</h1>
        <h3>Get in touch with the right people at Cary's. We’re here to help.</h3>
      </div>
      <hr class="horizontal-line"/>
      <div className="topcontact2">
        <h2>Get 24/7 Support</h2>
        <h3>Ask questions, watch tutorials, browse articles or contact an agent.</h3>
        <img src='https://www.tradestation.com/wp-content/uploads/contact-us-team.jpg' style={{width:'50vw',height:'60vh',marginLeft:'80px'}}></img>
      </div>
      <hr class="horizontal-line"/>
      <div className="botcontact">
        <h3>If you have any questions about us, our reviews, or just want to say hello,</h3>
        <h3>Please feel free to reach out to us.</h3>
      </div>
      <div className="contactlink">
        <div className="cl">
          <Link to='https://www.gmail.com'><EmailIcon style={{color:'black'}}/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.instagram.com'><InstagramIcon style={{color:'black'}}/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.github.com'><GitHubIcon style={{color:'black'}}/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.facebook.com'><FacebookIcon style={{color:'black'}}/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.linkedin.com'><LinkedInIcon style={{color:'black'}}/></Link>
        </div>
        <div className="emc">
        {/* <EmailIcon/>
            <h3 style={{marginLeft:'40px',marginTop:'-30px'}}>redwings@gmail.com</h3> */}
            <PhoneIcon/>
            <h3 style={{marginLeft:'40px',marginTop:'-30px', width:'30vw'}}>+91 8903848442</h3>
        </div>
      </div>
    </div>
  )
}

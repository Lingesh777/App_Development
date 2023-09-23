import React from 'react'
import { Navbar } from './Navbar'
import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
          <Link to='https://www.gmail.com'><EmailIcon/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.instagram.com'><InstagramIcon/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.github.com'><GitHubIcon/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.facebook.com'><FacebookIcon/></Link>
        </div>
        <div className="cl">
        <Link to='https://www.linkedin.com'><LinkedInIcon/></Link>
        </div>
      </div>
    </div>
  )
}

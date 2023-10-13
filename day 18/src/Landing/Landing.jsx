import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Landing.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const Landing = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar/>
        <div className='topland'>
            <div className="toptext">
                <h1>Inventory Management Software</h1>
            </div>
            <div className="toplandtext">
                <h3>Track, audit, and manage your stock across multiple</h3>
                <h3>warehouses using a simple cloud-based solution.</h3>
            </div>
            <div className="toplandimg">
                <img src='https://quickmovetech.com/wp-content/uploads/2022/03/Inventory-Software.png' style={{width:'40vw',height:'60vh'}}></img>
            </div>
            <div className="toplandbut">
                <Button style={{backgroundColor:'green',color:'white'}} onClick={()=>{navigate('/login')}}>Get Started</Button>
            </div>
        </div>
        <div className="landrow">
            <div className="rowtext">
                Unlimited products
                <div className="rowico">
                    <CategoryIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            <div className="rowtext">
                Unlimited Buyers
                <div className="rowico">
                    <PeopleIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            <div className="rowtext">
                Unlimited Suppliers
                <div className="rowico">
                    <EmojiPeopleIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            <div className="rowtext">
                plenty Warehouses
                <div className="rowico">
                    <WarehouseIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
        </div>
        <div className="textofsoft">
           <div style={{marginLeft:'20px',marginTop:'90px'}}><h2>Intuitively simple & beginner-friendly</h2></div> 
            <div className="downimage">
                <img src='https://m.economictimes.com/thumb/height-450,width-600,imgsize-58252,msid-100299251/the-top-7-skills-every-product-manager-needs-to-succeed.jpg' style={{width:'40vw',height:'50vh'}}></img>   
            </div>
            <div className="downtext">
                <h3>Manage Your Stocks, Sales and</h3>
                <h3>Clients with us.</h3>
            </div>
            <div className="landdownbut">
                <Button style={{backgroundColor:'green',color:'white'}} onClick={()=>{navigate('/signup')}}>New User</Button>
            </div>
        </div>

        <div className="landbox">
            <div className="cont1">
                <h3 style={{marginLeft:'40px'}}>Order Management</h3>
                <h4>Handle all your sales and purchase</h4>
                <h4>Manages bills and track payments</h4>
                <h4>Keep your deleiveries on time</h4>
            </div>
            <div className="cont1">
                <h3 style={{marginLeft:'20px'}}>Warehouse Management</h3>
                <h4>Control your stocks in warehouse </h4>
                <h4>Track,Transfer item movements</h4>
                <h4>Generate reports from warhouse</h4>
            </div>
            <div className="cont1">
                <h3 style={{marginLeft:'40px'}}>Report Generation</h3>
                <h4>Availability of products</h4>
                <h4>Sales details,vendor payments</h4>
                <h4>Including price of the store</h4>
            </div>
        </div>

        <div className="lasttext">
            <h1 style={{color:'#053b4f',display:'flex',justifyContent:'center',marginTop:'70px',paddingBottom:'40px'}}>Made in India.Made for World</h1>
        </div>
        <div className="footer">
        <div className="landend">
            <div className="endtext">
                <h4 style={{cursor:'pointer'}} onClick={()=>navigate('/terms')}>Terms of Service   |   </h4>
            </div>
            <div className="endtext">
                <h4 style={{marginLeft:'20px',cursor:'pointer'}} onClick={()=>navigate('/privacy')}>Privacy Policy   |   </h4>
            </div>
            <div className="endtext">
                <h4 style={{marginLeft:'30px',cursor:'pointer'}} onClick={()=>navigate('/about')} >About Us   |   </h4>
            </div>
            <div className="endtext">
                <h4 onClick={()=>navigate('/contactus')} style={{cursor:'pointer'}}>Contact Us   |   </h4>
            </div>
            <div className="endtext">
                <h4 onClick={()=>navigate('/faq')} style={{cursor:'pointer'}}>FAQ   |   </h4>
            </div>
        </div>
        <div className="ic">
        <div className="followtext">
            <h3>Follow us on </h3>
            </div>
        <div className="landicons">
           <Link to='https://www.facebook.com'> <FacebookIcon style={{color:'white'}}/> </Link>
           <Link to='https://www.instagram.com'><InstagramIcon style={{color:'white'}} /></Link>
           <Link to='https://www.github.com'><GitHubIcon style={{color:'white'}}/></Link>
           <Link to='https://www.linkedin.com'><LinkedInIcon style={{color:'white'}}/></Link>
           <Link to='https://www.twitter.com'><TwitterIcon style={{color:'white'}}/></Link>
        </div>
        </div>
        <div className="emandcont">
            <EmailIcon/>
            <h3 style={{marginLeft:'40px',marginTop:'-30px'}}>redwings@gmail.com</h3>
            <PhoneIcon/>
            <h3 style={{marginLeft:'40px',marginTop:'-30px'}}>+91 8903848442</h3>
        </div>
        <div className="cpr">
            <h4 style={{display:'flex',justifyContent:'center'}}>@copyrigths 2023 Cary's pvt ltd. All Rights reserved</h4>
        </div>
        </div>
    </div>
  )
}

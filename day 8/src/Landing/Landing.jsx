import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Landing.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <div className="landend">
            <div className="endtext">
                <h4 style={{cursor:'pointer'}}>Terms of Service</h4>
            </div>
            <div className="endtext">
                <h4 style={{marginLeft:'20px',cursor:'pointer'}}>Privacy Policy</h4>
            </div>
            <div className="endtext">
                <h4 style={{marginLeft:'30px',cursor:'pointer'}} onClick={()=>navigate('/about')} >About Us</h4>
            </div>
            <div className="endtext">
                <h4 onClick={()=>navigate('/contactus')} style={{cursor:'pointer'}}>Contact Us</h4>
            </div>
        </div>
           
    </div>
  )
}

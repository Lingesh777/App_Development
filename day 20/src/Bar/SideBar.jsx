import React from 'react'
import './SideBar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAdmin } from '../Redux/Redux';
export const SideBar = () => {
  const navigate=useNavigate();
  const admin=useSelector(getAdmin);
  return (
    <div className='sidebar d-flex-c'>
        <div className='gdicon'><GridViewIcon /></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/admin')}} >DashBoard</Button>
        <div style={{position:'absolute',top:'105px'}}><ProductionQuantityLimitsIcon/></div>
        <Button style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/viewproduct')}}>View Products</Button>
        <div style={{position:'absolute',top:'170px'}}><AddShoppingCartIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/addproduct')}}>Add Products</Button>
        <div style={{position:'absolute',top:'238px'}}><ShoppingCartCheckoutIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/updateproduct')}}>Update Products</Button>
        <div style={{position:'absolute',top:'300px'}}><AssessmentOutlinedIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/report')}}>Reports</Button>
        <div style={{position:'absolute',top:'370px'}}><PermContactCalendarOutlinedIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/contact')}}>Contacts</Button>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/login')}}><LogoutIcon/>Logout</Button>
    </div>
  )
}

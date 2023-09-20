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
export const SideBar = () => {
  const navigate=useNavigate();
  return (
    <div className='sidebar d-flex-c'>
        <div className='gdicon'><GridViewIcon /></div>
        <Button style={{color:'black',padding:'20px'}}>DashBoard</Button>
        <div style={{position:'absolute',top:'110px'}}><ProductionQuantityLimitsIcon/></div>
        <Button style={{color:'black',padding:'20px'}} onClick={()=>{navigate('/viewproduct')}}>View Products</Button>
        <div style={{position:'absolute',top:'175px'}}><AddShoppingCartIcon/></div>
        <Button  style={{color:'black',padding:'20px'}} onClick={()=>{navigate('/addproduct')}}>Add Products</Button>
        <div style={{position:'absolute',top:'240px'}}><ShoppingCartCheckoutIcon/></div>
        <Button  style={{color:'black',padding:'20px'}} onClick={()=>{navigate('/updateproduct')}}>Update Products</Button>
        <div style={{position:'absolute',top:'300px'}}><AssessmentOutlinedIcon/></div>
        <Button  style={{color:'black',padding:'20px'}} onClick={()=>{navigate('/report')}}>Reports</Button>
        <div style={{position:'absolute',top:'370px'}}><PermContactCalendarOutlinedIcon/></div>
        <Button  style={{color:'black',padding:'20px'}} onClick={()=>{navigate('/contact')}}>Contacts</Button>
        <Button  style={{color:'black',padding:'20px'}} onClick={()=>{navigate('/login')}}><LogoutIcon/>Logout</Button>
    </div>
  )
}

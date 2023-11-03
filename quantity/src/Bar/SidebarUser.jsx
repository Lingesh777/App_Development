import React from 'react'
import './SideBar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAdmin } from '../Redux/Redux';
export const SideBarUser = () => {
  const navigate=useNavigate();
  const admin=useSelector(getAdmin);
  return (
    <div className='sidebar d-flex-c'>
        <div className='gdicon'><GridViewIcon /></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/user')}} >DashBoard</Button>
        <div style={{position:'absolute',top:'105px'}}><ProductionQuantityLimitsIcon/></div>
        <Button style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/user/viewproduct')}}>View Products</Button>
        <div style={{position:'absolute',top:'170px'}}><AddShoppingCartIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/user/cart')}}>Cart</Button>
        <div style={{position:'absolute',top:'238px'}}><EditCalendarIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/user/review')}}>Add review</Button>
       <div style={{position:'absolute',top:'300px'}}><AssessmentOutlinedIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/user/order')}}>Your orders</Button>
         <div style={{position:'absolute',top:'370px'}}><PermContactCalendarOutlinedIcon/></div>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/contact')}}>Edit profile</Button>
        <Button  style={{color:'black',padding:'20px',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{navigate('/login')}}><LogoutIcon/>Logout</Button>
    </div>
  )
}

import React from 'react';
import './TopBar.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useState } from 'react';
import { TopUserDropdown } from './TopUserDropdown';
import { useSelector } from 'react-redux';
import { getAdmin } from '../Redux/Redux';
export const TopBar = () => {
  const[open,setOpen]=useState(false);
  const admin = useSelector(getAdmin)
  const drop=()=>{
    setOpen(!open);
  }
  return (
    <div className="topbar d-flex-r">
      <div className='topicon'><LocalGroceryStoreIcon style={{fontSize:'40px'}} /></div>
        <div className='topname' ><h4 >Cary's</h4></div>
        <input type='text' placeholder='Type for Search' className='topsearch' style={{marginLeft:'70px',width:'15vw',height:'5vh',borderRadius:'5px',border:'none'}}></input>
        <div className='topsicon'><SearchIcon style={{fontSize:'25px'}}/></div>
        <div className='toprev'><Button style={{color:'black'}}><RateReviewIcon style={{fontSize:'40px'}}/></Button></div>
        <div className='topnoticon'><CircleNotificationsIcon style={{fontSize:'40px'}}/></div>
          <div className="icondrop">
            <div className='topendicon'onClick={drop}>
                <AccountCircleIcon style={{fontSize:'40px'}} />
            </div>
            <TopUserDropdown isOpen={open} onClose={drop} />
          </div>
    </div>
  )
}

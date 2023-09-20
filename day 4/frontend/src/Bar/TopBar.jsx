import React from 'react';
import './TopBar.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';
export const TopBar = () => {
  return (
    <div className="topbar d-flex-r">
      <div className='topicon'><LocalGroceryStoreIcon style={{fontSize:'40px'}} /></div>
        <div className='topname' ><h4 >Cary's</h4></div>
        <input type='text' placeholder='Type for Search' className='topsearch' style={{marginLeft:'20px',width:'15vw',height:'5vh',borderRadius:'5px',border:'none'}}></input>
        <div className='topsicon'><SearchIcon style={{fontSize:'25px'}}/></div>
        <div className='toprev'><Button style={{color:'inherit',border:'2px solid white'}}>Review</Button></div>
        <div className='topnoticon'><NotificationsIcon style={{fontSize:'25px'}}/></div>
          <div className='topendicon'><PersonIcon style={{fontSize:'40px'}} /></div>
    </div>
  )
}

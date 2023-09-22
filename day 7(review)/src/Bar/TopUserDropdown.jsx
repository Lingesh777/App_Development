import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TopUserDropdown = ({isOpen,onClose}) => {
    const navigate=useNavigate();
    if(!isOpen)
        return null;
  return (
    <div className='dropdown' style={{position:'absolute',right:'30px',top:'55px', zIndex:'10',border:'2px solid  gray',width:'10vw',textAlign:'center'}}>
        <div className='dropname' style={{fontWeight:'bold',fontSize:'20px'}}><h3 >Lingesh</h3></div>
        <Button variant='inherit' onClick={()=>{navigate('/login')}} style={{cursor:'pointer',fontWeight:'bold'}}>signout</Button>
    </div>
  )
}

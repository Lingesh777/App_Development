import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAdmin } from '../Redux/Redux';

export const TopUserDropdown = ({isOpen,onClose}) => {
    const navigate=useNavigate();
    const admin=useSelector(getAdmin);

    if(!isOpen)
        return null;
if(!admin)
{
  return (
    <div className='dropdown' style={{position:'absolute',right:'10px',top:'55px', zIndex:'10',border:'2px solid  gray',width:'15vw',textAlign:'center'}}>
        {/* <div className='dropname' style={{fontWeight:'bold',fontSize:'20px'}}><h3 >No user</h3></div> */}
        <Button variant='inherit' onClick={()=>{navigate('/login')}} style={{cursor:'pointer',fontWeight:'bold'}}>Login</Button>
    </div>
  );
}
  return (
    <div className='dropdown' style={{position:'absolute',right:'10px',top:'55px', zIndex:'10',border:'2px solid  gray',width:'15vw',textAlign:'center'}}>
        <div className='dropname' style={{fontWeight:'bold',fontSize:'20px'}}><h3 >{admin.username}</h3></div>
        <Button variant='inherit' onClick={()=>{navigate('/login')}} style={{cursor:'pointer',fontWeight:'bold'}}>signout</Button>
    </div>
  )
}

import React from 'react'
import { TopBar } from '../Bar/TopBar';
import { SideBarUser } from '../Bar/SidebarUser';
import { useState } from 'react';
import { Button } from '@mui/material';
import './rev.css';
import { addreview } from '../Service/api';
import { ToastContainer, toast } from 'react-toastify';

export const UserReview = () => {
    const name=localStorage.getItem('username');
    const [rev,setRev]=useState({
        yourcomments:'',rateforservice:'',ratefordelivery:'',rateforproduct:'',username:`${name}`
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setRev({...rev,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        console.log(rev);
        console.log(`${name}`);
        const revdata=await addreview(rev);
        console.log("success");
        toast.success("review added");
    }
  return (
    <div>
        <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
        <div className="main d-flex-r">
        <TopBar/>
        <SideBarUser/>
        <div className="content d-flex-c">
            <div className="revbody">
                <div className="revcol">
                    <input id='yourcomments' className='revin' type='text' placeholder='Your comments' onChange={handleChange}></input>
                </div> 
                <div className="revcol">
                    <input id='rateforservice' type='number' className='revin' placeholder='Rate us for our service' onChange={handleChange}></input>
                </div> 
                <div className="revcol">
                    <input id='ratefordelivery' type='number' className='revin' placeholder='Rate us for our Delivery' onChange={handleChange}></input>
                </div> 
                <div className="revcol">
                    <input id='rateforproduct' type='number' className='revin' placeholder='Rate us for our Product' onChange={handleChange}></input>
                </div> 
                <div className="revcol">
                    <Button style={{backgroundColor:'green',color:'white',marginLeft:'150px',width:'10vw'}} onClick={handleSubmit}>Post</Button>
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

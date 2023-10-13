import React from 'react'
import { TopBar } from '../Bar/TopBar';
import { SideBarUser } from '../Bar/SidebarUser';
import { useState } from 'react';
import { Button } from '@mui/material';
import './rev.css';

export const UserReview = () => {
    const [rev,setRev]=useState({
        comments:'',rateforservice:'',ratefordelivery:'',rateforproduct:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setRev({...rev,[e.target.id]:e.target.value})
    }
  return (
    <div>
        <div className="main d-flex-r">
        <TopBar/>
        <SideBarUser/>
        <div className="content d-flex-c">
            <div className="revbody">
                <div className="revcol">
                    <input id='comments' className='revin' type='text' placeholder='Your comments' onChange={handleChange}></input>
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
                    <Button style={{backgroundColor:'green',color:'white',marginLeft:'150px',width:'10vw'}}>Post</Button>
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

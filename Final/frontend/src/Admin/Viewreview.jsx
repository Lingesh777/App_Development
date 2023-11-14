import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBarUser } from '../Bar/SidebarUser'
import { SideBar } from '../Bar/SideBar'
import { useState } from 'react'
import { getreview } from '../Service/api'
import { useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Viewreview = () => {
  const[rev,setRev]=useState([]);
  const fetchrev=async()=>{
    try{
    const res=await getreview();
    setRev(res.data);
    console.log(res.data);
    }
    catch(error)
    {
      console.log('error fetching review');
    }
  }

  useEffect(()=>{
    fetchrev();
  },[])

  return (
    <div className="main d-flex-r">
        <TopBar/>
        <SideBar/>
        <div className="content d-flex-c">
          {
            rev.map((review)=>(
          <div style={{border:'2px solid black',padding:'5px',marginTop:'5px'}}>
              <h4 ><span ><AccountCircleIcon/></span>{review.username}<span style={{marginLeft:'50px'}}>{review.createdAt}</span></h4>
              <h4>{review.yourcomments}</h4>
              <h4>{review.rateforservice}/10</h4>
          </div>
            ))
          }
        </div>
    </div>
  )
}

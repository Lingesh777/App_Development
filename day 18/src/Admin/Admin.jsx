import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TopBar } from '../Bar/TopBar';
import { SideBar } from '../Bar/SideBar';
import './Admin.css';
import { useSelector } from 'react-redux';
import { getAdmin } from '../Redux/Redux';

export const Admin = () => {
  //  const{email}=useParams();
  const navigate=useNavigate();
  //  const admin = useSelector(getAdmin);
  const admin=localStorage.getItem('username');
   if(!admin)
   {
    return (
      <div>
        <div className="main d-flex-r">
        <TopBar/>
        <SideBar/>
        <div className="content d-flex-c">
          <h1>No User found...</h1>
           <h2><span style={{cursor:'pointer',color:'blue'}} onClick={()=>{navigate('/login')}}>click here</span> to login</h2> 
        </div>
      </div>
      </div>
    )
   }


  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c"><h2>Welcome back, {admin}</h2></div>
    </div>
    </div>
  )
}

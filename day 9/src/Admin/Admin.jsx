import React from 'react'
import { useParams } from 'react-router-dom'
import { TopBar } from '../Bar/TopBar';
import { SideBar } from '../Bar/SideBar';
import './Admin.css';
import { useSelector } from 'react-redux';
import { getAdmin } from '../Redux/Redux';

export const Admin = () => {
   const{email}=useParams();
   const admin = useSelector(getAdmin)
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c"><h2>Welcome back, {admin.email}</h2></div>
    </div>
    </div>
  )
}

import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { TopBar } from '../Bar/TopBar';
import { SideBar } from '../Bar/SideBar';
import './Admin.css';

export const Admin = () => {
   const{email}=useParams();
  return (
    <div>
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c">
        <h1>Welcome back, {email}</h1>
        </div>
    </div>
  )
}

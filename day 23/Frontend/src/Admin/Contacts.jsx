import React, { useEffect, useState } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import { userdata } from '../Service/api';
import './Admin.css';

export const Contacts = () => {
  const [data,setData]=useState([]);
  const fetch=async(e)=>{
    const res=await userdata();
    setData(res.data);
    console.log(res.data);
  };
  useEffect(()=>{
    fetch();
  },[])
  const filteredUsers = data.filter((details) => details.role === 'USER');
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-r "><h2 style={{marginTop:'-250px',marginLeft:'100px'}}>Contacts of our Cary's users</h2></div>
      <div className="userbody">
        <table style={{width:'60vw'}} className='userdatatable'>
          <tr>
            <th>User id</th>
            <th>User name</th>
            <th>User email</th>
            <th>Mobile</th>
          </tr>
          <tbody style={{textAlign:'center'}}>
            {filteredUsers.map((details)=>(
              <tr>
                <td>{details.uid}</td>
                <td>{details.username}</td>
                <td>{details.email}</td>
                <td>{details.mobilenum}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

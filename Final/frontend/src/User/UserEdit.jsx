import React, { useEffect, useState } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBarUser } from '../Bar/SidebarUser'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { edituser } from '../Service/api';

export const UserEdit = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    
    useEffect(()=>{
    const uid=localStorage.getItem('userid');
    const username=localStorage.getItem('username');
    const email=localStorage.getItem('useremail');
    const mobilenum=localStorage.getItem('usermobile');
    const role=localStorage.getItem('userrole');
    // const password=localStorage.getItem('userpassword');
    // const isEnabled=localStorage.getItem('userenable');
    setUser({uid,username,email,mobilenum,role});
    },[])
    console.log(user);
const handleChange=(e)=>{
    e.preventDefault();
    setUser({...user,[e.target.id]:e.target.value});
};

const handleSubmit=async(user)=>{
    console.log(user);
    localStorage.setItem('username',user.username);
    const res=await edituser(user.uid,user);
    console.log(res.data);
    // if(res.data==="updated successfully")
    navigate('/user');
}

    return(
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
                <div className='edituserform'>
                    <div className="editinclass">
                    <h4>Id :    
                    <input type="number"  className='editin' value={user.uid} onClick={()=>{toast.error('user id cant be modified')}} style={{marginLeft:'25px'}}></input>
                    </h4>
                    </div>
                    <div className="editinclass">
                    <h4>Name :    
                    <input type="text"  className='editin' value={user.username} id='username' onChange={handleChange} style={{marginLeft:'25px'}}></input>
                    </h4>
                    </div>
                    <div className="editinclass">
                    <h4>Email :    
                    <input type="text"  className='editin' value={user.email} id='email' style={{marginLeft:'25px'}} onChange={handleChange}></input>
                    </h4>
                    </div>
                    <div className='editinclass'>
                    <h4>Mobile Number :    
                    <input type="text"  className='editin' value={user.mobilenum} id='mobilenum' style={{marginLeft:'25px'}} onChange={handleChange}></input>
                    </h4>
                    </div>
                    <div className='editinclass'>
                    <h4>Role :      
                    <input type="text"  className='editin' value={user.role} onClick={()=>{toast.error('user role cant be modified')}} style={{marginLeft:'25px'}} ></input>
                    </h4>
                    </div>
                    <div className="editbut">
                        <Button onClick={()  => handleSubmit(user)} style={{backgroundColor:'green',color:'white',marginLeft:'20px'}}>Update</Button>
                        <Button onClick={()=>{navigate('/user')}} style={{backgroundColor:'red',color:'white',marginLeft:'10px'}}>Cancel</Button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
}

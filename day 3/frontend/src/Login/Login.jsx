import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const Login = () => {
    const navigate = useNavigate();
    const [login,setLogin]=useState({
        email:'',password:''
    })
    const handleChange=(e)=>{
        // e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(login.email===""||login.password==="")
        {
            console.log("Enter all fields");
            toast.error("Enter all fields");
        }
        else
        {
            axios.get("http://localhost:8080/get/login",{
                params:{
                    email:login.email,
                    password:login.password,
                }
            })
            .then((res)=>{
                console.log(res.data);
                if(res.data==='Login success')
                {
                    toast.success(res.data);
                }
                else
                {
                    toast.error(res.data);

                }
            })
        }
    }
  return (
    <div className='loginbody'>
    <div className='loginform'>
        <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
        <div className='lbox'>
            <h3 style={{fontWeight:'bold',fontSize:'30px'}}>LOGIN</h3>
        <div className='logininput'>
            <EmailIcon/>
            <input type='email' className='lin' placeholder='Email' id='email' required onChange={handleChange}></input>
        </div>
        <div className='logininput'>
            <LockIcon/>
            <input type='password' className='lin' placeholder='Password' onChange={handleChange} id='password' required></input>
        </div>
        <div className='logininput'>
            <button className='lbutton' onClick={handleSubmit}>Login</button>
        </div>
        <h4>Are you a new user ? <span className='spannav' onClick={()=>navigate('/signup')} style={{textDecoration:'none',color:'white'}}> Signup</span> </h4>
        </div>
    </div>
    </div>
  )
}

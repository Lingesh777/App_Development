import React, { useState } from 'react';
import './Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';

export const Signup = () => {
  const navigate=useNavigate();
  const [signup,setSignup]=useState({
    username:'',email:'',password:'',mobilenum:''
  })
  const handleChange=(e)=>{
    e.preventDefault();
    setSignup({...signup,[e.target.id]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(signup.username===""||signup.email===""||signup.password==="")
    {
     // console.log("Enter all fields");
      toast.error("Enter all fields");
    }
    else
    {
      axios.post("http://localhost:8080/post/signup",{
      username:signup.username,
      email:signup.email,
      password:signup.password,
      mobilenum:signup.mobilenum,
      })
      .then((res)=>{
        console.log(res.data)
        if(res.data==='Signup success')
        {
          toast.success(res.data);
          setTimeout(()=>{
            navigate("/login")
        },2000);
        }
        else
        {
          toast.error(res.data);
        }
      })
    }
  }
  return (
    <div className='signupbody'>
      {/* <div className="stext">
        <h3>Signup</h3>
      </div> */}
    <div className='signup'>
      <div className='sbox'>
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
  <h3 style={{fontWeight:'bold',fontSize:'30px'}}>SIGNUP</h3>
      <div className='sinput'>
        <PersonIcon/>
        <input type='text' id='username' className='sin' required onChange={handleChange} placeholder='Username'></input>
      </div>
      <div className='sinput'>
      `<EmailIcon/>
        <input type='email' id='email'className='sin' required onChange={handleChange} placeholder='Email'></input>
      </div>
      <div className='sinput'>
        <LockIcon/>
        <input type='password' id='password' className='sin' required onChange={handleChange} placeholder='Password'></input>
      </div>
      <div className='sinput'>
        <PhoneIcon/>
        <input type='text' id='mobilenum' className='sin' required onChange={handleChange} placeholder='Mobile Number'></input>
      </div>
      <div className='sinput'>
        <button className='sbutton' onClick={handleSubmit} >Register</button>
      </div>
      <h4>Already an User ? <span className='spannav' onClick={()=>navigate('/login')} style={{textDecoration:'none',color:'white'}}> Login</span></h4>
    </div>
    </div>
    </div>
  )
}

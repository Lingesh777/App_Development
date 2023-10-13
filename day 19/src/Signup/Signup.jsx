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
import { userregister } from '../Service/api';

export const Signup = () => {
  const navigate=useNavigate();
  const [signup,setSignup]=useState({
    username:'',email:'',password:'',mobilenum:'',role:'USER'
  })
  const handleChange=(e)=>{
    e.preventDefault();
    setSignup({...signup,[e.target.id]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await userregister(signup);
    console.log(res.data);
    if((res.data)=="User registeration completed" && (res.status)=="200")
        {
            toast.success(`Welcome ${signup.username} to cary's !`)
            setTimeout(()=>{
                navigate("/login")
            },2000)
        }
        else if((res.data.role)=="Something went wrong!" && (res.status)=="200")
        {
            toast.error("Username or email already exists");
        }
    // if(signup.username===""||signup.email===""||signup.password==="")
    // {
    //  // console.log("Enter all fields");
    //   toast.error("Enter all fields");
    // }
    // else
    // {
    //   axios.post("http://localhost:8080/post/signup",{
    //   username:signup.username,
    //   email:signup.email,
    //   password:signup.password,
    //   mobilenum:signup.mobilenum,
    //   })
    //   .then((res)=>{
    //     console.log(res.data)
    //     if(res.data==='Signup success')
    //     {
    //       toast.success(res.data);
    //       setTimeout(()=>{
    //         navigate("/login")
    //     },2000);
    //     }
    //     else
    //     {
    //       toast.error(res.data);
    //     }
    //   })
    // }
  }
  return (
    <>      
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
    <div className='signupbody'>
      <div className="signimg">
        <img src='https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full.jpeg' style={{width:'45vw',height:'80vh'}}></img>
      </div>
    <div className='signup'>
      <h3 style={{marginTop:'-50px'}}>Get Started with Cary's !</h3>
      <div className='sbox'>
  {/* <h3 style={{fontWeight:'bold',fontSize:'30px'}}>SIGNUP</h3> */}
      <div className='sinput'>
        <PersonIcon/>
        <input type='text' id='username' className='sin' required onChange={handleChange} placeholder='Username *'></input>
      </div>
      <div className='sinput'>
      `<EmailIcon/>
        <input type='email' id='email'className='sin' required onChange={handleChange} placeholder='Email *'></input>
      </div>
      <div className='sinput'>
        <LockIcon/>
        <input type='password' id='password' className='sin' required onChange={handleChange} placeholder='Password *'></input>
      </div>
      <div className='sinput'>
        <PhoneIcon/>
        <input type='text' id='mobilenum' className='sin' required onChange={handleChange} placeholder='Mobile Number *'></input>
      </div>
      <div className='sinput'>
        <button className='sbutton' onClick={handleSubmit} >Create your account</button>
      </div>
    </div>
      <h4 style={{marginTop:'40px'}}>Already an User ? <span className='spannav' onClick={()=>navigate('/login')} style={{textDecoration:'none',color:'#298ff6'}}> Login</span></h4>
    </div>
    </div>
    </>
  )
}

import React, { useState } from 'react';
import './Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";

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
      console.log("Enter all fields");
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
          navigate("/login");
        }
      })
    }
  }
  return (
    <div className='signup'>
      <div className='sbox'>
      <div className='sinput'>
        <input type='text' id='username' className='sin' required onChange={handleChange} placeholder='Username'></input>
      </div>
      <div className='sinput'>
        <input type='email' id='email'className='sin' required onChange={handleChange} placeholder='Email'></input>
      </div>
      <div className='sinput'>
        <input type='password' id='password' className='sin' required onChange={handleChange} placeholder='Password'></input>
      </div>
      <div className='sinput'>
        <input type='text' id='mobilenum' className='sin' required onChange={handleChange} placeholder='Mobile Number'></input>
      </div>
      <div className='sinput'>
        <button className='sbutton' onClick={handleSubmit} >Register</button>
      </div>
      <h4>Already an User ? <Link to='/login' style={{textDecoration:'none'}}>Login</Link></h4>
    </div>
    </div>
  )
}

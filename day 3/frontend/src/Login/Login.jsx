import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const [login,setLogin]=useState({
        email:'',password:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(login.email===""||login.password==="")
        {
            console.log("Enter all fields");
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
            })
        }
    }
  return (
    <div className='loginform'>
        <div className='lbox'>
        <div className='logininput'>
            <input type='email' className='lin' placeholder='Email' id='email' required onChange={handleChange}></input>
        </div>
        <div className='logininput'>
            <input type='password' className='lin' placeholder='Password' id='password' required></input>
        </div>
        <div className='logininput'>
            <button className='lbutton' onClick={handleSubmit}>Login</button>
        </div>
        <h4>Are you a new user ? <Link to='/signup' style={{textDecoration:'none'}}> Signup</Link> </h4>
        </div>
    </div>
  )
}

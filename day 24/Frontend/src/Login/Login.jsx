import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Admin } from '../Admin/Admin';
import { useDispatch } from 'react-redux';
import { SetAdmin } from '../Redux/Redux';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { userlogin } from '../Service/api';


export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login,setLogin]=useState({
        username:'',password:''
    })
    const handleChange=(e)=>{
        // e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit= async(e)=>{
        const res=await userlogin(login);
        console.log(res.data);
        console.log(res.status);
        console.log(res.data.role);
        localStorage.setItem('Token',res.data.token);
        localStorage.setItem('username',res.data.username);
        localStorage.setItem('useremail',res.data.email);
        localStorage.setItem('userid',res.data.uid);
        localStorage.setItem('userrole',res.data.role);
        localStorage.setItem('usermobile',res.data.mobilenum);
        if((res.data.role)=="ADMIN" && (res.status)=="200")
        {
            toast.success(`Welcome admin ${res.data.username} !`)
            setTimeout(()=>{
                navigate('/admin')
            },3000)
        }
        else if((res.data.role)=="USER" && (res.status)=="200")
        {
            toast.success(`Welcome back ${res.data.username} !`)
            setTimeout(()=>{
                navigate('/user')
            },3000)
        }
        else
        {
            toast.error("Invalid username or password !");
        }
        // else if(login.username==="Lingesh" && login.password==="lingesh")
        // {
        //     dispatch(SetAdmin({
        //         username:login.username,
        //     }))
        //     navigate('/admin')
            // axios.get("http://localhost:8080/get/login",{
            //     params:{
            //         email:login.email,
            //         password:login.password,
            //     }
            // })
            // .then((res)=>{
            //     console.log(res.data);
            //     if(res.data==='Login success')
            //     {
            //         dispatch(SetAdmin({
            //             email:login.email,
            //         }))
            //         toast.success(res.data);
            //         setTimeout(()=>
            //         {
            //             navigate(`/admin/${login.email}`)
            //         },2000);
            //     }
            //     else
            //     {
            //         toast.error(res.data);

            //     }
            // }).catch((err)=>console.log(err))
        // }
        // else
        // {
        //     dispatch(SetAdmin({
        //         username:login.username,
        //     }))
        //     navigate('/user')
        // }
    }
  return (
    <>
    <div className="backicon" onClick={()=>{navigate('/')}}><KeyboardBackspaceIcon style={{fontSize:'30px',cursor:'pointer'}}/></div>
    <div className='loginbody'>
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
    <div className="logimg">
        <img src='https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full.jpeg' style={{width:'40vw',height:'80vh'}}></img>
    </div>
    <div className="log2">
        <div className="logwel" style={{marginTop:'-60px'}}>
            <h2>Greate to have you Back !</h2>
            <p>Your can sign in to cary's with your existing account.</p>
        </div>
    <div className='loginform'>
        <div className='lbox'>
            {/* <h3 style={{fontWeight:'bold',fontSize:'30px'}}>LOGIN</h3> */}
        <div className='logininput'>
            <PersonIcon/>
            <input type='text' className='lin' placeholder='Username *' id='username' required onChange={handleChange}></input>
        </div>
        <div className='logininput'>
            <LockIcon/>
            <input type='password' className='lin' placeholder='Password *' onChange={handleChange} id='password' required></input>
        </div>
        <div className='logininput'>
            <button className='lbutton' onClick={handleSubmit}>Login</button>
        </div>
        </div>
        <h4 style={{marginLeft:'20px',marginTop:'50px'}}>New to Cary's ? <span className='spannav' onClick={()=>navigate('/signup')} style={{textDecoration:'none',color:'#298ff6'}}> Signup</span> </h4>
    </div>
    </div>
    {/* <div className="loginend">
        <h3>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</h3>
    </div> */}
    </div>
    </>
  )
}

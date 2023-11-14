import React, { useState } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {  getAdmin } from '../Redux/Redux';
import './AddProducts.css'
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addproduct } from '../Service/api';

export const AddProducts = () => {
  const dispatch=useDispatch();
  const admin=useSelector(getAdmin);
  const navigate=useNavigate();
  const [addprod,setAddprod]=useState({
    pid:'',pimage:'',pname:'',pprice:'',pcategory:'',pavailable:''
  });
  const handleChange=(e)=>{
    e.preventDefault();
    setAddprod({...addprod,[e.target.id]:e.target.value});
  }

  // if(!admin)
  // {
  //   return (
  //     <div>
  //       <div className="main d-flex-r">
  //       <TopBar/>
  //       <SideBar/>
  //       <div className="content d-flex-c">
  //         <h1>Session expired...</h1>
  //         <h2>To add products login by link given below</h2>
  //          <h2><span style={{cursor:'pointer',color:'blue'}} onClick={()=>{navigate('/login')}}>click here</span> to login</h2> 
  //       </div>
  //     </div>
  //     </div>
  //   )
  // }

  const handleSubmit=async(e)=>{
    // dispatch(addproduct(addprod));
    if(addprod.pname===''|| addprod.pcategory===''||addprod.pavailable===''||addprod.pprice===''||addprod.ptype==='')
    {
      toast.error("Enter all fields");
    }
    else{
   const prod=await addproduct(addprod);
      console.log(prod.data);
      if(prod.data==='posted successfully')
      {
        toast.success("product added");
        setTimeout(()=>{
          navigate('/viewproduct')
        },2000);
      }
    }
      // else if(prod.data==='Product already exists')
      // {
      //   toast.error(`${addprod.pname} already exists`);
      //   setTimeout(()=>{
      //     navigate('/viewproduct')
      //   },2000);
      // }
  } 
  return (
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
      <SideBar/>
      <div className="content d-flex-c">
        <div className="addprodbody">
        {/* <div className="addprodin">
          <input type='number' placeholder='productid' id='pid' className='apin' onChange={handleChange}></input>
        </div> */}
        <div className="addprodin">
          <input type='text' placeholder='product name' id='pname' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='image url' id='pimage' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='number' placeholder='price' id='pprice'className='apin' onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='category' id='pcategory' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='number' placeholder='available' id='pavailable' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='units' id='ptype' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodsub">
          <Button onClick={handleSubmit} style={{backgroundColor:'green',color:'white',marginLeft:'200px'}}>Add</Button>
        </div>
        <div className="addprodsub2">
          <Button onClick={()=>{navigate('/viewproduct')}} style={{backgroundColor:'red',color:'white',marginTop:'-64px',marginLeft:'120px'}}>Cancel</Button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

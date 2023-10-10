import React, { useState } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct, getAdmin } from '../Redux/Redux';
import './AddProducts.css'
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AddProducts = () => {
  const dispatch=useDispatch();
  const admin=useSelector(getAdmin);
  const navigate=useNavigate();
  const [addprod,setAddprod]=useState({
    id:'',image:'',name:'',price:'',category:'',available:''
  });
  const handleChange=(e)=>{
    e.preventDefault();
    setAddprod({...addprod,[e.target.id]:e.target.value});
  }

  if(!admin)
  {
    return (
      <div>
        <div className="main d-flex-r">
        <TopBar/>
        <SideBar/>
        <div className="content d-flex-c">
          <h1>Session expired...</h1>
          <h2>To add products login by link given below</h2>
           <h2><span style={{cursor:'pointer',color:'blue'}} onClick={()=>{navigate('/login')}}>click here</span> to login</h2> 
        </div>
      </div>
      </div>
    )
  }

  const handleSubmit=(e)=>{
    if(addprod.id==='')
    {
      toast.error("Id is mandatory")
    }
    else{
      dispatch(addproduct(addprod));
      console.log(addprod);
      toast.success("product added");
      setTimeout(()=>{
        navigate('/viewproduct')
      },2000);
    }
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
        <div className="addprodin">
          <input type='number' placeholder='productid' id='id' className='apin' onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='image url' id='image' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='product name' id='name' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='number' placeholder='price' id='price'className='apin' onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='category' id='category' className='apin'onChange={handleChange}></input>
        </div>
        <div className="addprodin">
          <input type='text' placeholder='available' id='available' className='apin'onChange={handleChange}></input>
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

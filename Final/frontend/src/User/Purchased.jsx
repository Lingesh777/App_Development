import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getOrder, getQuant, getpur, removeFromCart, removepur, removeupquant } from '../Redux/Redux';
import { editproduct } from '../Service/api';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Purchased = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const quant=useSelector(getQuant);
    const purquant=useSelector(getpur);
    const [tabledata,setTabledata]=useState(purquant);


    const upquant=async()=>{
      console.log(quant);
      quant.forEach(async prod=>{
        console.log(`${prod.pid}`);
        console.log(`${prod.pavailable}`);

        const data={
          pavailable:prod.pavailable,
          pcategory:prod.pcategory,
          pname:prod.pname,
          pprice:prod.pprice,
          pimage:prod.pimage,
          quantity:prod.quantity,
          ptype:prod.ptype
        }
        const res=await editproduct(prod.pid,data);
        console.log(res.data);
      });
      quant.map((prod)=>{
        dispatch(removeFromCart(prod.pid));
        dispatch(removeupquant(prod.pid));
      })
      purquant.map((prod)=>{
        dispatch(removepur(prod.pid))
      })
      toast.success("purchase done");
      setTimeout(()=>{
        navigate('/user/review')
      },2000);
      
    }

    const home=()=>{
      quant.map((prod)=>{
        dispatch(removeupquant(prod.pid));
      })
      purquant.map((prod)=>{
        dispatch(removepur(prod.pid))
      })
      navigate('/user/cart')
    }
    
    const total=purquant.reduce((acc,product)=>{
      return acc+product.pprice*product.quantity; 
  },0);

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
       <h1 style={{marginLeft:'3%'}}>Please, verify with your products...</h1>
       <h3 style={{marginLeft:'3%'}}><bold>Note : </bold>If the selected product is not shown here then the products will be in limited stock than you selected.</h3>
       <h3 style={{marginLeft:'100px'}}>please reduce the quantity or wait for the products updation.</h3>
       <table style={{width:'45vw',marginTop:'60px',marginLeft:'30%'}} className='vptable'>
          <tr>
            <th>product id</th>
            <th>product name</th>
            <th>selected quantity</th>
            <th>product total</th>
          </tr>
        <tbody style={{textAlign:'center'}}>
        {tabledata.map((prod)=>(
          <tr >
            <td>{prod.pid}</td>
            <td>{prod.pname}</td>
            <td>{prod.quantity} {prod.ptype}</td>
            <td>{prod.quantity}*{prod.pprice} = ₹ {prod.quantity*prod.pprice}</td>
          </tr>
        ))}
        </tbody>
       </table>
       <h3 style={{marginLeft:'44%'}}>Total Amount : ₹ {total}</h3>
       <div className='purbut' style={{marginTop:'30px',marginLeft:'20%'}}>
        <Button onClick={()=>home()} style={{backgroundColor:'red',color:'white',marginLeft:'30%'}}>Back</Button>
        <Button onClick={()=>upquant()} style={{backgroundColor:'green',color:'white',marginLeft:'20px'}}>Confirm</Button>
        </div>
    </div>
  )
}

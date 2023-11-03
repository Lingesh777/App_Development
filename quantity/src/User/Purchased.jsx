import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getQuant, removeFromCart } from '../Redux/Redux';
import { editproduct } from '../Service/api';

export const Purchased = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const quant=useSelector(getQuant);
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
        dispatch(removeFromCart(prod.pid));
      });
      navigate('/user/viewproduct')
    }
    const home=()=>{
      navigate('/user')
    }
  return (
    <div>
       <h1>Purchased</h1>
       <Button onClick={home}>Home</Button>
       <Button onClick={()=>upquant()}>Back</Button>
    </div>
  )
}

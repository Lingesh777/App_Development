import React from 'react'
import { TopBar } from './TopBar'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { getproduct } from '../Service/api'
import { useEffect } from 'react'

export const NotifyAdmin = ({isOpen1,onClose}) => {

   const[prod,setProd]=useState([]);
   const fetchprod=async()=>{
       try{
    const res=await getproduct();
    setProd(res.data);
   }
   catch(error){
    console.error('Error fetching products');
   }
}
   useEffect(()=>{
    fetchprod();
   },[]) 
   const product=prod.filter((product)=> product.pavailable<10);
   console.log(product);

   if(!isOpen1)
        return null;
    if(product.length>=1)
    {
    return (
        // <div className="main d-flex-r">
        //     <TopBar/>
        //     <SideBar/>
        //     <div className="content d-flex-c">
        //         <div>
        //         {product.map((pro)=>(
        //             <ul>
        //             <li><h3 key={pro.pid}>{pro.pname} only {pro.pavailable} {pro.ptype} available</h3></li>
        //             </ul>
        //         ))}
        //         </div>
        //     </div>
        // </div>
        <div className="notbody" onClick={onClose}>
    <div className='notification-box' style={{marginLeft:'15%',marginBottom:'5%'}}>
        <h3>Note : These products are available in less quantity</h3>
    {product.map((pro)=>(
                    <ul>
                    <li><h3 key={pro.pid}>{pro.pname} only {pro.pavailable} {pro.ptype} available</h3></li>
                     </ul>
                ))}
    <h3>Kindly Update these products as soon as possible</h3>
    </div>
    </div>
      )
    }
    else{
        return(
            <div className="notbody" onClick={onClose}>
    <div className='notification-box' style={{marginLeft:'15%',marginBottom:'5%'}}>
    <h3>Currently No updates needed</h3>
    <h3>All Products are available at safe quantity </h3>
    <h3>If any product needs to be updated will notify here </h3>
    </div>
    </div>
        )
    }
}

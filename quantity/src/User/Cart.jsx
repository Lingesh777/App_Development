import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBarUser } from '../Bar/SidebarUser'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder, decreasequantity, getCart, getOrder, getQuant, increasequantity, removeFromCart, updatequantity } from '../Redux/Redux'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const navigate=useNavigate();
  const prod=useSelector(getCart);
  const dispatch =useDispatch();
  const quan=useSelector(getQuant);
  const del=(product)=>{
    console.log(product);
    dispatch(removeFromCart(product.pid));
  }
  const handledecrease=(productid)=>{
    dispatch(decreasequantity(productid));
  }
  const handleincrease=(productid)=>{
    dispatch(increasequantity(productid));
  }
  const totalAmount=prod.reduce((acc,product)=>{
    return acc+product.pprice*product.quantity; 
},0);

const myorder=(product)=>{
console.log(product);
console.log(`${totalAmount}`);
const addData={
product:product,
totalAmount:`${totalAmount}`
};
dispatch(addOrder(addData));

product.forEach(prod=>{
  console.log(`${prod.pid}`);
  console.log(`${prod.quantity}`);
  console.log(`${prod.pavailable}`);
  const data={
    pid:prod.pid,
    pavailable:prod.pavailable,
    pcategory:prod.pcategory,
    pname:prod.pname,
    pprice:prod.pprice,
    pimage:prod.pimage,
    quantity:prod.quantity,
    ptype:prod.ptype
  }
  if(prod.pavailable>=prod.quantity)
  {
    dispatch(updatequantity(data));
    navigate('/user/purchase');
  }
  else
  {
    console.log("No stock available");
  }
  // console.log(quan);
});
}

if(totalAmount===0)
{
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBarUser/>
      <div className="content d-flex-c">
        <h1>No products available in Your Cart</h1>
         <h2><span style={{cursor:'pointer',color:'blue'}} onClick={()=>{navigate('/user/viewproduct')}}>click here</span> to view products.</h2> 
      </div>
    </div>
    </div>
  )
}

  return (
    <div>
       <div className="main d-flex-r">
            <TopBar/>
            <SideBarUser/>
        <div className="content d-flex-c">
         <h1 style={{marginTop:'-10px'}}>Your cart</h1>
         <table style={{width:'60vw'}} className='vptable'>
            <tr>
              <th>Id</th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              {/* <th>Available</th> */}
              {/* <th>Cart</th> */}
              <th>Remove from cart</th>
            </tr>
            <tbody style={{textAlign:'center'}}>
              {prod.map((product)=>(
                <tr>
                  <td>{product.pid}</td>
                  <td><img src={product.pimage} style={{width:'70px',height:'70px',borderRadius:'50%'}}></img></td>
                  <td>{product.pname}</td>
                  <td>₹ {product.pprice}</td>
                  <td>
                    <span className='d-flex-r'>
                      <button style={{cursor:'pointer'}} onClick={()=>{handledecrease(product.pid)}}>-</button>
                      <h3 style={{padding:'8px'}}>{product.quantity}</h3>
                      <button style={{cursor:'pointer'}} onClick={()=>{handleincrease(product.pid)}}>+</button>
                    </span>
                    </td>
                  {/* <td>{product.available}</td> */}
                  {/* <td style={{cursor:'pointer'}} onClick={()=>cart(product)}>Add to Cart</td> */}
                  <td onClick={()=>del(product)} style={{cursor:'pointer'}}><DeleteIcon/></td>
                </tr>
              ))}
              </tbody>
              </table>
              <h3>Total :  ₹{totalAmount} </h3>
              <Button style={{backgroundColor:'green',color:'white'}} onClick={()=>myorder(prod)}>Checkout</Button>
         </div>
     </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import { useSelector } from 'react-redux'
import { getProduct } from '../Redux/Redux'
import './Admin.css'
import { getproduct } from '../Service/api'
import { useState } from 'react'

export const Reports = () => {
  // const prod=useSelector(getProduct);
  const[prod,setProd]=useState([]);
const fetchprod=async()=>{
  try{
    const res=await getproduct();
    setProd(res.data);
    console.log(res.data);
  }
  catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  fetchprod();
},[])

const calprice=()=>{
  let tot=0;
  prod.map((product)=>{
    tot+=(product.pavailable*product.pprice);
  });
  return tot;
}
const calcat=()=>{
    const cat=[];
    prod.map((product)=>{
      if(!cat.includes(product.pcategory))
        cat.push(product.pcategory);
    })
    return cat.length;
    
  }
const [category,setCategory]=useState([]);
const[catshow,setCatshow]=useState(false);

const showcat=()=>{
    const cat=[];
    prod.map((product)=>{
      if(!cat.includes(product.pcategory))
        cat.push(product.pcategory);
    })
    setCategory(cat);
    setCatshow(!(catshow));
  }
  const [item,setItem]=useState([]);
const[prodshow,setProdshow]=useState(false);
  const showprod=()=>{
      const prodlist=[];
      prod.map((product)=>{
        prodlist.push(product.pname);
      })
      setItem(prodlist);
      setProdshow(!prodshow)
  }

  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c">
        <h2>Here's your report...</h2>
        <div className="repbody">
        <div className="repbox" onClick={()=>showprod()} style={{cursor:'pointer'}}>
          <h2 style={{marginLeft:'20px'}}>Total Products</h2>
          <h2 style={{marginLeft:'100px'}}>{prod.length}</h2>
        </div>
        <div className="repbox">
          <h2 style={{marginLeft:'45px'}}>Total Price</h2>
          <h2 style={{marginLeft:'70px'}}>{calprice()}</h2>
        </div>
        <div className="repbox" onClick={()=>showcat()} style={{cursor:'pointer'}}>
          <h2 style={{marginLeft:'20px'}}>Total Categories</h2>
          <h2 style={{marginLeft:'100px'}} >{calcat()}</h2>
        </div>

        {catshow && (
              <div className="categories-container" style={{marginLeft:'650%'}}>
                <h3>Categories:</h3>
                <ul>
                  {category.map((cat, index) => (
                    <li key={index}>{cat}</li>
                  ))}
                </ul>
              </div>
            )}
        {prodshow && (
              <div className="product-container" style={{position:'fixed',top:'50%',left:'37%'}} >
                <h3>Products:</h3>
                <ul>
                  {item.map((cat, index) => (
                    <li key={index}>{cat}</li>
                  ))}
                </ul>
              </div>
            )}

        </div>
      </div>
    </div>
    </div>
  )
}

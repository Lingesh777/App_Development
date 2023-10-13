import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import { useSelector } from 'react-redux'
import { getProduct } from '../Redux/Redux'
import './Admin.css'

export const Reports = () => {
  const prod=useSelector(getProduct);
  const calprice=()=>{
    let tot=0;
    for(let i=0;i<prod.length;i++)
    {
      let value=Number(prod[i].price);
      tot+=value;
    }
    console.log(tot);
    return tot;
  }
  const calcat=()=>{
    const cat=[];
    for(let i=0;i<prod.length;i++)
    {
      let val=prod[i].category;
      if(!cat.includes(val))
        cat.push(val);
    }
    return cat.length;
  }
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c">
        <h2>Here's your report...</h2>
        <div className="repbody">
        <div className="repbox">
          <h2 style={{marginLeft:'20px'}}>Total Products</h2>
          <h2 style={{marginLeft:'100px'}}>{prod.length}</h2>
        </div>
        <div className="repbox">
          <h2 style={{marginLeft:'45px'}}>Total Price</h2>
          <h2 style={{marginLeft:'70px'}}>{calprice()}</h2>
        </div>
        <div className="repbox">
          <h2 style={{marginLeft:'20px'}}>Total Categories</h2>
          <h2 style={{marginLeft:'100px'}}>{calcat()}</h2>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

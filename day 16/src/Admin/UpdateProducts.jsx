import React, { useState } from "react";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getToUpdate, removeToUpdate, updateproduct } from "../Redux/Redux";
import "./AddProducts.css";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

export const UpdateProducts = () => {
  const product = useSelector(getToUpdate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialUpState = product
    ? {
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
        price: product.price,
        available: product.available,
      }
    : {
        id: '', // Set default values here or handle them as needed
        name: '',
        image: '',
        category: '',
        price: 0, // Set default price or appropriate default value
        available: false, // Set default availability
      };

  const [up, setUp] = useState(initialUpState);



  // const [up, setUp] = useState({
  //   id:product.id,
  //   name: product.name,
  //   image:product.image,
  //   category: product.category,
  //   price: product.price,
  //   available: product.available,
  // });
  const handleChange = (e) => {
    e.preventDefault();
    setUp({ ...up, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(updateproduct(up));
    console.log(up);
    navigate("/viewproduct");
    dispatch(removeToUpdate())
  };
  

  if(!product)
  {
    return(
      <div className="main d-flex-r">
        <TopBar />
        <SideBar />
        <div className="content d-flex-c" style={{ marginTop: "15%" }}>
          <h1>Please select a product that needs to be updated</h1>
          <h3> <span style={{color:'blue',cursor:'pointer'}} onClick={()=>{navigate("/viewproduct")}}>Click here </span>to view products</h3>
        </div>
      </div>
    );
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
        <TopBar />
        <SideBar />
        <div className="content d-flex-c" style={{ marginTop: "8%" }}>
          <div className="upprodbody">
          <div className="updatein">
            <input
              type="number"
              placeholder="id"
              id="id"
              className="upin"
              value={product.id}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="image"
              id="image"
              className="upin"
              value={up.image}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="name"
              id="name"
              className="upin"
              value={up.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="number"
              placeholder="price"
              id="price"
              className="upin"
              value={up.price}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="category"
              id="category"
              className="upin"
              value={up.category}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="available"
              id="available"
              className="upin"
              onChange={handleChange}
              value={up.available}
            ></input>
          </div>
          <div className="updatebut">
            <Button onClick={handleSubmit} style={{backgroundColor:'green',color:'white',marginLeft:'200px'}}>Update</Button>
          </div>
          <div className="updatebut2">
            <Button onClick={()=>{navigate('/viewproduct')}} style={{backgroundColor:'red',color:'white',marginLeft:'120px',marginTop:'-64px'}}>Cancel</Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

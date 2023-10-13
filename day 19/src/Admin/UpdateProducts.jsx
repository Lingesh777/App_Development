import React, { useEffect, useState } from "react";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getToUpdate, removeToUpdate, updateproduct } from "../Redux/Redux";
import "./AddProducts.css";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { editproduct, getproductbypid } from "../Service/api";

export const UpdateProducts = () => {
  // const product = useSelector(getToUpdate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  //   const initialUpState = product
  //     ? {
  //         id: product.pid,
  //         name: product.pname,
  //         image: product.pimage,
  //         category: product.pcategory,
  //         price: product.pprice,
  //         available: product.pavailable,
  //       }
  //     : {
  //         id: '', // Set default values here or handle them as needed
  //         name: '',
  //         image: '',
  //         category: '',
  //         price: 0, // Set default price or appropriate default value
  //         available: false, // Set default availability
  //       };

  // const [up, setUp] = useState(initialUpState);



  const [up, setUp] = useState({
    pid:'',
    pname: '',
    pimage:'',
    pcategory: '',
    pprice: '',
    pavailable: '',
  });
  const fetchid=async()=>{
    try{
    const product=await getproductbypid(id);
    setUp(product.data);
    console.log(product.data)
    }
    catch(error){
      console.log(error)
    }
    }
    useEffect(()=>{
      fetchid();
    },[])
  const handleChange = (e) => {
    e.preventDefault();
    setUp({ ...up, [e.target.id]: e.target.value });
  };
  const handleSubmit =async (up) => {
    console.log(up);
    const res=await editproduct(up.pid,up);
    console.log(res.data);
    if(res.data==="updated successfully")
    {
       navigate("/viewproduct");
    }
    // dispatch(removeToUpdate())
  };
  

  // if(!product)
  // {
  //   return(
  //     <div className="main d-flex-r">
  //       <TopBar />
  //       <SideBar />
  //       <div className="content d-flex-c" style={{ marginTop: "15%" }}>
  //         <h1>Please select a product that needs to be updated</h1>
  //         <h3> <span style={{color:'blue',cursor:'pointer'}} onClick={()=>{navigate("/viewproduct")}}>Click here </span>to view products</h3>
  //       </div>
  //     </div>
  //   );
  // }


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
              id="pid"
              className="upin"
              value={up.pid}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="image"
              id="pimage"
              className="upin"
              value={up.pimage}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="name"
              id="pname"
              className="upin"
              value={up.pname}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="number"
              placeholder="price"
              id="pprice"
              className="upin"
              value={up.pprice}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="category"
              id="pcategory"
              className="upin"
              value={up.pcategory}
              onChange={handleChange}
            ></input>
          </div>
          <div className="updatein">
            <input
              type="string"
              placeholder="available"
              id="pavailable"
              className="upin"
              onChange={handleChange}
              value={up.pavailable}
            ></input>
          </div>
          <div className="updatebut">
            <Button onClick={()  => handleSubmit(up)} style={{backgroundColor:'green',color:'white',marginLeft:'200px'}}>Update</Button>
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

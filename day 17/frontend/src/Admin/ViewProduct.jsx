import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import './Admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeproduct, setToUpdate } from '../Redux/Redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { deleteproduct, getproduct } from '../Service/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';



export const ViewProduct = () => {
  // const prod=useSelector(getProduct);
  // const admin=useSelector(getAdmin);
  const admin=localStorage.getItem('username');
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const[prod,setProd]=useState([]);
  const fetchprod=async()=>{
    try
    {
      const response=await getproduct();
      setProd(response.data);
      console.log(response.data);
    }
    catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  useEffect(()=>{
    fetchprod();
  },[])

// if(!admin)
// {
//   return (
//     <div>
//       <div className="main d-flex-r">
//       <TopBar/>
//       <SideBar/>
//       <div className="content d-flex-c">
//         <h1>Session expired...</h1>
//         <h2>To view products login by link given below</h2>
//          <h2><span style={{cursor:'pointer',color:'blue'}} onClick={()=>{navigate('/login')}}>click here</span> to login</h2> 
//       </div>
//     </div>
//     </div>
//   )
// }

  const edit=(product)=>{
    console.log(product);
    // dispatch(setToUpdate(product));
    navigate(`/updateproduct/${product.pid}`)
  }
  const del=async(product)=>{
    console.log(product);
    // dispatch(removeproduct(product.id));
    const prodid=product.pid;
    const res= await deleteproduct(prodid);
    console.log(res.data);
    if(res.data==="deleted")
    {
      toast.success(`${product.pname} in to bin`)
      fetchprod();
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
      <div className="content d-flex-r">
        <table style={{width:'60vw'}} className='vptable'>
            <tr>
              <th>Id</th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Available</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody style={{textAlign:'center'}}>
              {prod.map((product)=>(
                <tr >
                  <td>{product.pid}</td>
                  <td><img src={product.pimage} style={{width:'70px',height:'70px',borderRadius:'50%'}}></img></td>
                  <td>{product.pname}</td>
                  <td>₹ {product.pprice}</td>
                  <td>{product.pcategory}</td>
                  <td>{product.pavailable}</td>
                  <td onClick={()=>edit(product)} style={{cursor:'pointer'}}><EditIcon/></td>
                  <td onClick={()=>del(product)} style={{cursor:'pointer'}}><DeleteIcon/></td>
                </tr>
              ))}
              </tbody>
            <tr style={{textAlign:'center'}}>
              {/* <td>1</td>
              <td><img src='https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img></td>
              <td>Tomato</td>
              <td>15</td>
              <td>Vegetables</td>
              <td>25 kg</td> */}
            </tr>
            {/* <tr style={{textAlign:'center'}}>
              <td>2</td>
              <td><img src='https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit.jpg' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img></td>
              <td>Apple</td>
              <td>120</td>
              <td>Fruits</td>
              <td>18 kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>3</td>
              <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img></td>
              <td>Onion</td>
              <td>50</td>
              <td>Vegetables</td>
              <td>35 kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>4</td>
              <td><img src='https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img></td>
              <td>Maagi</td>
              <td>20</td>
              <td>Fast Food</td>
              <td>35 pkt</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>5</td>
              <td><img src='https://m.media-amazon.com/images/I/618Kbgwr3zL.jpg' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img></td>
              <td>Hammam</td>
              <td>35</td>
              <td>Soap</td>
              <td>26 pkt</td>
            </tr> */}
            {/* <tr style={{textAlign:'center'}}>
              <td>6</td>
              <td><img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3159b7b4-117f-40b1-9a66-234ce7da76f6/pitch-football-dTlHJg.png' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img></td>
              <td>Football</td>
              <td>450</td>
              <td>Sports</td>
              <td>15 nos</td>
            </tr> */}
            
        </table>
        {/* <div className='vpcontainer d-flex-r'>              
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray',margin:'0 20px'}}>
                      <img src='https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Tomato</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Vegetables</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 25</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 50kg</h4></div>
              </div>
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray',margin:'0 20px'}}>
                      <img src='https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Maagi</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Food</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 20</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 72 pkt</h4></div>
              </div>
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray',margin:'0 20px'}}>
                      <img src='https://m.media-amazon.com/images/I/61BYqhOPA2L.jpg' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Vim Bar</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Kitchen</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 15</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 50 pkt</h4></div>
              </div>
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray'}}>
                      <img src='https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Apple</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Fruits</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 125</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 0kg</h4></div>
              </div>
        </div> */}

      </div>
    </div>
    </div>
  )
}

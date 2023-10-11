import axios from "axios";

let jwtToken=localStorage.getItem('Token');
const authheader=`Bearer${jwtToken}`;
console.log(jwtToken);
const headers={
    'Authorization':authheader,
    'Content-Type':'application/json',
};

const URI="http://localhost:8080";

const userregister=(register)=> axios.post(`${URI}/auth/signup`,register)
const userlogin=(logdata)=> axios.post(`${URI}/auth/login`,logdata)

const getproduct=()=> axios.get(`${URI}/auth/getproduct`)
const getproductbypid=(pid)=> axios.get(`${URI}/auth/getproduct/${pid}`,pid)
const getproductbyname=(pname)=> axios.get(`${URI}/getproductname/${pname}`,{headers})
const getproductbycat=(pcategory)=> axios.get(`${URI}/getproductcategory/${pcategory}`,{headers})
const addproduct=(prod)=> axios.post(`${URI}/auth/postproduct`,prod,{headers})
const editproduct=(pid,prod)=> axios.put(`${URI}/auth/update/${pid}`,prod,{headers})
const deleteproduct=(pid)=> axios.delete(`${URI}/auth/deleteproduct/${pid}`,{headers})

const getreview=()=> axios.get(`${URI}/getreview`,{headers})
const addreview=(rev)=> axios.post(`${URI}/postreview`,rev,{headers})
const deleterev=(rid)=> axios.delete(`${URI}/delete/${rid}`,{headers})

export{userregister,userlogin,getproduct,getproductbypid,getproductbyname,getproductbycat,addproduct,editproduct,deleteproduct,getreview,addreview,deleterev}
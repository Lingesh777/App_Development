import { createSlice } from '@reduxjs/toolkit';

const initialState={
    admin:null,
    signup:[],
    login:[],
    item:[],
    toUpdate:null,
};
const Redux = createSlice({
  name:'admin',
  initialState,reducers:{
    SetAdmin:(state,action)=>{
        state.admin=action.payload
    },
    addsignup:(state,action)=>{
        state.signup.push(action.payload);
    },
    addlogin:(state,action)=>{
        state.login.push(action.payload);
    },
    addproduct:(state,action)=>{
      state.item.push(action.payload);
    },
    removeproduct:(state,action)=>{
      state.item=state.item.filter((product)=> product.id !== action.payload);
    },
    setToUpdate:(state,action)=>{
      state.toUpdate = action.payload;
    },
    removeToUpdate:(state)=>{
      state.toUpdate = null;
    },
    updateproduct:(state,action)=>{
      const data = action.payload;
      console.log(data);
      const exist = state.item.find((ite)=>ite.id===data.id);
      
      exist.name = data.name;
      exist.image = data.image;
      exist.category = data.category;
      exist.price = data.price;
      exist.available = data.available;
    }
  }
});
export const {SetAdmin,addsignup,addlogin,addproduct,removeproduct,updateproduct,setToUpdate,removeToUpdate}=Redux.actions;

export const getAdmin=(state)=>state.adminInfo.admin;
export const getSignup=(state)=>state.adminInfo.signup;
export const getLogin=(state)=>state.adminInfo.login;
export const getProduct=(state)=>state.adminInfo.item;
export const getToUpdate=(state)=>state.adminInfo.toUpdate;

export default Redux.reducer;
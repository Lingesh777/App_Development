import { createSlice } from '@reduxjs/toolkit';

const initialState={
    admin:null,
    signup:[],
    login:[],
    item:[],
    cart:[],
    toUpdate:null,
    order:[],
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
    },
    addToCart:(state,action)=>{
      const newitem=action.payload;
      const existitem=state.cart.find(prod=>prod.pid===newitem.pid);
      if(existitem)
      {
        existitem.quantity+=1;
      }
      else
      {
        state.cart.push({...newitem,quantity:1});
      }
    },
    removeFromCart:(state,action)=>{
      state.cart=state.cart.filter((product)=> product.pid !== action.payload);
    },
    increasequantity:(state,action)=>{
      const itemid=action.payload;
      const existitem=state.cart.find(prod=>prod.pid===itemid);
      if(existitem)
      {
        existitem.quantity+=1;
      }
    },
    decreasequantity:(state,action)=>{
      const itemid=action.payload;
      const existitem=state.cart.find(prod=>prod.pid===itemid);
      if(existitem && existitem.quantity>1)
      {
        existitem.quantity-=1;
      }
    },
    addOrder:(state,action)=>{
      state.order.push(action.payload);
    },
  }
});
export const {SetAdmin,addsignup,addlogin,addproduct,removeproduct,updateproduct,setToUpdate,
  removeToUpdate,addToCart,removeFromCart,increasequantity,decreasequantity,addOrder}=Redux.actions;

export const getAdmin=(state)=>state.adminInfo.admin;
export const getSignup=(state)=>state.adminInfo.signup;
export const getLogin=(state)=>state.adminInfo.login;
export const getProduct=(state)=>state.adminInfo.item;
export const getToUpdate=(state)=>state.adminInfo.toUpdate;
export const getCart=(state)=>state.adminInfo.cart;
export const getOrder=(state)=>state.adminInfo.order;

export default Redux.reducer;
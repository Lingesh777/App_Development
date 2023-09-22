import { createSlice } from '@reduxjs/toolkit';

const initialState={
    admin:null,
    signup:[],
    login:[],
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
  }
});
export const {SetAdmin,addsignup,addlogin}=Redux.actions;

export const getAdmin=(state)=>state.adminInfo.admin;
export const getSignup=(state)=>state.adminInfo.signup;
export const getLogin=(state)=>state.adminInfo.login;

export default Redux.reducer;
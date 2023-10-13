import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const Adminauth = () => {

    const Token=localStorage.getItem('Token')!==null;
    const Role=localStorage.getItem('userrole')==="ADMIN";
  return (
    Token&&Role?<Outlet/>:<Navigate to='/login'/>
  )
};

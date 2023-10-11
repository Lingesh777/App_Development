import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const Userauth = () => {

    const Token=localStorage.getItem('Token')!==null;
    const Role=localStorage.getItem('userrole')==="USER";
  return (
    Token&&Role?<Outlet/>:<Navigate to='/login'/>
  )
}

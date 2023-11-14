import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { useNavigate } from 'react-router-dom'
import { SideBarUser } from '../Bar/SidebarUser'
import { useSelector } from 'react-redux'
import { getAdmin } from '../Redux/Redux'
import { TopBarUser } from '../Bar/TopBarUser'

export const UserHome = () => {
    const navigate=useNavigate();
    // const user=useSelector(getAdmin);
    const user=localStorage.getItem('username');
    if(!user)
    {
      return (
        <div>
            <div className="main d-flex-r">
            <TopBarUser/>
            <SideBarUser/>
            <div className="content d-flex-c">
              <h1>No User found...</h1>
               <h2><span style={{cursor:'pointer',color:'blue'}} onClick={()=>{navigate('/login')}}>click here</span> to login</h2> 
            </div>
          </div>
          </div>
      )
    }
    else
    {
      return(
        <div>
          <div className="main d-flex-r">
          <TopBarUser/>
            <SideBarUser/>
            <div className="content d-flex-c">
              <h1>Pleasure to have u back , {user}!</h1>
              <h3>Why are u waiting ?   Shop Your fav item !</h3>
              <h3><span onClick={()=>{navigate('/user/viewproduct')}} style={{color:'blue',cursor:'pointer'}}> Click here</span> to view products</h3>
            </div>
          </div>
        </div>
      )
    }
}

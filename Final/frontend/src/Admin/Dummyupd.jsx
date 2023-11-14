import React from 'react'
import { TopBar } from '../Bar/TopBar';
import { SideBar } from '../Bar/SideBar';
import { useNavigate } from 'react-router-dom';

export const Dummyupd = () => {
const navigate=useNavigate();

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

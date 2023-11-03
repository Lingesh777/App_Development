import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBarUser } from '../Bar/SidebarUser'

export const Viewreview = () => {
  return (
    <div className="main d-flex-r">
        <TopBar/>
        <SideBarUser/>
        <div className="content d-flex-c">
            <h3>User : <span></span></h3>
        </div>
    </div>
  )
}

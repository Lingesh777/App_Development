import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'

export const AddProducts = () => {
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c"><h2>Lets add on...</h2></div>
    </div>
    </div>
  )
}

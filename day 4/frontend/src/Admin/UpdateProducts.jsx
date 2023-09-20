import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'

export const UpdateProducts = () => {
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c"><h2>Make change on it...</h2></div>
    </div>
    </div>
  )
}

import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'

export const Reports = () => {
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c"><h2>Here's your report...</h2></div>
    </div>
    </div>
  )
}

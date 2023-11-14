import React from 'react'

export const Notification = ({isOpen1,onClose}) => {
    if(!isOpen1)
        return null;
  return (
    <div className="notbody" onClick={onClose}>
    <div className='notification-box' style={{marginLeft:'15%',marginBottom:'5%'}}>
      <ul>
        <li><h1>Monsoon off starts at Dec 1 </h1></li>
        <li><h1>Exciting deals are going on vegetables</h1></li>
        <li><h1>Diwali offer ends on this week</h1></li>
        <li><h1>Hurry up !! Before the offer ends</h1></li>
        </ul>
    </div>
    </div>
  )
}

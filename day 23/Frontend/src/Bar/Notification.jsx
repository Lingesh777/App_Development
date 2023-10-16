import React from 'react'

export const Notification = ({isOpen1}) => {
    if(!isOpen1)
        return null;
  return (
    <div className="notbody">
    <div style={{position:'absolute',top:'250px',left:'600px',border:'2px solid gray'}}>
        <h1>This is to notify u.</h1>
    </div>
    </div>
  )
}

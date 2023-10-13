import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Purchased = () => {
    const navigate=useNavigate();
  return (
    <div>
       <h1>Purchased</h1>
       <Button onClick={()=>{navigate('/user')}}>Home</Button>
    </div>
  )
}

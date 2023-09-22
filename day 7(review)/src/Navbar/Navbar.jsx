import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './Navbar.css';
import {AppBar,Toolbar,Icon} from '@mui/material';
export const Navbar = () => {
    const navigate =useNavigate();
  return (
    <div className="navigationbar">
    <AppBar position="static" sx={{backgroundColor:'black'}}>
      <Toolbar>
        <Icon size="large" edge="start" color="inherit" aria-label="logo">
          <LocalGroceryStoreIcon />
        </Icon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{marginLeft:'10px'}}>
          Cary's
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" style={{border:'1px solid white',borderRadius:'5px'}} onClick={()=>navigate('/login')}>
            Login
          </Button>
          <Button color="inherit" style={{border:'1px solid white',borderRadius:'5px'}} onClick={()=>navigate('/signup')}>
            Signup
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </div>
  )
}

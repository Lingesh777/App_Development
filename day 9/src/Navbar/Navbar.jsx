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
        <Stack direction="row" spacing={3} marginRight={'40px'}>
          <Button color="inherit"  onClick={()=>navigate('/')}>
            Home
          </Button>
          <Button color="inherit"  onClick={()=>navigate('/about')}>
            About us
          </Button>
          <Button color="inherit"  onClick={()=>navigate('/contactus')}>
            Contact us
          </Button>
          <Button color="inherit"  onClick={()=>navigate('/login')}>
            Login
          </Button>
          <Button color="inherit"  onClick={()=>navigate('/signup')}>
            Signup
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </div>
  )
}

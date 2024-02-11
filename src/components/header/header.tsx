import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'

import './header.css'

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <header className='header'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="header-link">
                  Commit Space
                </Link>
              </Typography>
              <Button color="inherit" onClick={() => { navigate('/ranking')}}>
                <AccountCircleIcon sx={{ fontSize: 50 }}/>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
    </header>
  )
}

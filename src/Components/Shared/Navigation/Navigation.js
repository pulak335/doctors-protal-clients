import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import { Container } from '@mui/material';


const Navigation = () => {

  const { user, logout } = useAuth();
  
  const history = useHistory();

  const logOut = () => {
      logout(history)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#1cc7c1' }}>
          <Container>
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctor Protal
            </Typography>

            <Link style={{textDecoration:'none', color:'white'}} to='/appointment'><Button color="inherit">Appointment</Button></Link>
            {
              user?.email && <Link style={{textDecoration:'none', color:'white'}} to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
            }

            {
              user?.email ? <Button onClick={logOut} color="inherit">Log Out</Button>
              :
              <Link style={{textDecoration:'none', color:'white'}} to='/login'><Button color="inherit">Login</Button></Link>
            }
            
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
};

export default Navigation;
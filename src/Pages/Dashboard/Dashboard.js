import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button } from '@mui/material';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import Makeadmin from './Makeadmin/Makeadmin';
import AddDoctor from './AddDoctor/AddDoctor';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from './../../Components/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 200;

const Dashboard = (props) => {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundImage: 'linear-gradient(0deg, #5fc7c7 0%,  #19d3af 75%)', height: '100%' }}>
      <Toolbar>
        <DashboardIcon style={{ color: 'black', fontSize:'28px'}}/>
        <Typography style={{ textAlign: 'center'}} variant="h6" noWrap component="div">
          Dashboard
          </Typography>
      </Toolbar>
      <Divider />

      <div style={{ padding: '13px' }}>
        
        <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}`}><Button color="inherit">Appointment</Button></Link>
      
        {
          admin && <Box>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
        
        <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/adddoctor`}><Button color="inherit">Add Doctor</Button></Link>
          </Box>
        }
        
      </div>

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Doctor Appoinments
          </Typography>
          <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '800px', border: '1px white solid', padding:'5px'}} to='/appointment'><Typography color="inherit" variant="h6">Home</Typography></Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          <Switch>
            <Route exact path={path}>
              <DashboardHome/>
            </Route>
            <Route path={`${path}/payment/:apointmentId`}>
              <Payment/>
            </Route>
            <AdminRoute path={`${path}/makeadmin`}>
              <Makeadmin/>
            </AdminRoute>
            <AdminRoute path={`${path}/adddoctor`}>
              <AddDoctor/>
            </AdminRoute>
          </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

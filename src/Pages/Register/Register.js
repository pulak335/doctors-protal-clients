import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';
import loginImg from '../../images/login.png';
import Navigation from './../../Components/Shared/Navigation/Navigation';
const Register = () => {
    
    const {registerUser,isLoading,user,authError} = useAuth();

    const [signupData, setSigupData] = useState({})

    const history = useHistory()

    const handleField = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...signupData}
        newLoginData[field]=value;
        setSigupData(newLoginData)
    }
    const signupHandle = (e) =>{
        if(signupData.password !== signupData.reRassword){
            alert('your password not match');
            return
        }
        registerUser(signupData.email, signupData.password, signupData.name, history)
        e.preventDefault();
    }

    return (
        <>
          <Navigation></Navigation> 
          
          <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{my:5}} >
              
                  <Typography style={{textAlign:'center', color:'#1cc7c1',marginTop:'90px'}} variant="h4">Registration</Typography>
                  
                  <div style={{display:"flex", justifyContent:"center", marginTop:'40px'}}>
                      
                    { !isLoading && <form style={{width:'90%'}} onSubmit={signupHandle}>
                      
                          <TextField name='name' onBlur={handleField} style={{width:'100%',marginBottom:"5px"}} id="standard-basic" label="Full Name" type="text" variant="standard" />
                          
                          <TextField name='email' onBlur={handleField} style={{width:'100%',marginBottom:"5px"}} id="standard-basic" label="Email" type="email" variant="standard" />
                          
                          <TextField name='password' onBlur={handleField} style={{width:'100%', marginBottom:"5px"}} id="standard-basic" label="Password" type="password" variant="standard" />

                          <TextField name='reRassword' onBlur={handleField} style={{width:'100%'}} id="standard-basic" label="Re-Password" type="password" variant="standard" />
                          
                          <Link to='/login' style={{textDecoration:'none'}}> <Typography style={{color:"#19d3af",marginTop:'10px'}} variant='body2'>Existing User? Log In your Account</Typography> </Link> 
                          
                          <Button type="submit" variant="contained" style={{backgroundImage:'linear-gradient(to right, #5fc7c7 0%, #19d3af 100%)', width:'100%', marginTop:'60px'}}>Sign up</Button>
                          
                      </form>}
                      {
                          isLoading && <CircularProgress />
                      }
                      {
                          user?.email && <Alert severity="success">Registartion Successfull</Alert>
                      }
                      {
                        authError && <Alert severity="error">Registartion Failed</Alert>
                      }
                  </div>
              </Grid>
              <Grid item xs={12} md={6}>
                  <img src={loginImg} style={{width:"100%",margin:0}} alt="" srcset="" />
              </Grid>
          </Grid>
      </Container>
        </>
    );
};

export default Register;
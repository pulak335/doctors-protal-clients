import React,{useState} from 'react';
import { Button, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link, useHistory , useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import loginImg from '../../images/login.png';
import Navigation from '../../Components/Shared/Navigation/Navigation';

const Login = () => {

    const location = useLocation()
    const history = useHistory()

    const {loginUser,authError,user,isLoading, signInWithGoogle}=useAuth()

    const [loginData, setLoginData] = useState({})
    const handleField = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
    }
    const loginHandle = (e) =>{
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const googleSignin=()=>{
        signInWithGoogle(location,history)
    }

    return (
        <>
        <Navigation></Navigation>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{my:5}} >
                    <Typography style={{textAlign:'center', color:'#1cc7c1',marginTop:'90px'}} variant="h4">Login</Typography>
                    <div style={{display:"flex", justifyContent:"center", marginTop:'40px'}}>
                            {!isLoading && <form style={{ width: '90%' }} onSubmit={loginHandle}>
                                
                                <TextField name='email' onBlur={handleField} style={{ width: '100%', marginBottom: "5px" }} id="standard-basic" label="Email" type="email" variant="standard" />
                                
                                <TextField name='password' onBlur={handleField} style={{ width: '100%' }} id="standard-basic" label="Password" type="password" variant="standard" />
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    
                            
                                <Link to='/lostpassword' style={{ textDecoration: 'none' }}> <Typography style={{ color: "#990000", marginTop: '10px' }} variant='body2'>Forget your password?</Typography> </Link>
                                    
                                <Link to='/signup' style={{ textDecoration: 'none' }}> <Typography style={{ color: "#19d3af", marginTop: '10px' }} variant='body2'>New User? Create an account</Typography> </Link>
                                    
                            </div>
                            <Button type="submit" variant="contained" style={{backgroundImage:'linear-gradient(to right, #5fc7c7 0%, #19d3af 100%)', width:'100%', marginTop:'60px'}}>Sign in</Button>
                        </form>}
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Registartion Successfull</Alert>
                        }
                        {
                          authError && <Alert severity="error">Password Incorrect!</Alert>
                        }
                    </div>
                        <p style={{ textAlign: 'center' }}>--------------------------------------------</p>
                        
                    <Button onClick={googleSignin}variant="contained" style={{backgroundImage:'linear-gradient(to right, #5fc7c7 0%, #19d3af 100%)', width:'100%', marginTop:'10px'}}>Sign in with google</Button>
                    </Grid>

                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{width:"100%",margin:0}} alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Login;
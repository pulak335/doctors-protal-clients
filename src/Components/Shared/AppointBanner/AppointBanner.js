import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import React from 'react';

import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
const AppointBanner = () => {

    const appointStyle = {
        background:`url(${bg})`,
        backgroundColor:"rgba(20, 22, 45 ,0.9)",
        backgroundBlendMode:'darken, luminosity',
        marginTop:"175px"
    }
    return (
        <Container>
        <Box style={appointStyle} sx={{ flexGrow: 1 }}>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
            style={{width:"520px", marginTop:"-150px"}}
            src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex',alignItems: 'center'}}>
                <Box>
                    <Typography variant="h6"  sx={{ fontWeight: 400}} style={{color:"#5fc7c7"}}>
                        Appointment
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 400, my: 4}} style={{color:"white"}}>
                        Make an Appointment Today
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 300,mb: 3}} style={{color:"white"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sapiente consequatur laudantium fugiat deleniti esse eius. Numquam, totam.
                    </Typography>
                    <Button variant="contained" style={{backgroundImage:'linear-gradient(to right, #19d3af 0%,#5fc7c7 40%, #5fc7c7 100%)'}} sx={{px:3}}>Learn More</Button>
                </Box>
                </Grid>
        </Grid>
        </Container>
        </Box>
        </Container>
    );
};

export default AppointBanner;
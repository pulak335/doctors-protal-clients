import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import React from 'react';

import Bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
const Benner = () => {

    const bgStyle={
        background:`url(${Bg})`,
        
    }

    const alignCenter = {
        display:'flex',
        alignItems:'center',
        height:'500px',
        justifyContent: 'center'
    }
    return (
        <Container>
    <Box style={bgStyle} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid  style={alignCenter} item xs={12} md={6}>
        <Box sx={{p:4}}>
          <Typography variant="h3">
              Your New Smile <br/> Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:4, fontSize:14,fontWeight:400,color:'gray'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum rerum iusto ea dolorum, velit magnam.Laborum rerum iusto ea dolorum, velit magnam.
          </Typography>
          <Button variant="contained" style={{backgroundImage:'linear-gradient(to right, #19d3af 0%, #5fc7c7 40%, #5fc7c7 100%)'}}>GET APPOINTMENT</Button>
          </Box>
        </Grid>
          <Grid style={alignCenter} item xs={12} md={6}>
                <img style={{width:"450px"}} src={chair} alt="" srcset="" />
          </Grid>
    </Grid>
      </Box>
      </Container>
      
    );
};

export default Benner;
import { Container, Grid } from '@mui/material';
import Paper  from '@mui/material/Paper';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import CardMedia from '@mui/material/CardMedia';

import React from 'react';

import doctor from '../../images/doctor-small.png'

const Doctors = () => {
    return (
        <Container sx={{my:5}}>
        <Typography sx={{fontWeight:800, my:5}} style={{color:'#1cc7c1', textAlign:'center'}} variant='h4'>Our Doctors</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} xm={6} md={4}>
        <Paper elevation={0}>
        <Box sx={{m:'auto'}}>
        <CardMedia
        component="img"
        image={doctor}
        alt="green iguana"
      />
            <Typography sx={{fontWeight:800,mt:3}} style={{fontSize:"20px", textAlign:'center'}}  variant='h5'>Dr. Curadi</Typography>
            <Box sx={{ display:'flex', justifyContent:"center"}}>
                <PhoneInTalkRoundedIcon style={{fontSize:"18px", color:'#10cfe4'}}></PhoneInTalkRoundedIcon>
                <Typography color='text.secondary' sx={{px:1}} style={{fontSize:"12px"}}  variant='h6'>+088 5544 5556</Typography>
            </Box>
        </Box>
        </Paper>
    </Grid>
            <Grid item xs={12} xm={6} md={4}>
                <Paper elevation={0}>
                <Box sx={{m:'auto'}}>
                <CardMedia
                component="img"
                image={doctor}
                alt="green iguana"
              />
                    <Typography sx={{fontWeight:800,mt:3}} style={{fontSize:"20px", textAlign:'center'}}  variant='h5'>Dr. Curadi</Typography>
                    <Box sx={{ display:'flex', justifyContent:"center"}}>
                        <PhoneInTalkRoundedIcon style={{fontSize:"18px", color:'#10cfe4'}}></PhoneInTalkRoundedIcon>
                        <Typography color='text.secondary' sx={{px:1}} style={{fontSize:"12px"}}  variant='h6'>+088 5544 5556</Typography>
                    </Box>
                </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} xm={6} md={4}>
                <Paper elevation={0}>
                <Box sx={{m:'auto'}}>
                <CardMedia
                component="img"
                image={doctor}
                alt="green iguana"
              />
                    <Typography sx={{fontWeight:800,mt:3}} style={{fontSize:"20px", textAlign:'center'}}  variant='h5'>Dr. Curadi</Typography>
                    <Box sx={{ display:'flex', justifyContent:"center"}}>
                        <PhoneInTalkRoundedIcon style={{fontSize:"18px", color:'#10cfe4'}}></PhoneInTalkRoundedIcon>
                        <Typography color='text.secondary' sx={{px:1}} style={{fontSize:"12px"}}  variant='h6'>+088 5544 5556</Typography>
                    </Box>
                </Box>
                </Paper>
            </Grid>
        </Grid>
        </Container>
    );
};

export default Doctors;
import Box  from '@mui/material/Box';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { Container, Grid, Typography } from '@mui/material';
import Paper  from '@mui/material/Paper';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

import React from 'react';

const ShortInfo = () => {

    const CardHead={
        fontSize:"20px",
        fontWeight:"600"
    }
    const iconSize={
        fontSize:'75px'
    }

    const cardBg={
        backgroundColor:'#1cc7c1',
        color:'white'
    }
    const muiStyle={
        display: 'flex',
        justifyContent: 'center',
         alignItems: 'center',
         p:3
    }
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} xm={6} md={4}>
            <Paper elevation={3}>
                <Box style={cardBg} sx={muiStyle}>
                <AccessTimeRoundedIcon style={iconSize}></AccessTimeRoundedIcon>
                <Box sx={{p:3}}>
                    <Typography style={CardHead} variant='h5'>Opening Hours</Typography>
                    <Typography style={{fontSize:"12px"}} variant='h6'>Opning 8 AM - Close 10 PM </Typography>
                </Box>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={12} xm={6} md={4}>
            <Paper elevation={3}>
            <Box style={{backgroundColor:'#3a4256', color:'white'}} sx={muiStyle}>
                <LocationOnRoundedIcon style={iconSize}></LocationOnRoundedIcon>
                <Box sx={{p:3}}>
                    <Typography style={CardHead} variant='h5'>Visit our location</Typography>
                    <Typography style={{fontSize:"12px"}}  variant='h6'>Beoond, New York, USA </Typography>
                </Box>
            </Box>
            </Paper>
        </Grid>
        <Grid item xs={12} xm={6} md={4}>
            <Paper elevation={3}>
            <Box style={cardBg} sx={muiStyle}>
                <PhoneInTalkRoundedIcon style={iconSize}></PhoneInTalkRoundedIcon>
                <Box sx={{p:3}}>
                    <Typography style={CardHead} variant='h5'>Contact us now</Typography>
                    <Typography style={{fontSize:"12px"}}  variant='h6'>+088 5544 5556</Typography>
                </Box>
            </Box>
            </Paper>
        </Grid>
    </Grid>
        </Container>
    );
};

export default ShortInfo;
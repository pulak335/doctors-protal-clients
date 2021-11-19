import { Button, Grid, Paper, Typography } from '@mui/material';

import React from 'react';

import AppointModal from '../../../Shared/AppointModal/AppointModal';

const Booking = ({time, date,setBookingSuccess}) => {
    const {name,timing,spaces,price} = time;

    
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={0} sx={{ py:5, px:3}}>
            <Typography style={{color:"#5fc7c7"}} sx={{ fontWeight: 600 }} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography style={{color:"gray"}} sx={{fontWeight: 600, fontSize:16}} variant="h6" gutterBottom component="div">
                {timing}
            </Typography>
                    
            <Typography style={{color:"#1ed3b1"}} sx={{ fontWeight: 600 }} variant="h6" gutterBottom component="div">
              Price: $ {price}
            </Typography>
            <Typography sx={{fontWeight: 600, fontSize:12}} color="text.secondary" variant="subtitle2" gutterBottom component="div">
                {spaces} SPACES AVAIBALE
            </Typography>
            <Button onClick={handleOpenBooking} variant="contained" style={{backgroundImage:'linear-gradient(to right, #19d3af 0%, #5fc7c7 70%, #5fc7c7 100%)'}}>Book APPOINTMENT</Button>
            </Paper>
        </Grid>
        <AppointModal date={date} setBookingSuccess={setBookingSuccess}  time={time} handleBookingClose={handleBookingClose} openBooking={openBooking}></AppointModal>
        </>
    );
};

export default Booking;
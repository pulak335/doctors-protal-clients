import { Alert, Container, Grid } from '@mui/material';
import  Typography  from '@mui/material/Typography';
import React,{useState} from 'react';
import Booking from './AppointAva/Booking/Booking';

const times = [
    {
        id:1,
        name:'Teeth Orthodontics',
        timing: '8:00 AM - 9:00 AM',
        price:65,
        spaces:10
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        timing: '10:05 AM - 11:30 AM',
        price:55,
        spaces:10
    },
    {
        id:3,
        name:'Teeth Cleaning',
        timing: '5:00 PM - 6:30 PM',
        price:60,
        spaces:10
    },
    {
        id:4,
        name:'Cavity Protection',
        timing: '7:00 AM - 8:30 AM',
        price:50,
        spaces:10
    },
    {
        id:5,
        name:'Teeth Orthodontics',
        timing: '8:00 AM - 9:30 AM',
        price:70,
        spaces:18
    },
    {
        id:5,
        name:'Teeth Orthodontics',
        timing: '8:00 AM - 9:30 AM',
        price:55,
        spaces:11
    },
]


const Appointava = ({ date }) => {
    
    const [bookingSuccess, setBookingSuccess] = useState(false)

    return (
        <Container style={{textAlign:'center', marginTop:'20px'}}>
            <Typography style={{color:"5fc7c7"}} sx={{ fontWeight: 700,mb:4 }} variant="h5">Apponitment Avaible  {date.toDateString()}</Typography>
            {
                    bookingSuccess && <Alert severity="success">Registartion Successfull</Alert>
            }
            <Grid container spacing={2}>
                {
                    times.map(time=><Booking setBookingSuccess={setBookingSuccess} date={date} time={time} key={time.id}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default Appointava;
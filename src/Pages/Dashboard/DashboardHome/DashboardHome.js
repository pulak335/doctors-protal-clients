import React from 'react';
import { Grid } from '@mui/material';
import DatePicker from './../../../Components/Shared/DatePicker/DatePicker';
import Appointments from './../Appointments/Appointments';
const DashboardHome = () => {
    
    const [date, setDate] = React.useState(new Date());
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <DatePicker setDate={setDate} date={date}></DatePicker>
            </Grid>
            <Grid item xs={12} md={7}>
              <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
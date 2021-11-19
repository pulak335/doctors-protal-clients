import { Container, Grid } from '@mui/material';

import React from 'react';

import DatePicker from '../Shared/DatePicker/DatePicker';
import chair from '../../images/chair.png'

const AppointHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <DatePicker date={date} setDate={setDate}></DatePicker>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src={chair} alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointHeader;
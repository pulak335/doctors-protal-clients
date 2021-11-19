import { Button, Container, Grid, Typography } from '@mui/material';

import React from 'react';

import imgTreatment from '../../images/treatment.png'

const TreatmentBanner = () => {
    return (
        <Container sx={{my:5}}>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <img style={{width:'500px', margin:'0'}} src={imgTreatment} alt="" srcset="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{lineHeight: 1, fontWeight:'400', fontSize:'56px', mt:5}} variant='h4'>Exceptional Dental Care, on your terms</Typography>
                    <Typography sx={{ my:5, fontWeight:'500',fontSize:'18px' }} color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis fuga ea expedita ratione ad nobis, recusandae odio dolores rerum. Optio, consequatur ipsum officia autem quam deleniti placeat quidem, officiis sit fuga excepturi enim! Optio, consequatur ipsum officia autem quam deleniti placeat quidem, officiis sit fuga excepturi enim!
                    </Typography>
                    <Button sx={{ mt:5, px:5}} variant="contained" style={{backgroundImage:'linear-gradient(to right, #19d3af 0%, #5fc7c7 40%,#5fc7c7 100%)'}}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TreatmentBanner;
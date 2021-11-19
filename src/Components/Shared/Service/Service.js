
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import React from 'react';

import OneServ from './OneServ';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
const services=[
    {
        name:'Fluoride Treatment',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio laboriosam quisquam. Temporibus possimus saepe quas earum ad exercitationem pariatur maiores tenetur, sit alias? Earum aut dolor placeat debitis hic beatae ullam eveniet. Sint, quibusdam.',
        img:fluoride
    },
    {
        name:'cavity Treatment',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio laboriosam quisquam. Temporibus possimus saepe quas earum ad exercitationem pariatur maiores tenetur, sit alias? Earum aut dolor placeat debitis hic beatae ullam eveniet. Sint, quibusdam.',
        img:cavity
    },
    {
        name:'whitening Treatment',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio laboriosam quisquam. Temporibus possimus saepe quas earum ad exercitationem pariatur maiores tenetur, sit alias? Earum aut dolor placeat debitis hic beatae ullam eveniet. Sint, quibusdam.',
        img:whitening
    }
]
    const Service = () => {
        
    return (
        <Box sx={{ flexGrow: 1, mb:4 }}  style={{textAlign:"center"}}>
            <Container>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600, m: 2 }}>
                OUR SERVICES
          </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 600, mb:5 }} style={{color:"#5fc7c7"}}>
                Services We Provide
          </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((service) => (
              <Grid item xs={2} sm={4} md={4}>
                <OneServ key={service.name} service={service}></OneServ>
              </Grid>
            ))}
          </Grid>
          </Container>
      </Box>
    );
};

export default Service;
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import React from 'react';

const OneServ = (props) => {
    const {name, discription,img}=props.service;
    return (
        <Card sx={{ minWidth: 275, border: 0,boxShadow: 0 }}>
                <CardMedia
                component="img"
                style={{width:"auto", height:"80px", margin:"0 auto"}}
                image={img}
                alt="Paella dish"
            />
          <CardContent>
            <Typography variant="h5" component="div" style={{color:"black"}}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {discription}
            </Typography>
          </CardContent>
        </Card>
    );
};

export default OneServ;
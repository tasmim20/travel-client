import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Images from './Images';

const Home = () => {
    return (
        <div>
            <h2>home</h2>
          <Container>  
          <Typography variant='h4'>Explore Bangladesh</Typography>
            <Images></Images>
            
            </Container>
        </div>
    );
};

export default Home;
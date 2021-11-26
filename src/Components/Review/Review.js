import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Review = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="div">
                Our Valueable Customer Reviews
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1>this is review</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h1>this is review</h1>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Review;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import banner from '../../images/banner.jpeg'
import { height } from '@mui/system';

const bannerBg = {
    background: `url(${banner})`,
    height: 460
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={5} sx={{ alignContent: 'center', marginTop: 15 }}>
                    <Typography variant="h4">
                        JEWELLERY WEBSITE
                    </Typography>
                    <Typography variant="h6">
                        We have created a set of full-width banner style images for your
                        jewellery website pages. Each banner download will come with a plain banner
                        image plus some text placement and button ideas. Each download
                    </Typography>
                    <Button variant="contained">Click here</Button>
                </Grid>
                <Grid item xs={12} md={7}>

                </Grid>
            </Grid>
        </Box >
    );
};

export default Banner;
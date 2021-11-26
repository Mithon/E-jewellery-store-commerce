import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <Box item xs={4} sm={4} md={12} sx={{ flexGrow: 1 }}>
            <Grid sx={{ bgcolor: 'text.primary', height: 200 }} container spacing={3} columns={16}>
                <Grid item xs="auto">
                    <Typography sx={{ color: 'white' }} variant="h4" component="div">
                        Visit Menu
                    </Typography>
                    <Item>Ear Items</Item>
                    <Item>Nose Items</Item>
                    <Item>Jewellery set</Item>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ color: 'white' }} variant="h4" component="div">
                        About Us
                    </Typography>
                    <Item>E-jewellery is the most bigger e-commerce market place in Bangladesh.
                        we all ways provide best product for our customer .
                        Our head office in Dhaka.
                        our customer care number is 735687463
                    </Item>
                </Grid>
                <Grid item xs>
                    <Typography sx={{ color: 'white' }} variant="h4" component="div">
                        USEFUL LINKS
                    </Typography>
                    <Item>Contact Us</Item>
                    <Item>T/C Terms Of Use</Item>
                    <Item>Returns Policy</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
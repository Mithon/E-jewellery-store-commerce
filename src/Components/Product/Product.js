import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Product = (props) => {
    const { productName, discription, img, price } = props.product;

    return (
        <Grid item xs={4} sm={8} md={4}>
            <Card sx={{ minWidth: 275, borderRadius: 5, border: 1 }}>
                <CardMedia
                    component="img"
                    style={{ width: '230px', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2">
                        {discription}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Price: {price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" type="submit" size="small"><a href="http://localhost:3000/explore">Visit W3Schools.com!</a></Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;
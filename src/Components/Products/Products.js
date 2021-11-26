import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import kalojam from '../../images/kalojam.png'
import kalojam1 from '../../images/kalojam1.png'
import rosgolla1 from '../../images/rosgolla1.png'
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const products = [
    {
        name: 'hello1',
        description: 'hhdggsfkj sjdhfjk jshfj sjjhfj ssjhfj jshfj sjfh sjhfjh',
        img: kalojam
    },
    {
        name: 'hello2',
        description: 'hhdggsfkj sjdhfjk jshfj sjjhfj ssjhfj jshfj sjfh sjhfjh',
        img: kalojam1
    },
    {
        name: 'hello3',
        description: 'hhdggsfkj sjdhfjk jshfj sjjhfj ssjhfj jshfj sjfh sjhfjh',
        img: rosgolla1
    }
]



const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-scrubland-75231.herokuapp.com/products')//./services.JSON
            .then(res => res.json())
            .then(data => setProducts(data));

    })

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" component="div">
                    Our Hot Products
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;
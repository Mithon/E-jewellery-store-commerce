import { Alert, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreProductt from './ExploreProductt';
import Navigation from '../../Shared/Navigation/Navigation';

const exploreProductts = [
    {
        id: 1,
        name: 'abcdefgh1',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
    {
        id: 2,
        name: 'abcdefgh2',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
    {
        id: 3,
        name: 'abcdefgh3',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
    {
        id: 4,
        name: 'abcdefgh4',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
    {
        id: 5,
        name: 'abcdefgh5',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
    {
        id: 6,
        name: 'abcdefgh6',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
    {
        id: 7,
        name: 'abcdefgh',
        discription: 'dkhfk sjdhf sjhf jsjhf',
        price: 121,
    },
]

const Explore = () => {

    const [exploreProductts, setExploreProductts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-scrubland-75231.herokuapp.com/products')//./services.JSON
            .then(res => res.json())
            .then(data => setExploreProductts(data));

    })


    const [orderSuccess, setOrderSuccess] = useState(false);
    return (
        <Container>
            <Navigation></Navigation>
            <h1>Explore ...what's you wants</h1>
            {orderSuccess && <Alert severity="success">order upload successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    exploreProductts.map(exploreProductt => <ExploreProductt
                        key={exploreProductt.id}
                        exploreProductt={exploreProductt}
                        setOrderSuccess={setOrderSuccess}
                    >
                    </ExploreProductt>)
                }
            </Grid>
        </Container>
    );
};

export default Explore;
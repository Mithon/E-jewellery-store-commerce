import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import Footer from '../../../Components/Footer/Footer';
import Products from '../../../Components/Products/Products';
import Review from '../../../Components/Review/Review';
import Subscribe from '../../../Components/Subscribe/Subscribe';
import Navigation from '../../../Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;
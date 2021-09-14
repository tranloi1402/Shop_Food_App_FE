import React from 'react';

import Header from '../../components/Home/Header/header';
import Footer from '../../components/Home/Footer/footer';
import ProductList from '../../components/Home/Products/ProductList';
import Slider from '../../components/Home/Slider/simpleSlider';

const HomePage = () => (
    <>
        <Header />
        <Slider />
        <ProductList />
        <Footer />
    </>
);

export default HomePage;

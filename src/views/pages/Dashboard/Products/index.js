import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import Products from './listProducts';
import '../../../../assets/styles/_class.scss';
import { productActions, productSelectors } from '../../../../state/modules/product';

const Index = () => {
    const [products, setProducts] = useState([]);
    const prodSelectors = useSelector(productSelectors.getAllProducts);
    const loading = useSelector(productSelectors.loading);

    useEffect(() => {
        setProducts(prodSelectors);
    }, [prodSelectors]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAllProduct());
    }, [dispatch]);

    const history = useHistory();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            history.replace('/login');
        }
    }, [history]);

    return (
        <div className='Dashboard bg-dashboard'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
                <Header />
                <Sliderbar />
                <Products products={products} loading={loading} />
            </div>
        </div>
    );
};

export default Index;

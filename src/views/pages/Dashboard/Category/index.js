import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import ListCatergory from './listCategory';
import '../../../../assets/styles/_class.scss';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';

const Index = () => {
    const dispatch = useDispatch();
    const [categoryList, setCategory] = useState([]);
    const category = useSelector(categorySelectors.categories);

    useEffect(() => {
        setCategory(category);
    }, [category]);

    useEffect(() => {
        dispatch(categoryActions.getAllCate());
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
                <ListCatergory categoryList={categoryList} />
            </div>
        </div>
    );
};

export default Index;

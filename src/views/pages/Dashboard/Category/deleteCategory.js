import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import ListCatergory from './listCategory';
import '../../../../assets/styles/_class.scss';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';

const Index = () => {
    const dispatch = useDispatch();
    const id = useParams();
    const [categoryList, setCategory] = useState([]);
    const category = useSelector(categorySelectors.categories);

    useEffect(() => {
        setCategory(category);
    }, [category]);

    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    useEffect(() => {
        if (id != undefined) {
            dispatch(categoryActions.deleteCate(id.id));
        }
    }, [id, dispatch]);

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

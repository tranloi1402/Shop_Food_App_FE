import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

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
    const loading = useSelector(categorySelectors.loading);
    const [message, setMessage] = useState(1);
    const history = useHistory();

    useEffect(() => {
        setCategory(category);
    }, [category]);

    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    useEffect(() => {
        if (id != undefined) {
            setMessage(2);
            dispatch(categoryActions.deleteCate(id.id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        setTimeout(() => {
            setMessage(1);
            history.replace('/dashboard/categorys');
        }, 5000);
    }, [message, history]);

    return (
        <div className='Dashboard bg-dashboard'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
                <div
                    className={(message !== 1) ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'}
                >
                    <div className='bg-red-100 rounded-lg mt-5 border py-2 px-4'>
                        <i className={
                            message === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                                : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                        }
                        />
                        <span className='font-semibold'>{message === 2 ? 'Xóa thành Công!!!' : message}</span>
                    </div>
                </div>
                <Header />
                <Sliderbar />
                <ListCatergory categoryList={categoryList} loading={loading} />
            </div>
        </div>
    );
};

export default Index;

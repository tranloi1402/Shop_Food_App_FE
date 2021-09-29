import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormEditCate from './formEditCate';
import { categorySelectors, categoryActions } from '../../../../state/modules/category';

const EditCategory = () => {
    const id = useParams();
    const dispatch = useDispatch();
    const cateEdit = useSelector(categorySelectors.categorieEdit);
    const loading = useSelector(categorySelectors.loading);
    const [data, setData] = useState({
        _id: '',
        name: '',
        status: '',
        title: ''
    });
    const [message, setMessage] = useState(1);
    const onSubmit = () => {
        if (data) {
            dispatch(categoryActions.updateCate(data));
            setMessage(2);
        }
    };
    useEffect(() => {
        dispatch(categoryActions.editId(id.id));
    }, [id, dispatch]);
    useEffect(() => {
        setData(cateEdit);
    }, [cateEdit]);

    useEffect(() => {
        setTimeout(() => {
            setMessage(1);
        }, 5000);
    }, [message]);

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
                <div
                    className={(message !== 1) ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'}
                >
                    <div className='bg-red-100 rounded-lg mt-5 border py-2 px-4'>
                        <i className={
                            message === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                                : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                        }
                        />
                        <span className='font-semibold'>{message === 2 ? 'Cập nhập thành Công!!!' : message}</span>
                    </div>
                </div>
                <FormEditCate data={data} setData={setData} onSubmit={onSubmit} loading={loading} />
            </div>
        </div>
    );
};

export default EditCategory;

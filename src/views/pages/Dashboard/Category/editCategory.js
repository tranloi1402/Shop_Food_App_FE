import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormEditCate from './formEditCate';
import { categorySelectors, categoryActions } from '../../../../state/modules/category';

const EditCategory = () => {
    const id = useParams();
    // console.log('[[id-lay-useParams]]', id);
    const dispatch = useDispatch();
    const cateEdit = useSelector(categorySelectors.categorieEdit);
    // console.log('[[cateEdit-form]]', cateEdit);
    const [data, setData] = useState({
        _id: '',
        name: '',
        status: '',
        title: ''
    });
    const onSubmit = () => {
        if (data) {
            console.log('[[data]]', data);
            dispatch(categoryActions.updateCate(data));
        }
    };
    useEffect(() => {
        dispatch(categoryActions.editId(id.id));
    }, [id, dispatch]);
    useEffect(() => {
        setData(cateEdit);
    }, [cateEdit]);

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
                <FormEditCate data={data} setData={setData} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default EditCategory;

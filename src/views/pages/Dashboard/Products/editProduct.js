import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { productActions, productSelectors } from '../../../../state/modules/product';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';
import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormEditPrd from './formEditPrd';

const EditProduct = () => {
    const editProductId = useParams();
    const dispatch = useDispatch();
    const productEdit = useSelector(productSelectors.postEditProduct);
    const loading = useSelector(productSelectors.loading);
    const [data, setData] = useState({
        description: '',
        status: '',
        _id: '',
        name: '',
        image: '',
        price: '',
        categoryID: ''
    });
    useEffect(() => {
        setData(productEdit);
    }, [productEdit]);

    useEffect(() => {
        dispatch(productActions.editProduct(editProductId.id));
    }, [editProductId, dispatch]);

    const categorys = useSelector(categorySelectors.categories);
    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    const [message, setMessage] = useState(1);
    const onSubmitUpdate = () => {
        console.log(data);
        dispatch(productActions.updateProduct(data));
        setMessage(2);
    };
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
                <FormEditPrd
                    data={data}
                    setData={setData}
                    categorys={categorys}
                    onSubmitUpdate={onSubmitUpdate}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default EditProduct;

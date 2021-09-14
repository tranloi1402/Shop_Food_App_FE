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
    const [data, setData] = useState({
        description: '',
        status: '',
        _id: '',
        name: '',
        image: '',
        price: '',
        categoryID: ''
    });
    // console.log(data);
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

    const onSubmitUpdate = () => {
        dispatch(productActions.updateProduct(data));
    };

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
                <FormEditPrd
                    data={data}
                    setData={setData}
                    categorys={categorys}
                    onSubmitUpdate={onSubmitUpdate}
                />
            </div>
        </div>
    );
};

export default EditProduct;

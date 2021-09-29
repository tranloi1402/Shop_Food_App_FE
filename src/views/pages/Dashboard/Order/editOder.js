import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { orderActions, orderSelectors } from '../../../../state/modules/order';
import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormEditOrder from './fromEditOrder';

const EditOder = () => {
    const idOrder = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(orderSelectors.loading);

    useEffect(() => {
        dispatch(orderActions.editOrder(idOrder.id));
    }, [idOrder, dispatch]);
    const order = useSelector(orderSelectors.dataEdit);

    const onSubmitUpdate = (data) => {
        dispatch(orderActions.updateOrder(data));
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
                <FormEditOrder
                    order={order}
                    onSubmitUpdate={onSubmitUpdate}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default EditOder;

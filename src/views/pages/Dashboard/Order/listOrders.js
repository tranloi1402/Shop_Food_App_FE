import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from './oder';
import { orderActions, orderSelectors } from '../../../../state/modules/order';

const ListOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderActions.getAllOrders());
    }, [dispatch]);
    const orders = useSelector(orderSelectors.listOrder);
    const loading = useSelector(orderSelectors.loading);

    return (
        <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
            <div>
                <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Danh sách đơn hàng</h2>
            </div>

            {
                loading ? <h1 className='text-xl font-medium text-center my-20'>Đang tải...</h1>
                    : (
                        <div className='bg-white shadow-md rounded my-6 mx-10'>
                            <table className='min-w-max w-full table-auto'>
                                <thead>
                                    <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                                        <th className='py-3 px-6 text-left'>Tên</th>
                                        <th className='py-3 px-6 text-left'>Số điện thoại</th>
                                        <th className='py-3 px-6 text-center'>Trạng thái</th>
                                        <th className='py-3 px-6 text-center'>Hoạt động</th>
                                    </tr>
                                </thead>
                                <tbody className='text-gray-600 text-sm font-light'>
                                    {/* <div className='text-red-500 text-xl my-10 text-center font-medium'>Danh sách trống!!!</div> */}
                                    {
                                        (orders && orders.length > 0)
                                            ? orders.map((item, idx) => (<Order key={idx} item={item} />))
                                            : (
                                                <div className='text-red-500 text-xl my-10 text-center font-medium'>
                                                    (Danh sách trống!!!)
                                                </div>
                                            )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
            }
            {
                (orders && orders.length > 0)
                    ? ''
                    : (
                        <div className='text-red-500 text-xl my-10 text-center font-medium'>
                            {
                                loading ? '' : '(Danh sách trống!!!)'
                            }
                        </div>
                    )
            }
        </div>
    );
};

export default ListOrders;

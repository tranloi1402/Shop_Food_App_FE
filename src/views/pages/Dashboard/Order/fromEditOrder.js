import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InfProducts from './infProducts';
import '../../../../assets/styles/_class.scss';

const FormEditOrder = ({ order, onSubmitUpdate }) => {
    const listproducts = order.product;
    // console.log(listproducts);
    const [data, setData] = useState();

    return (
        <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
            <div>
                <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Sửa thông tin danh mục sản phẩm</h2>
            </div>
            <div className='m-10 p-2 bg-white border rounded-xl shadow-2xl z-10'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitUpdate(data);
                    }}
                >
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-5 gap-3'>
                        <div className='py-1 my-2'>
                            <div className='text-lg font-medium text-gray-500'>
                                Mã đơn:
                                <span className='mx-2 px-3 py-1'>{order.codeOrder}</span>
                            </div>
                        </div>
                        <div className='py-1 my-2'>
                            <div className='text-lg font-medium text-gray-500'>
                                Tên khách hàng:
                                <span className='mx-2 px-3 py-1'>{order.nameUse}</span>
                            </div>
                        </div>
                        <div className='py-1 my-2'>
                            <div className='text-lg font-medium text-gray-500'>
                                SĐT:
                                <span className='mx-2 px-3 py-1'>{order.phoneUse}</span>
                            </div>
                        </div>
                        <div className='py-1 my-2'>
                            <div className='text-lg font-medium text-gray-500'>
                                Địa chỉ:
                                <span className='mx-2 px-3 py-1 capitalize'>{order.addressUse}</span>
                            </div>
                        </div>

                        <div className='py-1 my-2'>
                            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                            <label className='text-lg font-medium text-gray-500'>
                                Trạng thái:
                                <select
                                    onChange={
                                        (e) => (
                                            e.target.value > 0
                                                ? setData({ ...order, status: e.target.value })
                                                : setData(order)
                                        )
                                    }
                                    name='status'
                                    id='status'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                >
                                    {
                                        order.status === 1
                                            ? <option className='text-green-500 font-bold' value={order.status}>Chờ duyệt</option>
                                            : ''
                                    }
                                    {
                                        order.status === 2
                                            ? <option className='text-green-500 font-bold' value={order.status}>Giao hàng</option>
                                            : ''
                                    }
                                    {
                                        order.status === 3
                                            ? <option className='text-green-500 font-bold' value={order.status}>Hoàn thành</option>
                                            : ''
                                    }
                                    <option value='0'> --- Chọn trạng thái --- </option>
                                    <option value='2'>Giao hàng</option>
                                    <option value='3'>Hoàn thành</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='cursor-pointer py-2 px-4 block mx-6 my-3 text-white font-bold text-center rounded add'
                    >
                        Cập nhập
                    </button>
                </form>
            </div>
            <div className='m-10 p-2 bg-white border rounded-xl shadow-2xl z-10'>
                <h2 className='p-5 text-xl font-semibold text-gray-500'>Thông tin sản phẩm khách hàng đặt</h2>
                <table className='min-w-max w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-200 text-gray-600 uppercase text-base leading-normal'>
                            <th className='py-3 px-6 text-left'>Tên sản phẩm</th>
                            <th className='py-3 px-6 text-left'>Giá</th>
                            <th className='py-3 px-6 text-center'>Số lượng</th>
                            <th className='py-3 px-6 text-center'>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-600 text-sm font-light'>
                        {
                            (listproducts && listproducts.length)
                                ? listproducts.map((item, idx) => (<InfProducts key={idx} item={item} />))
                                : 'không có sản phẩm nào'
                        }
                    </tbody>
                </table>
                <div className='text-xl font-semibold text-red-500 p-3 flex'>
                    <h2 className='ml-auto pt-4'>
                        Tổng :
                        <span className='pl-8'>.... VNĐ</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

FormEditOrder.propTypes = {
    order: PropTypes.object,
    onSubmitUpdate: PropTypes.func
};

FormEditOrder.defaultProps = {
    order: {},
    onSubmitUpdate: null
};

export default FormEditOrder;

import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => (
    <div className='h-full mt-14 mb-10 md:ml-64'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-4 top-14'>
            <Link to='/dashboard/products'>
                <div className='rounded-lg shadow-2xl flex py-5 px-4'>
                    <div className='my-auto'>
                        <p>Icon products</p>
                    </div>
                    <div className='ml-auto block'>
                        <h2 className='text-3xl font-bold'>2001</h2>
                        <p className='text-sm pl-2 text-gray-400'>Sản phẩm</p>
                    </div>
                </div>
            </Link>

            <Link to='/dashboard/order'>
                <div className='rounded-lg shadow-2xl flex py-5 px-4'>
                    <div className='my-auto'>
                        <p>Icon Order</p>
                    </div>
                    <div className='ml-auto block'>
                        <h2 className='text-3xl font-bold'>2001</h2>
                        <p className='text-sm pl-2 text-gray-400'>Đơn hàng</p>
                    </div>
                </div>
            </Link>

            <Link to=''>
                <div className='rounded-lg shadow-2xl flex py-5 px-4'>
                    <div className='my-auto'>
                        <p>Icon User</p>
                    </div>
                    <div className='ml-auto block'>
                        <h2 className='text-3xl font-bold'>2001</h2>
                        <p className='text-sm pl-2 text-gray-400'>Ngườ dùng</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
);

export default Content;

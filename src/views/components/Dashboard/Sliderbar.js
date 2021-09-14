import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../assets/styles/_class.scss';

const Sliderbar = ({ isCheck }) => (
    <div
        className={
            isCheck === true
                ? 'fixed flex-col top-14 bg-navigation2 h-full text-white transition-all duration-300 border-none z-10 hover:w-64 w-64 md:flex block'
                : 'fixed flex-col top-14 bg-navigation2 h-full text-white transition-all duration-300 border-none z-10 hover:w-64 w-64 md:flex hidden'
        }
    >
        <div className='pl-4 py-2 block'>
            <Link to='/dashboard'>
                <h2 className='font-semibold text-lg'>Dashboard</h2>
            </Link>
        </div>
        <hr className='border-t border-gray-200 mx-6' />
        <div className='py-2'>
            <div className='pl-2'>
                <div className='flex my-3'>
                    <i className='fas fa-th-list ml-4 text-xl' />
                    <h2 className='px-2 text-lg font-medium'>Quản lý sản phẩm</h2>
                </div>
                <ul className='ml-14 text-base'>
                    <li className='py-1'>
                        <Link to='/dashboard/products'>Danh sách sản phẩm</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/dashboard/creatProducts'>Thêm sản phẩm</Link>
                    </li>
                </ul>
            </div>
            <div className='pl-2'>
                <div className='flex my-3'>
                    <i className='fas fa-th-list ml-4 text-xl' />
                    <h2 className='px-2 text-lg font-medium'>Quản lý danh mục</h2>
                </div>
                <ul className='ml-14 text-base'>
                    <li className='py-1'>
                        <Link to='/dashboard/categorys'>Danh sách danh mục</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/dashboard/creatCategory'>Thêm danh mục</Link>
                    </li>
                </ul>
            </div>
            <div className='pl-2'>
                <div className='flex my-3'>
                    <i className='fas fa-th-list ml-4 text-xl' />
                    <h2 className='px-2 text-lg font-medium'>Quản lý đơn hàng</h2>
                </div>
                <ul className='ml-14 text-base'>
                    <li className='py-1'>
                        <Link to='/dashboard/order'>Danh sách đơn hàng</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

Sliderbar.propTypes = {
    isCheck: PropTypes.object
};

Sliderbar.defaultProps = {
    isCheck: {}
};

export default Sliderbar;

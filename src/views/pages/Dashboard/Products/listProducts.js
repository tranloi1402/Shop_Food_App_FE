import React from 'react';
import PropTypes from 'prop-types';

import Product from './product';

const ListProducts = ({ products, loading }) => (
    <div className='h-full mt-14 mb-10 md:ml-64'>
        <div>
            <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Danh sách sản phẩm</h2>
        </div>
        <div className='bg-white shadow-md rounded my-6 mx-10'>
            <table className='min-w-max w-full table-auto'>
                <thead>
                    <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                        <th className='py-3 px-6 text-left'>Tên</th>
                        <th className='py-3 px-6 text-left'>Giá</th>
                        <th className='py-3 px-6 text-center'>Trạng thái</th>
                        <th className='py-3 px-6 text-center'>Hoạt động</th>
                    </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                    {
                        products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))
                    }
                </tbody>
            </table>
        </div>
        <h1 className='text-xl font-medium text-center my-10'>
            {
                loading ? 'Đang tải...'
                    : (
                        <span className='text-red-500'>
                            {
                                (products && products.length > 0) ? '' : '(Danh sách trống !!!)'
                            }
                        </span>
                    )
            }
        </h1>
    </div>
);

ListProducts.propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool
};

ListProducts.defaultProps = {
    products: [],
    loading: null
};

export default ListProducts;

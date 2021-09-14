import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product }) => (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
        <td className='py-3 px-6 text-left whitespace-nowrap'>
            <div className='flex items-center text-lg'>
                <div className='mr-3'>
                    <img
                        src={`${product.image}`}
                        alt='anh sp'
                        className='h-12 w-12'
                    />
                </div>
                <span className='font-medium'>{product.name}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-left'>
            <div className='flex items-center text-md font-medium'>
                <span>{`${product.price} VNĐ`}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-center'>
            {
                product.status === 1
                    ? <span className='bg-green-500 text-white py-2 px-4 rounded-full text-md font-medium'>Sản phẩm mới</span>
                    : ''
            }
            {
                product.status === 2
                    ? <span className='bg-purple-300 text-purple-600 py-2 px-4 rounded-full text-md font-medium'>Sản phẩm đang bán</span>
                    : ''
            }
            {
                product.status === 3
                    ? <span className='bg-yellow-500 text-white py-2 px-4 rounded-full text-md font-medium'>Sản phẩm bán chạy</span>
                    : ''
            }
            {
                product.status === 4
                    ? <span className='bg-red-500 text-white py-2 px-4 rounded-full text-md font-medium'>Dừng bán</span>
                    : ''
            }
        </td>
        <td className='py-3 px-6 text-center'>
            <div className='flex item-center justify-center'>
                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                    <Link to={`/dashboard/editProducts/${product._id}`}>
                        <i className='far fa-edit' />
                    </Link>
                </div>
                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                    <Link to={`/dashboard/product/delete/${product._id}`}>
                        <i className='fas fa-trash' />
                    </Link>
                </div>
            </div>
        </td>
    </tr>
);

Product.propTypes = {
    product: PropTypes.object
};

Product.defaultProps = {
    product: {}
};

export default Product;

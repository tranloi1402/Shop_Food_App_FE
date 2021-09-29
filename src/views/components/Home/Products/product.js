import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => (
    <div
        className='sm:mx-auto max-w-xs bg-white border shadow-lg rounded-lg z-10 mb-3
                    cursor-pointer transform hover:scale-105 duration-300 ease-in-out'
    >
        <Link to={`/product/${product._id}`}>
            <div className='px-4 h-28 py-2'>
                <h1 className='text-gray-900 font-bold xl:text-2xl md:text-xl uppercase'>{product.name}</h1>
                <p className='text-gray-600 min-h-80 text-sm mt-1'>{product.description}</p>
            </div>
        </Link>
        <div className='mt-auto flex-shrink-0'>
            <Link to={`/product/${product._id}`}>
                <img
                    className='md:h-56 h-52 w-full object-cover mt-2'
                    src={`${product.image}`}
                    alt={`${product.name}`}
                />
            </Link>
            <div className='flex items-center justify-between px-4 py-2 bg-gray-900 rounded-b-lg'>
                <h1 className='text-gray-200 font-bold xl:text-xl md:text-lg'>
                    {`${product.price} VĐN`}
                </h1>
                <div
                    onClick={
                        () => addToCart(
                            { _id: product._id, name: product.name, image: product.image, price: product.price, quantity: 1 }
                        )
                    }
                    className='
                    px-3 py-2 font-bold rounded capitalize
                    hover:bg-yellow-400 hover:text-white focus:outline-none
                     transition delay-150 duration-300 ease-in-out
                    bg-gray-200 text-sm text-gray-900 text-center
                    '
                >
                    Thêm giỏ hàng
                </div>
            </div>
        </div>
    </div>
);

Product.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func
};

Product.defaultProps = {
    product: {},
    addToCart: null
};

export default Product;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => (
    <div className='max-w-xs bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 duration-300 ease-in-out'>
        <Link to={`/product/${product._id}`}>
            <div className='px-4 h-28 py-2'>
                <h1 className='text-gray-900 font-bold text-2xl uppercase'>{product.name}</h1>
                <p className='text-gray-600 min-h-80 text-sm mt-1'>{product.description}</p>
            </div>
        </Link>
        <div className='mt-auto flex-shrink-0'>
            <Link to={`/product/${product._id}`}>
                <img
                    className='h-56 w-80 object-cover mt-2'
                    src={`${product.image}`}
                    alt={`${product.name}`}
                />
            </Link>
            <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
                <h1 className='text-gray-200 font-bold text-xl'>
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

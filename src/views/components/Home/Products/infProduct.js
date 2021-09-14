import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/styles/_class.scss';

const infProduct = ({ product, addToCart }) => (
    <div className='container mx-auto px-6 py-10 md:mt-16 mt-16'>
        <div className='md:flex md:items-center'>
            <div className='w-full h-64 md:w-1/2 lg:h-96'>
                <img
                    className='h-full w-full rounded-md object-cover max-w-lg mx-auto'
                    src={product.image}
                    alt='Ảnh sản phẩm'
                />
            </div>
            <div className='w-full md:px-12 max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2'>
                <h1 className='text-gray-700 uppercase py-2 font-bold text-5xl'>{product.name}</h1>
                <h1 className='text-gray-700 py-2 text-xl'>{product.description}</h1>
                <h1 className='text-gray-700 font-medium mt-5 text-xl'>{`Giá: ${product.price} VĐN`}</h1>
                <div className='my-3'>
                    <div className='flex items-center mt-6'>
                        <button
                            onClick={() => addToCart(product._id, product.name, product.image, product.price)}
                            type='button'
                            className='
                            px-10 py-2 text-lg font-medium rounded-lg
                            add text-white
                            hover:bg-blue-400 focus:outline-none focus:bg-blue-400'
                        >
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

infProduct.prototypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func
};

infProduct.defaultProps = {
    product: {},
    addToCart: null
};

export default infProduct;

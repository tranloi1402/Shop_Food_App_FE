import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../components/Home/Header/header';
import Footer from '../../../components/Home/Footer/footer';

const CART_STORE_KEY = 'LIST_CART';

const CartDeltai = () => {
    const cartId = useParams();
    const [cart, setCart] = useState();
    const [data, setData] = useState();
    console.log(data);
    useEffect(() => {
        const localStorageCart = localStorage.getItem(CART_STORE_KEY);
        if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
        }
    }, []);

    useEffect(() => {
        if (cart && cart.length) {
            const updateCart = cart.filter((item) => item._id === cartId.id);
            console.log('', updateCart);
            setData(updateCart);
        }
    }, [cart, cartId]);

    return (
        <div>
            <Header />
            {
                (data && data.length) ? data.map((item) => (
                    <div className='container mx-auto px-6 py-10 md:mt-16 mt-16'>
                        <div className='md:flex md:items-center'>
                            <div className='w-full h-64 md:w-1/2 lg:h-96'>
                                <img className='h-full w-full rounded-md object-cover max-w-lg mx-auto' src='https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' alt='Nike Air' />
                            </div>
                            <div className='w-full md:px-12 max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2'>
                                <h1 className='text-gray-700 uppercase py-2 font-bold text-5xl'>{item.name}</h1>
                                <span className='text-gray-500 mt-3 text-xl'>{`Giá: ${item.price} VNĐ`}</span>
                                <div className='my-3'>
                                    <div className='mt-2'>
                                        <div className='flex items-center mt-1'>
                                            <span className='text-gray-700 text-lg pr-5' htmlFor='count'>Số lượng: </span>
                                            <input
                                                type='number'
                                                placeholder='2'
                                                className='bg-gray-200 w-16 focus:outline-none rounded-md px-3 py-1'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-6'>
                                        <button type='button' className='px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'>Đặt hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                    : ''
            }
            <Footer />
        </div>
    );
};

export default CartDeltai;

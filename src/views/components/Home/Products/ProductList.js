import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productActions, productSelectors } from '../../../../state/modules/product';
import Product from './product';
import '../../../../assets/styles/_class.scss';

const CART_STORE_KEY = 'LIST_CART';

const ProductList = () => {
    const dispatch = useDispatch();
    // product
    const listProducts = useSelector(productSelectors.getAllProducts);

    const [cartsList, setCartList] = useState();
    // lấy về lên localStorerage
    useEffect(() => {
        const localStorageCart = localStorage.getItem(CART_STORE_KEY);
        if (localStorageCart) {
            setCartList(JSON.parse(localStorageCart));
        }
    }, []);
    // đẩy lên localStorerage
    useEffect(() => {
        if (cartsList && cartsList.length) {
            localStorage.setItem(CART_STORE_KEY, JSON.stringify(cartsList));
        }
    }, [cartsList]);

    // cart
    const [message, setMessage] = useState();
    const addToCart = ({ _id, name, image, price }) => {
        if (cartsList && cartsList.length > 0) {
            const check = cartsList.filter((item) => item._id === _id);
            if (check.length === 0) {
                setCartList([...cartsList, { _id, name, image, price, quantity: 1 }]);
                setMessage(2);
            } else {
                setMessage('Bạn đã có sản phẩm này trong giỏ hàng !!!!!');
            }
        } else {
            setCartList([{ _id, name, image, price, quantity: 1 }]);
            setMessage(2);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setMessage();
        }, 5000);
    }, [message]);

    const { keyword } = useParams();
    useEffect(() => {
        if (keyword) {
            console.log(keyword);
            dispatch(productActions.getSearchPrd(keyword));
        } else {
            dispatch(productActions.getSearchPrd(''));
        }
    }, [keyword, dispatch]);

    return (
        <>
            <div
                className={
                    message ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'
                }
            >
                <div
                    className={
                        message !== 2 ? 'bg-red-200 rounded-lg mt-5 border py-2 px-4'
                            : 'bg-green-200 rounded-lg mt-5 border py-2 px-4'
                    }
                >
                    <i
                        className={
                            message === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                                : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                        }
                    />
                    <span className='font-semibold'>
                        {message === 2 ? 'Thêm thành công vào giỏ hàng!!!' : message}
                    </span>
                </div>
            </div>
            <div className='container mx-auto sm:my-10 mt-20 overflow-hidden'>
                <div className='text-center my-8'>
                    <h1 className={keyword ? 'text-gray-700 font-medium text-3xl normal-case' : 'hidden'}>
                        {`Kết quả tìm kiếm🔎🔎🔎: ${keyword}`}
                    </h1>
                    <h1 className={keyword ? 'hidden' : 'text-gray-900 font-bold text-3xl normal-case'}>
                        Danh sách sản phẩm 🍔🍟🍕❤
                    </h1>
                </div>
                <div className={
                    (listProducts && listProducts.length > 0) ? 'hidden' : 'text-red-500 text-xl font-medium text-center'
                }
                >
                    ( không có sản phẩm nào )
                </div>
                <div className='grid justify-items-center mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10 mt-2'>
                    {
                        listProducts && listProducts.map((product, idx) => (
                            <Product key={idx} product={product} addToCart={addToCart} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ProductList;

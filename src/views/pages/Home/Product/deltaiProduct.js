import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productActions, productSelectors } from '../../../../state/modules/product';
import Header from '../../../components/Home/Header/header';
import Footer from '../../../components/Home/Footer/footer';
import InfProduct from '../../../components/Home/Products/infProduct';
import EvaluateProd from '../../../components/Home/Products/evaluateProd';

const CART_STORE_KEY = 'LIST_CART';

const DeltaiProduct = () => {
    const prdID = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(productSelectors.loading);

    useEffect(() => {
        dispatch(productActions.editProduct(prdID.id));
    }, [prdID, dispatch]);

    const product = useSelector(productSelectors.postEditProduct);

    const [cart, setCart] = useState();
    useEffect(() => {
        const localStorageCart = localStorage.getItem(CART_STORE_KEY);
        if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
        }
    }, []);
    const [notyfine, setNotyfine] = useState();
    const [success, setSuccess] = useState();

    const addToCart = (_id, name, image, price) => {
        // console.log(_id, name, image, price);
        if (cart && cart.length > 0) {
            const check = cart.filter((item) => item._id === _id);
            if (check.length === 0) {
                setNotyfine('Bạn đã thêm thành công vào giỏ hàng !!!!!');
                setSuccess(1);
                setCart([{ _id, name, image, price, quantity: 1 }, ...cart]);
            } else {
                setSuccess(2);
                setNotyfine('Bạn đã có sản phẩm này trong giỏ hàng !!!!!');
            }
        } else {
            setCart([{ _id, name, image, price, quantity: 1 }]);
        }
    };

    useEffect(() => {
        if (cart && cart.length) {
            localStorage.setItem(CART_STORE_KEY, JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        setTimeout(() => {
            setNotyfine();
        }, 7000);
    }, [notyfine]);

    return (
        <div>
            <Header />
            <div
                className={
                    notyfine !== undefined ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'
                }
            >
                <div
                    className={success === 1 ? 'bg-green-200 rounded-lg mt-5 border py-2 px-4'
                        : 'bg-red-200 rounded-lg mt-5 border py-2 px-4'}
                >
                    <i className={
                        success === 1 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                            : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                    }
                    />
                    <span className='font-semibold'>
                        {notyfine}
                    </span>
                </div>
            </div>
            <InfProduct product={product} addToCart={addToCart} loading={loading} />
            <EvaluateProd />
            <Footer />
        </div>
    );
};

export default DeltaiProduct;

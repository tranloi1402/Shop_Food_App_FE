import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../../components/Home/Header/header';
import Footer from '../../../components/Home/Footer/footer';
import Product from '../../../components/Home/Products/product';
import { productActions, productSelectors } from '../../../../state/modules/product';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';

const CART_STORE_KEY = 'LIST_CART';

const ProductCate = () => {
    const cateId = useParams();
    const dispatch = useDispatch();
    const products = useSelector(productSelectors.getAllProducts);
    const categories = useSelector(categorySelectors.categories);
    // console.log(products);
    // console.log(categories);
    useEffect(() => {
        dispatch(productActions.getAllProduct());
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);
    const [productCate, setProductCate] = useState();
    useEffect(() => {
        if (products && products.length > 0) {
            const findProductsCate = products.filter((item) => item.categoryID === cateId.id);
            // console.log('find: ', findProductsCate);
            setProductCate(findProductsCate);
        }
    }, [products, cateId]);
    // console.log('Can hien thi: ', productCate);

    const nameCate = categories.filter((item) => item._id === cateId.id);

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

    const [message, setMessage] = useState();
    const addToCart = ({ _id, name, image, price }) => {
        if (cartsList && cartsList.length > 0) {
            const check = cartsList.filter((item) => item._id === _id);
            if (check.length === 0) {
                setCartList([...cartsList, { _id, name, image, price, quantity: 1 }]);
            } else {
                setMessage('Bạn đã có sản phẩm này trong giỏ hàng !!!!!');
            }
        } else {
            setCartList([{ _id, name, image, price, quantity: 1 }]);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setMessage();
        }, 7000);
    }, [message]);

    return (
        <div>
            <Header />
            <div
                className={
                    message ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'
                }
            >
                <div className='bg-red-200 rounded-lg mt-5 border py-2 px-4'>
                    <i
                        className='fas fa-times text-red-500 pr-3 text-xl font-semibold'
                    />
                    <span className='font-semibold'>
                        {message}
                    </span>
                </div>
            </div>
            <div className='container mx-auto sm:my-10 mt-20 overflow-hidden'>
                <div className='text-center mt-16'>
                    <h1 className='text-gray-900 font-bold text-3xl uppercase'>
                        Danh sách sản phẩm:
                        <span className='capitalize px-3'>
                            {
                                (nameCate && nameCate.length > 0) ? nameCate.map((cate) => (
                                    `${cate.name}`
                                )) : ''
                            }
                        </span>
                    </h1>
                    <h1 className={(productCate && productCate.length > 0) ? 'hidden' : 'text-red-500 font-medium m-10 text-xl'}>
                        Sản phẩm theo danh mục hiện tại trống!!!!
                    </h1>
                </div>
                <div className='grid justify-items-center mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10 mt-2'>
                    {
                        (productCate && productCate.length > 0) ? productCate.map((product, idx) => (
                            <Product key={idx} product={product} addToCart={addToCart} />
                        )) : ''
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductCate;

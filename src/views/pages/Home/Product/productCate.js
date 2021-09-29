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
    const loading = useSelector(productSelectors.loading);
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
            <div className='container mx-auto sm:my-20 mt-20 overflow-hidden'>
                <div className='text-center'>
                    {
                        loading ? '' : (
                            <h1 className='text-gray-900 font-bold xl:text-3xl md:text-xl text-lg uppercase py-3'>
                                Danh sách sản phẩm:
                                <span className='capitalize px-3'>
                                    {
                                        (nameCate && nameCate.length > 0) ? nameCate.map((cate) => (
                                            `${cate.name}`
                                        )) : ''
                                    }
                                </span>
                            </h1>
                        )
                    }
                </div>
                {/* {
                    loading ? <h1 className='text-lg font-medium py-2 text-center'>Đang tải.....</h1> : ''
                } */}
                <div
                    className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
                                py-6 xl:gap-10 md:gap-5 mt-2 justify-center'
                >
                    {
                        (productCate && productCate.length > 0) ? productCate.map((product, idx) => (
                            <Product key={idx} product={product} addToCart={addToCart} />
                        )) : ''
                    }
                </div>
                {
                    (productCate && productCate.length > 0) ? ''
                        : (
                            <h1 className='text-red-500 font-medium text-lg px-5 text-center'>
                                {
                                    loading ? '' : 'Sản phẩm theo danh mục hiện tại trống!!!!'
                                }
                            </h1>
                        )
                }
            </div>
            <Footer />
        </div>
    );
};

export default ProductCate;

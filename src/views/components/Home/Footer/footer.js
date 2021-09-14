import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { categoryActions, categorySelectors } from '../../../../state/modules/category';

const Footer = () => {
    const dispatch = useDispatch();
    const listCategory = useSelector(categorySelectors.categories);

    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    const listCateTitle1 = listCategory.filter((cate) => cate.title === 1);
    const listCateTitle2 = listCategory.filter((cate) => cate.title === 2);

    return (
        <footer className='w-full pb-10 '>
            <div className='container mx-auto bg-grey-lighter border-t-2 px-2'>
                <div className='sm:flex'>
                    <div className='grid grid-cols-3 mx-6'>
                        <div className='mt-8 pr-2'>
                            <div className='text-lg font-medium'>Địa chỉ cơ sở</div>
                            <ul className='text-gray-500 mt-2'>
                                <li className=''>Địa chỉ 1: .........................</li>
                                <li className=''>Địa chỉ 2: .........................</li>
                            </ul>
                        </div>
                        <div className='pr-2 mt-8'>
                            <div className='text-lg font-medium mb-2'>Đồ uống</div>
                            <ul className='text-gray-500 mt-2'>
                                {
                                    listCateTitle2.map((item, idx) => (
                                        <li key={idx} className='hover:text-yellow-500'>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='pr-2 mt-8'>
                            <div className='text-lg font-medium'>Đồ ăn</div>
                            <ul className='text-gray-500 mt-2'>
                                {
                                    listCateTitle1.map((item, idx) => (
                                        <li key={idx} className='hover:text-yellow-500'>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='sm:w-1/2  mt-8 h-auto'>
                        <div className='flex justify-center'>
                            <img src='mx-auto' alt='Logo Shop' />
                        </div>
                        <div className='text-center my-3 text-xl font-medium text-green-500'>✔❤ Hiện đang mở bán</div>
                        <p className='text-center px-20 my-3 leading-normal text-gray-500'>Chào mừng quý khách đến với chuỗi cửa hàng của chúng tôi, Chúc các bạn có được trả nhiệm vui vẻ nhất</p>
                        <div className='flex justify-center text-4xl'>
                            <div><i className='fab fa-instagram px-4 text-pink-500' /></div>
                            <div><i className='fab fa-facebook-square px-4 text-pink-500' /></div>
                            <div><i className='fab fa-youtube px-4 text-pink-500' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

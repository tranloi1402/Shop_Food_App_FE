import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';

import '../../../../assets/styles/_class.scss';
import { productActions } from '../../../../state/modules/product';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';

const FormCreatPrd = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState(1);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        categoryID: '',
        status: ''
    });

    const onSubmit = useCallback(() => {
        console.log(newProduct);
        setMessage(2);
        dispatch(productActions.createProduct(newProduct));
    }, [newProduct, dispatch]);

    const categorys = useSelector(categorySelectors.categories);
    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    useEffect(() => {
        setTimeout(() => {
            setMessage(1);
        }, 5000);
    }, [message]);

    return (
        <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
            <div>
                <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Thêm mới sản phẩm</h2>
            </div>
            <div
                className={(message !== 1) ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'}
            >
                <div className='bg-red-100 rounded-lg mt-5 border py-2 px-4'>
                    <i className={
                        message === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                            : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                    }
                    />
                    <span className='font-semibold'>{message === 2 ? 'Thêm mới thành Công!!!' : message}</span>
                </div>
            </div>
            <div className='m-10 p-2 bg-white border rounded-xl shadow-2xl z-10'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                >
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-5 gap-3'>
                        <div className='py-1 my-2'>
                            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                            <label className='text-lg font-medium text-gray-500'>
                                Tên sản phẩm:
                                <input
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    type='text'
                                    name='name'
                                    className='border w-80 mx-2  focus:outline-none rounded-md px-3 py-1'
                                    placeholder='nhập tên sản phẩm'
                                />
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <label className='text-lg font-medium text-gray-500'>
                                Thể loại:
                                <select
                                    onChange={(e) => setNewProduct({ ...newProduct, categoryID: e.target.value })}
                                    name='categoryID'
                                    id='categoryID'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                >
                                    <option>----  Chọn thể loại  ----</option>
                                    {
                                        categorys.map(
                                            (cate, index) => <option key={index} value={cate._id}>{cate.name}</option>
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <label className='text-lg font-medium text-gray-500'>
                                Mô tả:
                                <textarea
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    type='text'
                                    name='description'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                    placeholder='nhập mô tả'
                                />
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <label className='text-lg font-medium text-gray-500'>
                                Trạng thái:
                                <select
                                    onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                                    name='status'
                                    id='status'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                >
                                    <option>----  Chọn trạng thái  ----</option>
                                    <option value='1'>Sản phẩm mới</option>
                                    <option value='2'>Đang bán</option>
                                    <option value='3'>Bán chạy</option>
                                    {/* <option value='4'>Dừng bán</option> */}
                                </select>
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <label className='text-lg font-medium text-gray-500'>
                                Giá:
                                <input
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    type='text'
                                    name='price'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                    placeholder='nhập giá sản phẩm'
                                />
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <div className='text-lg font-medium text-gray-500'>
                                Ảnh sản phẩm:
                            </div>
                            <FileBase64
                                onDone={({ base64 }) => setNewProduct({ ...newProduct, image: base64 })}
                                type='file'
                                name='image'
                                multiple={false}
                                accept='image/*'
                            // className='my-2'
                            />
                            <img
                                src={newProduct.image ? newProduct.image : ''}
                                alt={newProduct.image ? newProduct.image : 'chưa có ảnh nào'}
                                className='my-3 h-64 w-64 object-cover text-lg font-medium text-red-500'
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='cursor-pointer py-2 px-4 block mx-6 my-3 text-white font-bold text-center rounded add focus:outline-none'
                    >
                        Thêm mới
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormCreatPrd;

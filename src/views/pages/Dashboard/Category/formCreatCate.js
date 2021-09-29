import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { categoryActions } from '../../../../state/modules/category';
import '../../../../assets/styles/_class.scss';

const FormCreatCate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [category, setCategory] = useState({
        name: '',
        status: '',
        title: ''
    });
    const [message, setMessage] = useState(1);

    const onSubmit = () => {
        if (category) {
            dispatch(categoryActions.createCate(category));
            setMessage(2);
            setTimeout(() => {
                setMessage(1);
                history.replace('/dashboard/categorys');
            }, 5000);
        }
    };

    return (
        <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
            <div>
                <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Thêm mới danh mục sản phẩm</h2>
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
                {/* <div className={isCheck ? 'w-full border bg-red-500 text-white font-medium text-xl' : 'hidden'}>
                    {isCheck ? 'Thông tin không được để trống!!!' : ''}
                </div> */}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                >
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-5 gap-3'>
                        <div className='py-1 my-2'>
                            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                            <label className='text-lg font-medium text-gray-500'>
                                Tên thể loại:
                                <input
                                    type='text'
                                    name='name'
                                    className='border w-80 mx-2  focus:outline-none rounded-md px-3 py-1'
                                    placeholder='Nhập tên thể loại'
                                    onChange={(e) => setCategory({ ...category, name: e.target.value })}
                                />
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <label className='text-lg font-medium text-gray-500'>
                                Thuộc loại:
                                <select
                                    name='title'
                                    id='tile'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                    onChange={(e) => setCategory({ ...category, title: e.target.value })}
                                >
                                    <option>---- Chọn loại ---- </option>
                                    <option value='1'>Đồ Ăn</option>
                                    <option value='2'>Đồ Uống</option>
                                </select>
                            </label>
                        </div>
                        <div className='py-1 my-2'>
                            <label className='text-lg font-medium text-gray-500'>
                                Trạng thái:
                                <select
                                    name='status'
                                    id='status'
                                    className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                    onChange={(e) => setCategory({ ...category, status: e.target.value })}
                                >
                                    <option>---- Chọn trạng thái ---- </option>
                                    <option value='1'>Hoạt động</option>
                                    {/* <option value='2'>Dừng bán</option> */}
                                </select>
                            </label>
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

export default FormCreatCate;

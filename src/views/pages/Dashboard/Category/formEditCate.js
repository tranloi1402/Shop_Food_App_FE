import React from 'react';
import PropTypes from 'prop-types';

import '../../../../assets/styles/_class.scss';

const FormEditCate = ({ data, setData, onSubmit }) => (
    <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
        <div>
            <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Cập nhập thông tin danh mục sản phẩm</h2>
        </div>
        <div className='m-10 p-2 bg-white border rounded-xl shadow-2xl z-10'>
            <form onSubmit={() => {
                // e.preventDefault();
                onSubmit();
            }}
            >
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-5 gap-3'>
                    <div className='py-1 my-2'>
                        {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                        <label className='text-lg font-medium text-gray-500'>
                            Tên thể loại:
                            <input
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                type='text'
                                name='name'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                placeholder={data ? data.name : 'Nhập tên thể loại'}
                            />
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Thuộc loại:
                            <select
                                value={data.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                name='title'
                                id='title'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                            >
                                {/* {data.title === 1 ? <option value='1'>Đồ Ăn</option> : <option value='2'>Đồ Uống</option>} */}
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
                                value={data.status}
                                onChange={(e) => setData({ ...data, status: e.target.value })}
                                name='status'
                                id='status'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                            >
                                <option>---- Chọn trạng thái ---- </option>
                                <option value='1'>Hoạt động</option>
                                <option value='2'>Dừng bán</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button
                    type='submit'
                    className='cursor-pointer py-2 px-4 block mx-6 my-3 text-white font-bold text-center rounded add'
                >
                    Cập nhập
                </button>
            </form>
        </div>
    </div>
);

FormEditCate.propTypes = {
    data: PropTypes.object,
    setData: PropTypes.func,
    onSubmit: PropTypes.func
};

FormEditCate.defaultProps = {
    data: {},
    setData: null,
    onSubmit: null
};

export default FormEditCate;

import React from 'react';
import PropTypes from 'prop-types';
import FileBase64 from 'react-file-base64';

import '../../../../assets/styles/_class.scss';

const FormEditPrd = ({ data, categorys, setData, onSubmitUpdate, loading }) => (
    <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
        <div>
            <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Chỉnh sửa thông tin sản phẩm</h2>
        </div>
        {
            loading ? <h1 className='text-xl font-medium text-center my-20'>Đang tải...</h1>
                : (
                    <div className='m-10 p-2 bg-white border rounded-xl shadow-2xl z-10'>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            onSubmitUpdate();
                        }}
                        >
                            <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-5 gap-3'>
                                <div className='py-1 my-2'>
                                    {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                                    <label className='text-lg font-medium text-gray-500'>
                                        Tên sản phẩm:
                                        <input
                                            onBlur={(e) => setData({ ...data, name: e.target.value })}
                                            type='text'
                                            name='name'
                                            className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                            placeholder={data.name ? `${data.name}` : 'nhập tên sản phẩm'}
                                        />
                                    </label>
                                </div>
                                <div className='py-1 my-2'>
                                    <label className='text-lg font-medium text-gray-500'>
                                        Thể loại:
                                        <select
                                            onBlur={(e) => setData({ ...data, categoryID: e.target.value })}
                                            // value={data.categoryID}
                                            name='categoryID'
                                            id='categoryID'
                                            className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                        >
                                            <option>---- Chọn thể loại ---- </option>
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
                                            onBlur={(e) => setData({ ...data, description: e.target.value })}
                                            type='text'
                                            name='description'
                                            className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                            placeholder={data.description ? `${data.description}` : 'nhập mô tả'}
                                        />
                                    </label>
                                </div>
                                <div className='py-1 my-2'>
                                    <label className='text-lg font-medium text-gray-500'>
                                        Trạng thái:
                                        <select
                                            onBlur={(e) => setData({ ...data, status: e.target.value })}
                                            // value={data.status}
                                            name='status'
                                            id='status'
                                            className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                        >
                                            <option>----  Chọn trạng thái  ----</option>
                                            <option value='1'>Sản phẩm mới</option>
                                            <option value='2'>Đang bán</option>
                                            <option value='3'>Bán chạy</option>
                                            <option value='4'>Dừng bán</option>
                                        </select>
                                    </label>
                                </div>
                                <div className='py-1 my-2'>
                                    <label className='text-lg font-medium text-gray-500'>
                                        Giá:
                                        <input
                                            onBlur={(e) => setData({ ...data, price: e.target.value })}
                                            type='text'
                                            name='price'
                                            className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                            placeholder={data.price ? `${data.price}` : 'null'}
                                        />
                                    </label>
                                </div>
                                <div className='py-1 my-2'>
                                    <div className='text-lg font-medium text-gray-500'>
                                        Ảnh sản phẩm:
                                    </div>
                                    <FileBase64
                                        onDone={({ base64 }) => setData({ ...data, image: base64 })}
                                        type='file'
                                        name='image'
                                        multiple={false}
                                        accept='image/*'
                                    />
                                    <img src={data.image} alt='ảnh sản phẩm' />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='cursor-pointer py-2 px-4 block mx-6 my-3 text-white font-bold text-center rounded add focus:outline-none'
                            >
                                Cập nhập
                            </button>
                        </form>
                    </div>
                )
        }
    </div>
);

FormEditPrd.propTypes = {
    data: PropTypes.object,
    categorys: PropTypes.object,
    setData: PropTypes.func,
    onSubmitUpdate: PropTypes.func,
    loading: PropTypes.bool
};

FormEditPrd.defaultProps = {
    data: {},
    categorys: {},
    setData: null,
    onSubmitUpdate: null,
    loading: null
};

export default FormEditPrd;

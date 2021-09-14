import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Payment = ({ isCheck, onSubmitPayment }) => {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    return (
        <div className={isCheck === true ? 'w-2/3 mx-auto block delay-1000' : 'w-2/3 mx-auto hidden'}>
            <form onSubmit={() => {
                // e.preventDefault();
                onSubmitPayment(name, phone, address);
            }}
            >
                <div className='text-2xl font-semibold text-center text-gray-500 py-2'>
                    <p>Xác nhận đặt hàng ✔✔✔</p>
                </div>
                <div className='mt-4 mb-12'>
                    <div className='py-1 my-2'>
                        {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                        <label className='text-lg font-medium text-gray-500'>
                            Họ tên:
                            <input
                                onBlur={
                                    (e) => {
                                        e.preventDefault();
                                        setName(!e.target.value ? 0 : e.target.value);
                                    }
                                }
                                type='text'
                                name='name'
                                className='border w-80 md:float-right focus:outline-none rounded-md px-3 py-1'
                                placeholder='Nhập họ và tên'
                            />
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Số điện thoại:
                            <input
                                onBlur={
                                    (e) => {
                                        e.preventDefault();
                                        setPhone(!e.target.value ? 0 : e.target.value);
                                    }
                                }
                                type='text'
                                name='phone'
                                className='border w-80 md:float-right focus:outline-none rounded-md px-3 py-1'
                                placeholder='Nhập số điện thoại'
                            />
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Địa chỉ:
                            <input
                                onBlur={
                                    (e) => {
                                        // e.preventDefault();
                                        setAddress(!e.target.value ? 0 : e.target.value);
                                    }
                                }
                                type='text'
                                name='address'
                                className='border w-80 md:float-right focus:outline-none rounded-md px-3 py-1'
                                placeholder='Nhập thông tin địa chỉ'
                            />
                        </label>
                    </div>
                </div>
                <button
                    type='submit'
                    className='
                    my-6 cursor-pointer py-2 px-4 block mt-6
                    bg-yellow-500 text-white font-bold
                    w-full text-center rounded'
                >
                    Đặt hàng
                </button>
            </form>
        </div>
    );
};

Payment.propTypes = {
    isCheck: PropTypes.bool,
    onSubmitPayment: PropTypes.func
};

Payment.defaultProps = {
    isCheck: null,
    onSubmitPayment: null
};

export default Payment;

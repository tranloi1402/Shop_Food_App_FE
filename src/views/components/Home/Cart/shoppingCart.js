import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { orderActions } from '../../../../state/modules/order';
import Payment from './payment';
import ListProductsCart from './listProductCart';
import '../../../../assets/styles/_class.scss';

function ShoppingCart() {
    const CART_STORE_KEY = 'LIST_CART';
    const [isCheck, setIsCheck] = useState(false);
    const [cart, setCart] = useState();
    const [infPayment, setInfPayment] = useState();
    useEffect(() => {
        const localStorageCart = localStorage.getItem(CART_STORE_KEY);
        if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
        }
    }, []);
    // delete cart
    const deleteCart = (id) => {
        const newCart = cart.filter((item) => item._id !== id);
        if (newCart) {
            localStorage.setItem(CART_STORE_KEY, JSON.stringify(newCart));
        }
    };
    // Updata quantity
    const onChangeUpdate = (id, data) => {
        setCart(
            cart.map((item) => (item._id === id ? {...item, quantity: data} : item))
        );
    };
    // xử lý payment
    const checkPayment = () => {
        if (cart && cart.length > 0) {
            localStorage.setItem(CART_STORE_KEY, JSON.stringify(cart));
        }
        setTimeout(() => {
            if (!isCheck) {
                setIsCheck(!isCheck);
            }
            setIsCheck(!isCheck);
        }, 1000);
    };
    const [checkEmpty, setCheckEmpty] = useState(1);
    const onSubmitPayment = (name, phone, address) => {
        const isRamdom = 10000 + Math.floor((Math.random() * 99999));
        if (name === undefined || name === 0) {
            return setCheckEmpty('Bạn không được để trống! (Họ tên)');
        }
        if (phone === undefined || phone === 0) {
            return setCheckEmpty('Bạn không được để trống! (Số điện thoại)');
        }
        if (address === undefined || address === 0) {
            return setCheckEmpty('Bạn không được để trống! (Địa chỉ)');
        }
        setInfPayment(
            {
                product: [...cart],
                nameUse: name,
                phoneUse: phone,
                addressUse: address,
                codeOrder: `CRC${isRamdom}`
            }
        );
        setCheckEmpty(2);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        if (infPayment !== undefined) {
            dispatch(orderActions.creatOrderByUse(infPayment));
            setInfPayment();
        }
    }, [infPayment, checkEmpty, dispatch]);
    useEffect(() => {
        if (checkEmpty === 2) {
            localStorage.removeItem(CART_STORE_KEY);
        }
    }, [checkEmpty]);
    // console.log({infPayment, });
    return (
        <div className='flex  justify-center pt-header my-8'>
            <div
                className={(checkEmpty !== 1) ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'}
            >
                <div className='bg-red-100 rounded-lg mt-5 border py-2 px-4'>
                    <i className={
                        checkEmpty === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                            : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                    }
                    />
                    <span className='font-semibold'>{checkEmpty === 2 ? 'Đặt hàng thành Công!!!' : checkEmpty}</span>
                </div>
            </div>
            <div
                className='
                flex flex-col w-full p-8 border rounded-md
                text-gray-800 bg-white shadow-lg pin-r pin-y
                md:w-4/5 lg:w-4/5
                '
            >
                <div className='flex-1'>
                    <table className='w-full text-sm lg:text-base'>
                        <thead>
                            <tr className='h-12 uppercase'>
                                <th className='text-left'>Tên sản phẩm</th>
                                <th className='lg:text-right'>
                                    <span className='lg:hidden' title='Quantity'>Giá</span>
                                    <span className='hidden lg:inline'>Giá</span>
                                </th>
                                <th className='text-right md:table-cell'>Số lượng</th>
                                <th className='hidden text-right md:table-cell'>Tổng tiền</th>
                                <th className='md:table-cell' aria-label=' ' />
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (cart && cart.length > 0) ? cart.map(
                                    (item, index) => (
                                        <ListProductsCart
                                            key={index}
                                            item={item}
                                            deleteCart={deleteCart}
                                            onChangeUpdate={onChangeUpdate}
                                        />
                                    )
                                ) : ''
                            }
                        </tbody>
                    </table>
                    <div className={(cart && cart.length > 0) ? 'hidden' : 'text-lg font-semibold text-red-500 text-center my-5'}>
                        <p>Danh sách trống!!!!</p>
                    </div>
                    <hr className={(cart && cart.length > 0) ? 'mt-6' : 'hidden'} />
                    <div className='my-4 mr-auto md:flex md:flex-row-reverse'>
                        <div className={(cart && cart.length > 0) ? '' : 'hidden'}>
                            <div className='flex justify-between pt-2 border-b text-red-500'>
                                <div className='lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center'>
                                    Tổng số tiền:
                                </div>
                                <div className='lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center'>
                                    VNĐ
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => checkPayment()}
                                    type='button'
                                    className='flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase
                                    bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none'
                                >
                                    <svg aria-hidden='true' data-prefix='far' data-icon='credit-card' className='w-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                                        <path fill='currentColor' d='M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z' />
                                    </svg>
                                    <span className='ml-2 mt-5px'>Thanh toán</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-6' />
                <Payment
                    isCheck={isCheck}
                    onSubmitPayment={onSubmitPayment}
                />
            </div>
        </div>
    );
}

export default ShoppingCart;

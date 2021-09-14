import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../../../../assets/styles/_class.scss';
import { adminActions, adminSelectors } from '../../../../state/modules/admin';

const ACCESS_TOKEN = 'accessToken';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const account = useSelector(adminSelectors.notifin);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [accounts, setAccounts] = useState();
    const [message, setMessage] = useState(1);

    const onClickLogin = () => {
        if (email !== undefined && email !== '' && password !== undefined && password !== '') {
            dispatch(adminActions.loginAdmin({ email, password }));
        } else {
            setMessage('Bạn không được để trống thông tin tài khoản!!!');
        }
    };

    // save token
    useEffect(() => {
        if (account.size != 0) {
            setAccounts([account]);
        }
    }, [account]);
    useEffect(() => {
        if (accounts && accounts.length > 0) {
            accounts.forEach((item) => {
                if (item.name) {
                    localStorage.setItem(ACCESS_TOKEN, JSON.stringify({ name: item.name, email: item.email }));
                    history.replace('/dashboard');
                } else {
                    setMessage('Thông tin tài khoản không chính xác!!!');
                }
            });
        }
    }, [accounts, history]);

    useEffect(() => {
        setTimeout(() => {
            setMessage(1);
        }, 5000);
    }, [message]);

    return (
        <div className='bg-no-repeat bg-cover bg-center relative bg-background-image'>
            <div
                className={(message !== 1) ? 'fixed right-3 shadow-lg mt-2 z-40' : 'hidden'}
            >
                <div className='bg-red-100 rounded-lg mt-5 border py-2 px-4'>
                    <i className={
                        message === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                            : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                    }
                    />
                    <span className='font-semibold'>{message}</span>
                </div>
            </div>
            <div className='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
                <div className='flex justify-center my-auto text-white'>
                    <div className=''>
                        <div className='my-5 text-center'>
                            <div className='flex justify-center py-3'>
                                <img src='logo.png' alt='Logo' className='' />
                            </div>
                            <div>
                                <h2>Đăng nhập vào Admin</h2>
                                <p>Nhập thông tin chi tiết của bạn để đăng nhập vào tài khoản của bạn.</p>
                            </div>
                        </div>
                        <div className='p-8'>
                            <form>
                                <div className='py-1 my-2 flex justify-center text-black'>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='text'
                                        name='email'
                                        className='border w-80 mx-5 focus:outline-none rounded-2xl pl-7 py-3 text-lg font-medium'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='py-1 my-2 flex justify-center text-black'>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type='password'
                                        name='password'
                                        className='border w-80 mx-5 focus:outline-none rounded-2xl pl-7 py-3 font-medium'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        onClick={() => onClickLogin()}
                                        type='button'
                                        className='
                                        my-3 cursor-pointer py-2 px-4 mt-6
                                        bg-yellow-500 text-white
                                        font-bold text-center rounded-xl focus:outline-none'
                                    >
                                        Đăng Nhập
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

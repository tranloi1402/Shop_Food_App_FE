import React, { useEffect, useState } from 'react';

import '../../../assets/styles/_class.scss';
import Sliderbar from './Sliderbar';

const ACCESS_TOKEN = 'accessToken';

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
    };
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
            setAdmin(JSON.parse(accessToken));
        }
    }, []);

    const [isCheck, setIsCheck] = useState(false);
    function onClickBtn() {
        console.log(isCheck);
        setIsCheck(!isCheck);
    }

    return (
        <>
            <div className='fixed w-full flex items-center justify-between h-14 text-white z-10 bg-navigation'>
                <div className='flex justify-start sm:hidden mx-2'>
                    <button
                        onClick={() => onClickBtn()}
                        type='button'
                        className='border py-1 px-2 border-gray-700 rounded focus:outline-none'
                    >
                        <i className='fas fa-bars' />
                    </button>
                </div>
                <div className='flex justify-between items-center w-full h-16'>
                    <div className='ml-16 px-1'>
                        <img src='logo.png' alt='Logo Shop' className='my-auto' />
                    </div>
                    <div id='dropDown' className='ml-auto relative leading-loose'>
                        <div className='flex md:mr-10 mr-7 h-14 py-3 capitalize hover-yellow'>
                            <img
                                src='https://i.pinimg.com/originals/8d/a5/c3/8da5c3a06407303694d6381b23368f02.png'
                                className='object-cover w-8 h-8 mx-4 rounded-full hidden md:block'
                            />
                            {admin.name}
                        </div>
                        <ul className='drop-content hidden absolute py-2 md:p-3 z-10 bg-white w-full rounded-lg border shadow-lg'>
                            <li>
                                <form onSubmit={() => handleLogout()}>
                                    <button
                                        type='submit'
                                        className='flex items-center font-semibold md:mx-4 text-black hover:text-blue-600 focus:outline-none'
                                    >
                                        <i className="fas fa-sign-out-alt px-2 text-xl capitalize" />
                                        Đăng xuất
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Sliderbar isCheck={isCheck} />
        </>
    );
};

export default Header;

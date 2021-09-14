import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormCreatCate from './formCreatCate';

const CreatCategory = () => {
    const history = useHistory();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            history.replace('/login');
        }
    }, [history]);

    return (
        <div className='Dashboard bg-dashboard'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
                <Header />
                <Sliderbar />
                <FormCreatCate />
            </div>
        </div>
    );
};

export default CreatCategory;

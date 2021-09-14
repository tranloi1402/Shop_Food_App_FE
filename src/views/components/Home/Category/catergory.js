import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Catergory = ({ listCateTitle1, listCateTitle2 }) => (
    <div className='w-80 bg-white py-4 px-5 border-t rounded-b-lg shadow-lg'>
        <ul className='grid grid-cols-2 gap-2'>
            <li>
                <div className='text-lg'>Đồ Uống</div>
                <div className='border-t mr-7 my-2' />
                <div>
                    <ul>
                        {
                            listCateTitle2.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={`/product/category/${item._id}`}
                                        className='
                                        text-sm font-normal capitalize
                                        text-gray-500 text-justify
                                        hover:text-yellow-500 transition delay-100'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </li>
            <li>
                <div className='text-lg'>Đồ Ăn</div>
                <div className='border-t mr-7 my-2' />
                <div>
                    <ul>
                        {
                            listCateTitle1.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={`/product/category/${item._id}`}
                                        className='text-sm font-normal text-justify capitalize
                                        text-gray-500 hover:text-yellow-500 transition delay-100'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </li>
        </ul>
    </div>
);

Catergory.propTypes = {
    listCateTitle1: PropTypes.object,
    listCateTitle2: PropTypes.object
};

Catergory.defaultProps = {
    listCateTitle1: {},
    listCateTitle2: {}
};

export default Catergory;

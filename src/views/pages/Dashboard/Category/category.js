import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
        <td className='sm:py-3 sm:px-6 p-2 text-left whitespace-nowrap'>
            <div className='flex items-center'>
                <span className='font-medium'>{category.name}</span>
            </div>
        </td>
        <td className='sm:py-3 sm:px-6 p-2 text-left'>
            <div className='flex items-center'>
                <span>{category.tile == 1 ? 'Đồ ăn' : 'Đồ uống'}</span>
            </div>
        </td>
        <td className='sm:py-3 sm:px-6 p-2 text-center'>
            <span className={category.status === 1 ? 'bg-green-500 text-white py-1 px-3 rounded-full text-xs' : 'bg-red-500 text-white py-1 px-3 rounded-full text-xs'}>
                {category.status === 1 ? 'Hoạt động' : 'Dừng hoạt động'}
            </span>
        </td>
        <td className='py-3 px-6 text-center'>
            <div className='flex item-center justify-center md:gap-6 sm:gap-4 gap-2'>

                <div
                    className='w-4 transfor md:text-lg hover:text-yellow-500 hover:scale-110'
                >
                    <Link
                        to={`/dashboard/EditCategory/${category._id}`}
                    >
                        <i className='far fa-edit' />
                    </Link>
                </div>
                <div className='w-4 transform md:text-lg hover:text-yellow-500 hover:scale-110'>
                    <Link to={`/dashboard/categorys/delete/${category._id}`}>
                        <i className='fas fa-trash' />
                    </Link>
                </div>
            </div>
        </td>
    </tr>
);

Category.propTypes = {
    category: PropTypes.object
};

Category.defaultProps = {
    category: {}
};

export default Category;

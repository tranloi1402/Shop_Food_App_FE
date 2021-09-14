import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Order = ({ item }) => (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
        <td className='py-3 px-6 text-left whitespace-nowrap'>
            <div className='flex items-center'>
                <span className='font-medium text-md'>{item.nameUse}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-left'>
            <div className='font-medium text-md'>
                <span>{item.phoneUse}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-center'>
            <span
                className={
                    `py-1 px-3 rounded-full text-md font-medium
                    ${item.status === 1 ? 'bg-purple-200 text-purple-600' : ''}
                    ${item.status === 2 ? 'bg-yellow-500 text-white' : ''}
                    ${item.status === 3 ? 'bg-green-500 text-white' : ''}
                    `
                }
            >
                {item.status === 1 ? 'Đang chờ xử lý' : ''}
                {item.status === 2 ? 'Đang vận chuyển' : ''}
                {item.status === 3 ? 'Hoàn thành' : ''}
                {item.status === 4 ? 'Hủy đơn' : ''}
            </span>
        </td>
        <td className='py-3 px-6 text-center'>
            <div className='flex item-center justify-center'>
                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                    <Link to={`/dashboard/editOrder/${item._id}`}>
                        <i className='far fa-edit' />
                    </Link>
                </div>
            </div>
        </td>
    </tr>
);

Order.propTypes = {
    item: PropTypes.object.isRequired
};

// Order.defaultProps = {
//     orders: {}
// };

export default Order;

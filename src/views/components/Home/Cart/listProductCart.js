import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListProductCart = ({ item, deleteCart, onChangeUpdate }) => {
    const [qty, setQty] = useState(1);
    return (
        <tr>
            <td>
                <div className='sm:flex block'>
                    <img src={item.image} className='lg:w-20 w-12 mx-auto sm:mx-0 rounded' />
                    <div className='sm:ml-2'>
                        <p className='text-lg sm:my-3 mb-3 sm:p-0 pb-2 text-center md:ml-4'>{item.name}</p>
                    </div>
                </div>
            </td>
            <td className='text-center md:table-cell'>
                <span className='text-md md:text-base font-medium'>
                    {`${item.price} VNĐ`}
                </span>
            </td>
            <td className='text-center md:justify-end md:flex'>
                <span className='text-md lg:text-base font-medium mt-3'>
                    <input
                        onBlur={(e) => {
                            e.preventDefault();
                            onChangeUpdate(item._id, e.target.value);
                            setQty(e.target.value);
                        }}
                        type='number'
                        placeholder={item.quantity}
                        className='bg-gray-200 sm:w-16 w-8 focus:outline-none rounded-md sm:px-3 px-1 py-1'
                    />
                </span>
            </td>
            <td className='hidden text-right md:table-cell'>
                <span className='text-lg lg:text-base font-medium'>
                    {`${(qty > 1) ? item.price * qty : item.quantity * item.price} VNĐ`}
                </span>
            </td>
            <td className='text-md md:ml-3 text-gray-400'>
                <form
                    onSubmit={() => deleteCart(item._id)}
                >
                    <button type='submit' className='hover:text-red-500 border-none focus:outline-none'>
                        <i className='fas fa-times pl-5' />
                    </button>
                </form>
            </td>
        </tr>
    );
};

ListProductCart.propTypes = {
    item: PropTypes.object,
    deleteCart: PropTypes.func,
    onChangeUpdate: PropTypes.func
};

ListProductCart.defaultProps = {
    item: {},
    deleteCart: null,
    onChangeUpdate: null
};

export default ListProductCart;

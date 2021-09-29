import React from 'react';
import PropTypes from 'prop-types';

import Catergory from './category';

const ListCategory = ({ categoryList, loading }) => (
    <div className='h-full mt-14 mb-10 md:ml-64'>
        <div>
            <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Danh sách danh mục sản phẩm</h2>
        </div>
        <div className='bg-white shadow-md rounded my-6 sm:mx-5'>
            <table className='sm:min-w-max w-full table-auto'>
                <thead>
                    <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                        <th className='py-3 px-6 text-left'>Tên</th>
                        <th className='py-3 px-6 text-left'>Loại đồ ăn</th>
                        <th className='py-3 px-6 text-center'>Trạng thái</th>
                        <th className='py-3 px-6 text-center'>Hoạt động</th>
                    </tr>
                </thead>
                {
                    loading ? '' : (
                        <tbody className='text-gray-600 text-sm font-light'>
                            {
                                categoryList.map((category, idx) => (
                                    <Catergory key={idx} category={category} />
                                ))
                            }
                        </tbody>
                    )
                }
            </table>
        </div>
        <h1 className='text-xl font-medium text-center my-10'>
            {
                loading ? 'Đang tải...'
                    : (
                        <span className='text-red-500'>
                            {
                                (categoryList && categoryList.length > 0) ? '' : '(Danh sách trống !!!)'
                            }
                        </span>
                    )
            }
        </h1>
    </div>
);

ListCategory.propTypes = {
    categoryList: PropTypes.object,
    loading: PropTypes.bool
};

ListCategory.defaultProps = {
    categoryList: {},
    loading: null
};

export default ListCategory;

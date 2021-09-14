import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
//= ============== SELECTOR ===============//
const getAllProducts = (state) => state.getIn(['product', 'products']);
const postEditProduct = (state) => state.getIn(['product', 'editProduct']);

export const selectors = {
    getAllProducts,
    postEditProduct
};

//= ============== REDUCER ===============//
const initState = fromJS({
    products: [],
    editProduct: []
});

const storeProduct = (state, action) => state.set('products', action.payload);
const dataEditProduct = (state, action) => state.set('editProduct', action.payload);

const reducer = handleActions(
    {
        [types.STORE_PRODUCT]: storeProduct,
        [types.STORE_PRODUCT_EDIT]: dataEditProduct
    },
    initState
);

export default reducer;

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
//= ============== SELECTOR ===============//
const getAllProducts = (state) => state.getIn(['product', 'products']);
const loading = (state) => state.getIn(['product', 'loading']);
const postEditProduct = (state) => state.getIn(['product', 'editProduct']);

export const selectors = {
    getAllProducts,
    loading,
    postEditProduct
};

//= ============== REDUCER ===============//
const initState = fromJS({
    products: [],
    editProduct: [],
    loading: true
});

const isLoading = (state) => state.set('loading', true);
const storeProduct = (state, action) => state.set('products', action.payload);
const success = (state) => state.set('loading', false);
const dataEditProduct = (state, action) => state.set('editProduct', action.payload);

const reducer = handleActions(
    {
        [types.IS_LOADED]: isLoading,
        [types.STORE_PRODUCT]: storeProduct,
        [types.SUCCESS]: success,
        [types.STORE_PRODUCT_EDIT]: dataEditProduct
    },
    initState
);

export default reducer;

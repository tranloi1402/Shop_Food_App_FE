// import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const listCarts = (state) => state.getIn(['cart', 'carts']);

export const selectors = {
    listCarts
};

//= ============== REDUCER ===============//
const initState = {
    carts: []
};

const storeCart = (state, action) => state.set('carts', action.payload);

const reducer = handleActions(
    {
        [types.STORE_CART]: storeCart
    },
    initState
);

export default reducer;

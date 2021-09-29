import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
//= ============== SELECTOR ===============//
const listOrder = (state) => state.getIn(['order', 'orders']);
const dataEdit = (state) => state.getIn(['order', 'editOrder']);
const notyfine = (state) => state.getIn(['order', 'message']);
const loading = (state) => state.getIn(['order', 'loading']);

export const selectors = {
    listOrder,
    dataEdit,
    notyfine,
    loading
};

//= ============== REDUCER ===============//
const initState = fromJS({
    orders: [],
    editOrder: [],
    message: [],
    loading: true
});

const isLoading = (state) => state.set('loading', true);
const storeOrder = (state, action) => state.set('orders', action.payload);
const storeEdit = (state, action) => state.set('editOrder', action.payload);
const sendMessage = (state, action) => state.set('message', action.payload);
const success = (state) => state.set('loading', false);

const reducer = handleActions(
    {
        [types.LOADING]: isLoading,
        [types.STORE_ORDER]: storeOrder,
        [types.STORE_EDIT]: storeEdit,
        [types.SUCCESS]: sendMessage,
        [types.STOP_LOADING]: success
    },
    initState
);

export default reducer;

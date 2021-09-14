import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
//= ============== SELECTOR ===============//
const listOrder = (state) => state.getIn(['order', 'orders']);
const dataEdit = (state) => state.getIn(['order', 'editOrder']);
const notyfine = (state) => state.getIn(['order', 'message']);

export const selectors = {
    listOrder,
    dataEdit,
    notyfine
};

//= ============== REDUCER ===============//
const initState = fromJS({
    orders: [],
    editOrder: [
        {name: 'aaaaa'}
    ],
    message: []
});

const storeOrder = (state, action) => state.set('orders', action.payload);
const storeEdit = (state, action) => state.set('editOrder', action.payload);
const sendMessage = (state, action) => state.set('message', action.payload);

const reducer = handleActions(
    {
        [types.STORE_ORDER]: storeOrder,
        [types.STORE_EDIT]: storeEdit,
        [types.SUCCESS]: sendMessage
    },
    initState
);

export default reducer;

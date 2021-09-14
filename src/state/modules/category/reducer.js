import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const categories = (state) => state.getIn(['category', 'categories']);
const categorieEdit = (state) => state.getIn(['category', 'editId']);

export const selectors = {
    categories,
    categorieEdit
};

//= ============== REDUCER ===============//
const initState = fromJS({
    categories: [],
    editId: []
});

const storeCate = (state, action) => state.set('categories', action.payload);
const successIdCate = (state, action) => state.set('editId', action.payload);

const reducer = handleActions(
    {
        [types.STORE_CATE]: storeCate,
        [types.EDIT_ID_SUCCESS]: successIdCate
    },
    initState
);

export default reducer;

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const categories = (state) => state.getIn(['category', 'categories']);
const categorieEdit = (state) => state.getIn(['category', 'editId']);
const loading = (state) => state.getIn(['category', 'loading']);

export const selectors = {
    categories,
    categorieEdit,
    loading
};

//= ============== REDUCER ===============//
const initState = fromJS({
    categories: [],
    editId: [],
    loading: true
});

const isLoading = (state) => state.set('loading', true);
const storeCate = (state, action) => state.set('categories', action.payload);
const successIdCate = (state, action) => state.set('editId', action.payload);
const success = (state) => state.set('loading', false);

const reducer = handleActions(
    {
        [types.LOADING]: isLoading,
        [types.STORE_CATE]: storeCate,
        [types.EDIT_ID_SUCCESS]: successIdCate,
        [types.SUCCESS]: success
    },
    initState
);

export default reducer;

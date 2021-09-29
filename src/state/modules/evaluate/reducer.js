import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
//= ============== SELECTOR ===============//
const getAllEvaluate = (state) => state.getIn(['evaluate', 'evaluates']);
const loading = (state) => state.getIn(['evaluate', 'loading']);

export const selectors = {
    getAllEvaluate,
    loading
};

//= ============== REDUCER ===============//
const initState = fromJS({
    evaluates: [],
    loading: false
});

const isLoading = (state) => state.set('loading', true);
const storeEvaluate = (state, action) => state.set('evaluates', action.payload);
const success = (state) => state.set('loading', false);

const reducer = handleActions(
    {
        [types.LOADING]: isLoading,
        [types.STORE_EVALUATE]: storeEvaluate,
        [types.SUCCESS]: success
    }, initState
);

export default reducer;

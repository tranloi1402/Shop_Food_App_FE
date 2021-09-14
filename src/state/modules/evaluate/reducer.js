import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
//= ============== SELECTOR ===============//
const getAllEvaluate = (state) => state.getIn(['evaluate', 'evaluates']);

export const selectors = {
    getAllEvaluate
};

//= ============== REDUCER ===============//
const initState = fromJS({
    evaluates: []
});

const storeEvaluate = (state, action) => state.set('evaluates', action.payload);

const reducer = handleActions(
    {
        [types.STORE_EVALUATE]: storeEvaluate
    }, initState
);

export default reducer;

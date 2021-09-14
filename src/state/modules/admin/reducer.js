import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const notifin = (state) => state.getIn(['admin', 'message']);

export const selectors = {
    notifin
};

//= ============== REDUCER ===============//
const initState = fromJS({
    message: []
});

const notyfinecation = (state, action) => state.set('message', action.payload);

const reducer = handleActions(
    {
        [types.NOTYFINECATION]: notyfinecation
    },
    initState
);

export default reducer;

import types from './types';
import { sagas, actions } from './actions';
import reducer, { selectors } from './reducer';

export default reducer;

export {
    types as orderTypes,
    sagas as orderSagas,
    actions as orderActions,
    selectors as orderSelectors
};

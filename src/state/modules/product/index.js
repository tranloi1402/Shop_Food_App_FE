import types from './types';
import { sagas, actions } from './actions';
import reducer, { selectors } from './reducer';

export default reducer;

export {
    types as productTypes,
    sagas as productSagas,
    actions as productActions,
    selectors as productSelectors
};

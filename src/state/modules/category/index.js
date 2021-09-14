import types from './types';
import { sagas, actions } from './actions';
import reducer, { selectors } from './reducer';

export default reducer;

export {
    types as categoryTypes,
    sagas as categorySagas,
    actions as categoryActions,
    selectors as categorySelectors
};

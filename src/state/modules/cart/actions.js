import { createAction } from 'redux-actions';

import { put, takeEvery } from 'redux-saga/effects';
import types from './types';

const addToCart = createAction(types.ADD_TO_CART);

const storeCart = createAction(types.STORE_CART);

const success = createAction(types.SUCCESS);
const fail = createAction(types.FAIL);

export const actions = {
    addToCart
};

//= =============== SAGAS ===============//

function* addCart(action) {
    try {
        // console.log('[ action-add ]', action.payload);
        yield put(storeCart(action.payload));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

export function* sagas() {
    yield takeEvery(types.ADD_TO_CART, addCart);
}

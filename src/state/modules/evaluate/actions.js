import { createAction } from 'redux-actions';

import { call, put, takeEvery } from 'redux-saga/effects';
import types from './types';
import * as Api from '../../../apis/API';

//= ============== ACTIONS ===============//
const getAllEvaluate = createAction(types.GET_ALL_EVALUATE);

const createEvaluate = createAction(types.CREATE_EVALUATE);

const storeEvaluate = createAction(types.STORE_EVALUATE);
const success = createAction(types.SUCCESS);
const fail = createAction(types.FAIL);
const loading = createAction(types.LOADING);

export const actions = {
    getAllEvaluate,
    createEvaluate
};

//= =============== SAGAS ===============//
function* fecthGetAllEval(action) {
    try {
        // console.log('[data actions]', action.payload);
        yield put(loading());
        const response = yield call(Api.getAllEvaluate, action.payload);
        yield put(storeEvaluate(response.data));
        yield put(success());
    } catch (error) {
        yield put(fail(error));
    }
}

function* postCreateEvaluate(action) {
    try {
        const response = yield call(Api.postCreateEvaluate, action.payload);
        yield put(success(response));
    } catch (error) {
        yield put(fail(error));
    }
}

export function* sagas() {
    yield takeEvery(types.GET_ALL_EVALUATE, fecthGetAllEval);
    yield takeEvery(types.CREATE_EVALUATE, postCreateEvaluate);
}

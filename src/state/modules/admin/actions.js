import { createAction } from 'redux-actions';

import { call, put, takeEvery } from 'redux-saga/effects';
import types from './types';
import * as Api from '../../../apis/API';

//= ============== ACTIONS ===============//
const loginAdmin = createAction(types.ADMIN_LOGIN);

const notyfinecation = createAction(types.NOTYFINECATION);

const success = createAction(types.SUCCESS);
const fail = createAction(types.FAIL);

export const actions = {
    loginAdmin
};

//= =============== SAGAS ===============//
function* postLoginAdmin(action) {
    try {
        const response = yield call(Api.adminLogin, action.payload);
        yield put(notyfinecation(response.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

export function* sagas() {
    yield takeEvery(types.ADMIN_LOGIN, postLoginAdmin);
}

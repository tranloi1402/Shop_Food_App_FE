import { createAction } from 'redux-actions';

import { call, put, takeEvery } from 'redux-saga/effects';
import types from './types';
import * as Api from '../../../apis/API';

//= ============== ACTIONS ===============//
const createCate = createAction(types.CREAT_CATE);
const createCateSuccess = createAction(types.CREAT_CATE_SUCCESS);
const createCateFailure = createAction(types.CREAT_CATE_FAILURE);

// const updateCate = createAction(types.UPDATE_CATE);
const editId = createAction(types.EDIT_ID);
const editIdSuccess = createAction(types.EDIT_ID_SUCCESS);
const updateCate = createAction(types.UPDATE_CATE);
const updateSuccess = createAction(types.UPDATE_CATE_SUCCESS);

// const deleteCate = createAction(types.DELETE_CATE);
const deleteCate = createAction(types.DELETE_CATE);

const getAllCate = createAction(types.ALL_CATE);
const storeCate = createAction(types.STORE_CATE);
const success = createAction(types.SUCCESS);
const fail = createAction(types.FAIL);

export const actions = {
    createCate,

    editId,
    updateCate,

    deleteCate,

    getAllCate
};

//= =============== SAGAS ===============//
function* fetchCategory() {
    try {
        const response = yield call(Api.getAllcategory);
        yield put(storeCate(response.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* createdCategory(action) {
    try {
        const res = yield call(Api.creatCatePost, action.payload);
        console.log('[createdCategory - category]', res);
        yield put(createCateSuccess(res));
    } catch (error) {
        yield put(createCateFailure());
    }
}

function* editCategoryID(action) {
    try {
        const res = yield call(Api.editByID, action.payload);
        yield put(editIdSuccess(res.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* updateCategory(action) {
    try {
        console.log('[[updateCategory-action-payload]]', action.payload);
        const response = yield call(Api.postUpdateCate, action.payload);
        console.log('[[updateCategory-data-Api]]', response.data);
        const succ = yield put(updateSuccess(response.data));
        console.log('[[success]]', succ);
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* deleteCategory(action) {
    try {
        const response = yield call(Api.postDeleteCateById, action.payload);
        console.log('[[deleteCategory-log-req]]', response);
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

export function* sagas() {
    yield takeEvery(types.ALL_CATE, fetchCategory);
    yield takeEvery(types.CREAT_CATE, createdCategory);
    yield takeEvery(types.EDIT_ID, editCategoryID);
    yield takeEvery(types.UPDATE_CATE, updateCategory);
    yield takeEvery(types.DELETE_CATE, deleteCategory);
}

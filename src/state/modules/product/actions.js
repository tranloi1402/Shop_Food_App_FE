import { createAction } from 'redux-actions';

import { call, put, takeEvery } from 'redux-saga/effects';
import types from './types';
import * as Api from '../../../apis/API';

//= ============== ACTIONS ===============//
const getAllProduct = createAction(types.GET_ALL_PRODUCT);
const getSearchPrd = createAction(types.GET_SREACH_PRODUCT);
const storeProduct = createAction(types.STORE_PRODUCT);

const createProduct = createAction(types.POST_CREATE_PRODUCT);

const editProduct = createAction(types.POST_EDIT_PRODUCT);
const storeEditProduct = createAction(types.STORE_PRODUCT_EDIT);
const updateProduct = createAction(types.POST_UPDATE_PRODUCT);

const deleteProduct = createAction(types.POST_DELETE_PRODUCT);

const success = createAction(types.SUCCESS);
const fail = createAction(types.FAIL);
const isLoading = createAction(types.IS_LOADED);

export const actions = {
    // all-data
    getAllProduct,
    getSearchPrd,

    // create product
    createProduct,

    // Update product
    editProduct,
    updateProduct,

    // delete product
    deleteProduct
};

//= =============== SAGAS ===============//
function* fecthAllProduct() {
    try {
        yield put(isLoading());
        const response = yield call(Api.getAllProduct);
        yield put(storeProduct(response.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* getSreach(action) {
    try {
        yield put(isLoading());
        const response = yield call(Api.getSreach, action.payload);
        yield put(storeProduct(response.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* fecthCreateProduct(action) {
    try {
        // console.log('[[action.payload]]', action.payload);
        const res = yield call(Api.postCreateProduct, action.payload);
        console.log('[[ New - Create - Product ]]', res);
        yield put(success());
        // console.log('[[[ a ]]]', a);
    } catch (error) {
        yield put(fail());
    }
}

function* postEditProduct(action) {
    try {
        yield put(isLoading());
        const res = yield call(Api.postEditProduct, action.payload);
        console.log('[[ postEditProduct - data ]]', res.data);
        yield put(storeEditProduct(res.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* postUpdateProduct(action) {
    try {
        const res = yield call(Api.postUpdateProduct, action.payload);
        // console.log(res);
        yield put(success(res));
    } catch (error) {
        yield put(fail());
    }
}

function* postDeleteProduct(action) {
    try {
        const res = yield call(Api.postDeleteProduct, action.payload);
        // console.log('[[ postDeleteProduct - res ]]', res.data);
        yield put(success(res.data));
    } catch (error) {
        yield put(fail());
    }
}

export function* sagas() {
    yield takeEvery(types.GET_ALL_PRODUCT, fecthAllProduct);
    yield takeEvery(types.GET_SREACH_PRODUCT, getSreach);
    yield takeEvery(types.POST_CREATE_PRODUCT, fecthCreateProduct);
    yield takeEvery(types.POST_EDIT_PRODUCT, postEditProduct);
    yield takeEvery(types.POST_UPDATE_PRODUCT, postUpdateProduct);
    yield takeEvery(types.POST_DELETE_PRODUCT, postDeleteProduct);
}

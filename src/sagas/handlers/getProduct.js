import { call, put } from 'redux-saga/effects';
import { getProductsFailure, getProductsSuccess } from '../../actions/productActions';
import { requestProducts } from '../requests/getProduct';

export function* handleProducts(action) {
    try {
        const response = yield call(requestProducts);
        const { data } = response;
        yield put(getProductsSuccess(data));
    } catch (error) {
        yield put(getProductsFailure(error));
    }
}

import { takeLatest, all } from 'redux-saga/effects';
import { GET_PRODUCTS } from '../actions/productActions';
import { SUBMIT } from '../actions/submitActions';
import { handleProducts } from './handlers/getProduct';
import { handleSubmit } from './handlers/submitForm';

// export function* watcherSaga() {
//     yield takeLatest(GET_PRODUCTS, handleProducts);
// }

function* watcherSaga() {
    yield takeLatest(GET_PRODUCTS, handleProducts);
}

function* watcherSaga1() {
    yield takeLatest(SUBMIT, handleSubmit);
}

export default function* rootSaga() {
    yield all([watcherSaga(), watcherSaga1()]);
}

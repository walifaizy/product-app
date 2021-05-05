import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { call, put } from 'redux-saga/effects';
import { getProducts } from '../../actions/productActions';
import { submitFailure, submitSuccess } from '../../actions/submitActions';
import { requestProducts } from '../requests/getProduct';
import { requestSubmit } from '../requests/submitForm';

// export function* handleSubmit(action) {
//     try {
//         const response = yield call(requestSubmit, action.query, action.payload);
//         console.log(response, 'RES');
//         const { data } = response;
//         toast.success('Form Submitted Sucessfully', {
//             position: 'top-right',
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         yield put(submitSuccess(data));
//     } catch (error) {
//         yield put(submitFailure(error));
//     }
// }

export function* handleSubmit(action) {
    const response = yield call(requestSubmit, action.query, action.payload);
    console.log(response.data, 'data');
    if (response && response.data) {
        const { data } = response;
        yield put(submitSuccess(data));
        toast.success('Form Submitted Sucessfully', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        yield put(getProducts());
    } else {
        yield put(submitFailure());
    }
}

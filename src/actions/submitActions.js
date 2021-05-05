export const SUBMIT = 'SUBMIT';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE';

const submit = (query, payload) => {
    return {
        type: SUBMIT,
        payload,
        query,
    };
};

const submitSuccess = () => {
    return {
        type: SUBMIT_SUCCESS,
    };
};

const submitFailure = (error) => {
    return {
        type: SUBMIT_FAILURE,
        error,
    };
};

export { submit, submitSuccess, submitFailure };

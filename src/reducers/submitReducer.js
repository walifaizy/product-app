let INITIAL_STATE = {
    isPosting: false,
};

const submitReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return { ...state, isPosting: true };
        case 'SUBMIT_SUCCESS':
            return { ...state, isPosting: false };
        case 'SUBMIT_FAILURE':
            return { ...state, isPosting: false };
        default:
            return state;
    }
};

export default submitReducer;

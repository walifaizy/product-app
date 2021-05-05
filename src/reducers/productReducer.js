let INITIAL_STATE = {
    products: null,
    isLoading: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, isLoading: true };
        case 'GET_PRODUCTS_SUCCESS':
            const { products } = action;
            return { ...state, isLoading: false, products };
        case 'GET_PRODUCTS_FAILURE':
            return { ...state, isLoading: false };
        default:
            return state;
    }
};

export default productReducer;

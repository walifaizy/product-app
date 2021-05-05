export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
};

const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products,
    };
};

const getProductsFailure = (error) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        error,
    };
};

export { getProducts, getProductsSuccess, getProductsFailure };

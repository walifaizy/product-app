import axios from 'axios';

export const requestSubmit = (query, payload) => {
    return axios.request({
        method: 'patch',
        url: `http://localhost:5000/products/${query}`,
        'Content-Type': 'application/json',
        data: payload,
    });
};

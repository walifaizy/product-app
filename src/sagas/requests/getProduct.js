import axios from 'axios';

export const requestProducts = () => {
    return axios.request({
        method: 'get',
        url: `http://localhost:5000/products`,
    });
};

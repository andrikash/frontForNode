import axios from 'axios';
import { API_URL } from '../constants/config';

const requests = {
    get: (url) => {
            return axios.get(`${API_URL}${url}`, {
                headers: { 
                    Authorization: 'bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            });
    },
    post: (url, data) => {
            return axios.post(`${API_URL}${url}`, data, {
                headers: { 
                    Authorization: 'bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
    },
    put: (url, data) => {
        return axios.put(`${API_URL}${url}`, data, {
            headers: { 
                Authorization: 'bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
        })
    },
    delete: (url) => {
        return axios.delete(`${API_URL}${url}`, {
            headers: { 
                Authorization: 'bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            } 
        })
    }
};

export const User = {
    login: (data) => requests.post('/auth/login', data),
    logout: () => requests.get('/auth/logout'),
    register: (data) => requests.post('/auth/registration', data),
    currentUser: (id) => requests.get(`/users/${id}`),
    changePassword: (id,data) => requests.put(`/auth/changePassword/${id}`, data),
    updateUser: (id, data) => requests.put(`/users/${id}`,data),
}
export const Product = {
    currentProduct: (id) => requests.get(`/products/${id}`),
    addProduct: (data) => requests.post(`/products`, data),
    updateProduct: (id, data) => requests.put(`/products/${id}`,data),
    getAllProducts: () => requests.get('/products'),
    deleteProduct: (id) => requests.delete(`/products/${id}`)
}

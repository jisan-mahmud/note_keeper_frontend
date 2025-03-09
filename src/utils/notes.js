import axios from 'axios';

export const notes = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json',
    }
});

notes.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `JWT ${token}`; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

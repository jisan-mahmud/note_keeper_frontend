import axios from 'axios';

export const notes = axios.create({
    baseURL: 'https://ecarebd.pythonanywhere.com/',
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

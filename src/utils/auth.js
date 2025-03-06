import axios from 'axios'

export const auth = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/auth/',
    headers: {
        'Content-Type': 'application/json' 
    }
})



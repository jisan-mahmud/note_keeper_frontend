import axios from 'axios'

export const auth = axios.create({
    baseURL: 'https://ecarebd.pythonanywhere.com/api/auth/',
    headers: {
        'Content-Type': 'application/json' 
    }
})



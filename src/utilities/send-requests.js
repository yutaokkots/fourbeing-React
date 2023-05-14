import * as userService from './users-service'

const DEV_URL = import.meta.env.VITE_DEVL_URL
const PROD_URL = import.meta.env.VITE_PROD_URL



// http://localhost:8000/

export default async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    const token = userService.getToken();
    if(token){
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    } 
    const res = await fetch(`${DEV_URL}${url}`, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request')
    
}
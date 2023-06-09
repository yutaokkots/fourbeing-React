import * as userService from './users-service'

const DEV_URL = import.meta.env.VITE_DEVL_URL
const PROD_URL = import.meta.env.VITE_PROD_URL



export default async function fileSendRequest(url, method = 'GET', file = null) {
    const options = { method };
    if (file) {
        options.body = file
    }

    const token = userService.getToken();
    if(token){
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    } 
    console.log(options)
    const res = await fetch(`${PROD_URL}${url}`, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request')

}
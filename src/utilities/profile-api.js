
const BASE_URL = '/api/user/profile'
import sendRequest from './send-requests'



export function getProfile(userData){
    console.log('user-service', userData)
    return sendRequest(`${BASE_URL}/${2}/`)
}


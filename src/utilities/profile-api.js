import sendRequest from './send-requests'
import * as usersService from './users-service'

const BASE_URL = '/api/auth/user/profile'

export function getProfile(){
    const id = usersService.getUserId()
    return sendRequest(`${BASE_URL}/${id}/`)
}

export function createProfile(userData){
    const id = usersService.getUserId()
    return sendRequest(`${BASE_URL}/${id}/create/`, "POST", userData)
}

export function editProfile(userData){
    const id = usersService.getUserId()
    return sendRequest(`${BASE_URL}/${id}/edit/`, "PUT", userData)
}

export function getUserProfile(id){
    console.log(id)
    return sendRequest(`${BASE_URL}/${id}/`)
}

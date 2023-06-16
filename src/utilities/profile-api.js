import fileSendRequest from './file-send-requests'
import sendRequest from './send-requests'
import * as usersService from './users-service'


const BASE_URL = '/api/auth/user/profile'

export function getProfile(id){
    console.log(id)
    if (id == undefined){
        id = usersService.getUserId()
    }
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
    return sendRequest(`${BASE_URL}/${id}/`)
}

export function getProfilePhoto(id){
    if (id == undefined){
        id = usersService.getUserId()
    }
    return sendRequest(`${BASE_URL}/${id}/get_photo/`)
}

export function addProfilePhoto(file){
    const id = usersService.getUserId()
    return fileSendRequest(`${BASE_URL}/${id}/add_photo/`, "POST", file)
}

export function editProfilePhoto(file){
    const id = usersService.getUserId()
    return fileSendRequest(`${BASE_URL}/${id}/edit_photo/`, "PUT", file)
}
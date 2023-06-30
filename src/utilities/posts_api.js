import sendRequest from "./send-requests"
import fileSendRequest from "./file-send-requests"
import { getUserId } from './users-service'

const BASE_URL = "/api/fourbeing"

export function getPostAll(){
    return sendRequest(`${BASE_URL}`)
}

export function getPost(postId){
    return sendRequest(`${BASE_URL}/${postId}/`)
}

export function createPost(postContent){
    return sendRequest(`${BASE_URL}/create/`, "POST", postContent)
}

export function createPostPhoto(postContent){
    return fileSendRequest(`${BASE_URL}/createPhoto/`, "POST", postContent)
}


export function updatePost(postContent, postId){
    return sendRequest(`${BASE_URL}/${postId}/update/`, "PUT", postContent)
}

export function deletePost(userId, postId){
    if (userId == getUserId()){
        return sendRequest(`${BASE_URL}/${userId}/${postId}/delete/`, "DELETE")
    }
}

export function addLove (loveInfo, postId){
    return sendRequest(`${BASE_URL}/${postId}/love/`, "PUT", loveInfo)
}


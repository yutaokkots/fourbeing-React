import sendRequest from "./send-requests"

const BASE_URL = "/api/fourbeing"

export function getPostAll(){
    return sendRequest(`${BASE_URL}`)
}

export function getPost(postId){
    console.log(postId)
    return sendRequest(`${BASE_URL}/${postId}/`)
}

export function createPost(postContent){
    return sendRequest(`${BASE_URL}/create/`, "POST", postContent)
}

export function updatePost(postContent, postId){
    return sendRequest(`${BASE_URL}/${postId}/update/`, "PUT", postContent)
}

export function deletePost(postId){
    return sendRequest(`${BASE_URL}/${postId}/create/`)
}




// return fetch(url, options).then((response) => {
//     return response.json()
// }).catch((err) => {
//     throw new Error('Bad Request', err);
// })
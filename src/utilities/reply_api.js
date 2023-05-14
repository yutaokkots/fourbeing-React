import sendRequest from "./send-requests"

const BASE_URL = "/api/fourbeing"

export function getReply(postId){
    return sendRequest(`${BASE_URL}/${postId}/comments/`)
}

export function postReply(replyInfo, postId){
    return sendRequest(`${BASE_URL}/${postId}/comments/create/`, "POST", replyInfo)
}

export function editReply(replyInfo, postId, replyId){
    return sendRequest(`${BASE_URL}/${postId}/comments/${replyId}/update/`, "PUT", replyInfo)
}

export function deleteReply(postId, replyId){
    return sendRequest(`${BASE_URL}/${postId}/comments/${replyId}/delete/`, "DELETE")
}

export function addLove (loveInfo, postId, replyId){
    return sendRequest(`${BASE_URL}/${postId}/comments/${replyId}/love/`, "PUT", loveInfo)
}

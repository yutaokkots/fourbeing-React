import sendRequest from "./send-requests"

const BASE_URL = "/api/fourbeing"

export function getReply(postId){
    console.log(postId)
    return sendRequest(`${BASE_URL}/${postId}/comments/`)
}

export function postReply(replyInfo, postId){
    console.log(postId)
    return sendRequest(`${BASE_URL}/${postId}/comments/create/`, "POST", replyInfo)
}


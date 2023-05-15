import sendRequest from "./send-requests"

const BASE_URL = "/api/translate"

export function translate(content){
    return sendRequest(`${BASE_URL}/`, "POST", content)
}

import * as usersAPI from './users-api'

// signUp() -> user signs up and retreives and saves token
export async function signUp(userData){
    let loginData = {
        username: userData.username,
        password: userData.password
    }
    try {
        const response = await usersAPI.signUp(userData);
        if (response.token === "getToken") {
            const tokenResponse = await usersAPI.login(loginData);
            localStorage.setItem('token', tokenResponse.access);
        }
        return getUser();
    } catch (error) {
        console.error(error);
        return error
        // Handle error here
    }
}

// getToken() -> gets token from localhost storage (if there)
export function getToken(){
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payload = JSON.parse(window.atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('Token');
        return null;
    }
    return token;
}

// getUser() -> returns user name
export function getUser(){
    const token = getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).name : null
}


// login() -> user logins
export async function login(credentials){
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token.access);
    return getUser()
}

// logout() -> user logouts
export function logOut() {
    localStorage.removeItem('token');
}

// getUserId() -> get userId from the token saved locally
export function getUserId(){
    const token = localStorage.getItem("token");
    return token ? JSON.parse(window.atob(token.split('.')[1])).user_id : null
}
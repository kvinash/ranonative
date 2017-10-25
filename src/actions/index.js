
export const MATCH_DETAILS = 'MATCH_DETAILS';
export const SET_DETAILS = 'SET_DETAILS';
export const LOGOUT = 'LOGOUT'
export function onLoginAction(username, password){
    return {
        type : MATCH_DETAILS,
        payload : {
            username : username,
            password : password
        }
    }
}

export function setDetails(key , value){
    return {
        type : SET_DETAILS,
        payload : {
            key : key,
            value : value
        }
    }
}

export function onLogoutAction(){
    return{
        type : LOGOUT
    }
}
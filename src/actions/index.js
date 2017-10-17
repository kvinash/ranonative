
export const MATCH_DETAILS = 'MATCH_DETAILS';
export function onLoginAction(username, password){
    return {
        type : MATCH_DETAILS,
        payload : {
            username : username,
            password : password
        }
    }
}
export const SET_DETAILS = 'SET_DETAILS';
export function setDetails(key , value){
    return {
        type : SET_DETAILS,
        payload : {
            key : key,
            value : value
        }
    }
}

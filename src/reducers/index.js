import { combineReducers } from "redux";

const State = {
  products :[],
  delete_bool: false
};

export const getEntityByKey = (state, key) => {
  if(state && state[key]){
    return state[key];
  }
  return null;
}

const reducerLoginApi = (state = {}, action) => {
  switch (action.type) {
    case "LoginUser_PENDING": {
      return null;
    }
    case "LoginUser_FULFILLED": {

      let userResponse = action.payload;
     
      return {...state, userResponse};
      
    }
    default :{
      return null
    }
}
    
};
const USER_NAME = 'username',
      PASSWORD = 'password';
export const  STATE = {
  [USER_NAME] : null,
  [PASSWORD] : null

}
const reducerLoginLocal = ( state=STATE, action) => {
  switch (action.type) {
    case "MATCH_DETAILS" : {
      let cred = {
        name : 'kapil',
        pass : '123456'
      }
      let loginStatus = false;
      if(cred.name === action.payload.username && cred.pass === action.payload.password){
        loginStatus = true
      }
      return {...state, loginStatus}
      
    }

    case "SET_DETAILS" : {
        state[action.key] = action.value;
        return {...state}
    }
    default :{
      return null
    }
  }
}

export default combineReducers({
  reducerLoginApi,
  reducerLoginLocal
})
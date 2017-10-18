import { combineReducers } from "redux";
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export const getEntityByKey = (state, key) => {
  if(state && state[key]){
    return state[key];
  }
  return null;
}
const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'Timesheet':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Timesheet' }),
        state
      );
    break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
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
      return state
    }
}
    
};
const USER_NAME = 'userName',
      PASSWORD = 'password',
      LOGIN_STATUS = 'loginStatus'
export const  STATE = {
  [USER_NAME] : null,
  [PASSWORD] : null,
  [LOGIN_STATUS] :false

}
const reducerLoginLocal = ( state=STATE, action) => {
  switch (action.type) {
    case "MATCH_DETAILS" : {
      let cred = {
        name : 'k@ac.in',
        pass : '1234'
      }
      let loginStatus = false;
      if(cred.name === action.payload.username && cred.pass === action.payload.password){
        loginStatus = true
      }
      return {...state, loginStatus}
      
    }

    case "SET_DETAILS" : {
      console.log("action action action", action)
        state[action.payload.key] = action.payload.value;
        return {...state}
    }
    default :{
      return state
    }
  }
}

export default combineReducers({
 reducerLoginApi,
   reducerLoginLocal
})
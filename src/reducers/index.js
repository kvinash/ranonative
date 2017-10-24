import { combineReducers } from "redux";
import { NavigationActions } from 'react-navigation';

import { AppNavigator, AppDrawerNavigator} from '../navigators/AppNavigator';
import {

  AsyncStorage

} from "react-native";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);
//current navigation drawer state open or close.
const defaultGetStateForAction = AppDrawerNavigator.router.getStateForAction;
let drawerStatus = {
  state : false
};
AppDrawerNavigator.router.getStateForAction = (action, state) => {
  
      //use 'DrawerOpen' to capture drawer open event
      if (state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerOpen') {
          drawerStatus.state = true;
          //write the code you want to deal with 'DrawerClose' event
      }
      return defaultGetStateForAction(action, state);
  };
export const getEntityByKey = (state, key) => {
  if(state && state[key]){
    return state[key];
  }
  return null;
}
const drawerState = (state=drawerStatus, action)=>{
 
   return drawerStatus;
}
const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
  
    case 'DrawerNavigation':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'DrawerNavigation' }),
        state
      );
      break;
    case 'DrawerOpen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'DrawerOpen' }),
        state
    );
    break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
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
        AsyncStorage.setItem('@loginToken:key', '123456');
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
   reducerLoginLocal,
   nav,
   drawerState
 

})
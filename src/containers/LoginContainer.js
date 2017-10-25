import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Image,
  StatusBar,
  TouchableHighlight,
  Alert,
  WebView,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  ToastAndroid
  

} from "react-native";
import assets from "../assets/";
import { validateEmail } from '../components/validationHandler';
import Login from '../components/Login';
import LoadingScreen from '../components/LoadingScreen';
import {onLoginAction, setDetails} from '../actions';
import { NavigationActions } from 'react-navigation';
 class LoginContainer extends React.Component {
  constructor(props){
    super(props)
    console.log('containerProps', this.props);
    this.state={
      message : null,
      isLoading : true
    }
  }
  componentWillMount() {
    // let userName =  AsyncStorage.getItem('@userName:key');
    
    // AsyncStorage.getItem('@loginToken:key', (tokenErr, loginToken)=>{
    //     if(loginToken){
    //       this.props.setDetails('loginToken', loginToken);
    //       AsyncStorage.getItem('@userName',(userErr, userName)=>{
    //         this.props.setDetails('userName', userName);
    //         this.props.timeScreen();
    //     })  
    //   } else {
    //     this.setState({isLoading : false})
    //   }
    
    // });
    this.setState({isLoading : false})
  }
  componentWillReceiveProps(nextProps) {
    
    if(nextProps.loginStatus){
      AsyncStorage.setItem('@userName:key', `${this.props.username}`);
      //ToastAndroid.show('Login hase been done succesfully!!!', ToastAndroid.SHORT);
      nextProps.timeScreen();
    }
  }
  onLoginPress(){
   
    if(this.validationCheck(this.props.username, this.props.password)){
        this.setState({message:''});
        this.props.login(this.props.userName, this.props.password);
        
    }
    
}
validationCheck(username, password){
  
  if(!validateEmail(this.props.userName)){
     this.setState({message:'Please fill valid email address.'})
      return false;
  }
  if(!this.props.password){
   this.setState({message:'Please fill password.'})
      return false
  }
  return true;
}
  render() {
    if(this.state.isLoading){
      return (<LoadingScreen/>);
    } else {
      return (
        <Login onLoginPress={this.onLoginPress.bind(this)} setDetails={this.props.setDetails.bind(this)} message={this.state.message}/>
        );
    }
    
  }
}
const mapStateToProps = (state, ownProps) => {

  let localState = state['reducerLoginLocal'];
  console.log("state", localState);
  console.log(ownProps)
  return {
    ...ownProps,
    ...localState 
  }
};
const mapDispatchToProps = dispatch => {
    return{
        login: (username, password) =>{
            dispatch(onLoginAction(username, password))
        },
        setDetails:(key, value) =>{
          dispatch(setDetails(key, value))
        },
        timeScreen:() => {
          dispatch(NavigationActions.navigate({ routeName: 'DrawerNavigation' }))
        }
        
    }
    
};
export default LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

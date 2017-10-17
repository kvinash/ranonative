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
  AsyncStorage
  

} from "react-native";
import assets from "../assets/";

import Login from '../components/Login'
import {onLoginAction} from '../actions';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      username:null,
      password:null
    };
  
  }
  componentWillMount() {
    let username =  AsyncStorage.getItem('@username:key',(err, result)=>{
        if(err){
            alert(err, "error");
        } else {
            alert(result, 'result');
        }
    });
   
  }
  componentWillReceiveProps(nextProps) {
   
  }
  submitLogin = () => {
    
   
  };
  _onPressFb = () => {
    alert("Fb Lgoin");
  };
  _onPressGoogle = () => {
    alert("google login");
  };
  onChangeText(e){
      alert(e);
  }
  onSelectionChange(text){
    console.log(text)
  }
  onPressLogin(){
       AsyncStorage.setItem('@username:key', `${this.state.username}`);
       AsyncStorage.setItem('@password:key', `${this.state.password}`);

      alert(`${this.state.username} ${this.state.password}`)
  }
  getSession(){
     
  }
  render() {
    return <Login onLogin={this.props.onLogin.bind(this)}/>;
    
  }
}
const mapStateToProps = state => {
 
  console.log('state::'. state)
  let userStatus = state.userStatus;
  return {
      userStatus
  }
};
const mapDispatchToProps = dispatch => {
    return{
        onLogin: (username, password) =>{
            dispatch(onLoginAction(username, password))
        }
    }
    
};
Login = connect(mapStateToProps, mapDispatchToProps)(Login);

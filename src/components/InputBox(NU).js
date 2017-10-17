import React, { Component } from "react";
import { connect } from "react-redux";
import {
  WebView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions

} from "react-native";
var width = Dimensions.get('window').width; 
var styles = StyleSheet.create({
    bgImage : { resizeMode: "cover", flex: 1, flexDirection: "column", alignItems: "center", height: null, width: null },
    logoStyle:{ resizeMode: "stretch", height: 27, width: 250, marginTop: 100, marginBottom: 70 },
    loginForm : { borderRadius: 10, backgroundColor: "white", marginTop: 40, height: 190, width: width * 0.8 },
    inputField : { flexDirection: "row", flex: 1, marginTop: 10 },
    inputIcon : { flex: 0.1, margin: 15, resizeMode: "contain"},
    textInput : { flex:.7 },
    textMargin:{ marginTop:20 },
    textStyle:{ fontFamily:'Open Sans',backgroundColor: 'rgba(0,0,0,0)', fontSize:14, color:'white'}

})


export default class InputBox extends React.Component  {
    constructor(props){
        super(props)
    }


 componentWillMount(){
     console.log('propss', this.props);
 }
 onSelectionChange(text){
    console.log(text)
  }
  onPressLogin(){
       AsyncStorage.setItem('@username:key', `${this.state.username}`);
       AsyncStorage.setItem('@password:key', `${this.state.password}`);

       this.props.onLogin(this.state.username, this.state.password);
  }

 renderInputBox(){
    console.log('input', this.props);
    switch(this.props.type){
        case 'login':{
            return (
            <TextInput autoFocus={true} onSubmitEditing={(event)=>{this.refs.password.focus()}} style={styles.textInput} onSelectionChange={(text)=>{this.onSelectionChange(text)}}  underlineColorAndroid={"transparent"} ref="username" placeholder="Email" />
            <TextInput ref="pasword" style={styles.textInput} onChangeText={pass => {
                this.setState({ password: pass });
            }} ref="password" secureTextEntry={true} underlineColorAndroid={"transparent"} placeholder="Password" />
            )
        }
 }
} 
    render() {
        return (this.renderInputBox());
    }
   
    
    
        
    // 
}


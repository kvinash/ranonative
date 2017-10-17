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
import { validateEmail } from './validationHandler';
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
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      username:null,
      password:null,
      emailNotValidate:false,
      msg:null
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
    
       if(this.validationCheck(this.state.username, this.state.password)){
           this.setState({msg:null})
       }
       
  }
  validationCheck(username, password){
      
      if(!validateEmail(this.state.username)){
         this.setState({msg:'Please fill valid email address.'})
          return false;
      }
      if(!this.state.password){
       this.setState({msg:'Please fill password.'})
          return false
      }
      return true;
  }
  getSession(){
     
  }
  renderMessage(){
    if(this.state.msg){
       return (<Text style={{fontSize:12, color:'red'}}>{`${this.state.msg}`}</Text>); 
    }
  }
  render() {
    return (<Image style={styles.bgImage} source={assets.loginBackground}>
              
                <Image style={styles.logoStyle} source={assets.logo} />
               {this.renderMessage()}
                <View style={styles.loginForm}>
               
                    <View style={styles.inputField}>
                        <Image style={styles.inputIcon} source={assets.email} color="#000" />
                        <TextInput autoFocus={true} onSubmitEditing={(event)=>{this.refs.password.focus()}} style={styles.textInput} 
                        onChangeText={email => { this.setState({ username: email });
                        }} 
                            onSelectionChange={(text)=>{this.onSelectionChange(text)}}  underlineColorAndroid={"transparent"} ref="username" placeholder="Email" />
                     
                     
                    </View>
                    <View style={styles.inputField}>
                        <Image style={styles.inputIcon}  source={assets.password} color="#000" />
                        <TextInput ref="password" style={styles.textInput} onChangeText={pass => {
                            this.setState({ password: pass });
                        }} ref="password" secureTextEntry={true} underlineColorAndroid={"transparent"} placeholder="Password" />
                    </View>
                   
                <TouchableHighlight onPress={this.onPressLogin.bind(this)} style={{ justifyContent: "center", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: 40, height: 50, backgroundColor: "#6196c2" }}>
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableHighlight>
            </View>
            
            <Text style={[styles.textStyle, styles.textMargin]}>If you have forgotten your Password,</Text>
            <Text style={styles.textStyle}>or experiencing difficulty logging in, </Text>
            <Text style={styles.textStyle}>please contact.</Text>
            <Text style={[styles.textStyle, {fontWeight:'600'}]}>{"\n"}T : 020 3705 1965,</Text>
            <Text style={[styles.textStyle, {fontWeight:'600'}]}>E : operations@jcobmassey.co.uk</Text>
           
        </Image>);

     
  }
}



import React, { Component } from "react";
import PropTypes from 'prop-types';
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
import { assets } from "../assets/";
var width = Dimensions.get('window').width; 

var styles = StyleSheet.create({
    bgImage : { resizeMode: "cover", flex: 1, flexDirection: "column", alignItems: "center", height: null, width: null },
    logoStyle:{ resizeMode: "stretch", height: 27, width: 250, marginTop: 100, marginBottom: 70 },
    loginForm : { borderRadius: 10, backgroundColor: "white", marginTop: 40, height: 190, width: width * 0.8 },
    inputField : { flexDirection: "row", flex: 1, marginTop: 10 },
    inputIcon : { flex: 0.1, margin: 12, resizeMode: "contain"},
    inputIconPass : { flex: 0.1, marginTop: 8 ,marginLeft:12, marginRight:12, resizeMode: "contain"},
    textInput : { flex:.7},
    textMargin:{ marginTop:20 },
    textStyle:{ fontFamily:'Open Sans',backgroundColor: 'rgba(0,0,0,0)', fontSize:14, color:'white'}

})

 class Login extends React.Component {
  constructor(props) {
    super(props);
  
  }

 renderMessage(){
    if(this.props.message){
       return (<Text style={{fontSize:12, color:'red'}}>{`${this.props.message}`}</Text>); 
    }
  }
  render() {
    return (<Image style={styles.bgImage} source={assets.loginBackground}>
              
                <Image style={styles.logoStyle} source={assets.logo} />
               {this.renderMessage()}
                <View style={styles.loginForm}>
               
                    <View style={styles.inputField}>
                        <Image style={styles.inputIcon} source={assets.email} color="#000" />
                        <TextInput keyboardType={'email-address'}  underlineColorAndroid={'#f5f5f5'} autoFocus={true} onSubmitEditing={(event)=>{this.refs.password.focus()}} style={styles.textInput} 
                        onChangeText={email => { this.props.setDetails('userName', email);
                        }} 
                        ref="username" placeholder="Email" />
                     
                     
                    </View>
                    <View style={styles.inputField}>
                        <Image style={styles.inputIconPass}  source={assets.password} color="#000" />
                        <TextInput ref="password" style={styles.textInput} onChangeText={pass => {
                            this.props.setDetails('password', pass);
                        }} ref="password" secureTextEntry={true} underlineColorAndroid={'#f5f5f5'} placeholder="Password" />
                    </View>
                   
                <TouchableHighlight onPress={()=>this.props.onLoginPress()} style={{ justifyContent: "center", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: 40, height: 50, backgroundColor: "#6196c2" }}>
                    <Text style={{ color: "white" , fontWeight : '500' , fontSize :20}}>LOGIN</Text>
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

Login.propTypes = {
    onLoginPress:PropTypes.func.isRequired ,
    setDetails : PropTypes.func.isRequired,
    message :PropTypes.string

}
Login.defaultProps = {
     message : null
}
 export default Login
import React, { Component } from 'react';
import { View, WebView } from 'react-native'; 
import  Header from '../components/Header'; 
import  Timesheet from '../components/Timesheet';  

export default class TimeSheetContainer extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
        <View style={{flex:1}}>
        <Header name={'Timesheet'}/>
        <WebComp/>
          </View>
          )
          
    }
} 
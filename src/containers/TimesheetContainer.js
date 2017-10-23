import React, { Component } from 'react';
import { View, WebView } from 'react-native'; 
import  Timesheet from '../components/Timesheet';  

export default class TimeSheetContainer extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
        <View style={{flex:1}}>
        <Timesheet/>
          </View>
          )
          
    }
} 
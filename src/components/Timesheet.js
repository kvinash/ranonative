import React, { Component } from 'react';
import { View, WebView } from 'react-native'; 
import { url } from '../assets';

export default class Timesheet extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
        <WebView
            source={{uri: `${url.jcobUrl}`}}
          />
          )
          
    }
} 
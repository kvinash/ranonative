import React, { Component } from 'react';
import { View, WebView } from 'react-native'; 
import { url } from '../assets';
import LoadingScreen from './LoadingScreen';
export default class Timesheet extends Component {
    constructor(props){
        super(props)

    }
    renderLoading(){
        return <LoadingScreen/>
    }
    render(){
        return (
        <WebView
            source={{uri: `${url.jcobUrl}`}}
            renderLoading={this.renderLoading}
            startInLoadingState
          />
          )
          
    }
} 
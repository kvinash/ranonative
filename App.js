/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(){
    super()
    //this.onLoadStart = this.onLoadStart.bind(this);

  }
  onLoadStart(){
    console.log("start loading")
    return <Text>Loading needs to be done......</Text>
  }
  onLoadEnd(){
    console.log("loading ends")
    return <Text>Loading is  done......</Text>
  }
  render() {
    return (
      <WebView onLoadStart={this.onLoadStart.bind(this)}
      style = {styles.video}
      onLoadEnd = {this.onLoadEnd.bind(this)}
      mixedContentMode={"always"}
      source={{uri: 'https://m.youtube.com/'}}
      style={{marginTop: 20}}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 150,
    flex: 1
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Etimesheet from './src/index'
import { Provider } from 'react-redux';
import store from './store';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Etimesheet/>
      </Provider>
     
    );
  }
}


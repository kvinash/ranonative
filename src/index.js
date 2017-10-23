
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import Login from './components/Login';
//import LoginContainer from './containers/LoginContainer';
//import WebContainer from './containers/WebContainer';
 import AppWithNavigationState from './navigators/AppNavigator';
class Etimesheet extends Component {
  render() {
    return (
        <AppWithNavigationState/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Etimesheet = connect()(Etimesheet);
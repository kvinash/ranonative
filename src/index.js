
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import Login from './components/Login';
import LoginContainer from './containers/LoginContainer';
import WebContainer from './containers/WebContainer';
 class Etimesheet extends Component {
  render() {
    return (
        <WebContainer/>
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
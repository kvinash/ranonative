
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Login from './components/Login';
 class Etimesheet extends Component {
  render() {
    return (
        <Login/>
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
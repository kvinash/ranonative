import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { View , Text} from 'react-native';
import LoginContainer from '../containers/LoginContainer';
import TimesheetContainer from '../containers/TimesheetContainer';
import Header from '../components/Header';
export const AppNavigator = StackNavigator({
  Login : { screen: LoginContainer ,
    navigationOptions: ({navigation}) => ({
      header : null
    })}, 
  Timesheet : { screen: TimesheetContainer ,
    navigationOptions: ({navigation}) => ({
      header : <Header name={'TimeSheet'}/>
    })},
  
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

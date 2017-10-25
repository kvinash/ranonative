import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';
import { View , Text} from 'react-native';
import LoginContainer from '../containers/LoginContainer';
import TimesheetContainer from '../containers/TimesheetContainer';
import SideDrawerContainer from '../containers/SideDrawerContainer';
import Header from '../components/Header';




export const AppDrawerNavigator = DrawerNavigator({
  Timesheet : { screen: TimesheetContainer },
  },
  {
    contentComponent:(props)=><SideDrawerContainer {...props}/>,
     headerMode:'None'
  });



export const AppNavigator = StackNavigator({
  Login : { screen: LoginContainer ,
    navigationOptions: ({navigation}) => ({
      header : null,
      
    })}, 
  DrawerNavigation : { screen: AppDrawerNavigator,
    navigationOptions: ({navigation}) => ({
      header : <Header navigation={navigation} name={'TimeSheet'}/>
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

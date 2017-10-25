import React,{Component} from 'react';
import { colors , assets} from "../assets";
import SideDrawer from '../components/SideDrawer';
import {onLogoutAction} from '../actions';
import { connect } from "react-redux";
class SideDrawerContainer extends Component{
    constructor(props){
        super(props)
    }
    onPressLogout(){
        console.log('navigation',this.props);
        this.props.logout();
        this.props.navigation.navigate('Login')
    }
    componentWillMount(){
        console.log('DrawerFirstProps', this.props);
    }
    componentWillReceiveProps(nextProps){
        console.log('DrawerNextProps', nextProps);
    }
 
    render(){
        return (
            
            <SideDrawer onPressLogout={this.onPressLogout.bind(this)}/>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    
      return {
        ...ownProps,
        ...state
      }
    };
const mapDispatchToProps = dispatch => {
    return{
        logout: () =>{
            dispatch(onLogoutAction())
        },
        
        
    }
    
};
export default SideDrawerContainer = connect(mapStateToProps, mapDispatchToProps)(SideDrawerContainer);
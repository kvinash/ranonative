import React,{Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors , assets} from "../assets";
import { NavigationAction } from 'react-navigation';
import { connect } from "react-redux";
let styles = StyleSheet.create({
    header:{
        backgroundColor : colors.themeColor,
        height : 50,
        // alignItems: 'center',
        // justifyContent: 'space-around',
        flexDirection:'row'
    },
    headerText : {
        fontFamily : 'Open Sans',
        fontSize : 22,
        fontWeight : '300',
        color: colors.white,
        padding: 10,

    } 

})
class Header extends Component{
   constructor(props){
        super(props)
    }
    onPress(){
        console.log('navaction',this.props);
        if(this.props.drawerState.state)
            this.props.navigation.navigate('DrawerClose')
        else 
            this.props.navigation.navigate('DrawerOpen')
    }
    render(){
        return (<View style = {styles.header}>
            <View style={{flex:.1, justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{this.onPress()}}  activeOpacity={0.5}>
                <Image style={{height:20, width: 23 }} source={assets.menuIcon}/>
            </TouchableOpacity>
            </View>
            <View style={{flex:.9, justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.headerText}>{`${this.props.name}`}</Text>
            </View>
            </View>)
    }
} 
const mapStateToProps = (state, ownProps) => {
    
      return {
        ...ownProps,
        ...state
      }
};
export default Header = connect(mapStateToProps)(Header);
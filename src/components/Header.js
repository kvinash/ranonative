import React,{Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { colors , assets} from "../assets";
import { NavigationAction } from 'react-navigation';
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

export default class Header extends Component{
    constructor(props){
        super(props)
    }
    onPress(){
        console.log('navaction',NavigationAction);
        this.props.navigation.navigate('DrawerToggle')
    }
    render(){
        return (<View style = {styles.header}>
            <View style={{flex:.1, justifyContent:'center',alignItems:'center'}}>
            <TouchableHighlight onPress={()=>{this.onPress()}}    >
                <Image style={{height:20, width: 23 }} source={assets.menuIcon}/>
            </TouchableHighlight>
            </View>
            <View style={{flex:.9, justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.headerText}>{`${this.props.name}`}</Text>
            </View>
            </View>)
    }
} 
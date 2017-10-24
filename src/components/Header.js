import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../assets";
let styles = StyleSheet.create({
    header:{
        backgroundColor : colors.themeColor,
        height : 50,
        alignItems: 'center'


    },
    headerText : {
        fontFamily : 'Open Sans',
        fontSize : 22,
        fontWeight : '300',
        color: colors.white,
        padding: 10

       

    }

})

export default Header = (props) => {
    return (<View style = {styles.header}><Text style={styles.headerText}>{`${props.name}`}</Text></View>)
}
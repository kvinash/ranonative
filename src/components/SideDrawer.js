import React,{Component} from 'react';
import { colors , assets} from "../assets";
import { View, Text, StyleSheet, TouchableHighlight,TouchableOpacity, Image } from 'react-native';


let styles = StyleSheet.create({
    userInfo : {
        fontFamily : 'Open Sans',
        fontSize : 16,
        fontWeight : '300',
        color: colors.white,
        
    },
    navInfo : {
        fontFamily : 'Open Sans',
        fontSize : 16,
        fontWeight : '300',
       
        
    } 
})

export default class SideDrawer extends Component{
    constructor(props){
        super(props)
    }
    


    renderDrawer(){
        return (
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:.2, flexDirection:'row', backgroundColor:colors.themeColor  }}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:'center' }}>    
                        <Image source={assets.userIcon} style={{height:50, width:50}}/>
                    </View>
                    <View style={{flex:.7,justifyContent:'center' }}>
                        <Text style={styles.userInfo}> Jacobs Jons </Text>
                        <Text style={styles.userInfo}> Music Director </Text>
                    </View>
                </View>
                <View style={{flex:.8}}>
                    <View style={{ flex:.1, flexDirection:'row', borderBottomColor:colors.themeColor, borderBottomWidth:1}}>
                        <View style={{flex:.3,justifyContent:'center',alignItems:'center' }}>    
                            <TouchableOpacity onPress={()=>{this.props.onPressLogout()}}>
                            <Image source={assets.logoutIcon} style={{height:20, width:27}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:.7,justifyContent:'center' }}>
                        <TouchableOpacity onPress={()=>{this.props.onPressLogout()}}>
                            <Text style={styles.navInfo}> Logout </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )

    }


    render(){
        return (this.renderDrawer())
    }
} 
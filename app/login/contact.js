/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    ActionSheetIOS
} from 'react-native';
const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'
var BUTTONS = [
    '400-600-8800',
    'Cancel',
];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;
export default class Contact extends Component{
    static navigationOptions = {
        title: '注册',
    };

    showActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    render(){
        return <View style={[styles.flex,styles.bg]}>
            <View>
                <View style={[styles.center,{paddingVertical:40}]}>
                    <Image source={{uri:imgUrl}} style={styles.logo}/>
                </View>
                <View style={styles.center}>
                    <Text style={{fontWeight:'200'}}>请联系项目经理获取相应登录权限</Text>
                </View>
                <View style={{backgroundColor:'#4964ef',marginVertical:15}}>
                    <Button
                        title='立即联系'
                        color="#fff"
                        onPress={()=>{
                            this.showActionSheet()
                        }}/>
                </View>
            </View>
        </View>
    }
}

const styles = {
    bg:{
        backgroundColor:'#f5f5f5'
    },
    flex:{
        flex:1
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:60,
        height:60
    },
    input:{
        backgroundColor:'#fff',
        alignItems:'center',
        marginVertical:5
    }
}
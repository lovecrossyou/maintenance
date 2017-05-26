/**
 * Created by xiteng on 2017/5/26.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ActionSheetIOS
} from 'react-native';
import ItemCell from '../component/itemcell'
const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'
var BUTTONS = [
    '相册',
    '拍照',
    '取消',
];
var PHOTO = 0;
var PICTURE = 1 ;
var CANCEL_INDEX = 2;



export default class SenderUserInfo extends Component{
    static navigationOptions = {
        title: '完善信息',
    };

    showActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: PHOTO,
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    render(){
        return <View>
            <View>
                <ItemCell name="头像" callback={()=>{
                    this.showActionSheet()
                }}/>
                <Image source={{uri:imgUrl}} style={{position:'absolute',right:20,width:30,height:30,top:6,bottom:6,borderRadius:15}}/>
            </View>
            <ItemCell name="联系人" desc="王道" />
            <ItemCell name="公司名称" desc="北京汇银丰网络"/>
            <ItemCell name="公司地址" desc="百万庄大街11号粮科大厦"/>
            <ItemCell name="固定电话" desc="0551-3780233"/>
            <ItemCell name="手机" desc="13220168837"/>
        </View>
    }
}

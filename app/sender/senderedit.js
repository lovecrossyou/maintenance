/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import ItemCell from '../component/itemcell'
export default class SenderEdit extends Component {
    static navigationOptions = {
        title: '完善信息',
    };
    render(){
        return <View style={{flex:1}}>
            <ItemCell name="头像" desc=""/>
            <ItemCell name="联系人" desc="必填"/>
            <ItemCell name="公司名称" desc="必填"/>
            <ItemCell name="公司地址" desc="必填"/>
            <ItemCell name="固定电话" desc="必填"/>
            <ItemCell name="手机" desc="必填"/>
        </View>
    }
}
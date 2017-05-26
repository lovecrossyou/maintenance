/**
 * Created by xiteng on 2017/5/26.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import SearchBox from '../component/searchbox'
export default class AssignList extends Component{
    static navigationOptions = {
        title: '转派',
    };
    render(){
        return <View>
            <SearchBox/>

        </View>
    }
}
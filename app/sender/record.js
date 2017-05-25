/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import ItemTabBar from '../component/itemtabbar'
var ScrollableTabView = require('react-native-scrollable-tab-view');

class OrderCell extends Component{
    render(){
        return <View style={{flex:1,backgroundColor:'#fff',marginBottom:10,paddingVertical:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                <Text>任务单号：D20161209006</Text>
                <Text>进行中</Text>
            </View>
            <View style={{paddingHorizontal:10}}>
                <Text>任务需求：清洗EMC带库</Text>
                <Text>提交时间：2016-12-09 16：30</Text>
                <Text>预算：无</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>响应时间：2016-12-09 16：30</Text>
                    <Text>取消任务</Text>
                </View>
            </View>
            <View>
                <Image/>
            </View>
        </View>
    }
}


class OrderPage extends Component{
    render(){
        return <ScrollView style={{flex:1,backgroundColor:'#f5f5f5'}}>
            <OrderCell />
            <OrderCell />
        </ScrollView>
    }
}

export default class Record extends Component{
    static navigationOptions = {
        title: '记录',
    };

    render() {
        let items = ['进行中', '已完成','已取消']
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollableTabView
                    ref={(tabView) => {
                        this.tabView = tabView
                    }}
                    onChangeTab={(tabInfo) => {
                        this.tabbar.changeSelectedIndex(tabInfo.i)
                    }}
                    renderTabBar={() => <ItemTabBar
                        ref={(tab) => this.tabbar = tab}
                        items={items}
                        callback={(index) => {
                            this.tabView.goToPage(index)
                        }} pop={() => {
                    }}/>}>
                    {
                        items.map((title,index)=>{
                           return <OrderPage key={index} tabLabel={title}/>
                        })
                    }
                </ScrollableTabView>
            </View>
        );
    }
}
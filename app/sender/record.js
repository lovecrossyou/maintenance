/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    PixelRatio
} from 'react-native';
import ItemTabBar from '../component/itemtabbar'
var ScrollableTabView = require('react-native-scrollable-tab-view');
const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'

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
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
                    <Image source={{uri:imgUrl}} style={styles.logo}/>
                    <View style={{paddingLeft:10}}>
                        <Text>预计到达时间: 2016-09-20 16:30</Text>
                        <Text>隔壁老王</Text>
                    </View>
                </View>
                <View style={[styles.border,styles.center,{marginRight:10,height:20,padding:5}]}>
                    <TouchableOpacity
                        onPress={()=>{
                        }}>
                        <Text style={{fontSize:12,color:'#4964ef'}}>呼叫</Text>
                    </TouchableOpacity>
                </View>
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
        width:30,
        height:30,
        borderRadius:15
    },
    border: {
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#4964ef'
    },
}
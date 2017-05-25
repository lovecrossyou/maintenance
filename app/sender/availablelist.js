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
const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'

class  AvailiableCell extends Component{
    render(){
        return <View style={[{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10},styles.borderBottom]}>
            <View style={{flexDirection:'row'}}>
                <View style={{margin:10,alignItems:'center'}}>
                    <Image source={{uri:imgUrl}} style={styles.logo}/>
                    <Text>笑了捕鱼</Text>
                </View>
                <View>
                    <Text>姓名：王道</Text>
                    <Text>手机：132-2016-8837</Text>
                    <Text>职位：工程师</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>技术标签：</Text>
                        <View style={styles.label}><Text style={{color:'#fff',fontSize:12}}>EMC</Text></View>
                        <View style={styles.label}><Text style={{color:'#fff',fontSize:12}}>数据库</Text></View>
                        <View style={styles.label}><Text style={{color:'#fff',fontSize:12}}>加油机</Text></View>
                    </View>
                </View>
            </View>
            <View>
                <View style={{marginHorizontal:10}}>
                    <Text>呼叫</Text>
                </View>
            </View>
        </View>
    }
}



export default class AvailiableList extends Component{
    render(){
        return <ScrollView style={styles.bg}>
            <AvailiableCell/>
            <AvailiableCell/>
            <AvailiableCell/>
            <AvailiableCell/>
            <AvailiableCell/>
        </ScrollView>
    }
}

const styles = {
    bg:{
        backgroundColor:'#fff'
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
    borderBottom:{
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:1/PixelRatio.get()
    },
    label:{
        backgroundColor:'#4964ef',
        borderRadius:4,
        borderColor:'#4964ef',
        borderWidth:2,
        marginHorizontal:2
    }
}
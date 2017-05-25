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

class MessageCell extends Component{
    render(){
        return <TouchableOpacity style={[{backgroundColor:'#fff'},styles.borderBottom]}>
            <View style={[{justifyContent:'center',alignItems:'center',paddingVertical:10}]}>
                <Text style={{fontSize:10,color:'gray'}}>08-22 12：15</Text>
            </View>
            <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
                <Image source={{uri:imgUrl}} style={styles.logo}/>
                <View style={{marginLeft:10,marginRight:30}}>
                    <Text>单号R201703250020已受理</Text>
                    <Text numberOfLines={0} style={{fontSize:12,color:'gray'}}>如果这个组件外观并不怎么搭配你的设计，那你可以使用TouchableOpacity或是TouchableNativeFeedback组件来制作自己所需要的按钮，视频教程如何制作一个按钮讲述了完整的过程。或者你也可以在github.com网站上搜索'react native button'来看看社区其他人的作品</Text>
                </View>
            </View>
        </TouchableOpacity>
    }
}


 export default class MessageList extends Component{

     static navigationOptions = {
         title: '系统通知',
     };


    render(){
        return <ScrollView>
            <MessageCell />
            <MessageCell />
        </ScrollView>
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
    borderBottom:{
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:1/PixelRatio.get()
    },
}
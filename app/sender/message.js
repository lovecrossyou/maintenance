/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio
} from 'react-native';
import  MessageList from './messagelist'

const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'

class MessageListCell extends Component{
    render(){
        let {callback} = this.props
        return <TouchableOpacity onPress={callback} style={[{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'},styles.borderBottom]}>
            <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
                <Image source={{uri:imgUrl}} style={styles.logo}/>
                <View style={{paddingLeft:10}}>
                    <Text>系统通知</Text>
                    <Text style={{fontSize:12,color:'gray'}}>您申报的任务单号：R201703250020</Text>
                </View>
            </View>
            <View style={[{marginRight:10,alignItems:'flex-start',paddingVertical:10}]}>
                <Text style={{fontSize:10,color:'gray'}}>08-22 12：15</Text>
            </View>
        </TouchableOpacity>
    }
}


export default class Message extends Component{
    static navigationOptions = {
        title: '消息',
    };

    render(){
        const { navigate } = this.props.navigation;
        return <View>
            <MessageListCell callback={()=>{
                navigate('MessageList')
            }}/>
            <MessageListCell callback={()=>{
                navigate('MessageList')
            }}/>
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
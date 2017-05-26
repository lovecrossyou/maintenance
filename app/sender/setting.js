/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio,
    Button
} from 'react-native';
import ItemCell from '../component/itemcell'

const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'


class Header extends Component{
    render(){
        return <View style={[styles.row,{justifyContent:'space-between'},styles.bg,styles.borderBottom]}>
            <View style={[styles.row,styles.center,{padding:10}]}>
                <Image source={{uri:imgUrl}} style={{width:40,height:40,borderRadius:20}}/>
                <Text>王道</Text>
            </View>
            <View style={[styles.center,{padding:10}]}>
                <Image source={require('../../assets/com/right_arrow.png')} style={{width:7,height:14}}/>
            </View>
        </View>
    }
}


export default class Setting extends Component{
    static navigationOptions = {
        title: '设置',
    };

    render(){
        return <View>
            <Header />
            <ItemCell name="修改密码" />
            <ItemCell name="意见反馈" />
            <ItemCell name="当前版本" />
            <View style={{marginVertical:10,backgroundColor:'#fff'}}>
                <Button title='退出登录' color='gray' onPress={()=>{
                    alert('退出登录')
                }}/>
            </View>
        </View>
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
        width:60,
        height:60
    },
    row:{
        flexDirection:'row'
    },
    borderBottom:{
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:1/PixelRatio.get()
    },
}
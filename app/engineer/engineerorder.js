
/**
 * Created by xiteng on 2017/5/26.
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

import EngineerOrderDetail from './engineerorderdetail'


const datas = [{
    type:'故障处理',
    title:'IBM服务器，存储',
    addr:'安徽-六安市',
    time:'2016-08-23',
    status:'竞标中',
    num:4
},{
    type:'巡检服务',
    title:'排除EMC存储更换硬盘',
    addr:'安徽-亳州',
    time:'2016-08-23',
    status:'竞标中',
    num:4,
    fee:5000
},{
    type:'故障处理',
    title:'IBM服务器，存储',
    addr:'安徽-六安市',
    time:'2016-08-23',
    status:'竞标中',
    num:4
}];


class TakeOrderCell extends Component{
    render(){
        let {callback} = this.props
        let {type,title,addr,time,status,num,fee} = this.props.data
        let feestr = fee==null ?'' : '劳务费 '+fee
        return <TouchableOpacity onPress={callback} style={[{backgroundColor:'#fff',padding:10,justifyContent:'space-between',alignItems:'center'},styles.borderBottom,styles.row]}>
            <View>
                <View style={styles.row}>
                    <Text>【{type}】</Text>
                    <Text style={{color:'gray'}}>{title}</Text>
                </View>
                <View style={{paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={styles.text}>{addr}</Text>
                    <Text style={styles.text}>{time}</Text>
                    <View style={styles.row}>
                        <Text style={styles.text}>{status}</Text>
                        <Text style={{color:'gray',fontWeight:'100',fontSize:10,paddingHorizontal:5}}>|</Text>
                        <Text style={[styles.text,{color:'red'}]}>{num}人参与</Text>
                        <Text style={{color:'gray',fontWeight:'100',fontSize:10,paddingHorizontal:5}}>|</Text>
                        <Text style={{color:'red',fontSize:12}}>{feestr}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.center}>
                <Text style={{fontWeight:'300',fontSize:20}}>抢</Text>
                <Text style={{fontSize:10,fontWeight:'100',color:'gray',paddingVertical:5}}>12:00</Text>
            </View>
        </TouchableOpacity>
    }
}


export default class EngineerOrder extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return <ScrollView>
            {
                datas.map((data,index)=>{
                    return <TakeOrderCell data={data} key={index} callback={()=>{
                        navigate('EngineerOrderDetail')
                    }}/>
                })
            }
        </ScrollView>
    }
}

const styles = {
    row:{
        flexDirection:'row'
    },
    text:{
        fontSize:12,
        color:'gray'
    },
    borderBottom:{
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:1/PixelRatio.get()
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
}
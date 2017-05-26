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
const datas = [{
    type:'故障处理',
    title:'IBM服务器，存储',
    addr:'安徽-六安市',
    time:'2016-08-23',
    status:'竞标中',
    num:4
},{
    type:'故障处理',
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


const data = {
    type:'故障处理',
    title:'IBM服务器，存储',
    addr:'安徽-六安市',
    time:'2016-08-23',
    status:'竞标中',
    num:4
}
import EngineerAssignDetail from './zhipaidetail'
class TakeOrderAssignCell extends Component{
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
                    <Text style={styles.text}>分派人：李刚</Text>
                    <Text style={styles.text}>服务日期：2016-0910 10：00</Text>
                    <Text style={styles.text}>申报公司：六安市北门加油站</Text>
                    <Text style={styles.text}>申报人：安小姐</Text>
                    <Text style={styles.text}>服务地点：{addr}</Text>
                </View>
            </View>
            <View style={styles.center}>
                <Text style={{fontWeight:'300',fontSize:13,backgroundColor:'#f5f5f5'}}>高优先级</Text>
                <Text style={{fontSize:10,fontWeight:'100',color:'gray',paddingVertical:5}}>12:00</Text>
            </View>
        </TouchableOpacity>
    }
}


export default class EngineerZhiPai extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return <ScrollView>
            {
                datas.map((data,index)=>{
                    return <TakeOrderAssignCell data={data} key={index} callback={()=>{
                        navigate('EngineerAssignDetail')
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
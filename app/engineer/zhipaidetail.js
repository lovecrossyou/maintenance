/**
 * Created by xiteng on 2017/5/26.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio,
    Button,
    Switch,
    TextInput,
    ScrollView,
    Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');


const data = {
    type:'故障处理',
    title:'IBM服务器，存储',
    addr:'安徽-六安市',
    time:'2016-08-23',
    status:'竞标中',
    num:4
}


const items = [
    {
        title:'工作内容',
        items: ['1、设备上架','2、加电测试']
    },{
        title:'验收标准',
        items: ['1、设备正常运行','2、加电测试']
    },{
        title:'备注',
        items: ['1、熟练使用英文操作系统','2、千万不要迟到']
    }]


class AssignDetailHeader extends Component{
    render(){
        let {type,title,addr,time,status,num,fee} = data
        let feestr = fee==null ?'' : '劳务费 '+fee
        return <View style={[{backgroundColor:'#fff',paddingHorizontal:0,paddingVertical:10},styles.borderBottom]}>
            <View>
                <View style={styles.row}>
                    <Text>【{type}】</Text>
                    <Text>{title}</Text>
                </View>
                <View style={{paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={styles.text}>任务单号：R20160922</Text>
                    <Text style={styles.text}>竞标状态：竞标中</Text>
                    <Text style={styles.text}>发布日期：{time} 12:05</Text>
                    <Text style={styles.text}>服务日期：{time} 10:00到场</Text>
                    <Text style={styles.text}>服务地点：{addr}</Text>
                </View>
            </View>
        </View>
    }
}

class AssignDetailFooter extends Component{
    render(){
        return <View style={[{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:10,alignItems:'center',justifyContent:'space-between'},styles.row]}>
            <Text style={{fontSize:10,backgroundColor:'#f5f5f5',padding:2}}>4人参与</Text>
            <Text style={{color:'#4964ef'}}>我报价：</Text>
            <TextInput keyboardType="number-pad" style={{width:60,height:30,fontSize:14}} placeholder='输入金额'/>
            <Text style={{color:'#4964ef'}}>元</Text>
            <View style={[styles.row,{alignItems:'center'}]}>
                <Text>包含增值税发票</Text>
                <Switch />
            </View>
        </View>
    }
}



class AssignItem extends Component{
    render(){
        let {title,items} = this.props.data
        return <View style={{padding:10,backgroundColor:'#fff'}}>
            <View>
                <Text style={{fontSize:15,fontWeight:'400',paddingVertical:5}}>{title}</Text>
            </View>
            {
                items.map((desc,index)=>{
                    return <Text style={styles.text}  key={index}>{desc}</Text>

                })
            }
        </View>
    }
}


export default class EngineerAssignDetail extends Component{

    static navigationOptions = {
        title: '任务单详情',
    };
    render(){
        return <View style={{backgroundColor:'#f5f5f5',justifyContent:'space-between',flex:1}}>
            <ScrollView>
                <AssignDetailHeader />
                {
                    items.map((data,index)=>{
                        return <AssignItem data={data} key={index}/>
                    })
                }
                <AssignDetailFooter />
            </ScrollView>
            <View style={[{backgroundColor:'#f5f5f5',justifyContent:'space-around',paddingBottom:10},styles.row]}>
                <View style={{backgroundColor:'#4964ef',width:width*0.4}}>
                    <Button title='转派' color='#fff' onPress={()=>{

                    }}/>
                </View>
                <View style={{backgroundColor:'#333333',width:width*0.4}}>
                    <Button style={{width:width*0.4}} title='接受' color='#fff' onPress={()=>{

                    }}/>
                </View>
            </View>
        </View>
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
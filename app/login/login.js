/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import SenderRoot from '../sender/senderroot'
import ManagerRoot from '../manager/managerroot'
import EngineerRoot from '../engineer/engineerroot'
import Toast from 'react-native-easy-toast';


const imgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670750920,766573320&fm=23&gp=0.jpg'
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'12',
            pwd:'123456'
        }
    }


    render(){
        const { navigate } = this.props.navigation;
        return <View style={[styles.flex,{justifyContent:'space-between'},styles.bg]}>
            <ScrollView>
                <View style={[styles.center,{paddingVertical:40}]}>
                    <Image source={{uri:imgUrl}} style={styles.logo}/>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={(text)=>{
                            this.setState({
                                username:text
                            })
                        }}
                        placeholder='账号'
                        style={styles.text}
                        defaultValue='12'/>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={(text)=>{
                            this.setState({
                                pwd:text
                            })
                        }}
                        placeholder='密码'
                        style={styles.text}/>
                </View>
                <View style={{backgroundColor:'#4964ef',marginVertical:15}}>
                    <Button
                        title='登录'
                        color="#fff"
                        onPress={()=>{
                            let username = this.state.username
                            if(username==1){
                                this.refs.toast.show('发活人角色');
                                setTimeout(()=>{
                                    navigate('SenderRoot',{title:'发单'})
                                },1000)
                            }
                            else if(username=='2'){
                                this.refs.toast.show('项目经理角色');
                                setTimeout(()=>{
                                    navigate('ManagerRoot',{title:'任务表'})
                                },1000)
                            }
                            else {
                                this.refs.toast.show('工程师角色');
                                setTimeout(()=>{
                                    navigate('EngineerRoot',{title:'派单'})
                                },1000)
                            }
                        }}/>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={()=>{
                        alert('忘记密码')
                    }}>
                        <View style={{paddingLeft:15}}>
                            <Text>忘记密码？</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
            <View style={[styles.center,{paddingVertical:20}]}>
                <Button
                    title='新用户注册 >'
                    onPress={()=>{
                        navigate('Contact')
                    }}/>
            </View>
            <Toast ref="toast" position='center'/>
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
        width:60,
        height:60
    },
    input:{
        backgroundColor:'#fff',
        alignItems:'center',
        marginVertical:5
    },
    text:{
        width:120,
        paddingVertical:10,
        height:40,
        paddingHorizontal:15
    }
}
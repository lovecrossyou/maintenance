/**
 * Created by xiteng on 2017/5/25.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
    Button,
    ScrollView,
    Switch
} from 'react-native';
const {width, height} = Dimensions.get('window');



export default class SendOrder extends Component{
    static navigationOptions = {
        title: '发单',
    };

    render(){
        const { navigate } = this.props.navigation;

        return <ScrollView style={[styles.flex,styles.bg]}>
            <View>
                <View style={styles.padding}>
                    <Text>请输入需求</Text>
                </View>
                <View style={{backgroundColor:'#f5f5f5',paddingHorizontal:10}}>
                    <TextInput numberOfLines={0} multiline={true} style={{width:width-20,height:90,color:'gray'}} />
                </View>
            </View>
            <View>
                <View style={[styles.padding,{flexDirection:'row',justifyContent:'space-between'}]}>
                    <Text>您的预算</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:13}}>开具发票</Text>
                        <Switch />
                    </View>
                </View>
                <View style={{backgroundColor:'#f5f5f5',paddingHorizontal:10}}>
                    <TextInput numberOfLines={0} multiline={true} style={{width:width-20,height:30,color:'gray'}} />
                </View>
            </View>
            <View>
                <View style={[styles.padding,{flexDirection:'row',justifyContent:'space-between'}]}>
                    <Text>备注</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:13}}>验收报告</Text>
                        <Switch />
                    </View>
                </View>
                <View style={{backgroundColor:'#f5f5f5',paddingHorizontal:10}}>
                    <TextInput numberOfLines={0} multiline={true} style={{width:width-20,height:50,color:'gray'}} />
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:20}}>
                <View style={{width:width*0.4,backgroundColor:'#4964ef',borderRadius:4,borderWidth:2,borderColor:'#4964ef'}}>
                    <Button
                        color='#fff'
                        onPress={()=>{
                            navigate('AvailiableList')
                        }}
                        title='电话下单' />
                </View>
                <View style={{width:width*0.4,backgroundColor:'#4964ef',borderRadius:4,borderWidth:2,borderColor:'#4964ef'}}>
                    <Button
                        color='#fff'
                        onPress={()=>{

                        }}
                        title='提交需求'/>
                </View>
            </View>
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
    padding:{
        paddingLeft:10,
        paddingVertical:10
    }
}
/**
 * Created by xiteng on 2017/5/26.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import { StackNavigator } from 'react-navigation';

import EngineerOrder from './engineerorder'
import EngineerZhiPai from './engineerzhipai'
import EngineerMsg from './engineermsg'
import EngineerSetting from './engineersetting'
import EngineerRecord from './engineerrecord'
class EngineerRoot extends Component{

    constructor(props){
        super(props)
        this.state = {
            title:'抢单',
            selectedTab:'home',
            loading:true
        }
    }

    _changeTitle(text){
        const {setParams} = this.props.navigation;
        setParams({
            title:text
        })
    }

    static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const {title} = state.params;
        return {
            title:title,
            headerLeft:null
        };
    };

    render() {
        return <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="抢单"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_home_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/tab/tab_home_selected.png')} />}
                badgeText="1"
                onPress={() => {
                    this.setState({ selectedTab: 'home',})
                    this._changeTitle('抢单')
                }}>
                <EngineerOrder {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'pai'}
                title="指派"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_home_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/tab/tab_home_selected.png')} />}
                badgeText="1"
                onPress={() => {
                    this.setState({ selectedTab: 'pai',})
                    this._changeTitle('指派')
                }}>
                <EngineerZhiPai {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'record'}
                title="记录"
                renderIcon={() => <Image style={{width:30,height:24}}  source={require('../../assets/tab/icon_shop_normal.png')} />}
                renderSelectedIcon={() => <Image style={{width:30,height:24}}   source={require('../../assets/tab/icon_shop_selected.png')} />}
                onPress={() => {
                    this.setState({ selectedTab: 'record'})
                    this._changeTitle('记录')
                }}>
                <EngineerRecord {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'msg'}
                title="消息"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_shoppingcar_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_shoppingcar_selected.png')} />}
                onPress={() =>{
                    this.setState({ selectedTab: 'msg'})
                    this._changeTitle('消息')
                }}>
                <EngineerMsg {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'setting'}
                title="设置"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_me_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_me_selected.png')} />}
                onPress={() =>{
                    this.setState({ selectedTab: 'setting' })
                    this._changeTitle('设置')
                }}>
                <EngineerSetting {...this.props}/>
            </TabNavigator.Item>
        </TabNavigator>
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    icon:{
        width:26,
        height:26
    }
}

module.exports = EngineerRoot
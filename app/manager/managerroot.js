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

import SendOrder from '../sender/sendorder'
import Record from '../sender/record'
import Message from '../sender/message'
import Setting from '../sender/setting'

class ManagerRoot extends Component{

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
                <SendOrder {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="指派"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_home_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/tab/tab_home_selected.png')} />}
                badgeText="1"
                onPress={() => {
                    this.setState({ selectedTab: 'home',})
                    this._changeTitle('指派')
                }}>
                <SendOrder {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'waterstation'}
                title="记录"
                renderIcon={() => <Image style={{width:30,height:24}}  source={require('../../assets/tab/icon_shop_normal.png')} />}
                renderSelectedIcon={() => <Image style={{width:30,height:24}}   source={require('../../assets/tab/icon_shop_selected.png')} />}
                onPress={() => {
                    this.setState({ selectedTab: 'waterstation'})
                    this._changeTitle('记录')

                }}>
                <Record {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'shoppingcart'}
                title="消息"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_shoppingcar_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_shoppingcar_selected.png')} />}
                onPress={() =>{
                    this.setState({ selectedTab: 'shoppingcart'})
                    this._changeTitle('消息')

                }}>
                <Message {...this.props}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'me'}
                title="设置"
                renderIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_me_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon}  source={require('../../assets/tab/tab_me_selected.png')} />}
                onPress={() =>{
                    this.setState({ selectedTab: 'me' })
                    this._changeTitle('设置')

                }}>
                <Setting {...this.props}/>
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

module.exports = ManagerRoot
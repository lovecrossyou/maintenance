/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './app/login/login'
import Contact from './app/login/contact'
import SenderEdit from './app/sender/senderedit'
import EngineerEdit from './app/engineer/engineeredit'
import ManagerEdit from './app/manager/manageredit'
import SenderRoot from './app/sender/senderroot'
import AvailiableList from './app/sender/availablelist'
import MessageList from './app/sender/messagelist'
import SenderUserInfo from './app/sender/senderuserinfo'
import ManagerRoot from './app/manager/managerroot'
import EngineerRoot from './app/engineer/engineerroot'
import EngineerOrderDetail from './app/engineer/engineerorderdetail'
import EngineerAssignDetail from './app/engineer/zhipaidetail'

const SimpleApp = StackNavigator({
    Login: { screen: Login },
    Contact:{screen:Contact},
    SenderEdit:{screen:SenderEdit},
    ManagerEdit:{screen:ManagerEdit},
    EngineerEdit:{screen:EngineerEdit},
    SenderRoot:{screen:SenderRoot},
    AvailiableList:{screen:AvailiableList},
    MessageList:{screen:MessageList},
    SenderUserInfo:{screen:SenderUserInfo},
    ManagerRoot:{screen:ManagerRoot},
    EngineerRoot:{screen:EngineerRoot},
    EngineerOrderDetail:{screen:EngineerOrderDetail},
    EngineerAssignDetail:{screen:EngineerAssignDetail},
});

AppRegistry.registerComponent('maintenance', () => SimpleApp);

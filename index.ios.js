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
});

AppRegistry.registerComponent('maintenance', () => SimpleApp);

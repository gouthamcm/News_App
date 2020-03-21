/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,

} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import topNews from './pages/topNews';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="Home"
        drawerPosition='left'
        drawerType='back'
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Top News" component={topNews} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

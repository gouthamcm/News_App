import React, { Component } from 'react';

import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, } from 'react-native';

class Home extends Component{
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>home</Text>
            </View>
        );
    }
}

export default Home;
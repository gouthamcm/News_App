import React, { Component } from 'react';

import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, } from 'react-native';

class topNews extends Component{
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>top news</Text>
            </View>
        );
    }
}

export default topNews;
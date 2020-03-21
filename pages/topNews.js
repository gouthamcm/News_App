import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Button,
    Image,
    ActivityIndicator,
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

class topNews extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            isFetching: false
        }
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Image style={{ width: 100, height: 100 }}
                    source={{ uri: item.urlToImage }} />
                <View>
                    <Text>
                        {item.author}
                    </Text>
                </View>
            </View>
        )
    }

    renderSeparator = () => {
        return(
            <View style = {{width: '100%', height: 1, backgroundColor: 'black'}}>

            </View>
        )
    }

    getAPIdata() {
        const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=2844d0b835794fb691f715285f468454';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.articles,
                    isLoading: false,
                    isFetching: false,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onRefresh(){
        this.setState({isFetching: true}, {isLoading: true})
        this.getAPIdata()
    }

    componentDidMount() {
        this.getAPIdata();
    }

    render() {
        return (
            this.state.isLoading
            ?
            <ActivityIndicator size = 'large' color = '#000ff' />
            :
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data = {this.state.data}
                        renderItem = {this.renderItem}
                        ItemSeparatorComponent = {this.renderSeparator}
                        onRefresh = {() => {this.getAPIdata()}}
                        refreshing={this.state.isFetching}
                    />
                    
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});


export default topNews;
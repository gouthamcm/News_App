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
} from 'react-native';


class topNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
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

    componentDidMount() {
        const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=2844d0b835794fb691f715285f468454';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.articles
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data = {this.state.data}
                        renderItem = {this.renderItem}
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
import React from 'react';
//import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, Pressable } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';


const DATA_ACC = [
    {
        id: 300,
        title: 'I cant sign in or request a ride',
    },
    {
        id: 301,
        title: 'I cant sign in or offer a ride',
    },
    {
        id: 302,
        title: 'Changing my account settings',
    },
    {
        id: 303,
        title: 'I lost my phone in my Ride',
    },
]


const Item_ACC = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
)

function myAcc(props){
    const renderItems_ACC = ({item}) => (
        <Item_ACC title={item.title} />
    );
    return(
    <View>
        <Text>Account Options</Text>
        <FlatList
            data={DATA_ACC}
            renderItems={renderItems_ACC}
            keyExtractor={item => item.key}
        />
    </View>
    )
};

export default myAcc;
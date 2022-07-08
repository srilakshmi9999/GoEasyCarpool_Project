import React from 'react';
//import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, Pressable } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
//import { myAcc } from './myAccountsPage';
const DATA = [
    {
        id: 120,
        title: 'COVID-19 SUPPORT',
        subtitle: 'Updates On Covid',
        route_to: 'myAccountsPage'
    },
    {
        id: 121,
        title: 'My Account',
        subtitle: 'Accounts, referral and more...',
        route_to: 'myAccountsPage'

    },
    {
        id: 122,
        title: 'Fares & Payments',
        subtitle: 'App money and other modes',
        route_to: 'myAccountsPage'

    },
    {
        id: 123,
        title: 'Accessibility',
        subtitle: 'Accessibility requirements and info',
        route_to: 'myAccountsPage'

    },
    {
        id: 124,
        title: 'Safety',
        subtitle: 'Safety queries and concerns',
        route_to: 'myAccountsPage'

    },
    {
        id: 125,
        title: 'More',
        subtitle: 'Raise your Query here',
        route_to: 'myAccountsPage'

    },
];

const Item = ({ title, subtitle,onPress }) => (
    <TouchableHighlight>
        <Pressable onPress={onPress} >
        <View  style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text  style={{ position: 'absolute', right: 30, }}><Icon style={{ fontSize: 20 }} name='arrow-forward'></Icon></Text>
        </View>
        </Pressable>
    </TouchableHighlight>
);


function Support(props) {
    const renderItems = ({ item }) => (
        <Item
            title={item.title}
            subtitle={item.subtitle}
            //route_to={item.route_to}
            onPress={() => props.navigation.navigate(item.route_to)}
        />
    );
    return (
        <SafeAreaView>
            <TouchableHighlight>
                <Pressable onPress={() => props.navigation.navigate('Home')} >
                    <View style={styles.header}>
                        <Icon style={{ left: 25 }} name='arrow-back'></Icon>
                    </View>
                </Pressable>
            </TouchableHighlight>
            <Text style={{ fontSize: 25, left: 15, marginBottom: 20, marginTop: 10 }} >Need Help ?</Text>

            <FlatList
                data={DATA}
                renderItem={renderItems}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#288499',
        height: 60,
        width: '100%',
        justifyContent: 'center',

    },
    item: {
        height: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 3
    },
    title: {
        left: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        left: 20,
        fontSize: 12,
        color: 'grey'
    }

})

export default Support;
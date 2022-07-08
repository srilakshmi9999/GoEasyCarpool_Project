import React from 'react';
//import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import yourRides from './yourRides';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import normalText from './normaltext';
const Tab = createBottomTabNavigator();

const TabNav = () => {
    return(
    <Tab.Navigator style={styles.tab}>
        <Tab.Screen  name='Bookings' component={normalText} ></Tab.Screen>
        <Tab.Screen name='Hosted' component={normalText}></Tab.Screen>
        <Tab.Screen name='Requests' component={normalText}></Tab.Screen>

    </Tab.Navigator>

    )
}

const styles =StyleSheet.create({
tab:{
    height:20
}

})

export default TabNav;
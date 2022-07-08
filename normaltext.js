import React from 'react';
//import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import yourRides from './yourRides';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
const FindPool=()=>{
    return(
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <TextInput placeholder='location'></TextInput>
         <TextInput placeholder='destination'></TextInput>
    
     </View>
    )
    };
    
    const OfferPool=()=>{
        return(
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text>Sank000</Text>
             <TextInput placeholder='location'></TextInput>
             <TextInput placeholder='destination'></TextInput>
        
         </View>
        )
        }
    
function normalText(){
    

    
    return(
        <View style={{}}> 
            <Tab.Navigator>
                <Tab.Screen name='offerpool' component={OfferPool}></Tab.Screen>
                <Tab.Screen name='findpool' component={FindPool}></Tab.Screen>
            </Tab.Navigator >
        </View>
    )
}
export default normalText;
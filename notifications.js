import React from 'react';
//import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';

const DATA = [
    {
        id: 120,
        title: 'HelloApp ',
        subtitle: 'HelloApp Welcomes you into awesomeness',

    },
    {
        id: 121,
        title: 'New Account Offer',
        subtitle: '50% Off on your First 5 Rides',

    },
   
];

const Item = ({ title, subtitle, }) => (
    <TouchableHighlight>
        <Pressable >
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                {/* <Icon name='primitive-dot'></Icon> */}
            </View>
        </Pressable>
    </TouchableHighlight>
);

function Notifications(props) {

    const renderItems = ({ item }) => (
        <Item
            title={item.title}
            subtitle={item.subtitle}
        //route_to={item.route_to}
        // onPress={(c) => props.navigation.navigate(c.route_to)}
        />
    );
    return (

        <SafeAreaView>
            <View style={{}}>
                <TouchableHighlight>
                    <Pressable onPress={() => props.navigation.navigate('Home')} >
                        <View style={styles.header}>
                            <Text style={{textAlign:'center',top:25,fontSize:15}} >Notifications</Text>
                            <Icon style={{ left: 25, }} name='arrow-back'></Icon>
                        </View>
                    </Pressable>
                </TouchableHighlight>
            </View>

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
        height: 70,
        width: '100%',
        justifyContent: 'center',

    },
    item: {
        height: 80,
        width:'99%',
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 1
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

export default Notifications;
//import { useLinkProps } from "@react-navigation/native";
import React, { Profiler, useState } from "react";
import { useRef } from "react";
import { Alert, Modal, StyleSheet, TextInput, Pressable, View, Platform, StatusBar, SafeAreaView, Image, Text, Button, FlatList } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Polygon, Polyline, } from 'react-native-maps';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

// import Picker from '@react-native-community/picker';
//import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
// import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { TouchableHighlight } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const DATA = [
    {
        id: '10',
        date: '8 Jun',
        time: '7:45 PM',
        location: global.variable,
        destination: global.variable2,
        seats: 3,
        name: 'Manideep Mylavarapu',
        carType: 'Sedan'
    },
    {
        id: '11',
        date: '8 Jun',
        time: '8:00 AM',
        location: global.variable,
        destination: global.variable2,
        seats: 4,
        name: 'Mytresh Ravi',
        carType: 'SUV'
    },
    {
        id: '12',
        date: '8 Jun',
        time: '6:00 AM',
        location: global.variable,
        destination: global.variable2,
        seats: 2,
        name: 'Adhik Chintalwar',
        carType: 'Premium'
    }
];
const Item = ({ date, time, location, destination, seats, name, carType }) => (



    <Pressable style={styles.item}>
        <View style={{ left: 20, justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#8c9596' }}>{date}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#8c9596' }}>{time}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#8c9596' }}>{carType}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'white', borderRadius: 10, elevation: 5, width: '90%' }}>
                <Image style={{ height: 26, width: 28, alignSelf: 'center', left: 4 }} source={require('./assets/driverimage.png')}></Image>
                <Text style={{ textAlign: 'center', padding: 5, left: 10, fontSize: 18, fontWeight: 'bold', color: '#4a4f4a' }}>{name}</Text>
            </View>
            <View style={{ width: '72%', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Icon2 color='#8c9596' name='long-arrow-down' style={{ fontSize: 20, }} />
                </View>
                <View>
                <Text style={{ fontSize: 14, padding: 2, }} numberOfLines={1}>{location}</Text>
                <Text style={{ fontSize: 14, padding: 2, }} numberOfLines={1}>{destination}</Text>
                </View>

            </View>
         </View>
        <View style={{ backgroundColor: 'white', justifyContent: 'center', end: 20, position: 'absolute', alignSelf: 'center' }}>
            <Image style={{ height: 60, width: 60, alignSelf: 'center' }} source={require('./assets/carseat.png')}></Image>
            <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', color: '#049dd9' }}>Seats Available</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: '#02b81e' }}>{seats}</Text>
        </View>
    </Pressable>

)

function rideMatching() {
    const renderItem = ({ item }) => (
        <Item
            date={item.date}
            location={item.location}
            destination={item.destination}
            time={item.time}
            seats={item.seats}
            name={item.name}
            carType={item.carType}
        />
    )
    const [visible, setvisible] = useState();
    return (
        
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />


            </View>
        






    )
};
const styles = StyleSheet.create({
    item: {
        height: 130,
        width: '99%',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 3,
        borderRadius: 10,
        elevation: 3,
        top: 3,
    },
    title: {
        fontSize: 15
    }

})
export default rideMatching;
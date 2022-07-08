import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Entypo';
//import { useNavigation } from "@react-navigation/native";
//import {callbackFunction} from './Home';

const DATA = [
  {
    id: '700',
    latitude: 20.6623400,
    longitude: 78.0918,
    title: 'Home',
    location: 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India'

  },
  {
    id: '701',
    latitude: 21.6623400,
    longitude: 79.0918,
    title: 'Office',
    location: 'Hyderabad International Airport (HYD), Shamshabad, Hyderabad, Telangana, India'
  },
  {
    id: '702',
    latitude: 21.6623400,
    longitude: 79.0918,
   // title: 'Office',
    location: 'Delhi Airport, New Delhi, Delhi, India'
  },
  {
    id: '703',
    latitude: 21.6623400,
    longitude: 79.0918,
    //title: 'Office',
    location: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India'
  }
];

const Item = ({ title, location, onPress }) => (
  <Pressable onPress={onPress}>
    <View style={styles.item}>
      <Icon style={{ position: 'absolute', left: 5, fontSize: 15 }} name='back-in-time' />
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={1} style={styles.subtitle}>{location}</Text>
    </View>
  </Pressable>
);



function placeSearch2(props) {
  
    const renderItem = ({ item }) => (
        <Item
          title={item.title}
          location={item.location}
          onPress={()=>{global.variable2=item.location, props.navigation.goBack() }}
        />
      );
    

  return (
    <View>
      <View style={{ marginTop: 5 }}>
        <StatusBar backgroundColor="white" />

        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={() => {
           
          }}
          query={{
            key: 'AIzaSyANCuKd6seTxyXsHBmz8Kw0L55fWfB_Wjg',
            language: 'en',
          }}

          minLength={2}
          fetchDetails={true}
          
        >
        </GooglePlacesAutocomplete>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={val => val.id}
          style={styles.lists}
        />
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    height: 50,
    margin: 3,
    justifyContent: 'center',

  },
  lists: {
    top: 50,

  },
  title: {
    color: 'grey',
    left: 25,
    fontSize: 15
  },
  subtitle: {
    color: 'grey',
    left: 25,
    fontSize: 10,
    maxWidth: 300,

  }
})


export default placeSearch2;
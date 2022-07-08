//import { NavigationContainer } from '@react-navigation/native';
//SHA1: 5F:CE:54:3C:51:F1:F5:6B:73:F1:43:DD:1F:EF:8A:57:69:A2:EA:B3
//package="com.helloapp"
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useState, Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, StatusBar, SafeAreaView, Platform, Alert, Pressable } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Polygon, Polyline, } from 'react-native-maps';
import SwitchButton from 'switch-button-react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import MapViewDirections from 'react-native-maps-directions';
import { Places, DATA } from './placeSearch';
//import { List } from './List';
import { Animated } from 'react-native';
import { spring } from 'react-native-reanimated';

export default class Home extends Component {
    constructor(route) {
        super(route)
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,

            },
            activeSwitch: 1,

            message: '',
            lastRefresh: Date(Date.now()).toString(),
    }
    
    this.refreshScreen = this.refreshScreen.bind(this)
        
    };
    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
      }
    callbackFunction = (childData) => {
        this.setState({ message: childData })
    }

    componentDidMount = () => {
        this.requestLocationPermissions();

    }

    requestLocationPermissions = async () => {
        if (Platform.OS === 'android') {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('android:' + response);
            if (response === 'granted') {
                this.locateCurrentPosition();
            }

        }
        else {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log('IOS:' + response);
            if (response === 'granted') {
                this.locateCurrentPosition();
            }
        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                var initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035,
                }
                this.setState({ initialPosition })
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
        )
    }
    

    render() {

        // const navigation = useNavigation();
        //  const { navigation } = this.props;
        const coordinates =
        {
            latitude: 20.6623400, longitude: 78.0918
        };
        const coordinates1 =
        {
            latitude: 18.66231977, longitude: 78.09178655
        };
        // const { valuee} = route.params;
        const API_KEY = 'AIzaSyDk6LnUrId9M9p2Bkg65VpU_KuO61_XF3M';
        return (


            <View style={{ flex: 1, alignItems: "stretch", justifyContent: 'flex-end', borderStyle: 'solid', borderWidth: 1 }}>
                <StatusBar backgroundColor="#c2c7c1" />


                <View style={styles.container}>
                    {/* <Header>

            <Button title='##' style={styles.onMapButton}  onPress={()=>props.navigation.toggleDrawer()}></Button>
           </Header> */}



                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        ref={map => this._map = map}
                        region={this.state.initialPosition}
                        showsUserLocation={true}
                        followUserLocation={true}
                        zoomEnabled={true}
                        pitchEnabled={true}
                        mapType='terrain'
                    >

                        <Marker

                            coordinate={coordinates}
                        >
                            <Image source={require('./assets/mappin3.png')} style={{ height: 40, width: 15, }} />
                        </Marker>

                        <Marker draggable

                            coordinate={coordinates1}
                        >
                            <Image source={require('./assets/mappin2.png')} style={{ height: 40, width: 15, resizeMode: 'cover' }} />

                        </Marker>

                        <MapViewDirections
                            origin={coordinates}
                            destination={coordinates1}
                            apikey={API_KEY}
                            strokeWidth={6}
                            strokeColor="blue"
                        />
                    </MapView>

                    <View style={{ position: 'absolute', alignSelf: 'flex-start', top: '5%', backgroundColor: 'white', elevation: 15, marginLeft: 20, padding: 13, borderRadius: 69 }}>
                        <TouchableHighlight>
                            <Pressable onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon name='menu' color='grey' style={{ fontSize: 23 }}></Icon>
                            </Pressable>
                        </TouchableHighlight>
                    </View>
                    <View style={{ position: 'absolute', alignSelf: 'flex-end', top: '5%', backgroundColor: 'white', elevation: 15, padding: 13, borderRadius: 63, right: 30 }}>
                        <TouchableHighlight>
                            <Pressable onPress={() => this.props.navigation.navigate('Notifications')}>
                                <Icon name='notifications' color='grey' style={{ fontSize: 23 }}></Icon>
                            </Pressable>
                        </TouchableHighlight>
                    </View>
                </View>
                <View>


                    <View style={styles.mainContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', alignContent: 'center' }}>
                            <View>
                                <Text style={{ marginLeft: 15, }} > </Text>
                            </View>
                            <Text style={{ fontSize: 25, borderBottomWidth: 1, borderBottomColor: '#515950', padding: 5, width: 350, textAlign: 'center', color: '#515950', marginRight: 20, fontWeight: 'bold' }}><Icon name="person" color='#515950' style={{ fontSize: 25 }} /> {"Hello,User"}</Text>
                        </View>
                        <View style={styles.both}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 3, padding: 5, elevation: 3 }} >
                                <SwitchButton
                                    text1='Offer Pool'
                                    text2='Find Pool'
                                    switchWidth={200}
                                    switchHeight={50}
                                    switchBackgroundColor='#26bf15'
                                    padding={10}
                                    btnBackgroundColor='#51c439'
                                    fontColor='white'

                                    btnBorderColor='#50666b'
                                    switchBorderColor='#5ded55'
                                    onValueChange={(val) => this.setState({ activeSwitch: val })}
                                //onValueChange={(val)=>console.log(val)}
                                />

                            </View>



                            <View style={styles.textbar}>
                                {/* <Text style={{ alignSelf: 'center', fontSize: 25, marginBottom: 5, color: '#2e2a26', fontWeight: 'bold' }}> <Icon name="search" style={{ fontSize: 25, color: '#2e2a26' }} />Search your Itinerary</Text> */}
                                <Icon name='pin' style={{ position: 'absolute', top: 20, color: '#26bf15' }}></Icon>

                                <TextInput
                                    style={{ height: 60, width: 350, borderBottomWidth: 0.5, textAlign: 'center', }}
                                    placeholder="Your location!!!"
                                    //value={this.setState.message}
                                    defaultValue={global.variable}
                                    maxLength={40}
                                    onTouchStart={() => this.props.navigation.navigate('Search Location')}
                                //value={searchInput}
                                // onChangeText={searchInput => { setState({ searchInput }) }}

                                // onSubmitEditing={searchCity}
                                />
                                <Icon name='pin' style={{ position: 'absolute', top: 80, color: '#c7231e' }}></Icon>

                                <TextInput
                                    style={{ height: 60, width: 350, borderBottomWidth: 0.5, textAlign: 'center', }}
                                    placeholder="Your Destination"
                                    maxLength={40}
                                    defaultValue={global.variable2}
                                    // value={this.setState.JSON.stringify(itemId)}
                                    onTouchMove={() => this.props.navigation.navigate('Search Location2')}

                                />

                            </View>
                        </View>

                        <Pressable style={styles.button} onPress={() => {this.props.navigation.navigate('OfferPoolPage') ,this.refreshScreen}}>
                            <View >
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white' }}>Search Ride</Text>

                            </View>
                        </Pressable>
                    </View>

                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 530,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mainContainer: {
        alignItems: 'center',
        //justifyContent: 'space-between',
        //flex: 2,
        alignSelf: 'stretch',
        padding: 16,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 320,
        width: '100%',
        borderWidth: 0,
        borderColor: '',
        borderColor: '#2e2a26',
        // alignContent:'space-around',
        borderRadius: 25,
        marginLeft: 0.05,
        elevation: 10
    },
    // textbar: {
    //     backgroundColor: '#388596',
    //     borderRadius: 10,
    //     marginTop: 4,
    //     borderLeftWidth: 3,
    //     borderLeftColor: '#6b6767',
    //     borderBottomWidth: 2,
    //     borderBottomColor: '#6b6767',
    //     borderTopColor: '#6b6767',
    //     borderTopWidth: 3,
    //     borderRightWidth: 3,
    //     borderRightColor: '#6b6767',

    //     // flexDirection: 'column',
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     // alignSelf: 'center',
    //     // alignContent: 'center',
    //     //shadowOffset: { width: 10, height: 10, },
    //     //shadowColor: 'black',
    //     //shadowOpacity: 1.0,

    // },
    onMapButton: {
        // flex:1,
        //backfaceVisibility: 'visible',
        //position: 'absolute',

    },
    button: {
        //flexDirection: 'row', 
        //flex:1,
        height: 60,
        width: '120%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 14,
        // elevation:1,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,

    }
});


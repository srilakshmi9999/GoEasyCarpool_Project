//import { useLinkProps } from "@react-navigation/native";
import React, { Profiler, useState } from "react";
import { useRef } from "react";
import { Alert, Modal, StyleSheet, TextInput, Pressable, View, Platform, StatusBar, SafeAreaView, Image, Text, Button, FlatList } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Polygon, Polyline, } from 'react-native-maps';
// import Picker from '@react-native-community/picker';
//import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { TouchableHighlight } from "react-native-gesture-handler";
import { rideMatching } from './RideMatching';
import { useRoute, useNavigation } from '@react-navigation/native';
//import { Dropdown } from 'react-native-material-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { set } from "react-native-reanimated";
const Tab = createBottomTabNavigator();
global.variable = 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India';
global.variable2 = 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India';

const FindPool = (props) => {
global.side=1;

    const [date, setDate] = useState(new Date())
    const [visible, setvisible] = useState(false)
    const [visible2, setvisible2] = useState(false)
    //const [date_value, setdate_value] = useState('')
    const show = () => {
        setvisible(!visible);
        return date;
    }
    const show2 = () => {
        setvisible2(!visible2);

    }

    var month = new Array();
    var hours = date.getHours()
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    const [modalVisible, setModalVisible] = useState(false);


    const [seats, setseats] = useState(1)
    const selectedSeats = (seats) => {
        //setSelectedSeats(seats)
        //alert(seats)
        setseats(seats);
    }
    return (
        <View style={styles.input}>
            {/* <StatusBar backgroundColor="white" /> */}
            <View style={{ flexDirection: 'row' }}>
                <Icon name='dot-single' color='#53bd4d' style={{ fontSize: 50 }}></Icon>
                <TextInput defaultValue={global.variable} onTouchStart={() => props.navigation.navigate('Search Location')} style={{ textAlign: 'center', borderBottomWidth: 0.2, width: '80%', alignSelf: 'center' }} placeholder='location'></TextInput>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='dot-single' color='#f26868' style={{ fontSize: 50 }}></Icon>
                <TextInput defaultValue={global.variable2} onTouchStart={() => props.navigation.navigate('Search Location2')} style={{ textAlign: 'center', borderBottomWidth: 0.2, width: '80%', alignSelf: 'center' }} placeholder='destination'></TextInput>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-evenly', borderLeftWidth: 0.2, borderLeftColor: 'grey' }}>

                <Pressable style={{ width: '50%' }} onPress={() => show()}>
                    <View style={{ height: 50, borderRightWidth: 0.2, justifyContent: 'center', borderRightColor: 'grey' }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', }}><Icon1 name='clock-time-four-outline' style={{ fontSize: 15 }} /> {date.getDate()} {month[date.getMonth()]} ,{strTime} </Text>
                    </View>
                </Pressable>

                <Pressable style={{ width: '50%' }} onPress={() => show2()}>
                    <View style={{ height: 50, borderRightWidth: 0.2, justifyContent: 'center', borderRightColor: 'grey' }}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}><Icon1 style={{ fontSize: 20 }} name='car-seat'></Icon1> {seats} Seats</Text>
                    </View>
                </Pressable>

            </View>
            <Dialog
                visible={visible}
                onTouchOutside={() => {
                    setvisible(!visible)
                }}
            >
                <DialogContent style={{}}>
                    <View>
                        <Text

                            style={{ fontSize: 20, textAlign: 'center', borderBottomWidth: 0.2, borderBottomColor: 'grey', margin: 10, color: 'grey' }}>
                            Select Your Date of Ride
                        </Text>
                    </View>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        style={{ height: 300, }}
                    />
                    <TouchableHighlight >
                        <Pressable onPress={() => { setvisible(!visible) }}>
                            <View
                                style={{
                                    backgroundColor: '#ede6e6', height: 35, width: 100,
                                    justifyContent: 'center', alignSelf: 'flex-end', borderRadius: 15
                                }}>

                                <Text

                                    style={{ textAlign: 'center', fontSize: 13 }}
                                >Set
                        </Text>
                            </View>
                        </Pressable>
                    </TouchableHighlight>
                </DialogContent>
            </Dialog>
            <Dialog
                visible={visible2}
                onTouchOutside={() => {
                    setvisible2(!visible2)
                }}

            >
                <DialogContent style={{ height: 350, width: 280, justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', }}>Number Of Seats</Text>
                    <Image style={{ height: 160, width: 160, alignSelf: 'center' }} source={require('./assets/icons8-car.gif')}></Image>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'space-around' }}>

                        <Pressable onPress={() => selectedSeats(1)} >
                            <View style={[styles.checkbox, { backgroundColor: seats == 1 ? 'green' : 'white' }]}>
                                <Text style={{ textAlign: 'center', color: seats == 1 ? 'white' : 'black' }}>1</Text>
                            </View>
                        </Pressable>


                        <Pressable onPress={() => selectedSeats(2)}>
                            <View style={[styles.checkbox, { backgroundColor: seats == 2 ? 'green' : 'white' }]}>
                                <Text style={{ textAlign: 'center', color: seats == 2 ? 'white' : 'black' }}>2</Text>
                            </View>
                        </Pressable>


                        <Pressable onPress={() => selectedSeats(3)}>
                            <View style={[styles.checkbox, { backgroundColor: seats == 3 ? 'green' : 'white' }]}>
                                <Text style={{ textAlign: 'center', color: seats == 3 ? 'white' : 'black' }}>3</Text>
                            </View>
                        </Pressable>


                        <Pressable onPress={() => selectedSeats(4)}>
                            <View style={[styles.checkbox, { backgroundColor: seats == 4 ? 'green' : 'white' }]}>
                                <Text style={{ textAlign: 'center', color: seats == 4 ? 'white' : 'black' }}>4</Text>
                            </View>
                        </Pressable>




                        <Pressable onPress={() => selectedSeats(5)}>
                            <View style={[styles.checkbox, { backgroundColor: seats == 5 ? 'green' : 'white' }]}>
                                <Text style={{ textAlign: 'center', color: seats == 5 ? 'white' : 'black' }}>5</Text>
                            </View>
                        </Pressable>

                    </View>
                    <Pressable onPress={() => setvisible2(!visible2)}>
                        <View style={{ width: 140, backgroundColor: '#2E8B57', height: 35, alignSelf: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Confirm</Text>
                        </View>
                    </Pressable>


                </DialogContent>
            </Dialog>

        </View>
    )
};

const OfferPool = () => {
global.side=2;
    const [date, setDate] = useState(new Date())
    const [visible, setvisible] = useState(false)
    const [visible3, setvisible3] = useState(false)


    //const [date_value, setdate_value] = useState('')
    const show = () => {
        setvisible(!visible);
        return date;
    }
    const show3 = () => {
        setvisible3(!visible3);

    }

    var month = new Array();
    var hours = date.getHours()
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    const [dummy, setdummy] = useState(1)
    const [carname, setcarname] = useState('HatchBack')
    //const [selectedValue, setSelectedValue] = useState("Java");
    const [viewCar, setviewCar] = useState(1)
    const [vecView, setVecView] = useState(1)
    const [vecView2, setVecView2] = useState(1)
    const carDialogView = (val) => {
        setviewCar(val);
    }

    const vehicleView = (val) => {
        setVecView(val);
    }
    const [seats, setseats] = useState(1)



    return (
        <View style={styles.input}>
           
            {/* <StatusBar backgroundColor="white" /> */}
            <View style={{ flexDirection: 'row' }}>
                <Icon name='dot-single' color='#53bd4d' style={{ fontSize: 50 }}></Icon>
                <TextInput defaultValue={global.variable} onTouchStart={() => props.navigation.navigate('Search Location')} style={{ textAlign: 'center', borderBottomWidth: 0.2, width: '80%', alignSelf: 'center' }} placeholder='location'></TextInput>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='dot-single' color='#f26868' style={{ fontSize: 50 }}></Icon>
                <TextInput defaultValue={global.variable2} onTouchStart={() => props.navigation.navigate('Search Location2')} style={{ textAlign: 'center', borderBottomWidth: 0.2, width: '80%', alignSelf: 'center' }} placeholder='destination'></TextInput>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-evenly', borderLeftWidth: 0.2, borderLeftColor: 'grey' }}>

                <Pressable style={{ width: '50%' }} onPress={() => show()}>
                    <View style={{ height: 50, borderRightWidth: 0.2, justifyContent: 'center', borderRightColor: 'grey' }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', }}><Icon1 name='clock-time-four-outline' style={{ fontSize: 15 }} /> {date.getDate()} {month[date.getMonth()]} ,{strTime} </Text>
                    </View>
                </Pressable>

                <Pressable style={{ width: '50%' }} onPress={() => show3()}>
                    <View style={{ height: 50, borderRightWidth: 0.2, justifyContent: 'center', borderRightColor: 'grey' }}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}><Icon1 name={dummy == 1 ? 'car' : 'motorbike'} style={{ fontSize: 20 }} /> {carname} <Icon1 style={{ fontSize: 20 }} name='car-seat' /> {seats} Seats</Text>
                    </View>
                </Pressable>

            </View>
            <Dialog
                visible={visible}
                onTouchOutside={() => {
                    setvisible(!visible)
                }}

            >
                <DialogContent>
                    <View>
                        <Text

                            style={{ fontSize: 20, textAlign: 'center', borderBottomWidth: 0.2, borderBottomColor: 'grey', margin: 10, color: 'grey' }}>
                            Select Your Date of Ride
                        </Text>
                    </View>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        style={{ height: 300, }}
                    />
                    <TouchableHighlight >
                        <Pressable onPress={() => { setvisible(!visible) }}>
                            <View
                                style={{
                                    backgroundColor: '#ede6e6', height: 35, width: 100,
                                    justifyContent: 'center', alignSelf: 'flex-end', borderRadius: 15
                                }}>

                                <Text

                                    style={{ textAlign: 'center', fontSize: 13 }}
                                >Set
                        </Text>
                            </View>
                        </Pressable>
                    </TouchableHighlight>
                </DialogContent>
            </Dialog >

            <Dialog
                visible={visible3}
                onTouchOutside={() => {
                    setvisible3(!visible3)
                }}
            >
                <DialogContent style={{}}>
                    <View style={{ alignContent: 'space-between', height: 400, justifyContent: 'space-evenly', width: 300 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                            <Pressable onPress={() => carDialogView(1)} style={{ height: 40, width: 120, justifyContent: 'center', borderRadius: 10, backgroundColor: viewCar == 1 ? '#54514a' : 'white', elevation: 10 }}>
                                <Text style={{ textAlign: 'center', color: viewCar == 1 ? '#e8e6e1' : 'black' }}><Icon2 name='car' style={{ fontSize: 13 }} />  Car</Text>
                            </Pressable>
                            <Pressable onPress={() => carDialogView(2)} style={{ height: 40, backgroundColor: viewCar == 2 ? '#54514a' : 'white', width: 120, justifyContent: 'center', borderRadius: 10, elevation: 10 }}>
                                <Text style={{ textAlign: 'center', color: viewCar == 2 ? '#e8e6e1' : 'black' }}><Icon1 name='motorbike' style={{ fontSize: 17 }} />  Bike</Text>
                            </Pressable>
                        </View>
                        {viewCar == 1 ?
                            <View style={{ justifyContent: 'space-evenly' }} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Pressable onPress={() => setVecView(1)} style={{ height: 33, width: 70, backgroundColor: vecView == 1 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 1 ? 'white' : 'black' }}>HatchBack</Text>

                                    </Pressable>
                                    <Pressable onPress={() => setVecView(2)} style={{ height: 33, width: 70, backgroundColor: vecView == 2 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 2 ? 'white' : 'black' }}>Sedan</Text>

                                    </Pressable>
                                    <Pressable onPress={() => setVecView(3)} style={{ height: 33, width: 70, backgroundColor: vecView == 3 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 3 ? 'white' : 'black' }}>SUV</Text>

                                    </Pressable>
                                    <Pressable onPress={() => setVecView(4)} style={{ height: 33, width: 70, backgroundColor: vecView == 4 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 4 ? 'white' : 'black' }}>Premium</Text>

                                    </Pressable>

                                </View>
                                <View>
                                    <TextInput style={{ borderBottomWidth: 0.2, width: 100, alignSelf: 'center', textAlign: 'center' }} placeholder='Reg No' />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <TextInput style={{ borderBottomWidth: 0.2 }} placeholder='Fuel Points/km'></TextInput>
                                    <TextInput style={{ borderBottomWidth: 0.2 }} onChangeText={(val) => setseats(val)} placeholder='offering seats'></TextInput>
                                </View>
                                <View>
                                    <TextInput style={{ borderBottomWidth: 0.2, textAlign: 'center' }} placeholder='Make and Category (Ex. Red Swift)'></TextInput>

                                </View>
                                <View>
                                    <TextInput style={{ borderBottomWidth: 0.2, textAlign: 'center' }} placeholder='Features (Ex.AC,Music,Wifi)'></TextInput>

                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                    {/* <Pressable onPress={()=> setvisible3(!visible3)} style={{ height: 40, width: 130, backgroundColor: 'white', justifyContent: 'center', borderRadius: 6, elevation: 10 }}>
                                        <Text style={{ textAlign: 'center' }}>Cancel</Text>
                                    </Pressable> */}
                                    <Pressable onPress={() => {
                                        setvisible3(!visible3);
                                        if (vecView == 1) {
                                            setcarname('HatchBack')
                                        }
                                        else if (vecView == 2) {
                                            setcarname('Sedan')
                                        }
                                        else if (vecView == 3) {
                                            setcarname('SUV')
                                        }
                                        else if (vecView == 4) {
                                            setcarname('Premium')
                                        };
                                        setdummy(1)

                                    }} style={{ height: 40, width: 130, backgroundColor: 'green', justifyContent: 'center', borderRadius: 6, elevation: 10 }}>

                                        <Text style={{ textAlign: 'center' }}>Confirm</Text>
                                    </Pressable>
                                </View>
                            </View>
                            :

                            <View style={{ justifyContent: 'space-evenly' }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 2 }}>
                                    <Pressable onPress={() => setVecView(1)} style={{ height: 33, width: 120, backgroundColor: vecView == 1 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 1 ? 'white' : 'black' }}>Regular Bike</Text>

                                    </Pressable>
                                    <Pressable onPress={() => setVecView(2)} style={{ height: 33, width: 120, backgroundColor: vecView == 2 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 2 ? 'white' : 'black' }}>Scooter</Text>

                                    </Pressable>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 2 }}>
                                    <Pressable onPress={() => setVecView(3)} style={{ height: 33, width: 120, backgroundColor: vecView == 3 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 3 ? 'white' : 'black' }}>Sports Bike</Text>

                                    </Pressable>
                                    <Pressable onPress={() => setVecView(4)} style={{ height: 33, width: 120, backgroundColor: vecView == 4 ? 'green' : '#dbdad7', justifyContent: 'center', borderRadius: 4 }}>

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: vecView == 4 ? 'white' : 'black' }}>Cruise Bike</Text>

                                    </Pressable>
                                </View>

                                <TextInput style={{ textAlign: 'center', borderBottomWidth: 0.2, width: 100, alignSelf: 'center' }} maxLength={10} placeholder='Reg No'></TextInput>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <TextInput style={{ textAlign: 'center', borderBottomWidth: 0.2 }} placeholder='Fuel Points/km'></TextInput>
                                    <TextInput style={{ textAlign: 'center', borderBottomWidth: 0.2 }} onChangeText={(val) => setseats(val)} maxLength={1} placeholder='Offering Seats'></TextInput>
                                </View>
                                <TextInput style={{ textAlign: 'center', borderBottomWidth: 0.2 }} placeholder='Make and Category (Ex.Black CBR)'></TextInput>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                                    {/* <View style={{ height: 40, width: 130, backgroundColor: 'white', justifyContent: 'center', borderRadius: 6, elevation: 10 }}>
                                        <Text style={{ textAlign: 'center' }}>Cancel</Text>
                                    </View> */}
                                    <Pressable style={{ height: 40, width: 130, backgroundColor: 'green', justifyContent: 'center', borderRadius: 6, elevation: 10 }}>

                                        <Text onPress={() => {
                                            setvisible3(!visible3);
                                            if (vecView == 1) {
                                                setcarname('Regular')
                                            }
                                            else if (vecView == 2) {
                                                setcarname('Scooter')
                                            }
                                            else if (vecView == 3) {
                                                setcarname('Sports')
                                            }
                                            else if (vecView == 4) {
                                                setcarname('Cruise')
                                            };
                                            setdummy(2)


                                        }} style={{ textAlign: 'center' }}>Confirm</Text>
                                    </Pressable>
                                </View>
                            </View>



                        }

                    </View>
                </DialogContent>
            </Dialog>
        </View >

    )
};

export default function OfferPoolPage() {
    const [Pool_num, setPool_num] = useState();
    const navigation = useNavigation();
    const route = useRoute();
    const coordinates =
    {
        latitude: 20.6623400, longitude: 78.0918
    };
    const coordinates1 =
    {
        latitude: 18.66231977, longitude: 78.09178655
    };

    const [region, setRegion] = useState({
        latitude: 18.66231977,
        longitude: 78.09178655,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });
    const _map = useRef(null);

    const [visible, setvisible] = useState(false);
    const setvisibledialog=()=>{
        setvisible(!visible)
    }
global.side=1;
    return (

        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    //style={{ flex: 1 }}
                    ref={_map}
                    //ref={map => this._map = map}
                    region={region}
                    initialRegion={{
                        latitude: 0,
                        longitude: 0,
                        latitudeDelta: 0,
                        longitudeDelta: 0
                    }}
                    onRegionChangeComplete={region => setRegion(region)}
                    showsUserLocation={true}
                    followUserLocation={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    mapType='standard'
                >


                </MapView>
            </View>
            <View style={{ flex: 0, backgroundColor: 'red', height: '30%', }}>
                <Tab.Navigator
                    tabBarOptions={{
                        labelStyle: {
                            fontSize: 15,
                            justifyContent: 'center'
                        },
                        tabStyle: {

                            justifyContent: 'center'
                        },
                        style: {
                            //borderRadius:30,
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            borderBottomWidth: 0.2,
                            borderBottomColor: 'red'
                        },
                        activeTintColor: '#2E8B57',

                        //activeBackgroundColor:'white'
                    }}
                >
                    <Tab.Screen name='Find Pool' component={FindPool}></Tab.Screen>
                    <Tab.Screen name='Offer Pool' component={OfferPool} ></Tab.Screen>

                </Tab.Navigator>
                {/* {
                    side == 1 ? <FindPool/> : <OfferPool/>
                }
                <View style={{ flexDirection: 'row', height: 56, flex: 0, }}>
                    <Pressable onPress={() => setside(1)} style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>Find Pool</Text>
                    </Pressable>
                    <Pressable onPress={() => setside(2)} style={{ backgroundColor: 'green', flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>OfferPool</Text>
                    </Pressable>
                </View> */} 

               
            </View>
            <Pressable onPress={() =>{ global.side==1? navigation.navigate("Ride Givers"):setvisibledialog()} } style={{ backgroundColor: '#2E8B57', height: 50, justifyContent: 'center' }}>
                {/* <Button title='Confirm Pool' color="#2E8B57" style={{padding:15,elevation:0,}}></Button> */}
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Confirm Pool</Text>
            </Pressable>

            {/* dialog View for confirm offer pool */}
            <Dialog
                visible={visible}
                onTouchOutside={() => {
                    setvisible(!visible)
                }}
                >
                <DialogContent style={{width:'85%'}}>
                    <View style={{flex:0,}}>
                        <Image style={{height:200,width:220,alignSelf:'center'}} source={require('./assets/checkmark.png')}></Image>
                        <Text style={{fontSize:25,fontStyle:'normal',fontWeight:'bold',textAlign:'center',color:'#494d49'}}>Your Itenarary has been added successfully</Text>
                    </View>
                </DialogContent>

            </Dialog>
            {/* modal for confirm pool */}



        </View>


    )
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',


    },
    checkbox: {
        height: 40,
        width: 40,
        // backgroundColor: 'red',
        justifyContent: 'center',
        borderRadius: 7,
        elevation: 7,
        //borderWidth:0.2,
        //padding:10

    }
});

import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, TouchableHighlight, Pressable, Modal, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNav from './tabNavRides';
import { Dialog, Portal } from 'react-native-paper';
import { set } from 'react-native-reanimated';

// import Icon from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();


const DATA = [
    {
        id: '1',
        title: 'First Ride',
        location: 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India',
        destination: 'Hyderabad International Airport (HYD), Shamshabad, Hyderabad, Telangana, India',
        date: 'Sat , Feb 06',
        time: '12:05 PM',
        amount: 245.12,
        carType: 'Sedan',
    },
    {
        id: '2',
        title: 'Second Ride',
        location: 'Hyderabad International Airport (HYD), Shamshabad, Hyderabad, Telangana, India',
        destination: 'Delhi Airport, New Delhi, Delhi, India',
        date: 'Mon , Aug 06',
        time: '9:25 AM',
        amount: 501.00,
        carType: 'SUV',
    },
    {
        id: '3',
        title: 'Third Ride',
        location: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India',
        destination: 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India',
        date: 'Sun , Mar 16',
        time: '1:45 PM',
        amount: 129.25,
        carType: 'Sedan',
    },
    {
        id: '4',
        title: 'Fourth Ride',
        location: 'Delhi Airport, New Delhi, Delhi, India',
        destination: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India',
        date: 'Sat , Aug 12',
        time: '9:25 PM',
        amount: 199.00,
        carType: 'Prime SUV',
    },
    {
        id: '5',
        title: 'Fifth Ride',
        location: 'Hyderabad International Airport (HYD), Shamshabad, Hyderabad, Telangana, India',
        destination: 'Delhi Airport, New Delhi, Delhi, India',
        date: 'Sat , Feb 06',
        time: '06:25 AM',
        amount: 267.16,
        carType: 'Prime Sedan',
    },
    {
        id: '6',
        title: 'Sixth Ride',
        location: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India',
        destination: 'Hyderabad International Airport (HYD), Shamshabad, Hyderabad, Telangana, India',
        date: 'Sat , Feb 06',
        time: '09:29 PM',
        amount: 309.24,
        carType: 'SUV',
    },
    {
        id: '7',
        title: 'Seventh Ride',
        location: 'Delhi Airport, New Delhi, Delhi, India',
        destination: 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India',
        date: 'Sat , Feb 06',
        time: '07:55 PM',
        amount: 150.75,
        carType: 'Sedan',
    },
    {
        id: '8',
        title: 'Eighth Ride',
        location: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India',
        destination: 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India',
        date: 'Sat , Feb 06',
        time: '09:25 PM',
        amount: 230.40,
        carType: 'Sedan',
    },
    {
        id: '9',
        title: 'Nine Ride',
        location: 'hyderabad',
        destination: 'nizamabad',
        date: 'Sat , Feb 06',
        time: '4:35 PM',
        amount: 195.23,
        carType: 'Sedan',
    },
];

const DATA2 = [
    {
        id: '1',
        title: 'First Ride',
        location: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India',
        destination: 'UGH HIGH SCHOOL, GOSANI, Gosani, Odisha, India',
        date: 'Tue , Jun 8',
        time: '1:45 PM',
        amount: 129.25,
        carType: 'Sedan',
    },
    {
        id: '2',
        title: 'Second Ride',
        location: 'Delhi Airport, New Delhi, Delhi, India',
        destination: 'US Consulate General, Chiran Fort Club Lane, Patigadda, Begumpet, Secunderabad, Telangana, India',
        date: 'Wed , Jun 9',
        time: '9:25 PM',
        amount: 199.00,
        carType: 'Premium',
    },
    
];
const Item = ({ location, destination, date, time, amount, carType, onPress }) => (
    <Pressable onPress={onPress}>
        <View style={styles.item}>
            <View style={{}}>
                <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 20, marginLeft: 15 }} >{date}   {time}</Text>
                <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 15, marginLeft: 15 }}>{'\u20B9'}{amount}</Text>
                <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 15, marginLeft: 15 }}>{carType}{' to'}</Text>
                <Text numberOfLines={1} style={styles.title}><Icon name='pin' color="#26bf15" style={styles.customPin}></Icon> {location}</Text>
                <Text numberOfLines={1} style={styles.title}><Icon name='pin' color="#c7231e" style={styles.customPin}></Icon> {destination}</Text>
                <View style={styles.statusButton}>
                    <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 15, marginLeft: 15, fontWeight: '700', color: 'white' }}>Completed</Text>
                </View>
            </View>
        </View>
    </Pressable>
);
const Item2 = ({ location, destination, date, time, amount, carType, onPress }) => (
    <Pressable onPress={onPress}>
        <View style={styles.item}>
            <View style={{}}>
                <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 20, marginLeft: 15 }} >{date}   {time}</Text>
                <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 15, marginLeft: 15 }}>{'\u20B9'}{amount}</Text>
                <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 15, marginLeft: 15 }}>{carType}{' to'}</Text>
                <Text numberOfLines={1} style={styles.title}><Icon name='pin' color="#26bf15" style={styles.customPin}></Icon> {location}</Text>
                <Text numberOfLines={1} style={styles.title}><Icon name='pin' color="#c7231e" style={styles.customPin}></Icon> {destination}</Text>
                <View style={styles.statusButton2}>
                    <Text style={{ marginBottom: 5, left: 20, width: 300, fontSize: 15, marginLeft: 15, fontWeight: '700', color: 'white', }}>Pending</Text>
                </View>
            </View>
        </View>
    </Pressable>
);
function yourRides(props) {
   // const vari = global.sankalp;
 
    //global.variable='Adhik'
    //global.sankalp.append({name:'Adhik'})
    console.log(global.variable);
    const renderItem = ({ item }) => (
        <Item
            location={item.location}
            destination={item.destination}
            date={item.date}
            time={item.time}
            amount={item.amount}
            carType={item.carType}
            onPress={() => {
                SetModelData(item);
                console.log(item)
                setModalVisible(!modalVisible)
            }}
        />
    );
    const renderItem2 = ({ item }) => (
        <Item2
            location={item.location}
            destination={item.destination}
            date={item.date}
            time={item.time}
            amount={item.amount}
            carType={item.carType}
            onPress={() => {
                SetModelData(item);
                console.log(item)
                setModalVisible2(!modalVisible2)
            }}
        />
    );

    //setModalVisible=(!modalVisible);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [ModelData, SetModelData] = useState('');
    const [showSide, setShowside] = useState(1);
    return (

        <SafeAreaView>

            <View style={{ height: 60, width: '100%', flexDirection: 'row', marginBottom: 5, backgroundColor: '#288499', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ position: 'absolute', alignSelf: 'flex-start', top: '5%', backgroundColor: '#288499', marginLeft: 15, padding: 15, borderRadius: 60, }}>
                    <TouchableHighlight>
                        <Pressable onPress={() => props.navigation.navigate('Home')}>
                            <Icon name='arrow-back' style={{ fontSize: 23 }}></Icon>
                        </Pressable>
                    </TouchableHighlight>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Rides</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-evenly', borderRightWidth: 0.2 }}>
                <Pressable style={{ alignSelf: 'center', width: '50%', alignItems: 'center', }} onPress={() => setShowside(1)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold',color:showSide==1?'green':'grey' }}>My Rides</Text>
                </Pressable>
                <Pressable style={{ alignSelf: 'center', width: '50%', alignItems: 'center', borderLeftWidth: 0.2 }} onPress={() => setShowside(2)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold',color:showSide==2?'green':'grey' }}>Bookings</Text>
                </Pressable>
            </View>
            {
                showSide == 1 ?
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />
                    :
                    <FlatList
                        data={DATA2}
                        renderItem={renderItem2}
                        keyExtractor={item => item.id}

                    />
            }

            <Modal
                animationType='slide'
                style={styles.modal}
                //setModalVisible(!modalVisible)
                visible={modalVisible}
            >
                <View>
                    {/* <StatusBar backgroundColor="#288499" /> */}

                    <View style={styles.modalHeader}>
                        <Icon style={{ left: 20, alignSelf: 'center', position: 'absolute' }} onPress={() => setModalVisible(!modalVisible)} name="arrow-back"></Icon>
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}>Ride Details</Text>
                    </View>

                    <View style={styles.item_list}>
                        <Text style={styles.item_text}  >{ModelData.date} , {ModelData.time}</Text>
                    </View>

                    <View style={styles.item_list}>
                        <Text style={styles.item_text}> <Icon name='car' style={{ fontSize: 20 }}></Icon> {ModelData.carType}</Text>
                        <Text style={{ position: 'absolute', right: 30 }}>{'\u20B9'}{ModelData.amount}</Text>
                    </View>
                    <View style={styles.item_list2}>
                        <View style={styles.item_text2}>
                            <Text><Icon name='pin' color='#c7231e' style={{ fontSize: 14 }}></Icon> {ModelData.location}</Text>
                            <Text></Text>

                            <Text><Icon name='pin' color='#26bf15' style={{ fontSize: 14 }}></Icon> {ModelData.destination}</Text>
                        </View>
                    </View>
                    <View style={styles.item_list3}>
                        <Text style={{ height: 50, alignSelf: 'center', paddingTop: 15 }}>Trip Issues and Refunds</Text>
                        <Text style={styles.item_text3}>I was involved in an accident</Text>
                        <Text style={styles.item_text3}>Review my fare or fees</Text>
                        <Text style={styles.item_text3}>I paid extra cash</Text>
                        <Text style={styles.item_text3}>I lost an item</Text>
                        <Text style={styles.item_text3}>I had a safety issue</Text>
                        <Text style={styles.item_text3}>My driver was unprofessional</Text>
                        <Text style={styles.item_text3}>My vehicle wasn't what i expected</Text>
                        <Text style={styles.item_text3}>I had a different issue</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType='slide'
                style={styles.modal}
                //setModalVisible(!modalVisible)
                visible={modalVisible2}
            >
                <View>
                    {/* <StatusBar backgroundColor="#288499" /> */}

                    <View style={styles.modalHeader}>
                        <Icon style={{ left: 20, alignSelf: 'center', position: 'absolute' }} onPress={() => setModalVisible2(!modalVisible2)} name="arrow-back"></Icon>
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}>Ride Details</Text>
                    </View>

                    <View style={styles.item_list}>
                        <Text style={styles.item_text}  >{ModelData.date} , {ModelData.time}</Text>
                    </View>

                    <View style={styles.item_list}>
                        <Text style={styles.item_text}> <Icon name='car' style={{ fontSize: 20 }}></Icon> {ModelData.carType}</Text>
                        <Text style={{ position: 'absolute', right: 30 }}>{'\u20B9'}{ModelData.amount}</Text>
                    </View>
                    <View style={styles.item_list2}>
                        <View style={styles.item_text2}>
                            <Text><Icon name='pin' color='#c7231e' style={{ fontSize: 14 }}></Icon> {ModelData.location}</Text>
                            <Text></Text>

                            <Text><Icon name='pin' color='#26bf15' style={{ fontSize: 14 }}></Icon> {ModelData.destination}</Text>
                        </View>
                    </View>
                    <View style={styles.item_list3}>
                        <View style={styles.item_text_3}>
                            <Text style={{textAlign:'center',fontSize:20,color:'grey'}}>Your Ride is still in Progress</Text>
                            <Text style={{textAlign:'center',color:'grey'}}>Hope You have a Safe Journey</Text>
                        </View>
                       
                        {/* <Text style={{ height: 50, alignSelf: 'center', paddingTop: 15 }}>Trip Issues and Refunds</Text>
                        <Text style={styles.item_text3}>I was involved in an accident</Text>
                        <Text style={styles.item_text3}>Review my fare or fees</Text>
                        <Text style={styles.item_text3}>I paid extra cash</Text>
                        <Text style={styles.item_text3}>I lost an item</Text>
                        <Text style={styles.item_text3}>I had a safety issue</Text>
                        <Text style={styles.item_text3}>My driver was unprofessional</Text>
                        <Text style={styles.item_text3}>My vehicle wasn't what i expected</Text>
                        <Text style={styles.item_text3}>I had a different issue</Text> */}
                    </View>
                   <View style={{backgroundColor:'red'}}>
                       <Text style={styles.item_text3}>Cancel Ride</Text>
                   </View>
                </View>
            </Modal>



        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 180,
        backgroundColor: 'white',
        marginTop: 3,
        marginBottom: 3,
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'column'
    },
    item_list: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        margin: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',

        // alignSelf:'center',



    },
    item_list2: {
        width: '100%',
        height: 130,
        backgroundColor: 'white',
        margin: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',

    },
    item_list3: {

        backgroundColor: '#f5f0f0',
        //alignItems:'center',


    },

    item_text: {
        fontSize: 18,
        //textAlign: 'center',
        //justifyContent:'center'
        //paddingRight:40
        left: 30
    },
    item_text2: {
        //height:90,
        fontSize: 20,
        //textAlign: 'center',
        //justifyContent:'center'
        //paddingRight:40
        left: 25,
        flexDirection: 'column',

    },
    item_text3: {
        height: 50,
        fontSize: 19,
        textAlign: 'center',
        //borderBottomWidth:0.2,
        width: '100%',
        paddingTop: 10,
        fontWeight: '200',
        fontWeight:'bold',
        //color:'white'
    },
    item_text_3: {
        height: 100,
        fontSize: 19,
        textAlign: 'center',
        //borderBottomWidth:0.2,
        width: '100%',
        paddingTop: 20,
        //margin:5,
        //fontWeight:'bold' ,
        backgroundColor:'white'
    },
    modal: {
        backgroundColor: 'grey',
        height: '60%'
    },
    modalHeader: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#288499',
        justifyContent: 'center'
    },

    title: {
        fontSize: 15,
        marginBottom: 5,
        // alignSelf: 'center',
        left: 20,
        width: 300
        //width:'50%'
        //borderBottomWidth:1,

    },
    customPin: {
        fontSize: 20
    },
    statusButton: {
        height: 30,
        backgroundColor: '#22ab13',
        width: 160,
        left: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 8,
        left: 30,
        paddingTop: 3,
        paddingLeft: 6
        // alignSelf:'center'
    },
    statusButton2: {
        height: 30,
        backgroundColor: '#d13c2c',
        width: 140,
        //left: 10,
       // justifyContent: 'center',
        //alignContent: 'center',
        borderRadius: 8,
        left: 30,
        paddingTop: 3,
        paddingLeft: 6
        // alignSelf:'center'
    },
})

export default yourRides;
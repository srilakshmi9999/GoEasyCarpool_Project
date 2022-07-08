import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, TouchableHighlight, Pressable,Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
//import { Divider } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-ionicons';

//import { Avatar } from "react-native-elements";
const Profile = (props) => {
    //const [selectedValue, setSelectedValue] = useState("");
    return (
        <SafeAreaView style={{ height: '100%', width: '100%', }}>
            <StatusBar backgroundColor="#1e2121" />

            <View style={styles.container}>
                <View style={styles.editBox}>

                    <View style={{flexDirection:'row',backgroundColor:'#1e2121',height:60,}}>

                        <TouchableHighlight  style={{position:'absolute',left:20,alignSelf:'center',padding:5}}>
                            <Pressable onPress={() => props.navigation.navigate('Home')}>
                                <Icon name='arrow-back' color='white' style={{ fontSize: 23 }}></Icon>
                            </Pressable>
                        </TouchableHighlight>
                        <Text style={{position:'absolute',right:20,alignSelf:'center',color:'white'}}>Save</Text>
                        <View style={{backgroundColor:'#1e2121',position:'absolute',alignSelf:'center',right:'43%',}}>
                        <Text style={{alignSelf:'center',fontSize:20,color:'white',}} >Profile</Text>
                        </View>
                    </View>
                    <View style={styles.imagecircle}>
                    <Image source={require('./assets/profilePic.jpeg')} style={styles.imageStyle}></Image>

                    </View>

                </View>
                <View style={styles.formBox}>
                    {/* <Image source={require('./assets/helloApplogo.png')} style={styles.imageStyle}></Image> */}
                    <Text style={styles.textAligns}>Nickname</Text>
                    <TextInput keyboardType='default' maxLength={10} value='Adhik' textContentType='nickname' placeholder="Nickname" style={styles.form} />
                    <Text style={styles.textAligns}>Phone Number</Text>
                    <TextInput keyboardType='number-pad' maxLength={10} value='6302072720' textContentType='telephoneNumber' placeholder="Phone Number" style={styles.form} />
                    <Text style={styles.textAligns}>Email Address</Text>
                    <TextInput textContentType='emailAddress' maxLength={15} keyboardType='email-address' placeholder="Email Address" style={styles.form} />
                    <Text style={styles.textAligns}>Gender</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Male', value: 'Male', },
                            { label: 'Female', value: 'Female', },
                            // { label: 'France', value: 'france' },
                        ]}

                        containerStyle={{ height: 60, width: 340, borderBottomWidth: 5, borderBottomColor: 'black', borderRadius: 18, marginBottom: 10, alignSelf: 'center', }}
                        style={{ color: '#a3a3a3', backgroundColor: 'white' }}
                        searchableStyle={{ backgroundColor: 'white' }}
                        dropDownStyle={{ color: 'white', backgroundColor: 'white' }}
                        searchablePlaceholder="Select your gender"
                        searchablePlaceholderTextColor="#a3a3a3"
                        itemStyle={{ borderWidth: 2, color: 'white' }}
                    />
                    {/* <TextInput keyboardType='default' maxLength={10} placeholder="Gender" style={styles.form} /> */}
                    <Text style={styles.textAligns}>DOB</Text>
                    {/* <TextInput keyboardType='default' maxLength={10} placeholder="DOB" style={styles.form} /> */}
                    <DatePicker
                        style={{ width: 340, }}
                        //date={this.state.date}
                        mode="date"
                        showIcon={false}
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            // dateIcon: {
                            //     position: 'absolute',
                            //     left: 0,
                            //     top: 4,
                            //     marginLeft: 0
                            // },
                            dateInput: {
                                marginTop: 20,
                                borderRadius: 18,
                                borderBottomWidth: 5,
                                borderBottomColor: 'black'
                            }

                            // ... You can check the source to find the other keys.
                        }}
                    //onDateChange={(date) => { this.setState({ date: date }) }}
                    />


                    {/* <Text style={{ alignSelf: 'center', }}><Link >Forgot Password ?</Link>{"  | "} <Link>Create account?</Link> </Text> */}
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:'#41b598',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignContent: 'space-between',

    },
    form: {
        borderBottomWidth: 4.5,
        //borderWidth:1,
        width: 340,
        height: 60,
        borderRadius: 20,
        //backfaceVisibility:'hidden',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        // maxLength:10
        //paddingBottom:2
        //alignContent:'space-between'
    },
    formBox: {
        height: '59%',
        marginTop: 15,
        padding: 0
    },

    // loginButton: {
    //     borderRadius: 40,
    //     //flexDirection:'column',

    //     justifyContent: 'center',
    //     height: 40,
    //     margin: 5,
    //     width: 170,
    //     alignSelf: 'center',
    //     borderBottomWidth: 2,
    //     borderLeftWidth: 1,
    //     borderRightWidth: 1,
    //     padding: 10,
    //     backgroundColor: '#5193f5',


    editBox: {
        height: '40%',
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#1e2121',
        borderRadius: 5,

        // marginTop:30
        //alignItems:'center',

    },
    textAligns: {
        justifyContent: 'flex-end'
    },

    imagecircle: {
        borderWidth: 1,
        borderRadius: 73,
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 30,
        alignItems:'center'
        //alignContent:'center'
    },
    imageStyle:{
        //resizeMode:'contain',
        height:150,
        width:150,
        borderRadius:69
    }


})

export default Profile;
import { Link, useLinkProps } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, Button, Modal, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
//import {AddLoginCred,GetLoginCred} from './api/loginPageApi';
// import Theme from "@nativescript/theme";
//import {Create} from './createAcc';
// Theme.setMode(Theme.Dark); // Or Theme.Light
//import Carpool from './assets/hellologo.png'
//import createAcc from './createAcc';
//import Modal from 'react-native-modal';
const { obj } = require('./createAcc');

function LoginPage(props) {

    const [phone, setphone] = React.useState(null);
    const [password, setpassword] = React.useState(null);

    const loginButton = () => {
        //alert("entered ")
        // console.log(`${phone}: ${password}`);
        //    props.navigation.navigate('Home')
        // console.log(obj);
        // //console.log(obj[phone],`${password}`)
        if (obj[phone] == `${password}`) {
            props.navigation.navigate('Home')
        }
        else if (phone == null || password == null) {
            alert('Enter Your Input');
        }
        else if (!obj[phone]) {
            alert('User not found ');
        }
        else if (obj[phone] != `${password}`) {
            alert('Wrong Credentials!!');
        }




    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#b5cff5" />

            <View style={styles.container}>
                <View style={styles.formBox}>
                    <Text>{"\n"}</Text>
                    <Image source={require('./assets/helloApplogo.png')} style={styles.imageStyle}></Image>
                    <TextInput keyboardType='number-pad' maxLength={10} textContentType='telephoneNumber' placeholder="Phone Number" value={phone} onChangeText={setphone} style={styles.form} />

                    <TextInput maxLength={15} secureTextEntry={true} value={password} onChangeText={setpassword} placeholder="Password" style={styles.form} />
                    {/* <View style={styles.loginButton} >
                    {/* <Button title='Login' color='#5193f5' onPress={AddLoginCred({username:phone,password:password})}  ></Button> */}
                    {/* 
                        <Button title='Login' color='#5193f5' onPress={loginButton}  ></Button>
                    </View>
                     */}
                    <Pressable onPress={loginButton} style={styles.loginButton}>
                        <Text>Login</Text>
                    </Pressable>

                    <Text style={{ alignSelf: 'center', }}><Text >Forgot Password ?</Text>{"  | "} <Text onPress={() => props.navigation.navigate('CreateAcc')}>Create account?</Text> </Text>
                </View>
            </View>

        </SafeAreaView>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: 300,
        height: 60,
        borderRadius: 100,

        textAlign: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        // maxLength:10
        //paddingBottom:2
        //alignContent:'space-between'
    },
    formBox: {
        flex:0,
        //borderWidth: 0,
        padding: 28,
        //marginBottom: 80,
        //paddingTop: 40,
        justifyContent: 'space-between',
        backgroundColor: '#e3edfc',
        alignContent: 'space-between',
        borderRadius: 90,
        borderColor: '#40e0d0',
        //position: 'relative'
        // marginTop:10
    },
    imageStyle: {
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 5,

    },
    loginButton: {
        borderRadius: 10,
        //flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        margin: 5,
        width: 170,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 10,
        backgroundColor: '#5193f5',

    }

})
export default LoginPage;
import { Link, useLinkProps } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, SafeAreaView, Button, Modal,StatusBar } from 'react-native';
import loginPage from './loginPage';
export const obj={ }
function createAcc(props) {
        
const [number, setnumber] = React.useState(true);
const [pwd1, setpwd1] = React.useState(true);
const [pwd2, setpwd2] = React.useState(true);

    const Create=()=>{
        if(pwd1==pwd2){
        obj[number]=pwd2;
        alert('account created');
        props.navigation.goBack()
        }
        else{
            alert("check your password")
        }
     }

    
    return (
        <SafeAreaView style={{ height: '100%', width: '100%', }}>
            <StatusBar backgroundColor="#b5cff5" />

            <View style={styles.container}>

                <View style={styles.formBox}>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#131414', fontStyle: 'normal', fontWeight: 'bold' }}>{"Create Account"}</Text>
                    {/* <Image source={require('./assets/helloApplogo.png')} style={styles.imageStyle}></Image> */}
                    {/* <TextInput keyboardType='default' maxLength={10} textContentType='nickname' placeholder="Name" value={} style={styles.form} /> */}

                    <TextInput keyboardType='number-pad' maxLength={10} textContentType='telephoneNumber' placeholder="Phone Number" value={number} onChangeText={setnumber} style={styles.form} />

                    <TextInput textContentType='password' secureTextEntry={true} maxLength={15} keyboardType='default' placeholder="Password" value={pwd1} onChangeText={setpwd1} style={styles.form} />
                    <TextInput keyboardType='default' secureTextEntry={true} maxLength={10} textContentType='password' placeholder="Re-enter Password" value={pwd2} onChangeText={setpwd2} style={styles.form} />

                    <View style={styles.loginButton} >

                        <Button title='Create' color='#5193f5' onPress={Create}  ></Button>
                    </View>
                    <Text style={{ alignSelf: 'center', marginTop: 5 }} onPress={() => props.navigation.goBack()} >SignIn</Text>
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
        backgroundColor: '#b5cff5',
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
        //backfaceVisibility:'hidden',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        // maxLength:10
        //paddingBottom:2
        //alignContent:'space-between'
    },
    formBox: {
        borderWidth: 0,
        padding: 28,
        marginBottom: 80,
        paddingTop: 40,
        justifyContent: 'space-between',
        backgroundColor: '#e3edfc',
        alignContent: 'space-between',
        borderRadius: 90,
        borderColor: '#40e0d0',
        position: 'relative'
        // marginTop:10
    },

    loginButton: {
        borderRadius: 40,
        //flexDirection:'column',

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

export default createAcc;
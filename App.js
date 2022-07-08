import 'react-native-gesture-handler';
import React from 'react';
import { Image, Modal, useState } from 'react-native';
import { StyleSheet, View, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-ionicons';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Profile from './src/Profile';
import yourRides from './src/yourRides';
import About from './src/About';
import AppMoney from './src/AppMoney';
import myVechile from './src/myVechile';
import Support from './src/Support';
import LoginPage from './src/loginPage';
import createAcc from './src/createAcc';
import Logout from './src/logoutPage';
import Places from './src/placeSearch';
import placeSearch2 from './src/placeSearch2';
import myAcc from './src/myAccountsPage_support';
import Notifications from './src/notifications';
import OfferPoolPage from './src/offerPoolPage';
import normalText from './src/normaltext';
import rideMatching from './src/RideMatching';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
function HelloApp(props, { navigation }) {
  // const [show,setShow]=useState('');

  return (
    // <NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginPage} screenOptions={{ headerShown: false }} >
        <Stack.Screen name="LoginPage" component={LoginPage}

          props={{}} />

        <Stack.Screen name="Home"
          component={Slide}
          options={{
            headerShown: false, title: 'HelloApp', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#288499', },
            headerTitle: 'HelloApp',
          }}>
          {

          }
        </Stack.Screen>

        <Stack.Screen name="CreateAcc" component={createAcc} />
        <Stack.Screen name="Search Location" component={Places} options={{ headerShown: true }} />
        <Stack.Screen name="Search Location2" component={placeSearch2} options={{ headerShown: true }} />
        <Stack.Screen name="OfferPoolPage"  component={OfferPoolPage} options={{ headerShown: true,title:'Carpool' }} />
        <Stack.Screen name="Ride Givers" component={rideMatching} options={{ headerShown: true , headerStyle: {
            backgroundColor: '#288499',
          },}} />

      </Stack.Navigator>


    </NavigationContainer>


    // {/* <Stack.Navigator

    //   <Tab.Screen name="Home" component={Slide} />
    //   <Tab.Screen name="Profile" component={Profile} />
    //   <Tab.Screen name="Settings" component={settings} />

    // </Stack.Navigator> */}



    //     {/* </NavigationContainer> */}

  )

}

const Slide = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName={Home} drawerType={'back'}   >
      <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: ({ focused }) => <Icon name="home" color='grey' style={{ fontSize: 30 }} /> }} />
      {/* <Drawer.Screen name="Places" component={Places} /> */}

      <Drawer.Screen name="Profile" component={Profile} options={{ drawerIcon: ({ focused }) => <Icon name="person" color='grey' style={{ fontSize: 30 }} /> }} >
        {/* { props => <Button title="##" onPress={props.navigation.toggleDrawer()}></Button> } */}
      </Drawer.Screen>
      <Drawer.Screen name="Your Rides" component={yourRides} options={{ drawerIcon: ({ focused }) => <Icon name="calendar" color='grey' style={{ fontSize: 30 }} /> }}>
        {/* {props=> <Text>Your Rides</Text> } */}
      </Drawer.Screen>
      <Drawer.Screen name="App Money" component={AppMoney} options={{ drawerIcon: ({ focused }) => <Icon name="cash" color='grey' style={{ fontSize: 30 }} /> }}>
        {/* {props=> <Text>app money</Text> } */}
      </Drawer.Screen>
      <Drawer.Screen name="My Vechile" component={myVechile} options={{ drawerIcon: ({ focused }) => <Icon name="car" color='grey' style={{ fontSize: 30 }} /> }}>
        {/* {props=> <Text>bookings</Text> } */}
      </Drawer.Screen>
      <Drawer.Screen name="Support" component={Support} options={{ drawerIcon: ({ focused }) => <Icon name="help-buoy" color='grey' style={{ fontSize: 30 }} /> }}>
        {/* {props=> <Text>support</Text> } */}
      </Drawer.Screen>
      <Drawer.Screen name="About" component={About} options={{ drawerIcon: ({ focused }) => <Icon name="information-circle" color='grey' style={{ fontSize: 30 }} /> }}>
        {/* {props=> <Text>about</Text> } */}
      </Drawer.Screen>
      <Drawer.Screen name="Logout" component={Logout} options={{ drawerIcon: ({ focused }) => <Icon name="log-out" color='grey' style={{ fontSize: 30 }} />, }}>
        {

        }
      </Drawer.Screen>
      <Drawer.Screen name="myAccountsPage"  component={myAcc}  style={{ fontSize: 30 }} options={{drawerLabel: () => null}} />
      <Drawer.Screen name="Notifications"  component={Notifications}  style={{ fontSize: 30 }} options={{drawerLabel: () => null}} />
      {/* <Drawer.Screen name="normalText"  component={normalText}  style={{ fontSize: 30 }}  /> */}

     




    </Drawer.Navigator>

  )

}

// const Stacker=()=>{
//   return(

//     <Stack.Navigator initialRouteName={Home} screenOptions={{headerShown:true}} >
//       <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
//       <Stack.Screen name="Search Location" component={Places}/>

//     </Stack.Navigator>



//   )
// }
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'red'
  }
})

export default HelloApp;

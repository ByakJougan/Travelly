import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, SplashScreen, Onboarding1Screen, Onboarding2Screen, Onboarding3Screen, WelcomeScreen, Booking, Notifications, Profile, TransportBooking, BoardingPass, FlightsFilter, SelectSeats, TransportFlights, ChangeInfo, LoginScreen, FilterScreen} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ButttonTabs } from '../components/molecules';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, tabBarvisible: false}}>
      <Stack.Screen name="BookingStack" component={Booking} />
      <Stack.Screen name="TransportBooking" component={TransportBooking} />
      <Stack.Screen name="TransportFlights" component={TransportFlights} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="SelectSeats" component={SelectSeats} />
      <Stack.Screen name="BoardingPass" component={BoardingPass} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileStack" component={Profile} />
      <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <ButttonTabs {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={BookingStack} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding1Screen" component={Onboarding1Screen} />
      <Stack.Screen name="Onboarding2Screen" component={Onboarding2Screen} />
      <Stack.Screen name="Onboarding3Screen" component={Onboarding3Screen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

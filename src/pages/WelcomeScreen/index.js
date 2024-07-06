import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WelcomeSS } from '../../assets/images'
import { WelcomeText } from '../../assets/images'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={WelcomeSS} style={{flex: 1}}>
        <View>
            <Image source = {WelcomeText} style={{marginTop: 130, marginLeft: 34}}/>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: '#FEA36B', 
        alignItems: 'center', paddingHorizontal: 30, paddingVertical: 15, 
        borderRadius: 30, marginHorizontal: 60, marginTop: 200}} onPress={() => 
        navigation.navigate('MainApp')}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Sign Up
            </Text>
        </TouchableOpacity>    
        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: 'white', 
        alignItems: 'center', paddingHorizontal: 30, paddingVertical: 15, 
        borderRadius: 30, marginHorizontal: 60, marginTop: 10}} onPress={() => 
        navigation.navigate('MainApp')}>
            <Text style={{color: '#FEA36B', fontSize: 18, fontWeight: 'bold'}}>
              Login
            </Text>
        </TouchableOpacity>     
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})
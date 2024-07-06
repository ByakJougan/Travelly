import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Onboarding1 } from '../../assets/images'

const Onboarding1Screen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Onboarding1} style={{flex: 1}}>
        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: '#FEA36B', 
        alignItems: 'center', paddingHorizontal: 30, paddingVertical: 15, 
        borderRadius: 30, marginHorizontal: 60, marginTop: 600}} onPress={() => 
        navigation.navigate('Onboarding2Screen')}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Next
            </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Onboarding1Screen

const styles = StyleSheet.create({})
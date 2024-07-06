import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {BackgroundSS} from '../../assets/images'
import { Logo } from '../../assets/images'
import { Loading } from '../../assets/images'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding1Screen')
    }, 3000)
  }, [])
  return (
    <View style={{flex: 1}}>
        <ImageBackground source={BackgroundSS} style={{flex: 1}}>
          <View style={{marginTop: 130, marginLeft: 105.5}}>
            <Image source={Logo}/>
          </View>
          <View>
            <Image source={Loading} style={{marginTop: 200, marginLeft: 65}}/>
          </View>
        </ImageBackground>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
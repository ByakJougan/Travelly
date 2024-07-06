import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeBackground, SwapButton } from '../../assets/images'
import { TextInput } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker'





const TransportBooking = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={HomeBackground} style={{flex: 1}}>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Transport Booking</Text>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 350, height: 60, borderRadius: 10, alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{fontSize: 10, color: 'gray', marginLeft: 5, marginTop: -35}}>From</Text>
              <TextInput placeholder='Search' style={{fontSize: 20, marginTop: 5, marginLeft: -10, fontWeight: 'black'}}/>
            </View>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 350, height: 60, borderRadius: 10, alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{fontSize: 10, color: 'gray', marginLeft: 5, marginTop: -35}}>Go</Text>
              <TextInput placeholder='Search' style={{fontSize: 20, marginTop: 5, fontWeight: 'black'}}/>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={{marginTop: -85, marginLeft: 180}} onPress={() => alert('Swap')}>
            <Image source={SwapButton}/>
          </TouchableOpacity>
        </View>
        {/*two horizontal search bar for departure and return date*/}
        
      </ImageBackground>
    </View>
  )
}

export default TransportBooking

const styles = StyleSheet.create({})
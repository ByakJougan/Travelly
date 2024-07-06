import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { HomeBackground, Search, TripsButton, EventsButton, TransportButton, HotelButton } from '../../assets/images'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={HomeBackground} style={{flex: 1}}>
        <View style={{marginTop: 60, marginLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Explore the beautiful world!
          </Text>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 30, paddingHorizontal: 20, paddingVertical: 5, 
        borderRadius: 15, justifyContent: 'space-between', alignItems: 'center', marginTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput placeholder='Search' style={{marginLeft: 5}} />
          </View>
          <View>
            <Image source={Search} />
          </View>
        </View>
        <View style={{marginTop: 40, marginLeft: 30}}>
          <Text style={{fontSize: 16}}>
            Booking Services
          </Text>
        </View>
        <View>
          <ScrollView horizontal={true} style={{marginLeft: 10, marginTop: 20}}>
            <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 15}} onPress={() => 
        navigation.navigate('Trips')}>
              <Image source={TripsButton} />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}> Trips </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 15}} onPress={() => 
        navigation.navigate('Hotel')}>
              <Image source={HotelButton} />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}> Hotel </Text>
            </TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 15}} onPress={() => 
        navigation.navigate('Booking')}>
              <Image source={TransportButton} />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}> Transport </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 15}} onPress={() => 
        navigation.navigate('Event')}>
              <Image source={EventsButton} />
              <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}> Events </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
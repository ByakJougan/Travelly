import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import {TripsCard, HotelCard, TransportCard, EventsCard, HomeBackground} from '../../assets/images'
import { ScrollView } from 'react-native-gesture-handler'

const Booking = ({navigation}) => {
  return (
    <View style={{flex: 1}}> 
        <ImageBackground source={HomeBackground} style={{flex: 1}}>
            <View style={{marginTop: 60, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Booking</Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 100, alignItems: 'center'}}>
                <ScrollView vertical={true}>
                    <TouchableOpacity activeOpacity={0.7} style={{marginVertical: 20}}>
                        <Image source={TripsCard}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{marginVertical: 20}}>
                        <Image source={HotelCard}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{marginVertical: 20}} onPress={() =>  navigation.navigate('TransportBooking')}>
                        <Image source={TransportCard}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{marginVertical: 20}}>
                        <Image source={EventsCard}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({})
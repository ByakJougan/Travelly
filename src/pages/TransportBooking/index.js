import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, Alert, TextInput, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { HomeBackground, SwapButton, NumOfAnimals, NumOfLuggages, NumOfKids, NumOfPeople, Line, NumOfAnimalsAfterText, 
  NumOfKidsAfterText, NumOfLuggagesAfterText, NumOfPeopleAfterText, Plane, Ship, Train, Bus, BackButton } from '../../assets/images';
import DateTimePicker from '@react-native-community/datetimepicker';

const TransportBooking = ({navigation}) => {
  const [openFrom, setOpenFrom] = useState(false);
  const [valueFrom, setValueFrom] = useState(null);
  const [itemsFrom, setItemsFrom] = useState([
    { label: 'New York', value: 'New York' },
    { label: 'Paris', value: 'Paris' },
    { label: 'Jakarta', value: 'Jakarta' },
    { label: 'Tokyo', value: 'Tokyo' },
    { label: 'London', value: 'London' },
    { label: 'Los Angeles', value: 'Los Angeles' },
    { label: 'San Francisco', value: 'San Francisco' },
    { label: 'Las Vegas', value: 'Las Vegas' }
  ]);

  const [openTo, setOpenTo] = useState(false);
  const [valueTo, setValueTo] = useState(null);
  const [itemsTo, setItemsTo] = useState([
    { label: 'New York', value: 'New York' },
    { label: 'Paris', value: 'Paris' },
    { label: 'Jakarta', value: 'Jakarta' },
    { label: 'Tokyo', value: 'Tokyo' },
    { label: 'London', value: 'London' },
    { label: 'Los Angeles', value: 'Los Angeles' },
    { label: 'San Francisco', value: 'San Francisco' },
    { label: 'Las Vegas', value: 'Las Vegas' }
  ]);

  const handleSwap = () => {
    const tempValueFrom = valueFrom;
    const tempValueTo = valueTo;
    setValueFrom(tempValueTo);
    setValueTo(tempValueFrom);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);


  const handleStartDateChange = (event, date) => {
    setShowStartDatePicker(false);
    if (date) {
      setStartDate(date);
      if (date > endDate) {
        Alert.alert('Invalid Date', 'End date must be after start date.');
      }
    }
  };

  const handleEndDateChange = (event, date) => {
    setShowEndDatePicker(false);
    if (date) {
      if (date <= startDate) {
        Alert.alert('Invalid Date', 'End date must be after start date.');
      } else {
        setEndDate(date);
      }
    }
  };

  const [inputValue, setInputValue] = useState('');

  const [inputPeople, setInputPeople] = useState('');
  const [inputKids, setInputKids] = useState(''); 
  const [inputAnimals, setInputAnimals] = useState('');
  const [inputLuggages, setInputLuggages] = useState('');

  const [selectedClass, setSelectedClass] = useState('');

  const [selectedTransport, setSelectedTransport] = useState(null);

  const transportOptions = [
    { label: 'Plane', value: 'plane', image: Plane },
    { label: 'Ship', value: 'ship', image: Ship },
    { label: 'Train', value: 'train', image: Train },
    { label: 'Bus', value: 'bus', image: Bus },
  ];

  const handleDropDownFromChange = (value) => {
    setValueFrom(value);
  };
  
  const handleDropDownToChange = (value) => {
    setValueTo(value);
  };


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={HomeBackground} style={{ flex: 1 }}>
        <View style={{ marginTop: 40}}>
          <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('Booking')}}>
            <Image source={BackButton} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop: -35 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Transport Booking</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, alignItems: 'center', flex: 1 }}>
          <TouchableOpacity onPress={handleSwap} style={styles.swapButton}>
            <Image source={SwapButton}/>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center', zIndex: openFrom ? 1000 : 1 }}>
            <DropDownPicker
              open={openFrom}
              value={valueFrom}
              items={itemsFrom}
              setOpen={setOpenFrom}
              setValue={setValueFrom}
              setItems={setItemsFrom}
              placeholder='From'
              placeholderStyle={{ fontSize: 10, color: 'gray', marginLeft: 5, marginTop: -35 }}
              style={{ backgroundColor: 'white', width: 350, height: 60, borderRadius: 10, alignItems: 'center', flexDirection: 'row'}}
              dropDownContainerStyle={{ backgroundColor: 'white', width: 350, maxHeight: 200, borderRadius: 10 }}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />
          </View>
          <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', zIndex: openTo ? 1000 : 1 }}>
            <DropDownPicker
              open={openTo}
              value={valueTo}
              items={itemsTo}
              setOpen={setOpenTo}
              setValue={setValueTo}
              setItems={setItemsTo}
              placeholder='To'
              placeholderStyle={{ fontSize: 10, color: 'gray', marginLeft: 5, marginTop: -35 }}
              style={{ backgroundColor: 'white', width: 350, height: 60, borderRadius: 10, alignItems: 'center', flexDirection: 'row' }}
              dropDownContainerStyle={{ backgroundColor: 'white', width: 350, height: 200, borderRadius: 10 }}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />  
          </View>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: 350 }}>
            <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.datePicker}>
              <View style={{marginleft: 60, marginTop: -10}}><Text style={{fontSize: 12, color: 'grey'}}>Departure</Text></View>
              <View style={{marginleft: 60 ,marginTop: 3}}><Text style={{fontSize: 18}}>{startDate.toISOString().slice(0, 10)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.datePicker}>
            <View style={{marginleft: 60, marginTop: -10}}><Text style={{fontSize: 12, color: 'grey'}}>Return</Text></View>
            <View style={{marginleft: 60 ,marginTop: 3}}><Text style={{fontSize: 18}}>{endDate.toISOString().slice(0, 10)}</Text></View>
            </TouchableOpacity>
          </View>
          {showStartDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              onChange={handleStartDateChange}
              minimumDate={new Date()}
            />
          )}
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              onChange={handleEndDateChange}
              minimumDate={startDate}
            />
          )}
          <View style={styles.passengerContainer}>
            <Text style={styles.passengerText}>Passenger & Luggage</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
              <View style={styles.imageContainer}>
                <Image source={inputPeople ? NumOfPeopleAfterText : NumOfPeople} style={styles.image} />
                <TextInput
                  style={styles.textInput}
                  value={inputPeople}
                  onChangeText={text => setInputPeople(text)}
                />
              </View>
              <View style={styles.imageContainer}>
                <Image source={inputKids ? NumOfKidsAfterText : NumOfKids} style={styles.image} />
                <TextInput
                  style={styles.textInput}
                  value={inputKids}
                  onChangeText={text => setInputKids(text)}
                />
              </View>
              <View style={styles.imageContainer}>
                <Image source={inputAnimals ? NumOfAnimalsAfterText : NumOfAnimals} style={styles.image} />
                <TextInput
                  style={styles.textInput}
                  value={inputAnimals}
                  onChangeText={text => setInputAnimals(text)}
                />
              </View>
              <View style={styles.imageContainer}>
                <Image source={inputLuggages ? NumOfLuggagesAfterText : NumOfLuggages} style={styles.image} />
                <TextInput
                  style={styles.textInput}
                  value={inputLuggages}
                  onChangeText={text => setInputLuggages(text)}
                />
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.classTitle}>Class</Text>
            <View style={styles.classOptionsContainer}>
              <TouchableOpacity
                style={[styles.classOption, selectedClass === 'economy' && styles.selectedClassOption]}
                onPress={() => setSelectedClass('economy')}
              >
                <Text style={[styles.classOptionText, selectedClass === 'economy' && styles.selectedClassText]}>Economy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.classOption, selectedClass === 'business' && styles.selectedClassOption]}
                onPress={() => setSelectedClass('business')}
              >
                <Text style={[styles.classOptionText, selectedClass === 'business' && styles.selectedClassText]}>Business</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View styles={styles.transportContainer}>
            <Text style={styles.transportTitle}>Transportation</Text>
            <View style={styles.transportOptionsContainer}>
              <TouchableOpacity style={[ styles.transportOption ]} onPress={() => setSelectedTransport('plane')} >
                <Image source={Plane} style={styles.transportImage} /> 
              </TouchableOpacity>
              <TouchableOpacity style={[ styles.transportOption ]} onPress={() => setSelectedTransport('ship')} >
                <Image source={Ship} style={styles.transportImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.transportOption ]} onPress={() => setSelectedTransport('train')}>
                <Image source={Train} style={styles.transportImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[ styles.transportOption ]} onPress={() => setSelectedTransport('bus')} >
                <Image source={Bus} style={styles.transportImage} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              const numofpeople = inputPeople; // Replace with the actual value of numofpeople
              const numofkids = inputKids; // Replace with the actual value of numofkids
              const from = String(valueFrom).trim();
              const to = String(valueTo).trim();

              if (from && to) {
                console.log(`Navigating with From: ${from}, To: ${to}, numofpeople: ${numofpeople}, numofkids: ${numofkids}`);
                navigation.navigate('TransportFlights', {
                  departureDate: startDate.toISOString().slice(0, 10),
                  returnDate: endDate.toISOString().slice(0, 10),
                  from,
                  to,
                  numofpeople,
                  numofkids
                });
              } else {
                Alert.alert('Error', 'Please select both From and To destinations.');
              }}}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TransportBooking;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
  },
  backButton: {
    marginRight: 20,
    padding: 10,
    backgroundColor: 'transparent',
  },
  backButtonText: {
    fontSize: 16,
    color: '#089083',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  swapButton: {
    position: 'absolute',
    top: 47,
    left: 300,
    zIndex: 1001,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    backgroundColor: 'white',
    width: 350,
    height: 60,
    borderRadius: 10,
    borderColor: 'white',
  },
  dropdownContainer: {
    backgroundColor: 'white',
    width: 350,
    maxHeight: 200,
    borderRadius: 10,
    borderColor: 'white',
  },
  datePicker: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 160, 
  },
  dateText: {
    color: 'black',
  },
  passengerContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    width: 350,
  },
  passengerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 36, 
    height: 36,
  },
  textInput: {
    color: '#01635D',
    marginLeft: 5,
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  classContainer: {
  marginTop: 20,
  alignItems: 'flex-start',
  width: 350,
  },

  classTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },

  classOptionsContainer: {
    flexDirection: 'row',
    width: 350,
    marginTop: 10,
  },

  classOption: {
    width: 160,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  selectedClassOption: {
    backgroundColor: '#089083',
  },

  classOptionText: {
    color: 'black',
    fontSize: 16,
  },

  selectedClassText: {
    color: 'white',
  }, 
  transportContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: 350,
    flex: 1,
  },
  transportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  transportOptionsContainer: {
    flexDirection: 'row',
    width: 350,
    marginTop: 10,
  },
  transportOption: {
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transportImage: {
    width: 60,
    height: 60,
  },
  continueButton: {
    backgroundColor: '#FEA36B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: '10%',
    right: '10%',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

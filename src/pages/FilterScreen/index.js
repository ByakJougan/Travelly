import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { BackButton, HomeBackground } from '../../assets/images';

const FilterScreen = ({ navigation }) => {
  const [departureTime, setDepartureTime] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [priceRange, setPriceRange] = useState([50, 250]);
  const [sortBy, setSortBy] = useState('Price');

  const times = ['12AM - 06AM', '06AM - 12PM', '12PM - 06PM', '06PM - 12AM'];
  const sortOptions = ['Arrival time', 'Departure time', 'Price', 'Lowest fare', 'Duration'];

  const handleReset = () => {
    setDepartureTime(null);
    setArrivalTime(null);
    setPriceRange([50, 250]);
    setSortBy('Price');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={HomeBackground} style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={BackButton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <View>
            <Text style={styles.header}>Filters</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.sectionTitle}>Departure</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            {times.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  departureTime === time && styles.selectedOptionButton,
                ]}
                onPress={() => setDepartureTime(time)}
              >
                <Text
                  style={[
                    styles.optionText,
                    departureTime === time && styles.selectedOptionText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Arrival</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            {times.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  arrivalTime === time && styles.selectedOptionButton,
                ]}
                onPress={() => setArrivalTime(time)}
              >
                <Text
                  style={[
                    styles.optionText,
                    arrivalTime === time && styles.selectedOptionText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Price</Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={300}
              step={10}
              minimumTrackTintColor="#089083"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#089083"
              value={priceRange[0]}
              onValueChange={(value) => setPriceRange([value, priceRange[1]])}
            />
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={300}
              step={10}
              minimumTrackTintColor="#089083"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#089083"
              value={priceRange[1]}
              onValueChange={(value) => setPriceRange([priceRange[0], value])}
            />
          </View>
          <View style={styles.priceRangeContainer}>
            <View style={styles.priceBox}>
              <Text style={styles.priceBoxText}>From</Text>
              <Text style={styles.priceBoxValue}>${priceRange[0]}</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceBoxText}>To</Text>
              <Text style={styles.priceBoxValue}>${priceRange[1]}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Sort by</Text>
          {sortOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.sortOptionContainer}
              onPress={() => setSortBy(option)}
            >
              <View
                style={[
                  styles.radioCircle,
                  sortBy === option && styles.selectedRadioCircle,
                ]}
              />
              <Text style={styles.sortOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => {
                // Add functionality to apply filters
                navigation.goBack();
              }}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional background for header
  },
  backButton: {
    padding: 10,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalScrollView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#089083',
  },
  optionText: {
    color: 'black',
  },
  selectedOptionText: {
    color: 'white',
  },
  sliderContainer: {
    width: '100%',
    marginTop: 10,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  priceBox: {
    alignItems: 'center',
  },
  priceBoxText: {
    fontSize: 14,
    color: 'gray',
  },
  priceBoxValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sortOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    borderColor: '#089083',
    backgroundColor: '#089083',
  },
  sortOptionText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: '#FFDDA2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  resetButtonText: {
    color: '#FFA07A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: '#FFA07A',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import { BackButton, HomeBackground } from '../../assets/images';
import { TicketData } from '../../assets/data';

const SelectSeats = ({ navigation, route }) => {
  const { ticket, numofpeople, numofkids } = route.params;
  const totalTravelers = numofpeople + numofkids;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentTraveler, setCurrentTraveler] = useState(1);

  const handleSeatSelect = (row, col) => {
    const seatNumber = `${String.fromCharCode(65 + col)}${row + 1}`;
    const isSelected = selectedSeats.some(seat => seat.number === seatNumber && seat.traveler === currentTraveler);

    const isBooked = TicketData.tickets.some(t => t.number === ticket.number && t.seat === seatNumber && t.condition === 'booked');

    if (!isBooked) {
      if (isSelected) {
        setSelectedSeats(selectedSeats.filter(seat => !(seat.number === seatNumber && seat.traveler === currentTraveler)));
      } else {
        setSelectedSeats([...selectedSeats, { traveler: currentTraveler, number: seatNumber }]);
      }
    }
  };

  const renderSeat = (row, col) => {
    const seatNumber = `${String.fromCharCode(65 + col)}${row + 1}`;
    const isBooked = TicketData.tickets.some(t => t.number === ticket.number && t.seat === seatNumber && t.condition === 'booked');
    const isSelected = selectedSeats.some(seat => seat.number === seatNumber);

    let backgroundColor;
    if (isBooked) {
      backgroundColor = '#089083';
    } else if (isSelected) {
      backgroundColor = '#FEA36B';
    } else {
      backgroundColor = '#B7DFDB';
    }

    return (
      <TouchableOpacity
        key={`${row}${col}`}
        style={[styles.seat, { backgroundColor }]}
        onPress={() => !isBooked && handleSeatSelect(row, col)}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={HomeBackground} style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={BackButton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.header}>Select Seats</Text>
        </View>

        <View style={styles.travellerContainer}>
          <Text style={styles.travellerText}>Traveller</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.travellerScrollView}>
            {Array.from({ length: 4 }, (_, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.travellerNumber, currentTraveler === i + 1 && styles.selectedTraveller]}
                onPress={() => setCurrentTraveler(i + 1)}
              >
                <Text>{i + 1}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#FEA36B' }]} />
            <Text>Selected</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#089083' }]} />
            <Text>Booked</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#B7DFDB' }]} />
            <Text>Available</Text>
          </View>
        </View>

        <ScrollView style={styles.seatScrollView}>
          <View style={styles.seatContainer}>
            {Array.from({ length: 6 }, (_, row) => (
              <View key={row} style={styles.row}>
                <View style={styles.smallColumn}>
                  {renderSeat(row, 0)}
                  {renderSeat(row, 1)}
                </View>
                <View style={styles.middleColumn}>
                  <Text>{row + 1}</Text>
                </View>
                <View style={styles.smallColumn}>
                  {renderSeat(row, 2)}
                  {renderSeat(row, 3)}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            Your seats: {selectedSeats.map(seat => `Traveller ${seat.traveler} / Seat ${seat.number}`).join(', ')}
          </Text>
          <Text style={styles.summaryText}>Total price: ${selectedSeats.length * ticket.price}</Text>
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={() => { navigation.navigate('BoardingPass', { ticket, numofkids, numofpeople })}}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
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
  travellerContainer: {
    margin: 20,
  },
  travellerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  travellerScrollView: {
    paddingHorizontal: 10,
  },
  travellerNumber: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTraveller: {
    backgroundColor: '#FFDDA2',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 30,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  seatScrollView: {
    flex: 1,
  },
  seatContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  smallColumn: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  middleColumn: {
    width: 40,
    alignItems: 'center',
  },
  seat: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 5,
  },
  continueButton: {
    backgroundColor: '#FFA07A',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SelectSeats;

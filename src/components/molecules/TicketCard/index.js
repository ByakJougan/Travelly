import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FromToPath, Divider, TicketCardForm } from '../../../assets/images';

const TicketCard = ({ ticket, onPress }) => {
  const cityCodes = {
    'New York': 'NYC',
    'Paris': 'PAR',
    'London': 'LDN',
    'Los Angeles': 'LAX',
    'San Francisco': 'SFO',
    'Tokyo': 'TYO',
    'Jakarta': 'JKT',
    'Las Vegas': 'LAS',
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.ticketCardContainer}>
      <Image source={TicketCardForm} style={styles.ticketCardImage} />
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <View style={styles.citySection}>
            <Text style={styles.cityCode}>{cityCodes[ticket.from]}</Text>
            <Text style={styles.cityName}>{ticket.from}</Text>
          </View>
          <Image source={FromToPath} style={styles.fromToPath} />
          <View style={styles.citySection}>
            <Text style={styles.cityCode}>{cityCodes[ticket.to]}</Text>
            <Text style={styles.cityName}>{ticket.to}</Text>
          </View>
        </View>
        <Image source={Divider} style={styles.divider} />
        <View style={styles.bottomSection}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Date</Text>
            <Text style={styles.infoText}>{ticket.departureDate}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Departure</Text>
            <Text style={styles.infoText}>{ticket.departureTime}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Price</Text>
            <Text style={styles.infoText}>${ticket.price}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Number</Text>
            <Text style={styles.infoText}>{ticket.number}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ticketCardContainer: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  ticketCardImage: {
    width: '100%',
    height: 150,
    position: 'absolute',
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 10,
    paddingTop: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  citySection: {
    alignItems: 'center',
  },
  fromToPath: {
    width: 24,
    height: 24,
  },
  cityCode: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#01635D',
  },
  cityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 10,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 12,
    color: '#01635D',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TicketCard;
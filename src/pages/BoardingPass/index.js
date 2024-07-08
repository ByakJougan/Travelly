import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { HomeBackground, BackButton, TicketLogo, FinalTicketForm, Divider, FromToPath, BarCode } from '../../assets/images';

const BoardingPass = ({ navigation, route }) => {
  const { ticket, numofkids, numofpeople } = route.params;

  const numKids = parseInt(numofkids);
  const numPeople = Number(numofpeople);

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

  const handleDownloadPress = () => {
    Alert.alert(
      'Success',
      'Ticket downloaded successfully',
      [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={HomeBackground} style={{ flex: 1 }}>
        <TouchableOpacity style={{ marginTop: 40, marginLeft: 10 }} onPress={() => navigation.goBack()}>
          <Image source={BackButton} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Boarding Pass</Text>
        </View>
        <View style={styles.ticketContainer}>
          <Image source={FinalTicketForm} style={styles.ticketImage} />
          <View style={styles.logoContainer}>
            <Image source={TicketLogo} style={styles.logo} />
          </View>
          <View style={styles.ticketDetails}>
            <Text style={styles.airlineText}>British Airways Flight {ticket.number}</Text>
            <View style={{marginTop: 15, marginBottom: 15}}>
              <Image source={Divider} />
            </View>
            <View style={styles.infoRow1}>
              <View style={styles.infoColumn}>
                <Text style={{color: '#089083', fontSize: 12, marginTop: -5}}>{cityCodes[ticket.from]}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 0}}>{ticket.from}</Text>
              </View>
              <Image source={FromToPath} style={{marginTop: 10}} />
              <View style={styles.infoColumn}>
                <Text style={{color: '#089083', fontSize: 12, marginTop: -5}}>{cityCodes[ticket.to]}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 0}}>{ticket.to}</Text>
              </View>
            </View>
            <View style={styles.infoRow1}>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>{ticket.departureDate}</Text>
              </View>
              <View style={[styles.infoColumn, { marginLeft: 20 }]}>
                <Text style={styles.label}>Departure</Text>
                <Text style={styles.value}>{ticket.departureTime}</Text>
              </View>
            </View>
            <View style={styles.infoRow2}>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Passenger</Text>
                <Text style={styles.value}>{numPeople + numKids} People</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Ticket</Text>
                <Text style={styles.value}>{ticket.number}</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Class</Text>
                <Text style={styles.value}>Economy</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Seat</Text>
                <Text style={styles.value}>{ticket.seat}</Text>
              </View>
            </View>
            <View style={{marginTop: 15, marginBottom: 15}}>
              <Image source={Divider} />
            </View>
            <View style={styles.barcodeContainer}>
              <Image source={BarCode} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPress}>
          <Text style={styles.downloadButtonText}>Download ticket</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: -25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ticketContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  ticketImage: {},
  logoContainer: {
    position: 'absolute',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  ticketDetails: {
    position: 'absolute',
    top: '40%',
    width: '80%',
    alignItems: 'center',
  },
  airlineText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -60,
  },
  infoRow1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    width: '100%',
  },
  infoRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  infoColumn: {
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    color: '#089083',
  },
  value: {
    fontSize: 16,
  },
  flightIcon: {
    fontSize: 24,
    color: '#FEA36B',
  },
  barcodeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  barcode: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  downloadButton: {
    backgroundColor: '#FEA36B',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default BoardingPass;

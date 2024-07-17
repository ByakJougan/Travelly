import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { HomeBackground, BackButton, FilterButton } from '../../assets/images';
import { format, addDays } from 'date-fns';
import TicketCard from '../../components/molecules/TicketCard';
import {TicketData} from '../../assets/data';

const TransportFlights = ({ navigation, route }) => {
  const { departureDate, returnDate, from, to, numofpeople, numofkids } = route.params;
  const departureDateObj = new Date(departureDate);
  const returnDateObj = new Date(returnDate);

  if (!TicketData || !TicketData.tickets) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Ticket data not found.</Text>
      </View>
    );
  };

  const tickets = TicketData.tickets.filter(ticket => {
    const ticketDepartureDate = new Date(ticket.departureDate);
    const ticketReturnDate = new Date(ticket.returnDate);

    return ticket.from === from 
      && ticket.to === to 
      && ticketDepartureDate >= departureDateObj 
      && ticketReturnDate <= returnDateObj;
  });

  const numberOfFlights = tickets.length;

  const getNextSevenDays = (date) => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(new Date(date), i));
    }
    return days;
  };

  const days = getNextSevenDays(departureDate);

  const [selectedDate, setSelectedDate] = useState(departureDateObj);

  const uniqueTickets = TicketData.tickets.reduce((acc, ticket) => {
    const key = `${ticket.from}-${ticket.to}-${ticket.departureDate}`;
    if (!acc[key] && ticket.from === from && ticket.to === to) {
      acc[key] = ticket;
    }
    return acc;
  }, {});

  const filteredTickets = Object.values(uniqueTickets).filter(ticket => {
    const ticketDepartureDate = new Date(ticket.departureDate);
    return ticketDepartureDate.toDateString() === selectedDate.toDateString();
  });

  const handleTicketPress = (ticket) => {
    navigation.navigate('SelectSeats', { ticket, numofpeople, numofkids });
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={HomeBackground} style={{ flex: 1 }}>
        <View>
          <TouchableOpacity style={{ marginTop: 40, marginLeft: 10 }} onPress={() => navigation.navigate('TransportBooking')}>
            <Image source={BackButton} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop: -25 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Flights</Text>
          </View>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, marginLeft: -15, paddingHorizontal: 20 }}>
            {days.map((day, index) => (
              <TouchableOpacity key={index} style={styles.dateContainer} onPress={() => setSelectedDate(day)}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{format(day, 'EEE')}</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>{format(day, 'MM/dd')}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.row, { marginTop: 20 }]}>
          <Text style={[styles.flightCount, { flex: 1 }]}>{filteredTickets.length} flights available from {from} to {to}</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('FilterScreen')}} style={styles.filterButtonContainer}>
            <Image source={FilterButton} style={styles.filterButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.ticketContainer}>
          <ScrollView style={styles.ticketsScrollView}>
            {filteredTickets.map(ticket => (
              <TicketCard key={ticket.number} ticket={ticket} onPress={() => handleTicketPress(ticket)} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dateContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  ticketContainer: {
    flex: 1,
    marginTop: 0,
  },
  flightCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ticketsScrollView: {
    marginTop: 10,
  },
  filterButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  filterButton: {
    width: 24,
    height: 24,
  },
});

export default TransportFlights;

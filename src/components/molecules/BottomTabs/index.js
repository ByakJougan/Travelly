import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../../pages/HomeScreen';
import BookingScreen from '../../../pages/Booking';
import NotificationsScreen from '../../../pages/Notifications';
import ProfileScreen from '../../../pages/Profile';

const HomeIcon = require('../../../assets/icons/HomeIcon.png');
const BookingIcon = require('../../../assets/icons/BookingIcon.png');
const NotiIcon = require('../../../assets/icons/NotiIcon.png');
const ProfileIcon = require('../../../assets/icons/ProfileIcon.png');

const ButtonTabs = ({ state, descriptors, navigation }) => {
  const routes = [
    { key: 'home', title: 'Home', icon: HomeIcon },
    { key: 'booking', title: 'Booking', icon: BookingIcon },
    { key: 'notifications', title: 'Notifications', icon: NotiIcon },
    { key: 'profile', title: 'Profile', icon: ProfileIcon },
  ];

  return (
    <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 5 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = routes.find(r => r.key === route.name.toLowerCase())?.icon;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <View style={[styles.iconContainer, isFocused && styles.focusedTab]}>
              {icon && <Image source={icon} style={[styles.icon, { tintColor: isFocused ? '#000' : '#AAA' }]} />}
              {isFocused && <Text style={styles.focusedText}>{label}</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  focusedTab: {
    backgroundColor: '#FFDDA2',
    borderRadius: 12,
  },
  focusedText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
  },
});

export default ButtonTabs;

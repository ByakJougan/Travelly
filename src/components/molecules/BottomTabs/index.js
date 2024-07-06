import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';

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
    <View style={{ flexDirection: 'row', height: 60 }}>
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
            {icon && <Image source={icon} style={[styles.icon, { tintColor: isFocused ? '#673ab7' : '#222' }]} />}
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
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
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
});

export default ButtonTabs;
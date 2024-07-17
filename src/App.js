import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './router';
import { UserProvider } from './pages/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </UserProvider>
  );
}

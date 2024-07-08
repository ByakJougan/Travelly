import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useUser } from '../UserContext'; // Adjust the path accordingly
import { UserIcon, WalletIcon, HeartIcon, HistoryIcon, SettingsIcon, EndSessionIcon } from '../../assets/images'; // Adjust the path accordingly

const Profile = ({ navigation }) => {
  const { user, setUser } = useUser();

  const handleEndSession = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to end the session?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setUser(null); // Clear the user state
            navigation.navigate('LoginScreen');
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.name}>{`${user.firstname} ${user.lastname}`}</Text>
      <View style={styles.menu}>
        <MenuItem icon={UserIcon} label="Personal information" onPress={() => navigation.navigate('ChangeInfo')} />
        <MenuItem icon={WalletIcon} label="Payment and cards" />
        <MenuItem icon={HeartIcon} label="Saved" />
        <MenuItem icon={HistoryIcon} label="Booking history" />
        <MenuItem icon={SettingsIcon} label="Settings" />
      </View>
      <TouchableOpacity style={styles.endSessionButton} onPress={handleEndSession}>
        <Text style={styles.endSessionButtonText}>End session</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Image source={icon} style={styles.menuItemIcon} />
    <Text style={styles.menuItemLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    width: '100%',
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemIcon: {
    width: 24,
    height: 20,
    marginRight: 15,
    tintColor: '#FF6347',
  },
  menuItemLabel: {
    fontSize: 16,
  },
  endSessionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#FFDDA2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  endSessionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#FF6347',
  },
  endSessionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
});

export default Profile;

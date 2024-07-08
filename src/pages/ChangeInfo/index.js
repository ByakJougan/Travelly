import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useUser } from '../UserContext'; // Adjust the path accordingly
import { CameraIcon } from '../../assets/images'; // Adjust the path accordingly

const ChangeInfo = ({ navigation }) => {
  const { user, setUser } = useUser();
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSaveChanges = () => {
    const updatedUser = {
      ...user,
      firstname: firstName,
      lastname: lastName,
      email,
      phone,
      avatar,
    };
    setUser(updatedUser);
    Alert.alert('Success', 'Your changes have been saved.');
    navigation.goBack();
  };

  const handleChangeAvatar = () => {
    // Implement your logic for changing the avatar
    // For now, we just show an alert
    Alert.alert('Change Avatar', 'Avatar change functionality is not implemented yet.');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Personal Information</Text>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={handleChangeAvatar}>
          <Image source={CameraIcon} style={styles.changeAvatarIcon} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: '#000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#FFDDA2',
    padding: 5,
    borderRadius: 20,
  },
  changeAvatarIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#FFA07A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

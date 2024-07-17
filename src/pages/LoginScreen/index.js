import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { HomeBackground, facebook, google, apple } from '../../assets/images';
import { useUser } from '../UserContext';
import { PersonalInformation } from '../../assets/data';

const LoginScreen = ({ navigation }) => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const user = PersonalInformation.info.find(user => user.email === email);
    if (user) {
      setUser(user);
      navigation.navigate('MainApp');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={HomeBackground} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backButton}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Welcome back!</Text>
            <Text style={styles.subtitle}>Sign in and let's get going</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>New? <Text style={styles.signUpLink}>Sign Up</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Add forgot password logic */ }}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialLoginContainer}>
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.divider} />
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity>
                <Image source={facebook} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={google} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={apple} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#FFA07A',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  signUpText: {
    color: 'gray',
  },
  signUpLink: {
    color: '#00BFFF',
  },
  forgotPasswordText: {
    color: '#00BFFF',
  },
  socialLoginContainer: {
    width: '100%',
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default LoginScreen;

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {  signInWithEmailAndPassword } from "firebase/auth"; 
import { FIREBASE_AUTH } from "../../../FirebaseConfing";
import { Feather } from '@expo/vector-icons';

type LoginProps = {
  navigation: any;
}

function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = () => {
    if (!email || !validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('HomePage', { username: FIREBASE_AUTH.currentUser?.displayName });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage('Invalid email or password.');
      });
  };

  const validateEmail = (email: string) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    
    const unsubscribe = navigation.addListener('focus', () => {
      setEmail('');
      setPassword('');
      setErrorMessage(null); 
    });

    return unsubscribe;
  }, [navigation]);
  

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleLogin}>Login</Text>
      </View>

      <View style={styles.boxInput}>

      {errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}


        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputpass}
            autoCapitalize="none"
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text.nativeEvent.text)}
            secureTextEntry={true} />
        </View>

      </View>
      <View style={styles.ToGo}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.ToSignUp}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text  style={styles.ToForgotPassword}>Forgot your password?  <Feather name='arrow-right' color='#F31227' />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({

  titleLogin: {
    fontWeight: '700',
    marginTop: 106,
    marginLeft: 14,
    fontSize: 34,
    width: 126,
    height: 50
  },

  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,  
    fontSize: 11
  },

  container: {
    width: 375,
    height: 148,
  },

  boxInput: {
    marginLeft: 14,
    marginTop: 80
  },

  inputContainer: {
    marginTop: 10,
    width: 360,
    height: 64,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    elevation: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  inputText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 12.89,
    width: 30,
    height: 13,
    marginTop: 8,
    marginLeft: 20,
    color: '#9B9B9B'
  },

  input: {
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
    marginTop: 26,
    width: 51,
    height: 20,
    color: '#2D2D2D',
  },

  inputpass: {
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
    marginTop: 18,
    marginLeft: 50,
    width: 51,
    height: 20,
    color: '#2D2D2D'
  },

  ToGo: {
    flexDirection: 'row',  
    marginLeft: 30,
    marginTop: 20,
  },

  ToSignUp: {
    width: 161,
    height: 40,
    color: '#222222',
    fontWeight: '600'
  },

  ToForgotPassword: {
    width: 170,
    height: 40,
    color: '#222222',
    fontWeight: '600',
    flexDirection: 'row',
  },

  buttonContainer: {
    padding: 20,
    marginTop: 2,
  },

  LoginButton: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
    padding: 16,
    paddingHorizontal: 20,
    elevation: 6,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  }

});

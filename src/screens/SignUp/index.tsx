import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp} from "@react-navigation/stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfing";
import {  addDoc, collection } from "firebase/firestore";
import { Feather } from '@expo/vector-icons';

interface SignUpProps {
  navigation: StackNavigationProp<any, any>;
}

function SignUp({ navigation }: SignUpProps) {
  const [username, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

 
  const handleSignUp = async () => {
       try {
        const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = userCredential.user;

        await addDoc(collection(FIREBASE_DB, 'users'), {
          uid: user.uid,
          displayName: username,
        });
        navigation.navigate('HomePage', { username });
       }
          catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Sign up with a valid email and the password must be at least 6 characters long.");
       };  
  }

  useEffect(() => {
    
    const unsubscribe = navigation.addListener('focus', () => {
      setName('');
      setEmail('');
      setPassword('');
      setErrorMessage(null); 
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleSignUp}>Sign up</Text>
      </View>

      <View style={styles.boxInput}>
      {errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text> )}

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setName(text)} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputpass}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} />
        </View>
      </View>

        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
          <Text  style={styles.ToLogin}>Already have an account?  <Feather name='arrow-right' color='#F31227' />
          </Text>
        </TouchableOpacity>
     
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={handleSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({

  titleSignUp: {
    fontWeight: '700',
    marginTop: 106,
    marginLeft: 14,
    fontSize: 34,
    width: 126,
    height: 50
  },

  container: {
    width: 375,
    height: 148,
  },

  boxInput: {
    marginLeft: 14,
    marginTop: 80
  },

  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 11
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
    marginLeft: 20,
    width: 51,
    height: 20,
    color: '#2D2D2D'
  },

  ToLogin: {
    left: 170,
    marginTop: 20,
    width: 191,
    height: 40,
    color: '#222222',
    textAlign: 'right',
    fontWeight: '600',
    flexDirection: 'row',
  },

  buttonContainer: {
    padding: 20,
    marginTop: 2,
  },

  SignUpButton: {
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

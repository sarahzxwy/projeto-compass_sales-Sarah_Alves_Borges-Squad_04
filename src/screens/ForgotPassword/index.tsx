import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../FirebaseConfing";


function ForgotPassword(){
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleForgotPassword = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, email)
      .then(() => {
        setSuccessMessage('Password reset email sent. Check your email!');
        setErrorMessage(null);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage('Send a valid email. ex: yourname@gmail.com'); 
        setSuccessMessage(null);
      });
  };
  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.titleForgotPassword}>Forgot Password</Text>
      </View>
      <View>
        <Text style={styles.subtit}>
            Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
      </View>

      <View style={styles.boxInput}>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>
        {successMessage && (
          <Text style={styles.successMessage}>{successMessage}</Text>
        )}

        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.SendButton}
          onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({

  titleForgotPassword: {
    fontWeight: '700',
    marginTop: 104,
    marginLeft: 14,
    fontSize: 30,
    width: 375,
    height: 154
  },

  successMessage: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 11
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

  subtit: {
    fontWeight: '600',
    fontSize: 14,
    width: 343,
    height: 40,
    top: 75,
    left: 15,

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
    height: 30,
    color: '#2D2D2D',
  },

  buttonContainer: {
    padding: 20,
    marginTop: 30,
  },

  SendButton: {
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

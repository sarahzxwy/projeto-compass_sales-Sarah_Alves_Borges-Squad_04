import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



type ForgotPasswordProps = {
  navigation: any;
}

function ForgotPassword({ navigation }: ForgotPasswordProps) {
  const [email, setEmail] = useState<string>('');

  const handleForgotPassword = () => {
    navigation.navigate('Login');
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
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>

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
    marginTop: 104,
    marginLeft: 14,
    fontSize: 24,
    width: 375,
    height: 154
  },

  container: {
    width: 375,
    height: 148,
  },

  subtit: {
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
    fontSize: 11,
    lineHeight: 12.89,
    width: 30,
    height: 13,
    marginTop: 8,
    marginLeft: 20,
    color: '#9B9B9B'
  },

  input: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
    marginTop: 26,
    width: 51,
    height: 20,
    color: '#2D2D2D',
  },

  buttonContainer: {
    padding: 20,
    marginTop: 40,
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

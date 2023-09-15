import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type SignUpProps = {
  navigation: any;
}

function SignUp({ navigation }: SignUpProps) {
  const [username, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleSignUp}>Sign Up</Text>
      </View>

      <View style={styles.boxInput}>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={username}
            onChangeText={(text) => setName(text)} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputpass}
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text.nativeEvent.text)}
            secureTextEntry={true} />
        </View>

      </View>

      <View style={styles.ToLogin}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Already have an account?</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 106,
    marginLeft: 14,
    fontSize: 24,
    width: 116,
    height: 40
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

  inputpass: {
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
    marginLeft: 170,
    marginTop: 20,
    width: 161,
    height: 40,
    color: '#222222'
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

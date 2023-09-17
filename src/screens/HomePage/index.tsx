import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfing';


interface RouterProps {
  navigation: StackNavigationProp<any, any>;
  
}

function HomePage({ navigation }: RouterProps) {
  const handleLogout = async () => {
    await FIREBASE_AUTH.signOut();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HomeTitle}>Welcome, {FIREBASE_AUTH.currentUser?.email}</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeTitle: {
    fontSize: 24,
    marginBottom: 20,
  },

});

export default HomePage;

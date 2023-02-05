import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location';

export default function App() {
  const getUserLocationHandler = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log('status', status);
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      console.log('location', location);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button title="Get Location" onPress={getUserLocationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

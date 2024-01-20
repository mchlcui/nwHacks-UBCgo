import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Course from './course.js';

export default function App() {
  // Logs.enableExpoCliLogging();
  console.log("hello");
  return (
    <View style={styles.container}>
      <Text>Alex is fat!</Text>
      <Course />
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

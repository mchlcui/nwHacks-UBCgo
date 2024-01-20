import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Course from './course.js';
=======
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './screens/Dashboard';
import Courses from './screens/Courses';

const navBar = createBottomTabNavigator();

function BottomNavBar() {
  return (
    <navBar.Navigator initialRouteName='Dashboard' screenOptions={{
      tabBarActiveTintColor: "navy",
      tabBarInactiveTintColor: "gray",
    }}>

      <navBar.Screen name="Courses" component={Courses} options={
        {
          title: "Courses",
          headerTitleAlign: "left",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={24} color={color} />
          )
        }
      } />

      <navBar.Screen name="Dashboard" component={Dashboard} options={
        {
          title: "Dashboard",
          headerTitleAlign: "left",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          )
        }
      } />

    </navBar.Navigator>
  )
}
>>>>>>> a1e74b5c3e0ef76331493a0b13a897ed0f7a0fb2

export default function App() {
  // Logs.enableExpoCliLogging();
  console.log("hello");
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Alex is fat!</Text>
      <Course />
      <StatusBar style="auto" />
    </View>
    
=======
    <>
      <NavigationContainer>
        <BottomNavBar></BottomNavBar>
      </NavigationContainer>
    </>
>>>>>>> a1e74b5c3e0ef76331493a0b13a897ed0f7a0fb2
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

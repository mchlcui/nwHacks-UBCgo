import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import Weather from './screens/Weather';

const navBar = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const themeColor = "#3232a8";

function BottomNavBar() {
  return (
    <navBar.Navigator initialRouteName='Dashboard' screenOptions={{
      tabBarActiveTintColor: themeColor,
      tabBarInactiveTintColor: "gray",
    }}>

      <navBar.Screen name="Courses" component={Courses} options={
        {
          title: "Courses",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={24} color={color} />
          )
        }
      } />

      <navBar.Screen name="Dashboard" component={HomeStack} options={
        {
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          )
        }
      } />
      {/*
      <navBar.Screen name="Weather" component={Weather} options={
        {
          title: "Weather",
          headerTitleAlign: "left",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "rainy" : "rainy-outline"} size={24} color={color} />
          )
        }
      } />
    */}

      <navBar.Screen name="Settings" component={Settings} options={
        {
          title: "Settings",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} />
          )
        }
      } />

    </navBar.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='Courses' component={Courses} />
      <Stack.Screen name='Weather' component={Weather} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomNavBar></BottomNavBar>
      </NavigationContainer>
    </>
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

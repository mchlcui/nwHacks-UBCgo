import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
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
          headerTitleAlign: "left"
        }
      } />

      <navBar.Screen name="Dashboard" component={Dashboard} options={
        {
          title: "Dashboard",
          headerTitleAlign: "left"
        }
      } />

    </navBar.Navigator>
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
  },
  btnContainer: {
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3232a8",
    borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    height: 100,
    width: 100
  },
  btnStyle: {
    color:"white",
    fontWeight: "bold",
    fontSize: 16
  }
});

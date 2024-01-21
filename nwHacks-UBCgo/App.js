import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Courses from './screens/Courses';
import Dashboard from './screens/Dashboard';

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

export default function App() {
  // Logs.enableExpoCliLogging();
  console.log("hello");
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

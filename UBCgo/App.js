import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Contacts from './screens/Contacts';
import Courses from './screens/Courses';
import CoursesDetail from './screens/CoursesDetail';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import Weather from './screens/Weather';
import Library from './screens/Library'

const navBar = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const themeColor = "#3232a8"; // #3232a8

function BottomNavBar() {
  return (
    <navBar.Navigator
    initialRouteName='Dashboard' screenOptions={{
      tabBarActiveTintColor: themeColor,
      tabBarInactiveTintColor: "gray",
    }}>

      <navBar.Screen name="Courses" component={CourseStack}
      options={
        {
          title: "Courses",
          headerShown: false,
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

      <navBar.Screen name="Settings" component={Settings} options={
        {
          title: "Settings",
          headerTitleAlign: "center",
          // headerStyle: "black",
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
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { // navbar header background 
          backgroundColor: 'black',
        },
        headerTitleStyle: { // navbar header text
          color: 'white'
        },
      }}
      initialRouteName='Dashboard'>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='Courses' headerTitleStyle={backgroundColor="black"} component={Courses} />
      <Stack.Screen name='Weather' component={Weather} />
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='CoursesDetail' component={CoursesDetail} />
      <Stack.Screen name='Library' component={Library} />
      <Stack.Screen name='Contacts' component={Contacts} />
    </Stack.Navigator>
  )
}

function CourseStack() {
  return (
    <Stack.Navigator initialRouteName='Courses' screenOptions={{
      headerStyle: { // navbar header background 
        backgroundColor: 'black',
      },
      headerTitleStyle: { // navbar header text
        color: 'white'
      },
    }}>
      <Stack.Screen name='Courses' component={Courses} />
      <Stack.Screen name='CoursesDetail' component={CoursesDetail} />
    </Stack.Navigator>
  )
}

export default function App() {
  const navTheme = DefaultTheme;
  navTheme.colors.background = 'black'; // color of background of every page

  return (
    <>
      <NavigationContainer theme={navTheme}>
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
    justifyContent: 'center'
  }
});

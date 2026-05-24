import React from 'react';

import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ApiScreen from './src/screens/ApiScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ===== BOTTOM NAVIGATION =====
function BottomTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 65,
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',

          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 5,
          elevation: 10,
        },

        tabBarActiveTintColor: '#D4AF37',
        tabBarInactiveTintColor: '#999',
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
       name="Collection"
       component={ApiScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        {/* BOTTOM TAB */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        {/* STACK DETAIL */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Product Detail',

            headerStyle: {
              backgroundColor: '#111',
            },

            headerTintColor: '#D4AF37',

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
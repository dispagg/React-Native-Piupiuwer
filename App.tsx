/* eslint-disable camelcase */
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import AppProvider from './src/hooks/AppProvider';
import HomePage from './src/pages/Home';
import LogInPage from './src/pages/LogIn';

type LogInInterface = {
  LogIn: undefined,
  Feed: undefined
}

const Stack = createNativeStackNavigator<LogInInterface>();

export default function App() {
  const [IsLogged, setIsLogged] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LogIn" component={LogInPage} />
        <Stack.Screen name="Feed" component={HomePage} />
      </Stack.Navigator>
    </AppProvider>
  );
}

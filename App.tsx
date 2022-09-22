/* eslint-disable camelcase */
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import React from 'react';
import AppProvider from './src/hooks/AppProvider';
import HomePage from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}

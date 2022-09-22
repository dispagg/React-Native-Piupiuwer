import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '../styles/defaultThemes';
import { AuthProvider } from './useAuth';

const AppProvider:React.FC<{children: React.ReactNode}> = ({ children }) => (
  <AuthProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AuthProvider>
);

export default AppProvider;

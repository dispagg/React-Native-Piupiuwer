import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { ToastAndroid } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/useAuth';
import {
  Background,
  BtnText,
  LogInButton, LogInWrapper, UserInput, Wrapper,
} from './styles';

import background from '../../assets/Gradient.png';

type LogInNavigation = {
  LogIn: undefined,
  Feed: undefined
}
interface LogInInterface{
  navigation: NativeStackNavigationProp<LogInNavigation, 'LogIn'>
}

const LogIn = ({ navigation }: LogInInterface) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogIn = async ({ email, password }:{email: string, password: string}) => {
    if (email && password) {
      await signIn?.({ email, password });
      navigation.navigate('Feed');
      // .catch(() => ToastAndroid.show('Usuário ou senha errada', ToastAndroid.SHORT))}
    }
  };

  return (
    <Wrapper>
      <Background source={background}>
        <StatusBar />
        <LogInWrapper>
          <UserInput placeholder="E-mail" type="email" onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
          <UserInput placeholder="Senha" secureTextEntry onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} />
          <LogInButton onPress={() => {
            handleLogIn({ email: Email, password: Password });
          }}
          >
            <BtnText>Entrar</BtnText>
          </LogInButton>
        </LogInWrapper>
      </Background>
    </Wrapper>
  );
};

export default LogIn;

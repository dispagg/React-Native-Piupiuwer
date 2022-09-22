import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import {
  LogInButton, LogInWrapper, UserInput, Wrapper,
} from './styles';

const LogIn = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogIn = async ({ email, password }:{email: string, password: string}) => {
    await signIn?.({ email, password });
  };

  return (
    <Wrapper>
      <LogInWrapper>
        <UserInput placeholder="E-mail" onChangeText={setEmail} />
        <UserInput placeholder="Senha" onChangeText={setPassword} />
        <LogInButton onPress={handleLogIn({ email: Email, password: Password })} />
      </LogInWrapper>
    </Wrapper>
  );
};

export default LogIn;

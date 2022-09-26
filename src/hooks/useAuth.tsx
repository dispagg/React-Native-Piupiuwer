import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { UserInterface } from '../interfaces';

interface signInInterface{
  email: string,
  password: string,
}

interface contextInterface{
  user?: UserInterface,
  signIn?: (data: signInInterface) => Promise<void>
}

const AuthContext = createContext<contextInterface>({});

const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [User, setUser] = useState<UserInterface|undefined>();

  const signIn = async (signInData: signInInterface) => {
    const response = await api.post('/sessions/login', signInData);
    const { user, token } = response.data;

    setUser(user);

    await AsyncStorage.multiSet([
      ['@piupiuwer:token', token],
      ['@piupiuwer:user', JSON.stringify(user)],
    ]);

    // console.log(token);
  };

  const recoverData = async () => {
    const token = await AsyncStorage.getItem('@piupiuwer:token');
    const user = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@piupiuwer:user')));
    if (token && user) { setUser(user); }
  };

  useEffect(() => {
    recoverData();
  }, []);

  return <AuthContext.Provider value={{ user: User, signIn }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth, AuthProvider };

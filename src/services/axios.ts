import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const getApi = () => {
  const api = axios.create({
    baseURL: 'https://piupiuwer.polijrinternal.com',
  });

  const getToken = async () => {
    const token = await AsyncStorage.getItem('@piupiuwer:token');
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  };

  getToken();

  return api;
};

export default getApi;

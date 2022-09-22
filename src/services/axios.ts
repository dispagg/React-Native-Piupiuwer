import axios from 'axios';

const getApi = () => {
  // eslint-disable-next-line operator-linebreak
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjM3NjY3NzMsImV4cCI6MTY2Mzg1MzE3Mywic3ViIjoiZjAxZTk0MzMtYTQ5ZC00ZjlhLTg2MWYtMGU4ODc3NDY0ZmM1In0.V4hfnffI5dmidULnhPXPgEoL2cDxI-1qmZlKni-ty3M';

  const api = axios.create({
    baseURL: 'https://piupiuwer.polijrinternal.com',
  });

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return api;
};

export default getApi;

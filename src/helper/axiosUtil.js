import axios from 'axios';
import Cookies from 'js-cookie';

import getTokenBearer from '@/hooks/getTokenBearer';

const client = axios.create({ baseURL: `${import.meta.env.VITE_API_URL}` });
const token = Cookies.get('wbAKey') || localStorage.getItem('wbAKey');

export default function request(options) {
  client.defaults.headers.common.Authorization = `${getTokenBearer()} ${token}`;

  const onSuccess = (response) => response;
  const onError = (error) => error;
  return client(options).then(onSuccess).catch(onError);
}

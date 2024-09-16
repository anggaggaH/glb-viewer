import axios from 'axios';
import Cookies from 'js-cookie';

import getTokenBearer from '@/hooks/getTokenBearer';

const baseURL = import.meta.env.VITE_API_URL;
const token = Cookies.get('wbAKey');

export default function axiosInstances() {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `${getTokenBearer()} ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const axiosInstanceF = axios.create({
    baseURL,
    headers: {
      Authorization: `${getTokenBearer()} ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return { axiosInstance, axiosInstanceF };
}

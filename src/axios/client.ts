import axios from 'axios';
import Config from 'react-native-config';


const axiosInstance = axios.create({
  baseURL: Config.REACT_APP_BASE_URL,
  timeout: 115000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'x-cg-demo-api-key': Config.REACT_APP_API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response);
  },
);

export { axiosInstance };

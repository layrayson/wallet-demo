import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 115000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-LkR2R5QmVzgRD9QnCUdMMZSD',
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

export {axiosInstance};

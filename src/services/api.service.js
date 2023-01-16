import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_URL
});

apiClient.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('token');

  console.log(config.headers);
  return config;
});

export default apiClient;

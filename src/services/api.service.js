import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api'
});

apiClient.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('token');

    console.log(config.headers)
  return config;
});

export default apiClient;

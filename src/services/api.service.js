import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api'
  /* Este es el acceso a la api desde la variable de entorno. Descomentarlo cuando este todo ok: */
  // baseURL: process.env.API_URL
});

apiClient.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
});

export default apiClient;

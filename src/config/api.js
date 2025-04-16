import axios from 'axios';
import { API_BASE_URL } from '@env';
import { getToken } from '../services/storage/AuthService';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
},
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {        
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
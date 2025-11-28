import axios, { AxiosError } from 'axios';
export const serverApi = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

serverApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

serverApi.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401) {
      console.warn('사용자 인증 필요');
    }
    return Promise.reject(error);
  }
);

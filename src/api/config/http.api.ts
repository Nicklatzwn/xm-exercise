import axios from 'axios';
import { AxiosError } from 'axios';
import { notificationController } from 'controllers/notificationController';
import { clearStorage } from 'storage/index';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers = { ...config.headers };
  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response?.status === 401 && error.config) {
    clearStorage('token');
    window.history.pushState({}, '/');
  }
  const message =
    (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
  notificationController.error(message);
});

export const setSession = (access_token: string | null): void => {
  access_token
    ? (httpApi.defaults.headers.common.Authorization = `Bearer ${access_token}`)
    : delete httpApi.defaults.headers.common.Authorization;
};

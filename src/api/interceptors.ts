import type {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const lng = useAppStore.getState().lang;
  const token = useAuthStore.getState().access_token;

  if (lng) {
    config.headers.set('Accept-Language', lng.toUpperCase());
  }

  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }

  return config;
};

export const successInterceptor = (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  return Promise.resolve(response.data);
};

export const errorInterceptor = async (error: AxiosError): Promise<never> => {
  if (error.response && error.response.status === 401) {
    useAuthStore.getState().logout();
  }

  return Promise.reject(error?.response?.data);
};

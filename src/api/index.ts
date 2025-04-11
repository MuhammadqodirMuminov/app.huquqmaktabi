import axios, {
  InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';

import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';
import { Endpoints } from '@/services/endpoints';
import { getAuthEndpoint } from '@/services/utils';
import { lng } from '@/i18n';
import { API_URL } from '@/constants';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 65000,
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const lang = useAppStore.getState().lang;
    const token = useAuthStore.getState().access_token;

    config.headers.set(
      'Accept-Language',
      lang ? lang.toUpperCase() : lng.toUpperCase(),
    );

    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  },
);

api.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = useAuthStore.getState().refresh_token;

      if (refreshToken) {
        try {
          const { data } = await axios.get(
            `${API_URL}${getAuthEndpoint(Endpoints.GetMe)}`,
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            },
          );

          useAuthStore.getState().setSession(data, true);
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch (e) {
          useAuthStore.getState().logout();
          return Promise.reject(e);
        }
      } else {
        useAuthStore.getState().logout();
      }
    }
    return Promise.reject(error?.response?.data);
  },
);

export { api };

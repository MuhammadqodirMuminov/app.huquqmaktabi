import { create } from 'zustand';

import { createSelectors } from '../util';

import { KEYS } from '@/common';
import type { IAuthStore, TUser } from '@/types/auth';
import { storage } from '@/utils/storage';

const useAuth = create<IAuthStore>()((set) => ({
  user: storage.getItem(KEYS.user) as TUser,
  deviceId: storage.getItem(KEYS.deviceId),
  isWelcome: storage.getItem(KEYS.welcome) ?? false,
  access_token: storage.getItem(KEYS.accessToken),
  refresh_token: storage.getItem(KEYS.refreshToken),
  email: '',
  userName: storage.getItem(KEYS.userName),
  params: '',

  setEmail: (email) => set(() => ({ email })),
  setParams: (params) => set(() => ({ params })),
  setUser: (user) =>
    set(() => {
      storage.setItem(KEYS.user, user);

      window.ym?.(98392080, 'userParams', {
        vip_status: false,
        UserID: user.userId,
      });

      return { user };
    }),
  setUserName: (userName) =>
    set(() => {
      storage.setItem(KEYS.userName, userName);
      return { userName };
    }),
  setDeviceId: (deviceId) =>
    set(() => {
      storage.setItem(KEYS.deviceId, deviceId);
      return { deviceId };
    }),
  setIsWelcome: (isWelcome) =>
    set(() => {
      storage.setItem(KEYS.welcome, isWelcome);
      return { isWelcome };
    }),
  logout: () =>
    set(() => {
      storage.removeItem(KEYS.user);
      storage.removeItem(KEYS.accessToken);
      storage.removeItem(KEYS.refreshToken);

      window.ym?.(98392080, 'userParams', {
        vip_status: false,
        UserId: null,
      });

      return {
        user: null,
        access_token: null,
        refresh_token: null,
      };
    }),
  setSession: (data) =>
    set(() => {
      const user = data.data;
      const access_token = data.accessToken;
      const refresh_token = data.refreshToken;

      storage.setItem(KEYS.user, user);
      if (access_token) storage.setItem(KEYS.accessToken, access_token);
      if (refresh_token) storage.setItem(KEYS.refreshToken, refresh_token);

      return {
        user,
        access_token,
        refresh_token,
      };
    }),
}));

export const useAuthStore = createSelectors(useAuth);

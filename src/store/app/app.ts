import { create } from 'zustand';

import { createSelectors } from '../util';

import type { IAppStore } from '@/types/app';
import { storage } from '@/utils/storage';
import { history } from '@/utils/history';
import { KEYS } from '@/common';

const useAppBase = create<IAppStore>()((set) => ({
  lang: storage.getItem(KEYS.lang),
  page: 0,
  size: 5,
  balance: storage.getItem(KEYS.balance) || { amount: 10, type: 'STANDARD' },
  action: history.action,
  location: history.location,
  isDrawer: false,
  isLangDrawer: false,
  countryCode: storage.getItem(KEYS.countryCode) || 'UZ',
  userCountryCode: storage.getItem(KEYS.userCountryCode) || '',

  setPage: (page) => set(() => ({ page })),
  setLang: (lang) =>
    set(() => {
      storage.setItem(KEYS.lang, lang);
      return { lang };
    }),
  setBalance: (balance) =>
    set(() => {
      storage.setItem(KEYS.balance, balance);
      return { balance };
    }),
  setHistory: ({ action, location }) => set(() => ({ action, location })),
  setIsDrawer: (isDrawer) => set(() => ({ isDrawer })),
  setIsLangDrawer: (isLangDrawer) => set(() => ({ isLangDrawer })),
  setCountryCode: (countryCode) =>
    set(() => {
      storage.setItem(KEYS.countryCode, countryCode);
      return { countryCode };
    }),
  setUserCountryCode: (userCountryCode) =>
    set(() => {
      storage.setItem(KEYS.userCountryCode, userCountryCode);
      return { userCountryCode };
    }),
}));

export const useAppStore = createSelectors(useAppBase);

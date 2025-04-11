import { create } from 'zustand';

import { createSelectors } from '../util';

import type { IProfileStore } from '@/types/profile';

const useProfile = create<IProfileStore>()((set) => ({
  tokenSent: false,

  setTokenSent: (tokenSent) => set(() => ({ tokenSent })),
}));

export const useProfileStore = createSelectors(useProfile);

import { useMemo } from 'react';

import { debounce } from '@/utils/general';

export const useDebounce = () => {
  return useMemo(() => debounce, []);
};

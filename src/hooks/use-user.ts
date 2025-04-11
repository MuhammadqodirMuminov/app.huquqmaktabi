import { useEffect } from 'react';

import { useGetMeQuery } from '@/services/auth';
import { useAuthStore } from '@/store/auth';

export const useUser = () => {
  const { user, setUser } = useAuthStore();
  const { data, isFetched } = useGetMeQuery(!!user);

  useEffect(() => {
    if (data && isFetched && data !== user) {
      setUser(data);
    }
  }, [data, isFetched, user, setUser]);

  return { user };
};

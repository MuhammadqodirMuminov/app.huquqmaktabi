import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { Main } from '@/modules/style';

export const Layout = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();

        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(async (names) => {
            await Promise.all(names.map((name) => caches.delete(name)));
          });
        }
      });
    }
  }, []);

  return (
    <Main>
      <Outlet />
    </Main>
  );
};

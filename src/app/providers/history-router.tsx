import { useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';

import { useAppStore } from '@/store/app';
import type { TRouterProps } from '@/types/app';

export const HistoryRouter = ({ history, ...props }: TRouterProps) => {
  const { action, location, setHistory } = useAppStore();

  useLayoutEffect(() => {
    const unListen = history.listen((location) => {
      setHistory(location);

      if (window.ym) {
        window.ym(
          98392080,
          'hit',
          location.location.pathname +
            location.location.search +
            location.location.hash,
        );
      }
    });

    return unListen;
  }, [history]);

  // useLayoutEffect(() => {
  //   const unListen = history.listen(setHistory);
  //   return unListen;
  // }, [history]);

  return (
    <Router
      {...props}
      location={location}
      navigationType={action}
      navigator={history}
    />
  );
};

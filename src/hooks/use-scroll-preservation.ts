import { useEffect } from 'react';

export const useScrollPreservation = (key: string) => {
  useEffect(() => {
    const container = document.getElementById('body');

    const restoreScrollPosition = () => {
      const savedScrollPosition = sessionStorage.getItem(
        `${key}-scroll-position`,
      );

      if (savedScrollPosition && container) {
        container.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    };

    restoreScrollPosition();
  }, [key]);
};

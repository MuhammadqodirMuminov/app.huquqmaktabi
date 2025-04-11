import { ComponentType } from 'react';
import loadable from '@loadable/component';

import { TPagesModule } from '@/types/app';
import { Loading } from '@/components';

const handleCatchChunkError = () => {
  return { default: Loading };
};

export const getLoadablePage = (pageName: string): ComponentType =>
  loadable(
    () =>
      import('@/pages')
        .then((module: TPagesModule) => ({ default: module[pageName] }))
        .catch(handleCatchChunkError),
    { fallback: <Loading /> },
  );

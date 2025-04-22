import loadable from '@loadable/component';

import { Loading } from '@/components';

export const History = loadable(() => import('@/pages/history'), {
  fallback: <Loading />,
});

export const Reforms = loadable(() => import('@/pages/reforms'), {
  fallback: <Loading />,
});

export const Lawyers = loadable(() => import('@/pages/lawyers'), {
  fallback: <Loading />,
});

export const LawyersDetail = loadable(
  () => import('@/pages/lawyers/lawyers-detail'),
  {
    fallback: <Loading />,
  },
);

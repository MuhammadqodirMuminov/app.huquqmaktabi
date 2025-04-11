import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import updateLocale from 'dayjs/plugin/updateLocale';
import { lazy, Suspense } from 'react';

import {
  HistoryRouterProvider,
  QueryProvider,
  ThemeProvider,
} from './providers';
import { useLang } from './util';

import { Loading } from '@/components';
import ErrorBoundary from '@/components/error-boundary';
import { history } from '@/utils/history';

dayjs.extend(updateLocale);
dayjs.extend(isSameOrBefore);
dayjs.updateLocale('en', {
  weekStart: 1,
});

const Router = lazy(() => import('@/router'));


export const App = () => {
  useLang();

  return (
    <ThemeProvider>
      <QueryProvider>
        <ErrorBoundary>
            <HistoryRouterProvider history={history}>
              <Suspense fallback={<Loading isFull />}>
                <Router />
              </Suspense>
            </HistoryRouterProvider>
        </ErrorBoundary>
      </QueryProvider>
    </ThemeProvider>
  );
};

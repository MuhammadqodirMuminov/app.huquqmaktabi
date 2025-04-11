import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import {
  PersistQueryClientProvider,
  PersistedClient,
} from '@tanstack/react-query-persist-client';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { get, set, del, createStore, UseStore } from 'idb-keyval';
import { appVersion } from 'virtual:app-version';
import { faro } from '@grafana/faro-react';

import { addMessage } from '@/utils/general';

const REACT_QUERY = 'react-query';
const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error, _, __, { meta }) => {
      if (typeof addMessage === 'function') {
        addMessage(error, meta?.preventGlobalError !== true);
      } else {
        console.error('addMessage is not initialized', error);
      }

      faro.api.pushLog(['tanstack-mutation-error'], {
        context: {
          data: JSON.stringify(error),
        },
      });
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      // staleTime: 1000 * 60 * 5,
      networkMode: 'offlineFirst',
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

function createIDBPersister(store: UseStore) {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(REACT_QUERY, client, store);
    },
    restoreClient: async () => {
      return await get(REACT_QUERY, store);
    },
    removeClient: async () => {
      await del(REACT_QUERY, store);
    },
  };
}

const store = createStore(REACT_QUERY, REACT_QUERY);
const persister = createIDBPersister(store);

export const Query = ({ children }: PropsWithChildren) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, buster: appVersion }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
};

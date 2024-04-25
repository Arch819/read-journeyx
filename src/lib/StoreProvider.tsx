'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, persistStore } from 'redux-persist';
import { makeStore, AppStore } from './store';
import Loader from '@/app/components/Loader';

function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  const persistRef = useRef<Persistor | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  if (!persistRef.current) {
    persistRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistRef.current} loading={<Loader />}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default StoreProvider;

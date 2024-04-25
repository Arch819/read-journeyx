import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  Persistor,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const persistor = persistStore(makeStore());

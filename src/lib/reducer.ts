import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { appReducer } from './appState/appStateSlice';
import { booksReducer } from './books/booksSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = {
  auth: authPersistReducer,
  appState: appReducer,
  books: booksReducer,
};

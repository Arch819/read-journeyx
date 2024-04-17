import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { IAppState } from './appState/initialState';
import { appReducer } from './appState/appStateSlice';
import { IAuthState } from './auth/initialState';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export interface IRootState {
  auth: IAuthState;
  appState: IAppState;
}
export const reducer = {
  auth: authPersistReducer,
  appState: appReducer,
};

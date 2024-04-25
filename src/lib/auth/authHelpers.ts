import { PayloadAction } from '@reduxjs/toolkit';
import { IAuthState, initialState } from './initialState';
import { ICredentialsPayload, IRefreshTokenPayload } from '../api/authApi';

export const authDataFulfilled = (
  state: IAuthState,
  { payload }: PayloadAction<ICredentialsPayload>,
) => {
  state.name = payload.name;
  state.email = payload.email;
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const signOut = () => {
  return initialState;
};

export const eventPending = (state: IAuthState) => {
  state.isRefreshing = true;
};

export const eventRejected = (state: IAuthState) => {
  state.isRefreshing = false;
};

export const currentRefreshFulfilled = (
  state: IAuthState,
  { payload }: PayloadAction<IRefreshTokenPayload>,
) => {
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

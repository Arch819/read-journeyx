import { IRootState } from '../reducer';

export const selectProfile = (state: IRootState) => state.auth.profile;
export const selectIsLoggedIn = (state: IRootState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: IRootState) =>
  state.auth.isRefreshing;

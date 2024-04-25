import { PayloadAction } from '@reduxjs/toolkit';
import { IAppState, initialState } from './initialState';

export const handlePending = (state: IAppState) => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (
  state: IAppState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = (state: IAppState) => {
  state.isLoading = false;
  state.error = null;
};

export const signOut = () => {
  return initialState;
};

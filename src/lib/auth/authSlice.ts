import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  getCurrentThunk,
  getRefreshThunk,
  signInThunk,
  signOutThunk,
  signUpThunk,
} from './authThunk';
import {
  authDataFulfilled,
  eventPending,
  currentRefreshFulfilled,
  signOut,
  eventRejected,
} from './authHelpers';

const authActionPending = /^auth\/.*\/pending$/;
const authActionRejected = /^auth\/.*\/rejected$/;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.fulfilled, authDataFulfilled)
      .addCase(signUpThunk.fulfilled, authDataFulfilled)
      .addCase(signOutThunk.pending, signOut)
      .addCase(signOutThunk.fulfilled, signOut)
      .addCase(getCurrentThunk.fulfilled, authDataFulfilled)
      .addCase(getRefreshThunk.fulfilled, currentRefreshFulfilled)
      .addMatcher(
        (action: PayloadAction) => authActionPending.test(action.type),
        eventPending,
      )
      .addMatcher(
        (action: PayloadAction) => authActionRejected.test(action.type),
        eventRejected,
      );
  },
});

export const authReducer = authSlice.reducer;

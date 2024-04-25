import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DeviceProps, RenderPopUpProps, initialState } from './initialState';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  signOut,
} from './appHelpers';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    togglePopUp(state, action: PayloadAction<RenderPopUpProps>) {
      state.popUp = action.payload;
    },
    toggleIsMobile(state, action: PayloadAction<DeviceProps>) {
      state.device = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFulfilled,
      )
      .addMatcher(
        (action: PayloadAction) => action.type.includes('signOut'),
        signOut,
      );
  },
});

export const appReducer = appSlice.reducer;
export const { togglePopUp, toggleIsMobile } = appSlice.actions;

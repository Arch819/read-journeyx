import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { handleFulfilled, handlePending, handleRejected } from './appHelpers';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    togglePopUp(state, { payload }) {
      state.popUp = payload;
    },
    toggleIsMobile(state, { payload }) {
      state.isMobile = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFulfilled,
      );
  },
});

export const appReducer = appSlice.reducer;
export const { togglePopUp, toggleIsMobile } = appSlice.actions;

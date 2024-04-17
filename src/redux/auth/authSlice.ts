import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export const authReducer = authSlice.reducer;
